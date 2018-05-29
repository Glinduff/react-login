import React, { Component } from 'react';
import { connect } from 'react-redux'


class Pet extends Component{
  render(){
    return(
      <div>
        <p>{'Mi nombre es: ' + this.props.name}</p>
        <p>{'Tegno ' + this.props.age + ' años'}</p>
      </div>
    )
  }
}

class PetsForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={(name) => this.name = name} />
          <input type="number" ref={(age) => this.age = age} />
          <button>Add</button>
        </form>
      </div>
    )
  }
};


class Pets extends Component {
  render() {
    return (
      <div>
        <PetsForm />
        {this.props.pets && this.props.pets(pet => (
          <Pet name={pet.name} age={pet.age}/>
        ))}
      </div>
    )
  }
};

function mapStateToProps(state){
  console.log('Pets', state)
}

export default connect(mapStateToProps)(Pets)
