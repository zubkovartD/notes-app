import React, { Component } from 'react'
import './NotesInput.css'

export default class NoteInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        this.handleNoteAdd = this.handleNoteAdd.bind(this)
    }
    onChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleNoteAdd(){
        const newNote = {
            text: this.state.text,
            id: Date.now(),
        }
        this.props.handleNoteAdd(newNote);
        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <div className='notes-input'>
                <input 
                    type="text"
                    name='text'
                    value={this.state.text}
                    onChange={this.onChange}
                    placeholder='Enter a note'
                />
                {this.state.text &&                 
                    <button onClick={this.handleNoteAdd}>
                        Add note
                    </button>}
            </div>
        );
    }
} 