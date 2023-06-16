import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBjUyCD466oQj6HsTA96kInyxpqjvrtLHw',
  authDomain: 'portfolio-23715.firebaseapp.com',
  projectId: 'portfolio-23715',
  storageBucket: 'portfolio-23715.appspot.com',
  messagingSenderId: '256506285947',
  appId: '1:256506285947:web:8dabf09cb958eefc45f7de',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
