import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';
import Note from './Note';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteArray: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleAdd(event) {
    event.preventDefault();
    this.setState({
      noteArray: this.state.noteArray.concat(this.textInput.value),
    });
  }
  handleRemove(index) {
    this.setState({
      noteArray: this.state.noteArray.filter((_, i) => i !== index),
    });
  }
  render() {
    const noteComponents = this.state.noteArray.map((note, index) => (
      <Note note={note} index={index} handleRemove={this.handleRemove} />
    ));
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{'Welcome to Ardy\'s Todo App'}</h2>
        </div>
        {noteComponents}
        <form onSubmit={this.handleAdd}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="plus" />
              </InputGroup.Addon>
              <FormControl inputRef={(input) => { this.textInput = input; }} type="text" />
            </InputGroup>
          </FormGroup>
          <Button type="submit" onClick={this.handleAdd}>Hello</Button>
        </form>
      </div>
    );
  }
}

export default App;
