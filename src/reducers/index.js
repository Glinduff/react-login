import { combineReducers } from 'redux'
import user from './user'
import pets from './pets'

export default combineReducers({
  user,
  pets
})