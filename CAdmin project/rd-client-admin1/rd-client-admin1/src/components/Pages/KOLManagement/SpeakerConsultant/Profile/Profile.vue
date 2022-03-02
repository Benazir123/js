<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb
              breadcrumb="KOL Management"
              subbreadcrumb="Speaker Consultant"
              speakerbreadcrumb="Abbas Jonathan"
            ></v-breadcrumb>
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
            <v-title menu="Speaker / Consultant" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="consultant"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between">
            <ca-left-menu></ca-left-menu>
            <div class="w-spright">
              <v-title menu="Profile" class="-mb-0 text-greytxt font-semibold tracking-tight"></v-title>
              <div class="bg-utilihr w-54px h-2px block mt-3"></div>

              <div class="flex mb-5 mt-12">
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
                <div class="mt-2 ml-12	">
                  <h5 class="font-semibold text-secgrey text-fs18 mb-1 flex item-center">
                    Abbas Jonathan
                    <img src="@/assets/profile-edit.svg" class="ml-2 cursor-pointer	" />
                  </h5>

                  <p class="text-greytxt text-fs14  mb-1">
                    Director, Acute Leukemia and Blood Cancer Program
                  </p>
                  <p class="text-specili text-fs14">Hematology / Oncology</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <institution-info></institution-info>
                </div>
                <div class="border-l	border-opacity-70	pl-5	">
                  <linked-engagements></linked-engagements>
                </div>
                <div class="border-l	border-opacity-70	pl-5	">
                  <radius-profile></radius-profile>
                </div>
              </div>
              <!-- DETAIL INFO START HERE -->
              <div class="grid grid-cols-2 gap-6 mb-5">
                <assitant-info></assitant-info>
                <travel-preference></travel-preference>
              </div>
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Profile.ts"></script>
