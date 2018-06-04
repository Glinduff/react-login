import { RECIVE_USER, ADD_USER_PET } from '../actions/user'

export default function user(state = {}, action){

  switch(action.type){
    case RECIVE_USER: 
      return action.user

    case ADD_USER_PET:
      const pets = state['pets']
      return {
        ...state,
        pets: {
          ...pets,
          [action.pet.id] : true
        }
      }
      
    default:
      return state
  }
}
