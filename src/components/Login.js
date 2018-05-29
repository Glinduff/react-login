import React, { Component } from 'react';
import { login } from '../helpers/auth';
import { Link } from 'react-router-dom'

export default class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error)=> console.log(error))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" ref={(email) => this.email = email} />
          <input type="password" ref={(pw) => this.pw = pw} />
          <button>Login</button>
        </form>
        <Link to="/register">Resgistrar</Link>
        <Link to="/reset">¿Olvidaste la contraseña?</Link>
      </div>
    )
  }

};
