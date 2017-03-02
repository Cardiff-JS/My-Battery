import React, { Component } from 'react';

class Battery extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Battery">
        <div className="Battery_contents" style={{width: `${parseInt(this.props.level * 100)}%`}}>

        </div>
      </div>
    );
  }
};

export default Battery;