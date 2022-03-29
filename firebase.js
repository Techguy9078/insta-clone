import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBK0CehWO_ZW3r9QpVfUeE_kqs4EVJ6IJI',
  authDomain: 'insta-73198.firebaseapp.com',
  projectId: 'insta-73198',
  storageBucket: 'insta-73198.appspot.com',
  messagingSenderId: '605330913370',
  appId: '1:605330913370:web:dfa791966f8980e0298063',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
