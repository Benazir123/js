<template>
  <div class="flex bg-lite-blue-bg viewspk">
    <div class="flex w-full h-full justify-between">
      <div class="w-full">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Users"></v-breadcrumb>
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
              mb-1
            "
          >
            <v-title menu="Speaker Details" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="consultant"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright">
              <div class="flex items-center justify-between border-b border-searchbox pb-4">
                <v-title
                  menu="Profile & Other Information"
                  class="-mb-0 text-maptooltipcon font-semibold tracking-tight"
                ></v-title>
                <!-- datepicker starts -->
                <div class="mt-2">
                  <v-date-picker></v-date-picker>
                </div>
                <!-- datepicker ends -->
              </div>
              <div class="flex items-center mb-5 mt-4">
                <component
                  :is="'v-profile'"
                  :small-profile="false"
                  :side-menu="true"
                  :user-info="{
                    letter_name: 'DD',
                    full_name: '',
                    img: '',
                  }"
                ></component>
                <div class=" ml-12">
                  <h5 class="font-semibold text-secgrey text-fs18 mb-1 flex item-center">
                    Heath Ledger
                  </h5>
                  <p class="text-maptooltipcon text-fs14  mb-1">APRN</p>
                  <p class=" text-fs14 text-secgrey">Client ID: 11095</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <institution-info></institution-info>
                </div>
                <div class="border-l border-opacity-70 pl-5">
                  <linked-engagements></linked-engagements>
                </div>
                <div class="border-l border-opacity-70 pl-5">
                  <radius-profile></radius-profile>
                </div>
              </div>
              <!-- DETAIL INFO START HERE -->
              <div class="grid grid-cols-2 gap-6 mb-5">
                <institutionpractice-info></institutionpractice-info>
                <travel-preference></travel-preference>
              </div>
              <div class="grid grid-cols-2 gap-6 mb-5">
                <add-info></add-info>
              </div>
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./UserProfile.ts"></script>
