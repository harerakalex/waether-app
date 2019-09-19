import React from 'react';
import WeatherItem from './weatherItem';
import { shallow } from 'enzyme';

function renderWeather(args) {
  const defaultProps = {
    weathers: {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<WeatherItem todo={props} />);
}

it('render item page', () => {
  const wrapper = renderWeather();
  expect(wrapper.find('h1').text()).toEqual('Current weather in your location');
});
