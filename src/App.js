import React from 'react';
import './App.css';
import Todolist from "./Todolist";

class App extends React.Component {

    state = {
        todolists: [
            {id: 1, title: '1 todo'},
            {id: 2, title: '2 todo'}
        ]
    };

    render = () => {

        let todolists = this.state.todolists.map((tl, index, array) => {
            return <Todolist id={tl.id} title={tl.title}/>
        });

        return (
            <div>
                <div>
                    <input type="text"/>
                    <button>Add</button>
                </div>
                <div>
                    {todolists}
                </div>
            </div>
        )
    }
}

export default App;

