<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Team</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <!-- <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">ID</th> -->
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Team ID</th>
                <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Team Name</th>
                <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in TeamlistArray" :key="data.id">
              <!-- <td>{{data.id}}</td> -->
              <td>{{data.team_id}}</td>
              <td>{{data.team_name}}</td>
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
     var Teamlist = new Array();
     const TeamlistArray = ref([])
     async function listTeams(teamData){
        Teamlist = await myService.teamlist(teamData)
        TeamlistArray.value = Teamlist.data
        console.log("Get Teamlist=>", TeamlistArray.value)
     }
     onMounted(listTeams)
     return{
       Teamlist,
       TeamlistArray,
       listTeams
     }
   }
}
</script>