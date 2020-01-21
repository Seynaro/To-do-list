import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    tasks = [
        {title: "HTML", isDone: true, priority: "high"},
        {title: "CSS", isDone: true, priority: "low"},
        {title: "JS", isDone: true, priority: "high"},
        {title: "React", isDone: false, priority: "high"},
    ];
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

