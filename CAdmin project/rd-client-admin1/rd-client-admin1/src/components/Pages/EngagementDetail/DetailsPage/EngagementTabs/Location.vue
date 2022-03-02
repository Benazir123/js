<template>
  <v-card-box class="mr-5  h-full">
    <div class="flex justify-between items-center mb-3">
      <h5 v-if="meetingVenue.header_title" class="text-fs18 font-bold text-darkred">
        {{ meetingVenue.header_title }}
      </h5>
      <a class="cursor-pointer text-liteblue text-fs13 font-normal" @click="gotoLocationTab()">Change</a>
    </div>
    <div v-if="locationArray.length != 0" class="detaillocation scroller max-h-80">
      <vue-collapsible-panel-group accordion>
        <vue-collapsible-panel v-for="(location, index) in locationArray" :key="index" :expanded="index == 0">
          <template #title>
            <label class="flex items-start cursor-pointer">
              <img src="@/assets/location.svg" class="w-5 mr-3" />
              <p class="text-darkgrey text-fs11">{{ location.name }}</p>
            </label>
          </template>
          <template #content>
            <!-- Two start -->
            <div class="ml-10 mr-10">
              <p class="text-darkgrey text-fs11 leading-5">
                {{ location.address }}
                <span v-if="location.city != ''">,</span> {{ location.city }} <span v-if="location.state != ''">,</span>
                {{ location.state }} <span v-if="location.phone != ''">.</span> {{ location.phone }}
              </p>
              <div class="text-darkgrey font-semibold font-normal text-fs13 my-3">
                Status:
                <v-smallbutton class="bg-pink text-darkgrey font-semibold py-2 px-3 rounded-radius6 cursor-default ml-3">{{
                  location.status
                }}</v-smallbutton>
              </div>
            </div>
            <!-- Two end -->
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
    <div
      v-if="locationArray.length == 0"
      class="
      flex min-h-300px
      items-center
      justify-center
    "
    >
      <p
        class="
      text-red-500
      font-semibold
      text-fs14"
      >
        No Data Found
      </p>
    </div>
  </v-card-box>
</template>
<script lang="ts" src="./Location.ts"></script>
