<template>
  <v-card-box class="py-5 px-6 mr-5  h-full">
    <h5 class="text-fs18 font-w-bold text-secgrey mb-3">
      {{ budgetSumaryData.header_title }}
    </h5>
    <div
      class="
        bg-darkpink
        rounded-radius40
        font-bold
        p-4
        text-fs14
        flex
        justify-between
        filter
        drop-shadow-5xl
      "
    >
      <div v-if="budgetSumaryData.budget" class="flex flex-col">
        <p class="text-white whitespace-nowrap">Total Engagement Cost</p>
        <span class="text-fs34 text-white whitespace-nowrap">{{
          dollorFormat(budgetSumaryData.budget.Total_Estimated_Cost)
        }}</span>
      </div>
      <div class="flex items-end mb-2">
        <!-- <line-chart
          :data="{
            '2021-05-13': 3,
            '2021-05-14': 1,
            '2021-05-15': 6,
            '2021-05-16': 2,
            '2021-05-17': 5,
          }"
          :donut="false"
          :colors="['#fff']"
          :dataset="{ borderWidth: 2 }"
          width="129%"
          height="147%"
          style="margin-left: -19px; margin-bottom: -20px"
        ></line-chart> -->
        <img src="@/assets/budgetgraph.svg" />
      </div>
      <!-- <img src="@/assets/budgetgraph.svg"/> -->
    </div>

    <ul class="mt-3 text-greytxt text-fs14">
      <li class="flex justify-between items-center py-2">
        <p class="flex items-center">
          <img src="@/assets/estimatedcost.svg" class="bg-pink p-2 mr-2 rounded-radius100" />Total Estimated Cost
        </p>
        <span class="font-semibold text-base">{{ dollorFormat(budgetSumaryData.budget.Total_Estimated_Cost) }}</span>
      </li>
      <li class="flex justify-between items-center py-3">
        <p class="flex items-center">
          <img src="@/assets/plannedcost.svg" class="bg-lightgreen p-2 mr-2 rounded-radius100" />Total Auctal Cost
        </p>
        <span class="font-semibold text-base">{{ dollorFormat(budgetSumaryData.budget.Total_Auctal_Cost) }}</span>
      </li>
      <li class="flex justify-between items-center py-2">
        <p class="flex items-center">
          <img src="@/assets/actualcost.svg" class="bg-skyblue p-2 mr-2 rounded-radius100" />Total Planned Cost
        </p>
        <span class="font-semibold text-base">{{ dollorFormat(budgetSumaryData.budget.Total_Planned_Cost) }}</span>
      </li>
    </ul>
  </v-card-box>
</template>
<script lang="ts" src="./BudgetSummary.ts"></script>
