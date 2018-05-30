import { setPet } from '../helpers/pets'

export const RECIVE_PETS = 'RECIVE_PETS'
export const ADD_PET = 'ADD_PET'

export function getPetsList(pets) {
  return{
    type: RECIVE_PETS,
    pets
  }
}

export function add(pet){
  return{
    type: ADD_PET,
    pet
  }
}

export function handleAddPet (pet) {
  return (dispatch) => {
    dispatch(add(pet))
    /* return setPet(uid, pet)
    .then(resp => {
      console.log(resp)
    }) */
  }
}