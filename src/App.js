import React from 'react';
import NotesGrid from './components/NotesGrid'
import NoteInput from './components/NoteInput'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes:[{
      }]
    }
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
  }

  handleNoteAdd(newNote) {
    this.setState({
      notes:[newNote, ...this.state.notes]
    }, this.saveToLocalStorage)
  }

  handleNoteDelete(noteId) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    }, this.saveToLocalStorage)
  }

  saveToLocalStorage() {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }
  
  componentDidMount(){
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    if (savedNotes) {
      this.setState({
        notes: savedNotes
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.notes !== this.state.notes) {
      this.saveToLocalStorage();
    }
    
  }

  render(){
    return(
      <div className='notes-app'>
        <NoteInput handleNoteAdd={this.handleNoteAdd} />
        <NotesGrid notes={this.state.notes} handleNoteDelete={this.handleNoteDelete} />
      </div>
    );
  }
}


export default App;
