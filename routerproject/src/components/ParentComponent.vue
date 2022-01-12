
<template>
    <div>
        <ChildComponent @messageFromChild="childMessageRecieved"/>
        <h3>Message from child "{{printmessage}}"</h3>
    </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue"
export default {
    name: "ParentComponent",
    data() {
        return {
           printmessage: "",
        }
    },
    methods: {
         childMessageRecieved(msg){
           console.log("message from child", msg);
           this.printmessage = msg;
         },
     },
    components:{
         ChildComponent,
     },
};
</script>

<style scoped>
  h3{
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
  }
</style>

<!--
<template>
    <div class="parent-component">
        <ChildComponent :message="message"/>
    </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue"
export default {
     name: "ParentComponent",
     data(){
         return{
             message: "Hi buddy,I'm trying to do my level best",
         };
   
     },
     components: {
         ChildComponent,
     },
};
</script>
-->

