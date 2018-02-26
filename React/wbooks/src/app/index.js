import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom'

import Home from './screens/Home/index.js';
import BookDetail from './screens/BookDetail/index.js';
import Login from './screens/Login/index.js';
import PrivateRoute from './components/PrivateRoute/index.js';
import PublicRoute from './components/PublicRoute/index.js';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path='/dashboard' component={Home}/>
      <PrivateRoute path='/books/:bookId' component={BookDetail}/>
      <PublicRoute path='' component={Login}/>
      <PublicRoute path='/' component={Login}/>
    </Switch>
  </BrowserRouter>
);

export default App;
