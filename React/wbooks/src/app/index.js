import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom'

import Home from './screens/Home/index.js';
import BookDetail from './screens/BookDetail/index.js';
import Login from './screens/Login/index.js';
import Signup from './screens/Signup/index.js';
import RouteHandler from './components/RouteHandler/index.js';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <RouteHandler path='/signup' component={Signup}/>
      <RouteHandler path='/dashboard' component={Home}/>
      <RouteHandler path='/books/:bookId' component={BookDetail}/>
      <RouteHandler path='/' component={Login}/>
    </Switch>
  </BrowserRouter>
);

export default App;
