import { setPet, getPets } from '../helpers/pets'
import { ref } from '../config/constants'

export const RECIVE_PETS = 'RECIVE_PETS'
export const ADD_PET = 'ADD_PET'
export const REMOVE_PET = 'REMOVE_PET'

export function recivePets(pets) {
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

export function removePet(petId){
  return {
    type: REMOVE_PET,
    petId
  }
}


export function handleRevicePets(cb) {
  return (dispatch, getState) => {
    const { user } = getState()
    const pets = user.pets || {}
    return getPets(pets)
      .then(pets => dispatch(recivePets(pets)))
      .then(() => cb())
  }
}
export function handleAddPet (pet) {
  return (dispatch) => {
    return setPet(pet)
    .then(resp => {
      console.log(resp)
    })
  }
}

export function addPetListener (dispatch) {
  return ref.child('/pets').on('child_added', snap => { 
    dispatch(add(snap.val()))
  })
}