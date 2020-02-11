import React from 'react';
import Button from "./Button";

class TodoListFooter extends React.Component {

    state = {
        isHidden: false,
    };

    onAllFilterClick = () => {
        this.props.changeFilter("All")
    };
    onCompletedFilterClick = () => {
        this.props.changeFilter("Completed")
    };
    onActiveFilterClick = () => {
        this.props.changeFilter("Active")
    };
    onShowFiltersClick = () => {
        this.setState({isHidden: true})
    };
    onHideFiltersClick = () => {
        this.setState({isHidden: false})
    };

    render = () => {
        let classForAll = (this.props.filterValue === "All") ? "filter-active" : "";
        let classForCompleted = (this.props.filterValue === "Completed") ? "filter-active" : "";
        let classForActive = (this.props.filterValue === "Active") ? "filter-active" : "";
        return (
            <div className="todoList-footer">
                {!this.state.isHidden && <>
                    <Button
                        title={"All"}
                        btnClass={classForAll}
                        onClick={this.onAllFilterClick}/>
                    <Button
                        title={"Completed"}
                        btnClass={classForCompleted}
                        onClick={this.onCompletedFilterClick}/>
                    <Button
                        title={"Active"}
                        btnClass={classForActive}
                        onClick={this.onActiveFilterClick}/>
                </>}
                {!this.state.isHidden && <span onClick={this.onShowFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onHideFiltersClick}>show</span>}


                {/*<button onClick={() => this.props.changeFilter("All")} className={classForAll}>All</button>
                    <button onClick={() => this.props.changeFilter("Completed")} className={classForCompleted}>Completed</button>
                    <button onClick={() => this.props.changeFilter("Active")} className={classForActive}>Active</button>
              */}  </div>
        );
    }
}

export default TodoListFooter;

