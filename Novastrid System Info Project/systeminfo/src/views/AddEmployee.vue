<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h2 class="text-center">Add Employee</h2>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Employee ID</label>
                    <input type="text" class="form-control" v-model="employee.empid" required>
                </div>
                <div class="form-group">
                    <label>Employee Name</label>
                    <input type="text" class="form-control" v-model="employee.name" required>
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <input type="text" class="form-control" v-model="employee.position" required>
                </div>
                 <div class="form-group">
                    <label>System Name</label>
                    <input type="text" class="form-control" v-model="employee.systemname" required>
                </div>
                 <div class="form-group">
                    <label>System Type</label>
                    <input type="text" class="form-control" v-model="employee.systemtype" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block mt-3">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { useRouter } from 'vue-router';
import { db }   from '/firebaseDb';
 export default {
        data() {
            let router = useRouter();
            return {
                employee: {
                        empid: "",
                        name:"" ,
                        position: "",
                        systemname: "",
                        systemtype: ""
                },
                router
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
              db.collection("employees").add(this.employee)
                .then(() => {
                    alert("Employee data successfully created!");
                    this.$router.push('/')
                    this.employee.empid = ''
                    this.employee.name = ''
                    this.employee.position = ''
                    this.employee.systemname = '' 
                    this.employee.systemtype = ''
                
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
div{
     padding: 10px;
 }

 label{
     font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
     font-size: 20px;
     font-weight: bold;
 }
</style>


<!--
<template>
    <div>
        	<h1>Add Employee</h1>
	</div>
	<div class="container">
        <div>
		    <input type="text" name="empId"  v-model="empId" placeholder="Employee Id" required>
            <span v-if="empId == '' && submitValidation == true">Employee Id is required</span>
		</div>
		<div>
			<input type="text" name="name"  v-model="name" placeholder="Employee Name" required>
            <span v-if="name == '' && submitValidation == true">Employee Id is required</span>
		</div>
		<div>
        <input type="text" name="position"  v-model="position" placeholder="Position" required>
        <span v-if="position == '' && submitValidation == true">Employee Id is required</span>
		</div>
        <div>
        <input type="text" name="systemname"  v-model="systemname" placeholder="System Name" required>
        <span v-if="systemname == '' && submitValidation == true">Employee Id is required</span>
		</div>
        <div>
        <input type="text" name="systemtype"  v-model="systemtype" placeholder="System Type" required>
        <span v-if="systemtype == '' && submitValidation == true">Employee Id is required</span>
		</div>
		<div>
			<input type="submit" name="submit" id="addBtn" @click="submitFunc()" class="btn btn-success" value="Add">
		</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default { 
    data(){
        let router = useRouter();
        return{
          router,
          submitValidation: false
        }
    },
methods:{
    submitFunc(){
        this.submitValidation == true
			 const allDetails = {
				 empId: this.empId,
                 name: this.name,
                 position: this.position,
                 systemname: this.systemname,
                 systemtype: this.systemtype 
			  }
			  console.log("alldetails", allDetails)
			 localStorage.setItem("submitDetails", JSON.stringify(allDetails))
             var formData = JSON.parse(localStorage.getItem("submitDetails"))
             console.log("ADD Employee", formData)
             this.router.push("/")
			  return{
				  formData,
				  allDetails,
			  }
		  },
	},

	
};
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
   	  	width: 500px;
   	  }

   	  input[type=submit]{
   	  	border-radius: 10px;
   	  	width: 150px;
   	  }
      
	   button{
       width: 100px;
   }

   span{
    color: red;
}

</style>
-->
