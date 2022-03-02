<template>
  <div class="relative">
    <v-card-inner-box title="Contact Information" :titleicon="require('@/assets/reports/callphone.svg')">
      <div class="w-full">
        <!-- FISRT ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5 border-b-2 border-opacity-70 pb-4">
          <!-- FIRST -->
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Primary Phone<br />
              <span class="text-maptooltipcon font-normal">6103248623</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Mobile<br />
              <span class="text-additionalinfo font-normal">240-252-9630</span>
            </p>
          </div>

          <!-- THIRD -->
        </div>
        <!-- FISRT ROW ENDS HERE -->

        <!-- SECOND ROW STARTS HERE -->
        <div class="grid grid-cols-3 gap-4 mb-5">
          <!-- FIRST -->

          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Primary Email<br />
              <span class="text-maptooltipcon font-normal">heather@v3devmail.com</span>
            </p>
          </div>
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Alternate Email<br />
              <span class="text-maptooltipcon font-normal">----</span>
            </p>
          </div>

          <!-- SECOND -->
        </div>
        <!-- SECOND ROW ENDS HERE -->
      </div>
    </v-card-inner-box>
  </div>
</template>
