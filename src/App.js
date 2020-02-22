import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    };

    nextTaskId = 5;
    state = {
        tasks: [
            {id: 1, title: "HTML", isDone: true, priority: "high"},
            {id: 2, title: "CSS", isDone: true, priority: "low"},
            {id: 3, title: "JS", isDone: true, priority: "high"},
            {id: 4, title: "React", isDone: false, priority: "high"},
        ],
        filterValue: "All",
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state", stateAsString);
    };

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: "All",
        };
        let stateAsString = localStorage.getItem("our-state");
        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
            this.setState(state, () => {
                this.state.tasks.forEach(t => {
                    if(t.id > this.nextTaskId) {
                        this.nextTaskId = t.id + 1
                    }
                })
            });
        }
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue}, this.saveState)
    };


    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low",
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks}, this.saveState);
        this.saveState()
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if(t.id === taskId) {
                return {...t, ...obj};
            }
            return t;
        });
        this.setState({tasks: newTasks}, this.saveState)
    };

    changeStatus = (taskId, status) => {
        this.changeTask(taskId, {isDone: status})
        /*let newTasks = this.state.tasks.map(t => {
            if(t.id === taskId) {
                return {...t, isDone: status};
            }
            return t;
        });
        this.setState({
            tasks: newTasks
        })*/
    };

    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
        /*let newTasks = this.state.tasks.map(t => {
            if(t.id === taskId) {
                return {...t, title: newTitle};
            }
            return t;
        });
        this.setState({
            tasks: newTasks
        })*/
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter((t) => {
                        switch (this.state.filterValue) {
                            case "All":
                                return true;
                            case "Completed":
                                return t.isDone;
                            case "Active":
                                return !t.isDone;
                            default:
                                return true;
                        }

                    })}/>
                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;

