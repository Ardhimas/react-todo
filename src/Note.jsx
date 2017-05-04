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
  }
  render() {
    const { note, index, handleRemove } = this.props;
    return (
      <FormGroup>
        <InputGroup>
          <InputGroup.Button>
            <Button bsStyle="danger" onClick={() => handleRemove(index)}>
              <Glyphicon glyph="remove" />
            </Button>
          </InputGroup.Button>
          <FormControl disabled={!this.state.isEditing} value={note} type="text" />
          <InputGroup.Button>
            <Button bsStyle="info">
              <Glyphicon glyph="pencil" />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );
  }
}

Note.propTypes = {
  note: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Note;
