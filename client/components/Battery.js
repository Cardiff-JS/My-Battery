import React, { Component } from 'react';

class Battery extends Component {

  constructor(props) {
    super(props);

    // this.createBatteryState = this.createBatteryState.bind(this);
  }

  // createBatteryState() {
  //   if(this.props.level > 0.66) {
  //     return (
  //       <p>Going strong!</p>
  //     );
  //   }

  //   if(this.props.level <= 0.66 && this.props.level > 0.33) {
  //     return (
  //       <p>Keep an eye out</p>
  //     );
  //   }

  //   if(this.props.level <= 0.33) {
  //     return (
  //       <p>Get me on charge!</p>
  //     );
  //   }
  // }

  render() {
    return (
      <div className="Battery">
        <p>Hello World</p>
      </div>
    );
  }
};

export default Battery;