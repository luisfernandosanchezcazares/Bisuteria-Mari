import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: 'AIzaSyDxFgpGSzgq-_pF_23dDNq9pWFw0QEe5MQ',
    authDomain: 'bisuteria-mari.firebaseapp.com',
    projectId: 'bisuteria-mari'
});
  
export default firebase.firestore();