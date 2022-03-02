<template>
  <div class="relative">
    <v-card-inner-box title="Additional Information" :titleicon="require('@/assets/reports/information.svg')">
      <div class="w-full">
        <!-- FISRT ROW STARTS HERE -->
        <div class="grid grid-cols-2 gap-7 mb-5 border-b-2  border-opacity-70  pb-4">
          <!-- FIRST -->
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              State of License<br />
              <span class="text-maptooltipcon font-normal">FL</span>
            </p>
          </div>
          <!-- SECOND -->
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              NPI<br />
              <span class="text-maptooltipcon font-normal">1174741974</span>
            </p>
          </div>

          <!-- THIRD -->
        </div>
        <!-- FISRT ROW ENDS HERE -->

        <!-- SECOND ROW STARTS HERE -->
        <div class="grid grid-cols-2 gap-7 mb-5">
          <!-- FIRST -->

          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Decile<br />
              <span class="text-maptooltipcon font-normal">----</span>
            </p>
          </div>
          <div>
            <p class="text-maptooltipcon font-semibold text-fs13 leading-loose">
              Institution Restrictions<br />
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
