<!-- <template>
     <h1>Login</h1>
            <div class="form-row">
                <input name="email" type="email" id="email" class="form-input" placeholder="example@email.com">
            </div>
            <div class="form-row">
                <input name="password" type="password" id="password" class="form-input" placeholder="pwd">
            </div>
            <button name="submit" type="submit" class="submit" id="register">Login</button>
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
                .signInWithEmailAndPassword(this.form.email, this.form.password)
                .then(data => {
                    this.router.push({name: 'products'})
                })
                .catch(err =>{
                    this.error = err.message;
                });
            }
        }
    };
</script> -->
