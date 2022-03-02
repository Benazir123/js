<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="w-8/12 mr-5">
        <v-card-box class="h-full">
           <apexchart type="line" height="350" :options="chartOptionsWave" :series="seriesWave"></apexchart>
        </v-card-box>
      </div>
      <div class="w-4/12">
      <v-card-box class="h-full">
        <apexchart
          type="donut"
          width="450"
          :options="chartOptionsEngagementStatus"
          :series="seriesEngagementStatus"
        ></apexchart>
      </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./BudgetChart.ts"></script>
