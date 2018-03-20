<<<<<<< HEAD
import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} >
          <p>
            <label>Add Band Name</label>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
=======
import React, { Component } from 'react';
import Bands from './Bands';

class BandInput extends Component {
  render() {
    return (
      <div>
        const bands = this.props.store.getState().bands.map((band, index) => {
      return <Todo text={band.text} key={index} />
      </div>
        });
 
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default BandInput;
>>>>>>> 48400058ab68820bc598ea9c32aa9f979707d1e2
