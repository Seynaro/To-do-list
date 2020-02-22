import React from 'react'
import './App.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
    };

    render = () => {
        let classForTask = (this.props.task.isDone)
            ? "todoList-task done"
            : "todoList-task";
        return (
            <div className={classForTask}>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                <span>{this.props.task.id} - </span>
                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode}
                             autoFocus={true}
                             value={this.props.task.title}
                    onChange={this.onTitleChanged}/>
                    : <span
                        onClick={this.activateEditMode}>{this.props.task.title},</span>
                }
                <span> priority: {this.props.task.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;

