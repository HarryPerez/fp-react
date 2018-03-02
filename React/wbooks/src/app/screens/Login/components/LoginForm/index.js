import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AccessError from '../../../../components/AccessError/index.js';
import userIcon from '../../../../assets/user_icon.png';
import passwordIcon from '../../../../assets/password.png';
import * as regexs from '../../../../../utils/regexs';
import * as sessionActions from '../../../../../redux/session/actions';

import styles from './styles.scss';

class LoginForm extends Component {
  state = { name: '', password: '' , hasErrors: '' };

  handleNameInput = event => this.setState({ name : event.target.value });

  handlePasswordInput = event => this.setState({ password : event.target.value });

  validateUser = () => this.props.dispatch(sessionActions.saveSession(this.state.name, this.state.password));

  handleSubmit = event => {
    if(this.state.name === '' || this.state.password === ''){
      this.setState({ hasErrors : 'Ambos campos son requeridos' });
    }else if(!regexs.isValidEmail(this.state.name)){
      this.setState({ hasErrors : 'El email ingresado no es correcto' });
    }else if(!regexs.isValidPassword(this.state.password)){
      this.setState({ hasErrors : 'La contraseña ingresada debe tener entre 8 y 52 caracteres, y una letra y numero.' });
    }else {
      this.validateUser();
    }
  }

  render() {
    if(this.props.isLogged !== ''){
      return <Redirect to='/'/>
    }
    return (
      <div className={styles.inputContainer}>
        <div className={styles.dataContainer}>
          <img src={userIcon} className={styles.icon} alt='userIcon' />
          <input className={`${styles.input} ${styles.inputText}`} placeholder='Username' onChange={this.handleNameInput}/>
        </div>
        <div className={styles.dataContainer}>
          <img src={passwordIcon} className={styles.icon} alt='passwordIcon' />
          <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Password' onChange={this.handlePasswordInput}/>
        </div>
        <div className={styles.loginButton} onClick={this.handleSubmit}>
          <h1 className={styles.loginText}>Login</h1>
        </div>
        <div className={styles.signupContainer}>
          <Link className={styles.signupText} to='/signup'>
            Not a member?
          </Link>
        </div>
        {this.state.hasErrors && <AccessError errors={this.state.hasErrors}/>}
      </div>
    );
  }
}

const mapStateToProps = state => (
  { isLogged: state.session.user }
);

export default connect(mapStateToProps)(LoginForm);
