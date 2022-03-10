<template>
  <div class="card mb-4">
    <div class="card-header pb-0 d-flex justify-content-between">
      <h6>Employee Details</h6>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Employee
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-uppercase" id="exampleModalLabel">Add Employee Details</h5>
        <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
         <div class="mb-3">
            <label for="team-id" class="col-form-label">Team Name:</label>
               <!--Select option for Team Name start -->
             <select id="type" name="type" class="form-control">
                 <option value="">Select Team Name</option>
                   <option v-for="data in teamNameArray"
                      :value="data.team_name"
                      :key="data.id"
                    >
                       {{ data.team_name }}
                   </option>
                </select>
            <!-- Select option for Team Name end-->
          </div>
          <div class="mb-3 form-group required">
            <label for="team-id" class="col-form-label control-label">Team ID:</label>
           <!-- Another method for asterisk  
                      <span style="color:#ff0000">*</span> -->
            <input type="text" class="form-control" id="team-id" v-model="dep_id" placeholder="Enter Your Team ID" required/>
            <span v-if="dep_id == '' && submitValidation == true">Team ID is required</span>
          </div>
         <div class="mb-3 form-group required">
            <label for="employee-id" class="col-form-label control-label">Employee ID:</label>
            <input type="text" class="form-control" id="employee-id" v-model="emp_code" placeholder="Enter Your Employee ID" required/>
            <span v-if="emp_code == '' && submitValidation == true">Employee ID is required</span>
         </div>
          <div class="mb-3 form-group required">
            <label for="employee-firstname" class="col-form-label control-label">Employee Firstname:</label>
            <input type="text" class="form-control" id="employee-firstname" v-model="emp_first_name" placeholder="Enter Your First Name" required/>
            <span v-if="emp_first_name == '' && submitValidation == true">First Name is required</span>
         </div>
           <div class="mb-3">
            <label for="employee-lastname" class="col-form-label">Employee Lastname:</label>
            <input type="text" class="form-control" id="employee-lastname" v-model="emp_last_name" placeholder="Enter Your Last Name"/>
          </div>
          <div class="mb-3 form-group required">
            <label for="employee-role" class="col-form-label control-label">Employee Role:</label>
            <input type="text" class="form-control" id="employee-role" v-model="emp_role" placeholder="Enter Your Role" required/>
            <span v-if="emp_role == '' && submitValidation == true">Employee Role is required</span>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" @click="saveDetail()">Save Details</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal end-->
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Team ID</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Employee ID</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Employee Name</th>
               <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Employee Role</th>
                <!-- <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Employee Address</th> -->
               <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Emplist in EmplistArray" :key="Emplist.id">
              <td>{{Emplist.dep_id}}</td>
              <td>{{Emplist.emp_code}}</td>
              <td>{{Emplist.emp_first_name}} {{Emplist.emp_last_name}}</td>
              <!-- <td>{{data.emp_address}}</td> -->
              <td>{{Emplist.emp_role}}</td>
              <td>
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs ps-4"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import myService from "../../services/myService"
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
export default {
  data(){
    let router = useRouter();
    return{
      submitValidation: false,
      router,
      dep_id: "",
      emp_code: "",
      emp_first_name: "",
      emp_last_name: "",
      emp_role: ""
    }
  },
  name: "-table",
  setup(){
     var Emplist = new Array();
     const EmplistArray = ref([]);
     var dropdownteamName = new Array();
     const teamNameArray = ref([]);
     async function listEmployees(employeeData){
        Emplist = await myService.employeelist(employeeData)
        EmplistArray.value = Emplist
        console.log("Get Employee=>", EmplistArray.value)

        //dropdown for team name in modal
        dropdownteamName = await myService.teamlist()
        teamNameArray.value = dropdownteamName.data
        console.log("teamNameArray", teamNameArray.value)
     }
    onMounted(listEmployees)
     return{
       Emplist,
       EmplistArray,
       listEmployees,
       dropdownteamName,
       teamNameArray
     }

  },
  methods: {
     saveDetail(){
       this.submitValidation = true
   if(this.dep_id !== '' && this.emp_code !== '' && 
                            this.emp_first_name !== '' && this.emp_role){
          const ModalEmpdata = {
            dep_id: this.dep_id,
            emp_code: this.emp_code,
            emp_first_name: this.emp_first_name,
            emp_last_name: this.emp_last_name,
            emp_role: this.emp_role,
          }

          console.log("ModalEmpData", ModalEmpdata)
          var formData = myService.postEmployee(ModalEmpdata)
          console.log("postedEmployeeData=>", formData)
        if(formData && formData.apiStatus == true && formData.statusCode == 200){
          this.router.push("/")
        }
     }
          //   console.log("ModalEmpData", ModalEmpdata)
          // var formData = myService.postEmployee(ModalEmpdata)
          // console.log("postedEmployeeData=>", formData)
          
      // return{
      //       formData,
      //       ModalEmpdata
      //     }
     }
  },
};
</script>

<style scoped>
 .control-label:after {
    content:"*";
    color: red;
  }

  span{
     color: red;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>