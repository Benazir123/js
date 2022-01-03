<!--
<template>
    <div>
      
    </div>
</template>

<script>
export default{
    name:"Destroy",
    data() {
        return {
            books:0
        }
    },
     beforeDestroy() {
    this.books = null
    delete this.books
  },
  destroyed() {
    this.$destroy() 
    console.log(this)
  }
}
  
</script>
-->
