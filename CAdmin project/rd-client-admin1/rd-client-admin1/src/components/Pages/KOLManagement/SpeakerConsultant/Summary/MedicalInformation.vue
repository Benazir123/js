<template>
  <div class="relative">
    <img src="@/assets/profile-edit.svg" class="cursor-pointer absolute right-4 top-3" />
    <v-card-inner-box title="Medical Information" :titleicon="require('@/assets/medical-information.svg')">
      <div class="w-full">
        <!-- FISRT ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              NPI #<br />
              <span class="text-additionalinfo font-normal">1316145253</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              DEA #<br />
              <span class="text-additionalinfo font-normal">1342</span>
            </p>
          </div>
        </div>
        <!-- FISRT ROW ENDS HERE -->

        <!-- SECOND ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              State License #<br />
              <span class="text-additionalinfo font-normal">56894</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-greytxt font-semibold text-fs13 leading-loose	">
              License Expiry Date<br />
              <span class="text-additionalinfo font-normal">Nov 18. 2018</span>
            </p>
          </div>
          <!-- SECOND -->
        </div>
        <!-- SECOND ROW ENDS HERE -->
      </div>
    </v-card-inner-box>
  </div>
</template>
