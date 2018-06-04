import { RECIVE_PETS, ADD_PET, REMOVE_PET } from '../actions/pets'

const initialState = {
  list: [],
  filterBy: 'wewqe'
}

export default function pets(state = initialState, action) {

  switch(action.type){
    case RECIVE_PETS: {
      return {
        ...state,
        list: action.pets
      }
    }

    case ADD_PET: {
      return {
        ...state,
        list: state.list.concat(action.pet)
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