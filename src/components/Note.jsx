import React, { Component } from 'react'

export default class Note extends Component {
    render(){
        const {text} = this.props;
        return(
            <div>
                {text}
                <button onClick={this.props.onDelete}>X</button>
            </div>
        )
    }
}