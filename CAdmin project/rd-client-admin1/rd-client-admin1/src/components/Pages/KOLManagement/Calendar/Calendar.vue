<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Calendar"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div
            class="
              flex
              justify-between
              items-center
              border-b border-searchbox
              -m-4
              p-4
              mb-8
            "
          >
            <v-title menu="Calendar" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="consultant"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <img src="@/assets/calanderview.svg" class="w-full" />
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Calendar.ts"></script>
