import firebase from 'firebase'
import 'firebase/firestore'

const config = {

}

firebase.initializeApp(config)

firebase.firestore().enablePersistence();

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth