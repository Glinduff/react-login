import { firebaseAuth, ref } from '../config/constants'

export function setPet({name, age, id}) {
  return ref.child(`pets/${id}`)
    .set({
      name,
      age,
      id
    })
}

export function getPets(pets) {
  const petsFromUser = Object.keys(pets)
  const promises = petsFromUser.map((pet) => {
    return ref.child(`pets/${pet}`)
      .once("value")
      .then((snap) => {
        return {
          name: snap.val().name,
          age: snap.val().age,
          petId: pet
        }
      })
    })
    return Promise.all(promises)
    .then(resp => console.log(resp) || resp)
}
