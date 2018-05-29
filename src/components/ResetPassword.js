import React, { Component } from 'react';
import { restorePassword } from "../helpers/auth";
import { Link } from 'react-router-dom'

export default class ResetPassword extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    restorePassword(this.email.value)
      .then((resp)=> console.log(resp))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" ref={(email) => this.email = email} />
          <button>Recuperar</button>
        </form>
        <Link to="/auth">Volver</Link>
      </div>
    )
  }
};
