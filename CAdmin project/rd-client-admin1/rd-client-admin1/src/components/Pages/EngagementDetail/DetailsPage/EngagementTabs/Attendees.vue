<template>
  <v-card-box class="w-3/12 py-5 px-6 relative">
    <h5 v-if="attendeeData.header_title" class="text-fs18 font-w-bold text-secgrey mb-3">
      {{ attendeeData.header_title }}
    </h5>
    <div v-if="attendeeData && attendeeData.user && attendeeData.user.length != 0">
      <div v-for="attendeedata in attendeeData.user.slice(0, 4)" :key="attendeedata" class="flex flex-row items-center py-2">
        <v-profile
          :key="imgError"
          :small-profile="true"
          :user-info="{
            letter_name: attendeedata.short_name,
            full_name: attendeedata.full_name,
            degree: attendeedata.degree,
            img: attendeedata.photo,
            errorImg: attendeedata.photo ? attendeedata.photo : false,
            id: attendeedata.id ? attendeedata.id : '',
          }"
          class="my-4"
          @errorImg="errorImg(attendeedata)"
        >
          <div class="flex-col flex">
            <h4 v-if="attendeedata.full_name" class="text-fs14 text-greytxt font-bold mb-1">
              {{ attendeedata.full_name }}
            </h4>
            <p v-if="attendeedata.degree" class="text-darkgrey text-fs12">
              {{ attendeedata.degree }}
            </p>
          </div>
        </v-profile>
      </div>
    </div>

    <div
      v-if="attendeeData && attendeeData.user && attendeeData.user.length != 0"
      class="
      flex flex-row
      justify-end
      text-textblue text-fs13
      font-semibold
      cursor-pointer
    "
    >
      <a @click="gotoHcpTab()">View all</a>
      <img src="@/assets/rightbluearrow.svg" class="ml-2" />
    </div>
    <div
      v-if="attendeeData && attendeeData.user && attendeeData.user.length == 0"
      class="
      flex
      absolute
      inset-0
      items-center
      justify-center
      text-red-500
      font-semibold
      text-fs14
    "
    >
      <p>No Attendees Found</p>
    </div>
  </v-card-box>
</template>
<script lang="ts" src="./Attendees.ts"></script>
