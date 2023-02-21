// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGBOEFj3AHn8Si6IMrOIy3So-1UZ64DCM',
  authDomain: 'topcoder-fe92a.firebaseapp.com',
  projectId: 'topcoder-fe92a',
  storageBucket: 'topcoder-fe92a.appspot.com',
  messagingSenderId: '651344860483',
  appId: '1:651344860483:web:8b08cf78a9bee5bcab8bf6'
}
// let app = initializeApp(firebaseConfig)
// const auth = getAuth(app)
// export const app = initializeApp(firebaseConfig)

let auth
const init = () => {
  // dummy function to init initialized app
  let app = initializeApp(firebaseConfig)
  auth = getAuth(app)
}

const FirebaseConfig = { init, auth }
export default FirebaseConfig
