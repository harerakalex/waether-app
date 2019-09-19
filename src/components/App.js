import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import WeathersPage from './weather/weatherPage';
import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/weather" component={WeathersPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
