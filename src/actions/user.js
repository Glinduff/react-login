import { getUser } from '../helpers/auth'

export const RECIVE_USER = 'RECIVE_USER'

function getUserData(user) {
  return {
    type: RECIVE_USER,
    user
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