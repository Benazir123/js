<template>
    <div>
        	<h1>Add User</h1>
	</div>
	<div class="container">
        <div>
		    <input type="text" name="userId" id="userId" v-model="userId" placeholder="Id" required>
		</div>
		<div>
			<input type="text" name="username" id="userName" v-model="userName" placeholder="Name" required>
		</div>
		<div>
        <input type="email" name="email" id="userEmail" v-model="userEmail" placeholder="Email" required>
		</div>
		<div>
			<input type="submit" name="submit" id="addBtn" @click="submitFunc()" class="btn btn-success" value="Add">
		</div>
    </div>
</template>

<script>
export default {
	name: "AddUser",
	data: () => ({
         userId: "",
		 userName: "",
		 userEmail: "",
		 allDetails: []
	}),
	methods: {
         submitFunc() {
			  this.allDetails.push({
				  userId: this.userId,
				  userName: this.userName,
				  userEmail: this.userEmail, 
				  });
				  console.log("alldetails", this.allDetails)
				  this.clearForm();
		 },
		 clearForm(){
			 this.userId = "";
			 this.userName = "";
			 this.userEmail = "";
          },
	},
};
</script>


<!--
<script>
import { useRouter } from 'vue-router'
//  import myService from '../services/myService'
export default {
	 name: "AddUser",
	setup(){
		const router = useRouter();
		var userId = document.getElementById("userId");
		var userName = document.getElementById("userName");
        var email = document.getElementById("email");


		const submitFunc = () => {
             router.push({
				 path: "/"
			 });
			console.log("id", userId.value);
			console.log("name", userName.value);
			console.log("email", email.value)
		}
		 
		return{
		   submitFunc
	   }
	}
}
</script>
-->

<style scoped>
      .container{
   	  	margin-top: 40px;
   	  	display: flex;
   	  	flex-direction: column;
   	  	justify-content: center;
   	  	align-items: center;
   	  }

   	  div{
   	  	padding: 10px;
   	  }

   	  h1{
        margin: auto;
        display: flex;
        justify-content: center;
        align-content: center;
   	  }

   	  input[type=text],input[type=email]{
   	  	padding: 10px;
   	  	border-radius: 8px;
   	  	width: 300px;
   	  }

   	  input[type=submit]{
   	  	border-radius: 3px;
   	  	width: 100%;
   	  }

</style>