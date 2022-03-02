<template>
  <v-card-box>
    <div class="px-3 mb-5">
      <h3 class="text-fs20 text-greytxt text-left font-medium mb-2">
        Engagement Type
      </h3>
      <ul class="mt-4 text-greytxt grid grid-cols-4 gap-6 ">
        <li class="flex justify-between items-center pb-3  text-fs13 border-b border-rightmenuborder ">
          <p class="flex items-center ">
            <img src="@/assets/menu-right2.svg" class="bg-pink p-2 mr-3 rounded-radius10" />Virtual-In Office
          </p>
          <span class="font-semibold text-base">171</span>
        </li>
        <li class="flex justify-between items-center pb-3  text-fs13 border-b border-rightmenuborder">
          <p class="flex items-center">
            <img src="@/assets/menu-right1.svg" class="bg-skyblue p-2 mr-3 rounded-radius10" />Live out of Office
          </p>
          <span class="font-semibold text-base">214</span>
        </li>
        <li class="flex justify-between items-center pb-3  text-fs13 border-b border-rightmenuborder">
          <p class="flex items-center">
            <img src="@/assets/menu-right3.svg" class="bg-lightgreen p-2 mr-3 rounded-radius10" />Live In-Office
          </p>
          <span class="font-semibold text-base">541</span>
        </li>
        <li class="flex justify-between items-center pb-3  text-fs13 border-b border-rightmenuborder">
          <p class="flex items-center">
            <img src="@/assets/menu-right4.svg" class="bg-lightorange p-2 mr-3 rounded-radius10" />Virtual All Remote
          </p>
          <span class="font-semibold text-base">435</span>
        </li>
        <li class="flex justify-between items-center pb-3  text-fs13 border-b border-rightmenuborder">
          <p class="flex items-center">
            <img src="@/assets/menu-right5.svg" class="bg-lightblue p-2 mr-3 rounded-radius10" />Virtual Out of Office
          </p>
          <span class="font-semibold text-base">249</span>
        </li>
      </ul>
      <!-- <div class="flex justify-between items-center pb-3  text-fs13 border-t border-rightmenuborder">
      <p class="flex items-center">
        <img src="@/assets/dashboard/total-engagements.svg" class="bg-lightgreen p-2 mr-3 rounded-radius10"/>Total Engagements
      </p>
      <span class="font-semibold text-base">3220</span>
    </div> -->
    </div>
  </v-card-box>
</template>

<script lang="ts" src="./CARightMenu.ts"></script>
