import React from 'react';
import WeatherItem from './weatherItem';
import { connect } from 'react-redux';
import { fetchWeather, searchWeather } from '../../actions/fetchWeather';
import PropTypes from 'prop-types';

class WeathersPage extends React.Component {
  state = {
    todos: {},
    city: 'kigali'
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchWeather(this.state.city);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentWillMount() {
    this.props.fetchWeather();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input
            type="text"
            name="city"
            style={{ flex: '10', padding: '5px' }}
            placeholder="Add todo ..."
            value={this.state.city}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>
        <WeatherItem todo={this.props.weathers} />
      </div>
    );
  }
}

WeathersPage.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  searchWeather: PropTypes.func.isRequired,
  weathers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weathers: state.weathers.item
});

export default connect(
  mapStateToProps,
  { fetchWeather, searchWeather }
)(WeathersPage);
