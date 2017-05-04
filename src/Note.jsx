import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './App.css';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleEdit() {
    this.setState({
      isEditing: true,
    });
  }
  handleSave(event) {
    // console.log(index, event);
    event.preventDefault();
    this.setState({
      isEditing: false,
    });
    this.props.handleSave(this.props.index, this.textInput.value);
  }
  render() {
    const { note, index, handleRemove } = this.props;
    return (
      <form onSubmit={this.handleSave}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button bsStyle="danger" onClick={() => handleRemove(index)}>
                <Glyphicon glyph="remove" />
              </Button>
            </InputGroup.Button>
            <FormControl
              disabled={!this.state.isEditing}
              defaultValue={note}
              inputRef={(input) => { this.textInput = input; }}
              type="text"
            />
            <InputGroup.Button>
              {this.state.isEditing
                ? <Button bsStyle="success" onClick={this.handleSave}>
                  <Glyphicon glyph="ok" />
                </Button>
                : <Button bsStyle="info" onClick={this.handleEdit}>
                  <Glyphicon glyph="pencil" />
                </Button>
              }
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

Note.propTypes = {
  note: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Note;
