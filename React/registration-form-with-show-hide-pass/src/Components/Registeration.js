import React from 'react'
import App from '../App.css'

export default function Registeration(props) {
  let btnStyle = {
    backgroundColor: "green",
    color: "white",
  };
  let passBoxType, passwordIcon;
  if (props.showPass === true) {
    passwordIcon =  
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill="currentColor" d="M10 4C5.03 4 1 7.03 1 10s4.03 6 9 6 9-3.03 9-6-4.03-6-9-6zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
    passBoxType = 'text';
  } 
  else {
    passwordIcon =  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"/></svg>

    passBoxType = 'password';
  }
  return (
    <div className='container card p-3 mt-5 register-container'>
      <h1 className='text-center'>Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className='form-group div-class'>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' className='form-control'/>
        </div>
        <div className='form-group div-class'>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' className='form-control'/>
        </div>
        <div className='form-group div-class'>
          <label htmlFor='password'>Password: </label>
          <input type={passBoxType} name='password' className='form-control'/>
        </div>
        <button type='button' className='btn my-btn' style={btnStyle} onClick={props.click}>
          {passwordIcon}
        </button>
        <button type='submit' className='btn btn-primary my-btn'  >Register</button>
      </form>
    </div>
  )
}
