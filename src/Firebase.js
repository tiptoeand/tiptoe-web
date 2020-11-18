import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';
const serviceAccount = require('./service-account.json');


const settings = { timestampsInSnapshots: true };

firebase.initializeApp(serviceAccount);

firebase.firestore().settings(settings);

export default firebase;