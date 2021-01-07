import firebase from 'firebase/app'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxG1dQK2HAfvgSk5FFQxCFyUXevMsfvT4',
  authDomain: 'oliviaschoise.firebaseapp.com',
  databaseURL: 'https://oliviaschoise.firebaseio.com',
  projectId: 'oliviaschoise',
  storageBucket: 'oliviaschoise.appspot.com',
  messagingSenderId: '116010789921',
  appId: '1:116010789921:web:ced435e8af7b20b8e58760'
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const storage = firebase.storage()

export { firebase, storage as default }
