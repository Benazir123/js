<template>
  <div class="flex bg-lite-blue-bg viewspk">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Users"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="border-b-2 border-searchbox  -m-4 p-4 mb-2">
            <v-title menu="Speaker Details" class="-mb-0"></v-title>
            <div class="flex items-center"></div>
          </div>

          <!--  -->
          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright">
              <div class="flex items-center justify-between mb-3">
                <v-title menu="Documents" class=""></v-title>
                <!-- datepicker starts -->
              </div>
              <!-- datepicker ends -->
              <!-- ------------------ -->
         <v-no-data></v-no-data>
              <!-- ------------------ -->
            </div>
          </div>
          <!--  -->
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Documents.ts"></script>
