import { firebaseAuth, ref } from '../config/constants'

export async function getUserPets(pets) {
  const userPets = {}
  const result = Object.keys(pets).map((pet) => {
    ref.child(`pets/${pet}`)
    .on("value", function(snap){
      userPets[pet] = {
        name: snap.val().name,
        age: snap.val().age
      }
      console.log(userPets)
    })
  })
  console.log(result)
}

export function setPet({name, age, id}) {
  return ref.child(`pets/${id}`)
    .set({
      name,
      age
    })
}
