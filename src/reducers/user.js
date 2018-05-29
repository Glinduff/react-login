import { RECIVE_USER } from '../actions/user'

export default function user(state = null, action){
  switch(action.type){
    case RECIVE_USER: 
      return action.user
    default:
      return state
  }
}