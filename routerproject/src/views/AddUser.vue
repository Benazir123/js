<template>
    <div>
        	<h1>Add User</h1>
	</div>
	<div class="container">
        <div>
		    <input type="text" name="userId"  v-model="id" placeholder="Id" required>
		</div>
		<div>
			<input type="text" name="username"  v-model="name" placeholder="Name" required>
		</div>
		<div>
        <input type="email" name="email"  v-model="email" placeholder="Email" required>
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
         id: "",
		 name: "",
		 email: "",
		 allDetails: {}
	}),
	methods: {
         submitFunc() {
		      this.allDetails = {
                      id: this.id,
					  name: this.name,
					  email: this.email,
				   }
				  console.log("alldetails", this.allDetails)
				  this.clearForm();
		 },
		 clearForm(){
			 this.id = "";
			 this.name = "";
			 this.email = "";
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