import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBVXQFhVaIUYLMnTno5ht07x4H17M0je0",
    authDomain: "lista-vue-nicolas.firebaseapp.com",
    projectId: "lista-vue-nicolas",
    storageBucket: "lista-vue-nicolas.appspot.com",
    messagingSenderId: "713582587307",
    appId: "1:713582587307:web:c070de01e6bd4ff1f8b6ee"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}