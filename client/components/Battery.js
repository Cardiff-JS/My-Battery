import React, { Component } from 'react';

class Battery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      level: 0.0
    };
  }

  componentDidMount() {
    navigator.getBattery().then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div className="Battery">
        <p>{this.state.level * 100}%</p>
      </div>
    );
  }
};

export default Battery;