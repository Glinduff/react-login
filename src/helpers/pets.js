import { firebaseAuth, ref } from '../config/constants'

export function setPet({name, age, id}) {
  return ref.child(`pets/${id}`)
    .set({
      name,
      age
    })
}

export function getPets(pets) {
  const userPets = {}
  const petsFromUser = Object.keys(pets)
  var promises = petsFromUser.map((pet) => {
    return ref.child(`pets/${pet}`)
      .once("value")
      .then((snap) => {
        return userPets[pet] = {
          name: snap.val().name,
          age: snap.val().age
        }
      })
    })
    return Promise.all(promises)
    .then(resp => userPets)
}
