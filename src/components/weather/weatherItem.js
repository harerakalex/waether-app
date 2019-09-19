import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class weatherItem extends Component {
  render() {
    const { temp, pressure, humidity } = this.props.todo;
    return (
      <div className="jumbotron">
        <h1>Current weather in your location</h1>
        <p>
          <small>Temp: </small>
          <strong>{temp}</strong>
        </p>
        <p>
          <small>pressure: </small>
          <strong>{pressure}</strong>
        </p>
        <p>
          <small>humidity: </small>
          <strong>{humidity}</strong>
        </p>
      </div>
    );
  }
}

// PropTypes
weatherItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default weatherItem;
