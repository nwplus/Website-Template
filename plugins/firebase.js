import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: 'G-RLRSC8S2SH',
    appId: '1:1035779736769:web:05a5085323dfeb7f3f4040'
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()

const HACKATHONS = 'Hackathons'
const HACKATHON_ID = 'TestHackathon2020'

firebase.analytics()

const fireDb = {
  getCollection: async (collection) => {
    let ref, data
    if (collection.toUpperCase() === 'FAQ') {
      ref = db.collection('FAQ')
        .where('HackathonID', 'array-contains', HACKATHON_ID)
    } else {
      ref = db.collection(HACKATHONS)
        .doc(HACKATHON_ID)
        .collection(collection)
    }
    data = await ref.get()
    data = data.docs.map(doc => doc.data())
    return data
  },
  getWebsiteData: async () => {
    const ref = db.collection(HACKATHONS).doc(HACKATHON_ID)
    const data = await ref.get()
    return data.data()
  }
}

export default fireDb
