<template>
  <div class="relative">
    <img src="@/assets/profile-edit.svg" class="cursor-pointer absolute right-4 top-3" />
    <v-card-inner-box title="Travel Preferences" :titleicon="require('@/assets/travelpreference.svg')">
      <div class="w-full">
        <!-- FISRT ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose">
              Airline Preference<br />
              <span class="text-additionalinfo font-normal">United</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose">
              Frequent Flyer Number<br />
              <span class="text-additionalinfo font-normal">UA-85680927</span>
            </p>
          </div>

          <!-- THIRD -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose">
              Airline Class Preferences<br />
              <span class="text-additionalinfo font-normal">Business</span>
            </p>
          </div>
        </div>
        <!-- FISRT ROW ENDS HERE -->

        <!-- SECOND ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5">
          <!-- FIRST -->

          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose">
              Seat Preference<br />
              <span class="text-additionalinfo font-normal">Window</span>
            </p>
          </div>
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose">
              Meal Requests<br />
              <span class="text-additionalinfo font-normal">Gluten Free</span>
            </p>
          </div>

          <!-- SECOND -->
          <!-- THIRD -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose">
              Car Rental Preferences<br />
              <span class="text-additionalinfo font-normal">Mid-size</span>
            </p>
          </div>
          <!-- THIRD -->
        </div>
        <!-- SECOND ROW ENDS HERE -->

        <!-- THIRD ROW STARTS HERE -->
        <div class="grid grid-cols-1 gap-4 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose">
              Allergies & Important Information<br />
              <span class="text-additionalinfo font-normal">Lactose Intolerance</span>
            </p>
          </div>
        </div>
        <!-- THIRD ROW ENDS HERE -->
      </div>
    </v-card-inner-box>
  </div>
</template>
