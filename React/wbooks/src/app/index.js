import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from './screens/Home';
import BookDetail from './screens/BookDetail';
import Login from './screens/Login';
import Signup from './screens/Signup';
import RouteHandler from './components/RouteHandler';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <RouteHandler path="/signup" component={Signup} />
      <RouteHandler path="/dashboard" component={Home} />
      <RouteHandler path="/books/:bookId" component={BookDetail} />
      <RouteHandler path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
