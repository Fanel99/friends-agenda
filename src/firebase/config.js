import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBA3mPzLmuPOT9u3-j_RYhPhCuebRK6wIo',
  authDomain: 'fanelfriends.firebaseapp.com',
  projectId: 'fanelfriends',
  storageBucket: 'fanelfriends.appspot.com',
  messagingSenderId: '363656253943',
  appId: '1:363656253943:web:b5fa8d32c360f33cdf5ef2',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };