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
<template>
  <p>{{ fullName }}</p>
</template>

<script lang="ts">
import { User } from '../types/index'
import  { defineComponent } from 'vue'

  export default defineComponent  ({
    name: 'Home',
    data() {
      return {
        user: {} as User
      }
    },
    computed: {
      fullName(): string {
        ///this.User.firstName = 'test'
        return `${this.user.firstName} ${this.user.lastName}`
      }
    },
    mounted(): void {
      this.user = {
        firstName: `Benazir`,
        lastName: `Fathima`,
        // twitterHandle: `@digitalocean`,
        location: {
          city: `Madurai city`,
          state: `TN`
        }
      }
    }
  })
</script>