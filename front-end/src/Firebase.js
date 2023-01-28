// // import { reject, resolve } from 'core-js/fn/promise';
// import firebase from 'firebase';
// // import store from './store'; 
// const settings ={
//     timesampsInSnapshots: true
// }

// const config ={
//     apiKey: "AIzaSyAMfOAw0XzC_fM6w20-3gIfvvvFUTHqQ8A",
//     authDomain: "projektivue.firebaseapp.com",
//     projectId: "projektivue",
//     storageBucket: "projektivue.appspot.com",
//     messagingSenderId: "810210995299",
//     appId: "1:810210995299:web:4cdf94e75247d7d2d01c56"  
// }
// firebase.intiliazeApp(config);

// firebase.firestore().settings(settings);
// firebase.auth().onAuthStateChanged(user =>{
//     store.dispatch("fetchUser", user);
// });

// firebase.getCurrentUser = () =>{
//     return new Promise((resolve, reject)=> {
//         const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//             unsubscribe();
//             resolve(user);
//         }, reject);
//     })
// };


// export default firebase;

