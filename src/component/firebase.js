import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyCA_r8KBE51MVOYX7xCwOzYltg-M0VfMNQ",
  authDomain: "chatapp-d8de4.firebaseapp.com",
  projectId: "chatapp-d8de4",
  storageBucket: "chatapp-d8de4.appspot.com",
  messagingSenderId: "913119498601",
  appId: "1:913119498601:web:4567f070f168162163edf8",
  measurementId: "G-9K58FQVLBB"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
