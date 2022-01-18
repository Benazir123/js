<template>
    <div>
        	<h1>Add User</h1>
	</div>
	<div>
        <button @click="goBack()" class="btn btn-outline-primary">Go Back</button>
    </div>
	<div class="container">
        <div>
		    <input type="text" name="userId"  v-model="userId" placeholder="Id" required>
		</div>
		<div>
			<input type="text" name="title"  v-model="title" placeholder="Title" required>
		</div>
		<div>
        <input type="text" name="content"  v-model="body" placeholder="Content" required>
		</div>
		<div>
			<input type="submit" name="submit" id="addBtn" @click="submitFunc()" class="btn btn-success" value="Add">
		</div>
    </div>
</template>

<script>
import myService from "../services/myService"
export default { 
	  inheritAttrs: true,
	name: "AddUser",
	setup(props, {emit}) {
		const goBack = () => {
		emit("backtohome")
		 }
		 return{
			 goBack,
		 }
	},
methods:{
    submitFunc(){
			 const allDetails = {
				  userId: this.userId,
				  title: this.title,
				  body: this.body,
			  }
			  console.log("alldetails", allDetails)
			  var formData = myService.postlist(allDetails);
			//   console.log("formdata", formData)
			  return{
				  formData,
				  allDetails,
			  }
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
      
	   button{
       width: 100px;
   }

</style>