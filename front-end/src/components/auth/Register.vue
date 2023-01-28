<!-- <template>
    <h1>Register</h1>
            <div class="form-row">
                <input name="username" type="text" id="name" class="form-input" placeholder="username">
            </div>
            <div class="form-row">
                <input name="email" type="email" id="emailInput" class="form-input" placeholder="example@email.com">
            </div>
            <div class="form-row">
                <input name="password" type="password" id="passwordInput" class="form-input" placeholder="password">
            </div>
            <div class="form-row">
                <input name="cpassword" type="password" id="passwordInput" class="form-input" placeholder="password">
            </div>

            <button name="submit" id="register" type="submit" class="submit-btn">Register</button>
</template>
<script>
/*eslint-disable*/ 
import firebase from '@/Firebase';

export default{
    data() {
        return{
            form: {
                email: "",
                password: ""
            },
            error: null
        };
    },
    methods: {
            submit(){
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(data => {
                    data.user
                    .updateProfile({
                        displayName: this.form.name
                    })
                    .then(() => {});
                })
                .catch(err =>{
                    this.error = err.message;
                });
            }
        }
    }
</script> -->