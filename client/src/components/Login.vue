<template>
    <v-app>
        <v-app-bar app>Welcome Back</v-app-bar>
        <v-card
    class="mx-auto"
    max-width="344"
    title="User Registration"
  >
    <v-container>
      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="underlined"
      ></v-text-field>
      <label for="Login">If you don't have an account click SignUp </label>

    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success" @click="login">Login
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
      <v-btn> <router-link to="/SignUp">Sign Up</router-link> </v-btn>
    </v-card-actions>
  </v-card>
    </v-app>
</template>

<!-- <script> -->
// import firebase from "firebase";

// export default {
//     name: "Login",
//     data() {
//         return {
//             email: "",
//             password: ""
//         };
//     },
//     methods: {
//         login: function () {
//             // log the user in 
//             firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
//             alert('Successfully logged in');
//                 },
//                 err => {
//                     alert(err);
//                 }
//             );
//         }
//     }
// };
<!-- // </script> -->

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>