<template>
  <div class="card mb-4">
    <div class="card-header pb-0 d-flex justify-content-between">
      <h6>System Info</h6>
      <!-- <button class="btn btn-dark btn-sm m-3 rounded">Add System Details</button> -->
      <!-- Button trigger modal -->
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add System Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-uppercase" id="exampleModalLabel">Add System Details</h5>
        <button type="button" class="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
         <!-- <div class="mb-3">
            <label for="id" class="col-form-label">ID:</label>
            <input type="text" class="form-control" id="id" placeholder="Enter Your ID">
          </div> -->
          <div class="mb-3 dropdown">
            <label for="employee-id" class="col-form-label">Employee ID:</label>
            <!--Select option for employee Id start -->
             <select id="type" name="type" class="form-control">
                 <option value="">Select Employee ID</option>
                   <option v-for="dropdownEmpId in EmpIdArray"
                      :value="dropdownEmpId.emp_code"
                      :key="dropdownEmpId.id"
                    >
                       {{ dropdownEmpId.emp_code }}
                   </option>
                </select>
            <!-- Select option for employee Id end-->
            <!-- <input type="text" class="form-control" id="employee-id" placeholder="Enter Your Employee ID"> -->
          </div>
          <div class="mb-3">
            <label for="system-modalId" class="col-form-label">System Model</label>
             <!--Select option for System Modal Id start -->
             <select id="type" name="type" class="form-control">
                <option value="">Select Model</option>
                   <option v-for="data in ModelArray"
                      :value="data.sys_name"
                      :key="data.id"
                    >
                       {{ data.sys_name }}
                   </option>          
                    </select>
            <!-- Select option for System Modal Id end-->
            <!-- <input type="text" class="form-control" id="system-modalId" placeholder="Enter Your System Modal ID"/> -->
          </div>
           <div class="mb-3">
            <label for="emp_id" class="col-form-label control-label">ID:</label>
            <input type="text" class="form-control" id="emp_id" v-model="emp_id" placeholder="Enter Your ID"/>
            <span v-if="emp_id == '' && submitValidation == true">ID is required</span>
          </div>
           <div class="mb-3">
            <label for="system-model_id" class="col-form-label control-label">System Model ID:</label>
            <input type="text" class="form-control" id="system-model-id" v-model="emp_sys_model_id" placeholder="Enter Your System Model ID"/>
            <span v-if="emp_sys_model_id == '' && submitValidation == true">System Model Id is required</span>
          </div>
          <div class="mb-3">
            <label for="system-os" class="col-form-label">System OS:</label>
            <input type="text" class="form-control" id="system-os" v-model="emp_sys_os" placeholder="Enter Your System OS"/>
          </div>
            <div class="mb-3">
            <label for="system-memory" class="col-form-label">System Memory:</label>
            <input type="text" class="form-control" id="system-memory" v-model="emp_sys_memory" placeholder="Enter Your System Memory"/>
          </div>
          <div class="mb-3">
            <label for="system-ram" class="col-form-label">System RAM:</label>
            <input type="text" class="form-control" id="system-ram" v-model="emp_sys_ram" placeholder="Enter Your System RAM"/>
          </div>
          <div class="mb-3">
            <label for="system-chip" class="col-form-label">System Chip:</label>
            <input type="text" class="form-control" id="system-type" v-model="emp_sys_chip" placeholder="Enter Your System Chip"/>
          </div>
          <div class="mb-3">
            <label for="employee-serialNo" class="col-form-label">Employee Serial No:</label>
            <input type="text" class="form-control" id="system-type" v-model="emp_serial_no" placeholder="Enter Your Employee Serial No"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" @click="SaveSysinfo()">Save</button>
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
              <!-- <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">ID</th> -->
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employee ID</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">System Model ID</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">System OS</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">System Memory</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">System RAM</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">System Chip</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employee serial No</th>


              <!-- <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >System ID</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >System Type</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >System's property</th> -->
              <!-- <th class="text-secondary opacity-7"></th> -->
               <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0"
              >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in SyslistArray" :key="data.id">
              <!-- <td>{{data.id}}</td> -->
              <td class="ps-5">{{data.emp_id}}</td>
              <td class="ps-5">{{data.emp_sys_model_id}}</td>
              <td class="ps-4">{{data.emp_sys_os}}</td>
              <td class="ps-5">{{data.emp_sys_memory}}</td>
              <td class="ps-5">{{data.emp_sys_ram}}</td>
              <td class="ps-4">{{data.emp_sys_chip}}</td>
              <td class="ps-4">{{data.emp_serial_no}}</td>

              <!-- <td> -->
                <!-- <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="img1" size="sm" border-radius="lg" class="me-3" alt="user1" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">John Michael</h6>
                    <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                  </div>
                </div> -->
              <!-- </td> -->
              <!-- <td>
                  
              </td> -->
              <!-- <td> -->
                <!-- <p class="text-xs font-weight-bold mb-0">Manager</p>
                <p class="text-xs text-secondary mb-0">Organization</p> -->
              <!-- </td> -->
              <!-- <td class="align-middle text-center text-sm"> -->
                <!-- <vsud-badge color="success" variant="gradient" size="sm">Online</vsud-badge> -->
              <!-- </td> -->
              <!-- <td class="align-middle text-center"> -->
                <!-- <span class="text-secondary text-xs font-weight-bold">23/04/18</span> -->
              <!-- </td> -->
              <td>
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
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
import myService from '../../services/myService';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
export default {
  data(){
    let router = useRouter();
    return{
     submitValidation: false,
        emp_id : "",
        emp_sys_model_id : "" ,
        emp_sys_os : "",
        emp_sys_memory : "",
        emp_sys_ram : "",
        emp_sys_chip : "" ,
        emp_serial_no : "",
        router
    }
  },
  setup(){
     var Syslist = new Array();
     var dropdownEmpId = new Array();
     var dropdownSystemModel = new Array();
     const SyslistArray = ref([]);
     const EmpIdArray = ref([]);
     const ModelArray = ref([]);
     async function listSystems(systemData){
       Syslist = await myService.systemlist(systemData)
       SyslistArray.value = Syslist.data
       console.log("Get SystemInfo=>", SyslistArray.value)
       
       //Dropdown for System Model
       dropdownSystemModel = await myService.systemmasterlist()
       ModelArray.value = dropdownSystemModel.data
       console.log("ModelArray", ModelArray.value)

       //Dropdown for Employee ID
        dropdownEmpId = await myService.employeelist()
        EmpIdArray.value = dropdownEmpId
        console.log("EmpIdArray", EmpIdArray.value)
     }
      onMounted(listSystems)
     return{
       Syslist,
       SyslistArray,
       listSystems,
       dropdownSystemModel,
       ModelArray,
       dropdownEmpId,
       EmpIdArray
     }
  },
  methods: {
      SaveSysinfo(){
        this.submitValidation = true
        if(this.emp_id !== '' && this.emp_sys_model_id !== ""){
           const ModalSysinfoData = {
            emp_id : this.emp_id,
            emp_sys_model_id : this.emp_sys_model_id ,
            emp_sys_os : this.emp_sys_os,
            emp_sys_memory : this.emp_sys_memory,
            emp_sys_ram : this.emp_sys_ram,
            emp_sys_chip : this.emp_sys_chip ,
            emp_serial_no : this.emp_serial_no
        }
        console.log("ModalSysinfoData", ModalSysinfoData)
        var SystemInfoData = myService.postSysteminfo(ModalSysinfoData)
        console.log("postedSystemInfoData=>", SystemInfoData)
    if(SystemInfoData  && SystemInfoData.apiStatus == true && SystemInfoData.statusCode == 200){
          this.router.push("/system-info-table")
      }
  }
       
        // return{
        //   ModalSysinfoData,
        //   SystemInfoData
        // }
      }
  },
  
}
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
