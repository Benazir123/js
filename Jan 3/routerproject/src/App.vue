<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <ul class="navbar-nav">
    <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/blog">Blog</router-link>
    </li>
    <li class="nav-item">
       <router-link class="nav-link" to="/service">Service</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/contact">contact</router-link>
    </li>
  </ul>
 </nav>
    
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
