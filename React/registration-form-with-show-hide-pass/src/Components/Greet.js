import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-5 register-container text-center'>
      <h3>{props.name}, </h3>
      <h3>Thank You for joinning us.</h3>
      <h3>Verification email send to this {props.email}</h3>
    </div>
  );
}
