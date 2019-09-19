import { FETCH_WEATHER, SEARCH_WEATHER } from './types';

export const fetchWeather = () => dispatch => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=kigali&appid=f40c14d68e58241f362e7579852ed201'
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_WEATHER,
        payload: data.main
      })
    );
};

export const searchWeather = city => dispatch => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f40c14d68e58241f362e7579852ed201`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SEARCH_WEATHER,
        payload: data.main
      })
    );
};
