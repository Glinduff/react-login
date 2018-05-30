import { firebaseAuth ,ref } from '../config/constants'


export function register (email, pw, name) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then((user) => saveUser(user, name))
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
    .then(user => console.log(user))
}

export function logout() {
  return firebaseAuth().signOut()
    .then(resp => console.log(resp))
}

export function restorePassword (email) {
  return firebaseAuth()
  .sendPasswordResetEmail(email)
  .then(() => ({status: 'success'}))
  .catch(error => error)
}

export function saveUser({user}, name){
  return ref.child(`users/${user.uid}/info`)
    .set({
      name,
      email: user.email,
      uid: user.uid,
      pets: {}
    })
    .then(() => updateUser(user, name))
    .then(() => getUser(user), emailVerification(user))
}

export function getUser(user) {
  return ref.child(`users/${user.uid}/info`)
    .once('value')
    .then(snapshot => snapshot.val())
}

export function updateUser(user, name) {
  return user.updateProfile({
    name,
    displayName: name,
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
}

export function emailVerification(user) {
  return user.sendEmailVerification()
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error))
}