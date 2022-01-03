<template>
   <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <ul>
          <li class="nav-item">
            <router-link class="nav-link" to="/update">Update</router-link>
          </li>
       </ul>
     </nav>
     <router-view/>
   </div>
</template>



<!--
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
-->
