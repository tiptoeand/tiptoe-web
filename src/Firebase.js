import * as firebase from 'firebase';

const serviceAccount = require('./service-account.json');

const settings = { timestampsInSnapshots: true };

firebase.initializeApp(serviceAccount);
firebase.firestore().settings(settings);

export default firebase;