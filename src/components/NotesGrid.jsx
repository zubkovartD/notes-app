import React, { Component } from 'react'
import Note from './Note'
import './NotesGrid.css'

export default class NotesGrid extends Component {
    render(){
        const {notes} = this.props;
        return(
            <div className='notes-grid'>
                {notes.map(note => (
                    <Note 
                        key={note.id} 
                        text={note.text} 
                        onDelete={() => this.props.handleNoteDelete(note.id)}
                    />
                ))}
            </div>
        );
    }
}