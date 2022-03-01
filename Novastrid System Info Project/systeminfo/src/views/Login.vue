<template>
        <img class="float-left w-75 vh-100" src="https://www.applaudhr.com/hubfs/cloud-hr-improve-employee-experience.jpg">
     <div class="right">
          <!-- <h1>Sign In</h1> -->
          <img class="w-100 h-100 p-5" src="https://www.novastrid.com/images/NOVALOGO.png">
          <div>
             <input type="text" v-model="email" placeholder="Email" @keyup="validateEmail()"/>
             <span v-if="email == '' && submitValidation == true" >Email is required</span>
             <span v-if="!RegEmail && email !== ''">Enter a valid email address</span>
          </div>
          <div>
             <input type="password" v-model="password" placeholder="Password" @keyup="validatePassword()"/>
            <span v-if="password == '' && submitValidation == true">Password is required</span>
             <span v-if="!RegPassword && password !== ''">Password should be minimum 6 characters</span>
          </div>
          <div class="flex flex-row p-3">
            <input type="checkbox" id="checkbox" v-model="selected"  @change="check($event)">
            <label for="checkbox" class="p-2 fon">Remember Me</label>
          </div>
          <div>
            <button type="button" class="btn btn-primary" @click="loginFunction()">LOG IN</button>
          </div>
     </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    data(){
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let regexPassword = new RegExp("[a-z0-9A-Z].{6,}");
    let RegEmail = Boolean;
    let RegPassword = Boolean;
    let  router = useRouter();
        return{
      submitValidation: false,
      email: "",
      password: "",
      regexEmail,
      regexPassword,
      RegEmail,
      RegPassword,
      selected: false,
      router
      }
    },
    methods: {
        loginFunction(){
        this.submitValidation = true;
        this.remember_me();
        const loginDetails = {
        email: this.email,
        password: this.password,
      };
      console.log("Login Details=>", loginDetails);
     localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
       if((this.email !== '' && this.RegEmail == true) && 
                     (this.password !== '' && this.RegPassword == true)){
               this.router.push("/")
    }

    },
     validateEmail() {
      this.RegEmail = this.regexEmail.test(this.email);
    },
    validatePassword() {
      this.RegPassword = this.regexPassword.test(this.password);
    },
    check() {
      console.log("selected", this.selected);
    },
    remember_me() {
      if (this.selected == true && this.email !== "" && this.password !== "") {
        localStorage.setItem("email", JSON.stringify(this.email));
        localStorage.setItem("password",JSON.stringify(this.password));
        localStorage.setItem("checked", this.selected)
      }
    },
    },
   created(){
     this.submitValidation = false;
     const Email = JSON.parse(localStorage.getItem('email'))
     const Password = JSON.parse(localStorage.getItem('password'))
     const Checked = JSON.parse(localStorage.getItem('checked'))
      if(Checked && Checked == true && Email !== "" && Password !== ""){
           this.email = Email,
           this.password = Password,
           this.selected = Checked
         }

   }
}
</script>

<style scoped>
   /* img{
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
   
   input[type=text],input[type=password]{
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
       color: red;
} */

/* img{
  width: 75%;
  height: 100vh;
  float: left;
} */

.right{
   float: right;
   width: 25%;   
}

/* h1{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  font-family:'Times New Roman', Times, serif;
  text-shadow: 2px 2px 4px black;
} */

div{
  padding: 15px;
}

input[type=text],input[type=password]{
     padding: 10px;
     width: 100%;
     border-radius: 5px;
}

input[type=checkbox]{
  margin-left: 8px;
}

button{
   width: 100%;
}

span{
  color: red;
}

label{
  font-family: 'Times New Roman', Times, serif;
}

</style>