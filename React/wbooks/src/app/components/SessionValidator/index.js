import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../screens/Home/index.js';
import BookDetail from '../../screens/BookDetail/index.js';
import Login from '../../screens/Login/index.js';
import Signup from '../../screens/Signup';

class SessionValidator extends React.Component {
  render() {
    if(sessionStorage.getItem('isUserLogged')) {
      return (
        <Switch>
          <Route path='/dashboard' component={Home}/>
          <Route path='/books/:bookId' component={BookDetail}/>
          <Route path='/' component={Home}/>
          <Route path='' component={Home}/>
        </Switch>
      );
    }else {
      return (
        <Switch>
          <Route path='/dashboard' component={Login}/>
          <Route path='/books/:bookId' component={Login}/>
          <Route path='/' component={Signup}/>
          <Route path='' component={Signup}/>
        </Switch>
      );
    }
  }
}

export default SessionValidator;
