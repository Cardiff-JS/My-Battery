import React, { Component } from 'react';

class Battery extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    <div>
      {this.props.battery}
      {this.props.charging}
    </div>
  }
};

export default Battery;