import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBoI5HrpQ4fAItjgudUs3vdZalxjQTm3g8",
  authDomain: "video-player-site-83e07.firebaseapp.com",
  projectId: "video-player-site-83e07",
  storageBucket: "video-player-site-83e07.appspot.com",
  messagingSenderId: "771594148688",
  appId: "1:771594148688:web:cf5a0f375b40ece5862a55",
};

// initialize Firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const firestoreProject = firebase.firestore();
const authorizeProject = firebase.auth();
const storageProject = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { firestoreProject, authorizeProject, storageProject, timestamp }