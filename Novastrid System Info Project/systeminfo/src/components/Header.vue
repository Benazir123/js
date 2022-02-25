<template>
   <div class="d-flex">
    <div class= "sidebar">
      <h5>
        Contents
      </h5>
     <ul class="sidebar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Table</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
      </ul>
    </div>
<br>
    <div class="container-fluid">
      <router-view/>
    </div>
</div>
</template>

<style scoped>
.sidebar{
  width:15%;
  height:100vh;
  text-decoration:none;
  background-color: rgb(214, 206, 206);
}

</style>
