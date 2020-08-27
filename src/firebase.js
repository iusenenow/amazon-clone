import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtxQ2gGRmn7wOygNiM_hEskSse9ZOCD7c",
  authDomain: "clone-58980.firebaseapp.com",
  databaseURL: "https://clone-58980.firebaseio.com",
  projectId: "clone-58980",
  storageBucket: "clone-58980.appspot.com",
  messagingSenderId: "820549947075",
  appId: "1:820549947075:web:a346fffe4170d153399c76"
})

const auth = firebase.auth()

export { auth }