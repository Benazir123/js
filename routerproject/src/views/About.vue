<template>
  <div class="About">
    <h1>About</h1>
    <p>Welcome to About Page..!</p>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log("About has been mounted")
  }
}
</script>

<style scoped>
h1,
p {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
