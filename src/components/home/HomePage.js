import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="jumbotron">
    <h1>This app is WeaderApp</h1>
    <p>
      Access current weather data for any location on Earth including over
      200,000 cities! Current weather is frequently updated based on global
      models and data from more than 40,000 weather stations.
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>{' '}
    <Link to="weather" className="btn btn-success btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
