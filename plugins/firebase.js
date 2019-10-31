import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCpfq0yNCI9XpdlFKa-NjTb2TxNDPjRUb4",
    authDomain: "header-maker-c8894.firebaseapp.com",
    databaseURL: "https://header-maker-c8894.firebaseio.com",
    projectId: "header-maker-c8894",
    storageBucket: "header-maker-c8894.appspot.com",
    messagingSenderId: "855401555452",
    appId: "1:855401555452:web:ac8acb08d3f27c902ffe79",
    measurementId: "G-QRD9CGST48"
  })
  firebase.analytics();
}


export default firebase
