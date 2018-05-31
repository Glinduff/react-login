import React, { Component } from 'react';
import { connect } from 'react-redux'
import { generateUID }  from '../config/constants'
import { getPetsList } from '../actions/pets'
import { handleAddPet } from '../actions/pets'
import { handleAddUserPet } from '../actions/user'


import { getUserPets } from '../helpers/pets'


import { getPets } from '../helpers/user'
import { getUser } from '../helpers/auth';

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

  componentDidMount() {
    const { pets, dispatch } = this.props
    return getUserPets(pets)
      .then(resp => console.log(resp))

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
        {Object.keys(pets).map(pet => (
          <div key={pet}>pet</div>
        ))}
      </div>
    )
  }
};

function mapStateToProps(state){
  return{
    pets: state.user.pets
  }
}

export default connect(mapStateToProps)(Pets)
