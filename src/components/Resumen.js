import React, { Component } from 'react';
import { setResumenValues } from '../helpers/resumen'
import { consultarPromedio } from '../helpers/resumen'

class ResumenForm extends Component {

  handleOnSubmit = (e) => {
    e.preventDefault()
    return setResumenValues(this.value.value)
      .then(respo => console.log(respo))
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} style={{
        padding: '50px',
        margin: '50px'
      }}>
        <h1>Form</h1>
        <input type="number" ref={(value) => this.value = value}/>
        <button>Enviar</button>
      </form>
    )
  }
};

class ConsultarPromedio extends Component {

  handleOnSubmit = (e) => {
    e.preventDefault()
    return consultarPromedio()
      .then(avg => {
        const por = 100 - (100 * this.valor.value / avg)
        if(por > 0 )
          return alert(`El servicio es un ${por}% más barato que el promedio(${avg}).`)
        else if(por < 0)
          return alert(`El servicio es un ${Math.abs(por)}% más caro que el promedio(${avg}).`)
        else
          return alert('El servicio es igual al promedio.')
      })
  }



  render() {
    return (
      <div style={{
        padding: '50px',
        margin: '50px'
      }}>
        <h1>Consultar Promedio: </h1>
        <form onSubmit={this.handleOnSubmit}>
          <input type="number" ref={(valor) => this.valor = valor}/>
          <button>Consultar</button>
        </form>
      </div>
    )
  }
};

export default class Resumen extends Component {
  render() {
    return (
      <div>
        <ResumenForm />
        <ConsultarPromedio />
      </div>
    )
  }
};
