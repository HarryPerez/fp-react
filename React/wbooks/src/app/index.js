import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './screens/Login/index.js';
import Home from './screens/Home/index.js';
import BookDetail from './screens/BookDetail';
import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/dashboard' component={Home}/>
      <Route exact path='/books/:bookId' component={BookDetail}/>
      <Route path='' component={Home}/>
    </Switch>
  </BrowserRouter>
);

export default App;
