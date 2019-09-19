import reducers from '../reducers';

it('reducers', () => {
  let state;
  state = reducers(
    { weathers: { items: [], item: {} } },
    {
      type: 'FETCH_WEATHER',
      payload: {
        temp: 298.71,
        pressure: 1021,
        humidity: 50,
        temp_min: 298.71,
        temp_max: 298.71
      }
    }
  );
  expect(state).toEqual({
    weathers: {
      items: [],
      item: {
        temp: 298.71,
        pressure: 1021,
        humidity: 50,
        temp_min: 298.71,
        temp_max: 298.71
      }
    }
  });
});
