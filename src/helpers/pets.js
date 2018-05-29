import { firebaseAuth, ref } from '../config/constants'

export function getPets() {
  return ref.child(`pets/${uid}`)
  .once('value')
  .then(snapshot => snapshot.val())
}

export function setPet({name, age}) {
  return ref.child(`pets/${uid}`)
    .set({
      name,
      age
    })
}
