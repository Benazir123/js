<template>
  <div class="card mb-4">
    <div class="card-header pb-0 d-flex justify-content-between">
      <h6>Employee Details</h6>
      <!-- <button class="btn btn-success btn-sm m-3 rounded">Add Employee</button> -->

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
            <label for="employee-code" class="col-form-label">Employee Code:</label>
            <input type="text" class="form-control" id="employee-code" placeholder="Enter Your Employee Code">
          </div>
          <div class="mb-3">
            <label for="employee-name" class="col-form-label">Employee Name:</label>
            <input type="text" class="form-control" id="employee-name" placeholder="Enter Your Name"/>
          </div>
          <!-- <div class="mb-3">
            <label for="employee-status" class="col-form-label">Status:</label>
            <input type="text" class="form-control" id="employee-status" placeholder="Enter Your Status"/>
          </div> -->
            <!-- <div class="mb-3">
            <label for="employee-joining-date" class="col-form-label">Date of Joining:</label>
            <input type="text" class="form-control text-uppercase" id="employee-joining-date" placeholder="DD/MM/YYYY"/>
          </div> -->
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
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">ID</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Employee Code</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Employee Name</th>
                <!-- <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Employee Address</th> -->
              <!-- <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Date of joining as Employee</th> -->
              <!-- <th class="text-secondary opacity-7"></th> -->
               <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in listArray" :key="data.id">
              <td>{{data.id}}</td>
              <td>{{data.emp_code}}</td>
              <td>{{data.emp_first_name}} {{data.emp_last_name}}</td>
              <!-- <td>{{data.emp_address}}</td> -->
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


export default {
  name: "-table",
  setup(){
     var list = new Array();
     const listArray = ref([]);
     async function listEmployees(postValue){
        list = await myService.employeelist(postValue)
        listArray.value = list.data
        console.log("Get Employee =>", listArray.value)
     }
    onMounted(listEmployees)
     return{
       list,
       listArray,
       listEmployees
     }

  }
};
</script>