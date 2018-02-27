export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
, passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,52}$/, stringRegex = /^[a-zA-Z]+$/;

const isValidEmail = (props) => {
  return emailRegex.test(props);
}

const isValidPassword = (props) => {
  return passwordRegex.test(props);
}

const isString = (props) => {
  return stringRegex.test(props);
}

export default {isValidEmail, isValidPassword, isString}
