<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>System Master</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">ID</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >System Name</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >System Model</th>
               <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in MasterlistArray" :key="data.id">
              <td>{{data.id}}</td>
              <td>{{data.sys_name}}</td>
              <td>{{data.sys_model}}</td>
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
export default {
   setup(){
     var Masterlist = new Array();
     const MasterlistArray = ref([])
     async function listSystemMasters(masterData){
        Masterlist = await myService.systemmasterlist(masterData)
        MasterlistArray.value = Masterlist.data
        console.log("Get SystemMaster=>", MasterlistArray.value)
     }
     onMounted(listSystemMasters)
     return{
       Masterlist,
       MasterlistArray,
       listSystemMasters
     }
   }
}
</script>
