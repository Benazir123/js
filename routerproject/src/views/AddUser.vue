<template>
    <div>
        	<h1>Add User</h1>
        <form id="form" class="container">
        <div>
		    <input type="text" name="userId" id="userId" placeholder="Id" required>
		</div>
		<div>
			<input type="text" name="name" id="name" placeholder="Name" required>
		</div>
		<div>
        <input type="email" name="email" id="email" placeholder="Email" required>
		</div>
		<div>
			<input type="submit" name="submit" id="addBtn" @click="submitFunc()" class="btn btn-success" value="Add">
		</div>
    </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
//  import myService from '../services/myService'
export default {
	 name: "AddUser",
	setup(){
		const router = useRouter();
		const submitFunc = () => {
			 router.push({
				 path: "/"
			 });
		}
		return{
		   submitFunc
	   }
	}
}
</script>

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