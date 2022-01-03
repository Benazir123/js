<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
  export default{
      name:"Test",
      data(){
          return{
              books:0,
              msg:"Welcome to Vue Js"
           }
      },
      beforeCreate() {
          alert("beforecreate hook has been called");
          console.log("beforecreate hook has been called");
      },
      created() {
         alert('Created hook has been called');
         console.log(`books is of type ${typeof this.books}`);
      },
      beforeMount() {
          alert("beforemount hook has been called");
      },
       mounted() {
           alert("mounted hook has been called"); 
       },
    }
</script>
