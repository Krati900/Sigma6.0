import './App.css';
import React, { Component } from 'react'
import Registeration from './Components/Registeration';
import Greet from "./Components/Greet";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isRegistered: false,
      name: null, 
      email: null, 
      password: null,
      showPass: false,
    };
  }
  registrationHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
    event.preventDefault();
  };

  shoPasswordHandler = () => {
    console.log(this.state)
    this.setState({ showPass: !this.state.showPass }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.isRegistered ?
        ( <Greet 
          name={this.state.name} 
          email={this.state.email}></Greet>)
        : 
        (<Registeration 
          submit={this.registrationHandler} 
          showPass= {this.state.showPass}
          click={this.shoPasswordHandler}
          ></Registeration>)}
      </div>
    );
  }
}

export default App


