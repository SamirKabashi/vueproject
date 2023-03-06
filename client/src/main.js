import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
 
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAMfOAw0XzC_fM6w20-3gIfvvvFUTHqQ8A",
  authDomain: "projektivue.firebaseapp.com",
  databaseURL: "https://projektivue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projektivue",
  storageBucket: "projektivue.appspot.com",
  messagingSenderId: "810210995299",
  appId: "1:810210995299:web:4cdf94e75247d7d2d01c56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
