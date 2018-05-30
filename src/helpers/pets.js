import { firebaseAuth, ref } from '../config/constants'

export function getPets(uid) {
  return ref.child(`pets/${uid}`)
  .once('value')
  .then(snapshot => snapshot.val())
}

export function setPet(pet) {
  console.log(pet)
  /* return ref.child(`pets/${uid}`)
    .set({
      name,
      age
    }) */
}
