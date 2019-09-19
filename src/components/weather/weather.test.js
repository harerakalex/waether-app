import React from 'react';
import WeatherItem from './weatherItem';
import renderer from 'react-test-renderer';
import { weathers } from '../../../tools/mockData';

it('should pass', () => {
  const tree = renderer.create(<WeatherItem todo={weathers} />);
  expect(tree).toMatchSnapshot();
});
