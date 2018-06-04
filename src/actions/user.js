import { getUser } from '../helpers/auth'
import { addPet } from '../helpers/user'
import { ref } from '../config/constants'

export const RECIVE_USER = 'RECIVE_USER'
export const ADD_USER_PET = 'ADD_USER_PET'

function getUserData(user) {
  return {
    type: RECIVE_USER,
    user
  }
}

export function addUserPet(pet) {
  return {
    type: ADD_USER_PET,
    pet
  }
}

export function handleAddUserPet (pet) {
  return (dispatch, getState) => {

    const { user } = getState()
    const { uid } = user

    dispatch(addUserPet(pet))
    /* return addPet(uid, pet)
    .then(resp => {
      console.log(resp)
    }) */
  }
}

export function handleGetUserData (user, cb) {
  return (dispatch) => {
    return getUser(user)
    .then(resp => {
      dispatch(getUserData(resp))
      cb()
    })
  }
}