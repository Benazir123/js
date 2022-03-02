<template>
  <div class="relative">
    <img src="@/assets/profile-edit.svg" class="cursor-pointer absolute right-4 top-3" />
    <v-card-inner-box title="Assistant Info" :titleicon="require('@/assets/radiusprofile.svg')">
      <div class="w-full">
        <!-- FISRT ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              Assistant Name<br />
              <span class="text-additionalinfo font-normal">Rodney Sanders</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              Assistant Phone #<br />
              <span class="text-additionalinfo font-normal">(673) 367-8492</span>
            </p>
          </div>

          <!-- THIRD -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              Assistant Email<br />
              <span class="text-additionalinfo font-normal">rsanders@gmail.com</span>
            </p>
          </div>
        </div>
        <!-- FISRT ROW ENDS HERE -->

        <!-- SECOND ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              Assistant Username<br />
              <span class="text-additionalinfo font-normal">rsanders</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              Assistant Password<br />
              <span class="text-additionalinfo font-normal">Sanders@123</span>
            </p>
          </div>
          <!-- SECOND -->
        </div>
        <!-- SECOND ROW ENDS HERE -->

        <!-- THIRD ROW STARTS HERE -->
        <div class="grid grid-cols-1 gap-4 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              Will assistant access speaker engagements<br />
              <span class="text-additionalinfo font-normal">Nov 18. 2018</span>
            </p>
          </div>
        </div>
        <!-- THIRD ROW ENDS HERE -->
      </div>
    </v-card-inner-box>
  </div>
</template>
