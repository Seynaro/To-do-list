import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {

    state = {
        error: true,
    };


    newTaskTitleRef = React.createRef();

    onAddTaskButtonClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        if(newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false});
            this.props.addTask(newText)
        }
    };

    render = () => {
        return (
            <div className="todoList-header">
                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">
                        <input ref={this.newTaskTitleRef}
                               type="text" placeholder="New task name"
                               ref={this.newTaskTitleRef}
                               className="error"
                        />
                        <button onClick={this.onAddTaskButtonClick}>Add</button>
                    </div>
            </div>
        );
    }
}

export default TodoListHeader;

