<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
  export default{
      data() {
          return {
              books:0,
              msg:"Welcome to Vue Js"
          }
      },
       beforeUpdate() {
           alert("beforeupdate hook has been called");
       },
       updated(){
          alert("Updated hook has been called");
        },
       mounted(){
          this.$data.msg= "content changed";
        }
        
  }
</script>
