import { firebaseAuth, ref } from '../config/constants'

export function addPet(uid, pet) {
  return ref.child(`users/${uid}/info/pets`)
    .update({[pet.id] : true})
}

export function getPets(...pets){
  console.log(...pets)
  /* return ref.child('pets')
    .orderByChild(userKey)
    .equalTo(true/false)
    .on("child_added", function(Data){
    console.log(Data.val(), Data.key);
    }) */
}
