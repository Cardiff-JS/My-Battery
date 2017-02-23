import React, { Component } from 'react';
import Battery from './Battery';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Battery {...this.props} />
      </div>
    );
  }
};

export default App;