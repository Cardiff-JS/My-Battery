import React, { Component } from 'react';
import cx from 'classnames';

class Battery extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const level = parseInt(this.props.level * 100);

    const classes = cx({
      'Battery_contents': true,
      'Battery_contents--full': level > 70,
      'Battery_contents--empty': level < 20
    });

    return (
      <div className="Battery">
        <div className={classes} style={{width: `${level}%`}}>
          <div className="Battery_face">
            <div className="Battery_face-left-eye"></div>
            <div className="Battery_face-right-eye"></div>
            <div className="Battery_face-mouth"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Battery;