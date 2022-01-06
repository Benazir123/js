<template>
  <div class="content"></div>
</template>


<script lang="ts">
 import myService from "../services/myService"

  export default {
      async  mounted() {
        var user = await myService.userlist()
        console.log("Get Method=>", user)
        
        var postuser = await myService.postlist()
        console.log("Post Method=>", postuser)

        var putuser = await myService.putlist()
        console.log("Put Method=>", putuser)
        }
};
</script>
