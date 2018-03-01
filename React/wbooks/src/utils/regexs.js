export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
, passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,52}$/, stringRegex = /^[a-zA-Z]+$/;

export const isValidEmail = (props) => emailRegex.test(props);

export const isValidPassword = (props) => passwordRegex.test(props);

export const isString = (props) => stringRegex.test(props);
