<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Firebase Vue CRUD Example</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link p-3" to="/add">AddUser</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link p-3" to="/list">ViewUsers</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>