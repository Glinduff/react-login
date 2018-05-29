

export const RECIVE_PETS = 'RECIVE_PETS'
export const ADD_PET = 'ADD_PET'

export function getPetsList(pets) {
  return{
    type: RECIVE_PETS,
    pets
  }
}

export function addPet(pet){
  return{
    type: ADD_PET,
    pet
  }
}