import React, { useState } from 'react';
import './App.css';

function App() {

  const [isUsernameValid, onUsernameChange] = useValidState("username");
  const [isPasswordValid, onPasswordChange] = useValidState("password");
  const [isEmailValid, onEmailChange] = useValidState("email");

  return (
    <div className="App">
      <div>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          onChange={e => onUsernameChange(e)}
        />
        {isUsernameValid ? <p>Your Username is valid </p> : null}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          onChange={e => onPasswordChange(e)}
        />
        {isPasswordValid ? <p>Your Password is valid </p> : null}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          onChange={e => onEmailChange(e)}
        />
        {isEmailValid ? <p>Your Email is valid </p> : null}
      </div>
    </div>
  );
}

const useValidState = (type) => {
  const [isValid, setValid] = useState(false);

  const onChange = e => {
    const newValue = e.target.value;
    let _isValid = false;
    switch(type) {
      case 'username':
        if (newValue.length >= 3 && newValue.length <= 20) _isValid = true;
        break;
      case 'password':
        if (newValue.length >= 8) _isValid = true;
        break;
      case 'email':
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(newValue)) _isValid = true;
        break;
      default:
        if (newValue.length > 1) _isValid = true;
        break;
    }
    
    setValid(_isValid);
  };

  return [isValid, onChange];
}

export default App;
