<template>
  <div class="relative">
    <v-card-inner-box title="Institution Practice" :titleicon="require('@/assets/reports/multiuser.svg')">
      <div class="w-full">
        <!-- FISRT ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5 border-b-2 border-opacity-70 pb-4">
          <!-- FIRST -->
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Name<br />
              <span class="text-maptooltipcon font-normal">Health Ledger<Link:css></Link:css></span>
            </p>
          </div>
        </div>
        <!-- FISRT ROW ENDS HERE -->

        <!-- SECOND ROW STARTS HERE -->
        <div class="grid grid-cols-2 gap-7 mb-5">
          <!-- FIRST -->
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Address 1<br />
              <span class="text-maptooltipcon font-normal">289 Pleasant St Ste 501<br />FL,2721</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Address 2<br />
              <span class="text-maptooltipcon font-normal">289 Pleasant St Ste 501<br />FL,2721</span>
            </p>
          </div>
          <!-- SECOND -->
        </div>
        <!-- SECOND ROW ENDS HERE -->
      </div>
    </v-card-inner-box>
  </div>
</template>
