<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Speaker Consultant"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="flex justify-between items-center border-b border-searchbox -m-4 p-4 mb-8">
            <v-title menu="Speaker / Consultant" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="assistantinfo"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt ml-8" @click="speakerengagements"
                >Next <img src="@/assets/backarrowblue.svg" class="ml-2 transform rotate-180"
              /></a>
            </div>
          </div>

          <img src="@/assets/screen/travelpreference.jpg" />
        </v-card-box>
      </div>
      <ca-right-menu></ca-right-menu>
    </div>
  </div>
</template>
<script lang="ts" src="./Travelpreference.ts"></script>
