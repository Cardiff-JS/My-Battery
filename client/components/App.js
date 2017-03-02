import React, { Component } from 'react';
import Battery from './Battery';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      level: 0.0
    };
  }

  componentDidMount() {
    navigator.getBattery().then(battery => {
      // Add the battery data to the state
      this.setState(battery);

      // Listen to when the level of the battery changes
      battery.addEventListener('levelchange', () => {
        this.setState(battery);
      });

      // Listen to when the status of charging changes
      battery.addEventListener('chargingchange', () => {
        this.setState(battery);
      });

    });
  }

  render() {
    return (
      <div className="App">
        <div className="App_wrapper">
          <Battery {...this.state} />
          <p className="Battery_level">{parseInt(this.state.level * 100)}%</p>
        </div>
      </div>
    );
  }
};

export default App;