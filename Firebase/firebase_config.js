import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAt0ku0CcRFEq3ym07UipgVvZMy47fPOHw',
  authDomain: 'react-native-meterreading.firebaseapp.com',
  projectId: 'react-native-meterreading',
  storageBucket: 'react-native-meterreading.appspot.com',
  messagingSenderId: '464669471987',
  appId: '1:464669471987:web:afc9bd9b0ec95ab7a53386',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
