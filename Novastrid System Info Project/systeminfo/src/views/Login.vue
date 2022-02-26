<template>
    <div class="img">
        <img src="https://www.applaudhr.com/hubfs/cloud-hr-improve-employee-experience.jpg">
    </div>
     <div class="container">
          <h1>Sign In</h1>
          <div>
             <input type="text" v-model="email" placeholder="Email" @keyup="validateEmail()"/>
             <span v-if="email == '' && submitValidation == true" >Email is required</span>
             <span v-if="!RegEmail && email !== ''">Enter a valid email address</span>
          </div>
          <div>
             <input type="text" v-model="password" placeholder="Password" @keyup="validatePassword()"/>
            <span v-if="password == '' && submitValidation == true">Password is required</span>
             <span v-if="!RegPassword && password !== ''">Password should be minimum 6 characters</span>
          </div>
          <div>
            <button type="button" class="btn btn-primary" @click="loginFunction()">Login</button>
          </div>
     </div>
</template>

<script>
export default {
    data(){
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let regexPassword = new RegExp("[a-z0-9A-Z].{6,}");
    let RegEmail = Boolean;
    let RegPassword = Boolean;
        return{
      submitValidation: false,
      email: "",
      password: "",
      regexEmail,
      regexPassword,
      RegEmail,
      RegPassword,
        }
    },
    methods: {
        loginFunction(){
        this.submitValidation = true;
        const loginDetails = {
        email: this.email,
        password: this.password,
      };
      console.log("Login Details=>", loginDetails);
     localStorage.setItem("loginDetails", JSON.stringify(loginDetails));

    },
     validateEmail() {
      this.RegEmail = this.regexEmail.test(this.email);
    },
    validatePassword() {
      this.RegPassword = this.regexPassword.test(this.password);
    }
    },
   created(){
     this.submitValidation = false;

   }
}
</script>

<style scoped>
   img{
       width: 100%;
       height: 100vh;
       position: absolute;
   }

  .container{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
   }
    
    h1{
        color: white;
        margin-top: 100px;
        font-family:Georgia, 'Times New Roman', Times, serif;
        text-shadow: 2px 2px 4px #ffffff;
        margin-left: 15px;
    }
   
   input[type=text]{
       padding: 15px;
       margin: 15px;
       width: 50%;
       border-radius: 10px;
   }

   button{
       padding: 8px;
       width: 25%;
       margin-top: 10px;
       margin-left: 12%;
     }

     span {
      /* text-align: center; */
       color: red;
}
</style>