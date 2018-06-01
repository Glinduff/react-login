import React, { Component } from 'react';
import { connect } from 'react-redux'
import { generateUID }  from '../config/constants'
import { handleAddPet } from '../actions/pets'
import { handleAddUserPet } from '../actions/user'

class Pet extends Component{
  render(){
    return(
      <div>
        <p>{'Mi nombre es: ' + this.props.name}</p>
        <p>{'Tengo ' + this.props.age + ' años'}</p>
      </div>
    )
  }
}

class PetsForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPet(this.name.value, this.age.value)
  }

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
  state = {
    pets: {}
  }

  componentDidMount() {
    const { dispatch } = this.props
  }

  handleClick = (name, age) => {
    const { dispatch} = this.props
    const id = generateUID();
    const pet = {name, age, id}
    dispatch(handleAddUserPet(pet))
    dispatch(handleAddPet(pet))
  }

  render() {
    const { pets } = this.props
    return (
      <div>
        <PetsForm addPet={this.handleClick}/>
        {Object
          .keys(pets)
          .map((key) => 
            (<Pet 
              key={key} 
              name={pets[key].name} 
              age={pets[key].age} />
            )
          )
        }
      </div>
    )
  }
};

function mapStateToProps(state){
  return{
    pets: state.pets
  }
}

export default connect(mapStateToProps)(Pets)
