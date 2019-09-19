import React from 'react';
import { cleanup, render } from 'react-testing-library';
import WeatherItem from './weatherItem';

afterEach(cleanup);

function renderWeather(args) {
  const defaultProps = {
    weathers: {}
  };

  const props = { ...defaultProps, ...args };
  return render(<WeatherItem todo={props} />);
}

it('render item page', () => {
  const { getByText } = renderWeather();
  getByText('Current weather in your location');
});
