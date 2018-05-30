import { firebaseAuth, ref } from '../config/constants'

export function getPets(uid) {
  return ref.child(`pets/${uid}`)
  .once('value')
  .then(snapshot => snapshot.val())
}

export function setPet({name, age, id}) {
  return ref.child(`pets/${id}`)
    .set({
      name,
      age
    })
}
