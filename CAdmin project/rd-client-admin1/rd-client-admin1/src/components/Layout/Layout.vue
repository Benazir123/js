<template>
  <div
    class="flex justify-end w-full min-h-screen bg-lite-blue-bg"
    :class="{
      ' dashboardwrp': currentRoute == '/dashboard' || currentRoute == '/kolmanagement',
    }"
  >
    <!-- dashboardwrp -->
    <v-left-menu></v-left-menu>
    <div class="right-wrp">
      <router-view></router-view>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" src="./Layout.ts"></script>
