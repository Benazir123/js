<template>
  <VTable :data="list">
    <template #head>
                   <th>Meeting Id</th>
                   <th>Topic</th>
                   <th>Engagement Type</th>
                   <th>EO Name</th>
                   <th>Speaker Name</th>
                   <th>Status</th>
                   <th>Date and Time</th>
    </template>
       <template #body>       
             <tr v-for="(result,index) in listArray" :key="index">
                    <td>{{result.meeting_id}}</td>
                    <td>{{result.topic}}</td>
                    <td>{{result.engagement_type}}</td>
                    <td>{{result.eo_firstName}}{{result.eo_lastName}}</td>
                    <td>{{result.spk_firstName}}{{result.spk_lastName}}</td>
                    <td>{{result.status}}</td>
                    <td>{{dateFormat(result.createdAt)}}</td>
        </tr>
    </template>
  </VTable>
</template>

<script>
import { ref } from '@vue/reactivity';
import myService from "../service/myService"
import { onMounted } from '@vue/runtime-core';
import moment from "moment"
export default {
  name: 'Home',
  setup() {
    const dateFormat = (value) => {
           if(value){
              return moment(String(value)).format("MMM DD,yyyy h:mm A")
           }
     }
     var list = [];
     const listArray = ref()
        async function listusers(){
        list = await myService.userlist()
        listArray.value = list.result
       console.log("Get Method=>", listArray.value)
       }
        onMounted(listusers)
        return{
         listusers,
         dateFormat
       }
  }
}
</script>