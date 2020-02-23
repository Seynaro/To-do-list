import React from 'react';
import './App.css';
import TodolistTitle from "./TodolistTitle";

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        title: "",
    };


    newTaskTitleRef = React.createRef();

    onAddItemClick = () => {
        let newTitle = this.state.title;
        this.setState({title: ""})
        if (newTitle === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false});
            this.props.addItem(newTitle);
        }
    };

    onTitleChanged = (e) => {
        let newTitle = e.currentTarget.value
            this.setState({
                error: false,
                title: newTitle,
            })
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddItemClick()
        }
    };

    render = () => {
        let classForInput = (this.state.error) ? "error" : "";
        return (
            <div className="todoList-header">

                <div className="todoList-newTaskForm">
                    <input
                        value={this.state.title}
                        onChange={this.onTitleChanged}
                        type="text"
                        placeholder="New item name"
                        className={classForInput}
                        onKeyPress={this.onKeyPress}
                    />
                    <button onClick={this.onAddItemClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddNewItemForm;

