<template>
    <v-app>
        <v-app-bar app>Welcome and Sign Up</v-app-bar>
        <v-card
      class="mx-auto"
      max-width="344"
      title="Login"
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
          type="password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
  
        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
          
        ></v-checkbox>
        <label for="Login">If you have an account click Login </label>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="success" @click="signUp">Sign Up
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
        <v-btn> <router-link to="/login">Login</router-link>                             </v-btn>
      </v-card-actions>
    </v-card>
    </v-app>
</template>

<script>
import firebase from "firebase";

export default {
    name: "SignUp",
    data(){
        return{
            email: "",
            password: ""
        };
    },
    methods:{
        signUp: function(){
            // log the user in 
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
            alert('Successfully logged in');
                },
                err =>{
                    alert(err);
                }
            );
        }
    }
};
</script>
<style>
.email, .password {
background-color: rgb(165, 255, 255);
}
.container{
    padding: 1rem;
    text-align: center;
    border-radius: 3rem;
    box-sizing: border-box;
    
}
</style>