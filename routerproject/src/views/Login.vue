<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar shadow bg-white">
      <a class="navbar-brand ms-5" href="https://www.novastrid.com" target="_blank">
        NovaStrid.com
      </a>
    </nav>
  </header>
  <!-- <div>
    <input type="text" name="name" id="name" placeholder="Enter your name" required/>
  </div> -->
  <div>
    <input type="email" name="email" id="email" v-model="email" placeholder="Enter your email" @keyup="validateEmail()" required/>
    <span v-if="email == '' && submitValidation == true">Email is required</span>
    <span v-if="!RegEmail && email !== '' ">Enter a valid email address</span>
  </div>
  <div>
    <input type="password" name="password" id="password" v-model="password" placeholder="Enter password" @keyup="validatePassword()" required/>
    <span v-if="password == '' && submitValidation == true">Password is required</span>
    <span v-if="!RegPassword && password !== '' ">Password should be minimum 6 characters</span>
  </div>
  <div class="flex flex-row">
     <input type="checkbox" id="checkbox" v-model="selected"  @change="check($event)">
     <label for="checkbox">Remember Me</label>
  </div>
  <div>
    <button type="submit" @click="loginFunction()" class="btn btn-success" name="login">Login</button>
  </div>
</template>

<script>
import myService from '@/services/myService';
import { useRouter } from 'vue-router';

export default {
   name: "Login",
    data(){
    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    let regexPassword = new RegExp('[a-z0-9A-Z].{6,}');
    let RegEmail = Boolean;
    let RegPassword = Boolean;
     let router = useRouter();
    return{
        regexEmail,
        regexPassword,
        RegEmail,
        RegPassword,
         router,
        submitValidation : false,
         email: '',
         password: '',
         msg: '',
         selected: false,
      }
    },
    methods:{
       check() {
      console.log("selected", this.selected);
    },
       async loginFunction(){
         this.remember_me();
        this.submitValidation = true
          const loginDetails = {
                 email: this.email,
                 password: this.password,
           }
           console.log("loginDetails=>", loginDetails)
       if((this.email !== '' && this.RegEmail == true) && 
                     (this.password !== '' && this.RegPassword == true)){
                       
                  var storedValue = await myService.loginPost(loginDetails)
                  console.log("storedValue", storedValue)
             }
           if(storedValue && storedValue.apiStatus == true){
               this.router.push("/")
              console.log("router")
              myService.setToken(storedValue)
              
          }
         },
      remember_me() {
      console.log("remember_me", this.email);
      console.log("remember_me", this.password);
      console.log("remember_me", this.selected)
      if (this.selected == true && this.email !== "" && this.password !== "") {
        localStorage.setItem("email", JSON.stringify(this.email));
        localStorage.setItem("password",JSON.stringify(this.password));
        localStorage.setItem("checked", this.selected)
      }
    },
       validateEmail(){
       this.RegEmail =  this.regexEmail.test(this.email) 
        console.log("RegEmail", this.RegEmail)
      },
      validatePassword(){
        this.RegPassword = this.regexPassword.test(this.password)
          console.log("RegPassword", this.RegPassword)
      },

},

created() {
       this.submitValidation = false
       const Email = JSON.parse(localStorage.getItem('email'))
       const Password = JSON.parse(localStorage.getItem('password'))
       if(Email !== "" && Password !== ""){
           this.email = Email,
           this.password = Password
         }
          console.log("Email", Email)
          console.log("Password", Password)
  },
};
</script>

<!--
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const submitFunction = () => {
      console.log("Submit");
      router.push({
        path: "/",
      });
    };
    return {
      submitFunction,
    };
  },
};
</script>
-->

<style scoped>
div {
  margin-top: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input[type="text"],input[type="email"],input[type="password"] {
  padding: 10px;
  border-radius: 5px;
  width: 300px;
}
input[type="submit"] {
  border-radius: 5px;
}

span{
    color: red;
}
</style>
