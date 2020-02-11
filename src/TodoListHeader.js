import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {

    state = {
        error: false,
        title: "",
    };


    newTaskTitleRef = React.createRef();

    onAddTaskButtonClick = () => {
        let newTitle = this.state.title;
        this.setState({title: ""})
        if (newTitle === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false});
            this.props.addTask(newTitle);
        }
    };

    onTitleChanged = (e) => {
        let newTitle = e.currentTarget.value
            this.setState({
                error: false,
                title: newTitle,
            })
    };

    onAddTaskEnterPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskButtonClick()
        }
    };

    render = () => {
        let classForInput = (this.state.error) ? "error" : "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        value={this.state.title}
                        onChange={this.onTitleChanged}
                        type="text"
                        placeholder="New task name"
                        className={classForInput}
                        onKeyPress={this.onAddTaskEnterPress}
                    />
                    <button onClick={this.onAddTaskButtonClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

