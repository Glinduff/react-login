import { firebaseAuth, ref } from '../config/constants'

export function addPet(uid, pet) {
  return ref.child(`users/${uid}/info/pets`)
    .update({[pet.id] : true})
}
