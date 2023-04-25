import React, { useState } from "react";
import '../../App.css';
import { Login } from "../Login.jsx";
import { Register } from "../Registrationform.jsx";
function Sign() {
  const [currentForm, setCurrentForm] = useState('login-form');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login-form" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> 
      }
    </div>
  );
}

export default Sign;