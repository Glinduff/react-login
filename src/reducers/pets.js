import { RECIVE_PETS, ADD_PET } from '../actions/pets'

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

    default:
      return state;
    
  }
} 