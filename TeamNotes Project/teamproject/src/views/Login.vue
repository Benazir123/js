<template>
     <div>
         <center>
         <h1><b>Login</b></h1>
        
         <p>Click below to Login <i class="fas fa-user"></i></p>
         </center>
         <div>
             <input type="email" class="border-2 border-black bg-white" v-model="email" @keyup="validateEmail()" name="email" id="email" placeholder="Enter Your Email Address" required>
             <span v-if="email == '' && submitValidation == true">Email is required</span>
             <span v-if="!RegEmail && email !== '' ">Enter a valid email address</span>
         </div>
         <div>
             <input type="password" class="border-2 border-black bg-white" v-model="password" @keyup="validatePassword()" name="password" id="password" placeholder="Enter Your Password" required>
             <span v-if="password == '' && submitValidation == true">Password is required</span>
             <span v-if="!RegPassword && password !== ''">Password should be minimum 6 characters</span>
         </div>
         <div>
            <button type="submit" class="btn btn-outline-dark" @click="loginFunction()">Login</button>
         </div>
        <h5>OR</h5>
        <input type="submit" @click="handleClickSignIn" class="border-2 border-black" value="Sign In with Google"/>
           <!-- <g-signin-button @success="OnSignInSuccess" @error="OnSignInerror">Sign in with Google</g-signin-button>  -->
         </div>
</template>

<!--
<script>
import GSignInButton from 'vue-google-signin'
Vue.use(GSignInButton)

export default{
     setup() {
        const OnSignInSuccess = (googleUser) => {
              profile = googleUser.getBasicProfile() 
        }
        const OnSignInerror = () => {
            console.log("OH NOES", error)
        }
        return{
            OnSignInSuccess,
            OnSignInerror,
            profile
            
        }
    },
}
</script>
-->
<script>
export default {
    data() {
        let regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
        let regexPassword =  new RegExp('[a-z0-9A-Z].{6,}')
        let RegEmail = Boolean
        let RegPassword = Boolean
        return {
            submitValidation : false,
            email: '',
            password: '',
            regexEmail,
            regexPassword,
            RegEmail,
            RegPassword,
              params: {
                    client_id: "xxxxxx"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
        }
    },
    methods: {
         loginFunction(){
             this.submitValidation = true
             const loginDetails = {
                  email: this.email,
                  password: this.password
             }
             console.log("Login Details=>", loginDetails)
         },
         validateEmail(){
             this.RegEmail = this.regexEmail.test(this.email)
         },
         validatePassword(){
               this.RegPassword =this.regexPassword.test(this.password)
         },
        async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    },

    created() {
        this.submitValidation = false
    },
}
</script>

<style scoped>
 div{
     padding: 1rem;
     display: flex;
     flex-direction: column;
 }

 input[type="email"],input[type="password"]{
      border-radius: 20px;
      padding: 10px;
      border-color: black;
 }

 button{
     margin-left: 100px;
     width: 30%;
     border-radius: 100%;
 }

 #p1{
    margin-left: 45%;
 }

 h5 {
      display: flex;
      flex-direction: row;
      padding: 1rem;

    }
          
h5:before,
h5:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid #000;
    margin: auto;
   
}

span{
    text-align: center;
    color: red;
}

        /* img {
            height: 100px;
            width: 100px;
            border-radius: 50%;
        } */

 /* .google-signin-button {
  color: white;
  background-color: rgb(104, 152, 207);
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} */
</style>
