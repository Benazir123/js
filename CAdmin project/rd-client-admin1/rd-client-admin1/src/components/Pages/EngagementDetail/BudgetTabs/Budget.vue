<template>
  <v-card-box>
    <v-title class="cursor-pointer" menu="Budget Summary"></v-title>
    <p class="mb-5">
      Total Engagement Cost:
      <span class="text-greytxt font-bold">{{ dollorFormat(totalBudget) }}</span>
    </p>
    <div v-if="budget.length != 0" class="table-responsive englistdata">
      <VTable class="w-full" :data="budget" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="type">Type</VTh>
            <VTh sort-key="estimated">Estimated</VTh>
            <VTh sort-key="planned">Planned</VTh>
            <VTh sort-key="spend">Actual Spend</VTh>
            <VTh sort-key="varianceestimated">Variance to Estimated</VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>{{ bindData(row.expense_type_name) }}</td>
            <td>{{ dollorFormat(row.estimated_cost) }}</td>
            <td>{{ dollorFormat(row.planned_cost) }}</td>
            <td>{{ dollorFormat(row.actual_spend) }}</td>
            <td>{{ dollorFormat(row.variance_to_estimated) }}</td>
          </tr>
        </template>
      </VTable>
    </div>
    <v-pagination
      v-if="budget && budget.length != 0"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        listBudget(currentPage);
      "
    />
    <v-no-data v-if="budget.length == 0 && !loader"></v-no-data>
    <!-- Loader Component -->
    <v-eng-loader v-if="loader"></v-eng-loader>
  </v-card-box>
</template>
<script lang="ts" src="./Budget.ts"></script>
