import React from 'react';

class Button extends React.Component {

    render = () => {

        return (
            <button onClick={this.props.onClick}
                    className={this.props.btnClass}>{this.props.title}</button>
        );
    }
}

export default Button;

