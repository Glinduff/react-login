import React, { Component } from 'react';
import { register } from '../helpers/auth';
import { Link } from 'react-router-dom'

export default class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    register(this.email.value, this.pw.value, this.name.value)
      .catch((error)=> console.log(error))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={(name) => this.name = name} />
          <input type="email" ref={(email) => this.email = email} />
          <input type="password" ref={(pw) => this.pw = pw} />
          <button>Registrar</button>
        </form>
        <Link to="/auth">Volver</Link>
      </div>
    )
  }
};
