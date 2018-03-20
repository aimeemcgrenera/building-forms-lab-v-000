<<<<<<< HEAD
import React, { Component } from 'react';

class Bands extends Component {

  render(){
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })

    return (
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;
=======
import React, { Component } from 'react';

class Bands extends Component {
  render(){
    return (
      <div>
        <li>{this.props.text}</li>
      </div>
    );
  }
};

export default Bands;
>>>>>>> 48400058ab68820bc598ea9c32aa9f979707d1e2
