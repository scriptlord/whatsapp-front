import firebase, { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCXvvnwLFuJQvp0ppNZbqGQU5HKjyT5VpY',
  authDomain: 'whostsapp-clone.firebaseapp.com',
  projectId: 'whostsapp-clone',
  storageBucket: 'whostsapp-clone.appspot.com',
  messagingSenderId: '413331880579',
  appId: '1:413331880579:web:5cbfc8a29330ea48a239b6',
  measurementId: 'G-8H93S8GDPP',
}
// const db = getFirestore()
firebase.initializeApp(firebaseConfig)
export default firebase

// const db = firebase.initializeApp(firebaseConfig.firestore())
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()

// export {auth, provider}
