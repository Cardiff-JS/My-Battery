import React, { Component } from 'react';

class Battery extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Battery">
        {this.props.battery}
        {this.props.charging}
      </div>
    );
  }
};

export default Battery;