import { RECIVE_PETS, ADD_PET, REMOVE_PET } from '../actions/pets'

export default function pets(state = {}, action) {

  switch(action.type){
    case RECIVE_PETS: {
      return action.pets
    }

    case ADD_PET: {
      return {
        ...state,
        [action.pet.id] : action.pet
      }
    }

    case REMOVE_PET: {
      const { [action.petId]: petId , ...newState } = state;
      console.log(action.petId, petId)
      console.log(newState)
      return newState
      
    }

    default:
      return state;
    
  }
} 