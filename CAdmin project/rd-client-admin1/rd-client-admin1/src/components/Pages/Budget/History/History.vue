<template>
  <div>
    <v-breadcrumb breadcrumb="Dashboard " subbreadcrumb="Budget"></v-breadcrumb>
    <v-title menu="Budget"></v-title>
    <div class="rounded-radius8 border border-innerbox shadow-innerbox mb-4">
      <div class="text-greytxt bg-innerboxtitlebg px-4 py-2 rounded-t-radius8 flex items-center">
        <h3 class="text-greytxt bg-innerboxtitlebg font-bold font-fs16">History</h3>
      </div>
      <div class="p-4 bg-white">
        <div class="flex items-center mb-2">
          <v-title menu="Company" class="mb-0"></v-title>
          <span class="text-ffstext bg-greenscomp p-2 px-3 ml-3 rounded-full">Ortho Dermatologics</span>
        </div>
        <div class="flex relative items-center justify-between mb-3">
          <div class="flex items-center">
            <div class="w-150px flex items-center mr-3">
              <v-label value="YEAR" class="mr-2" />
              <v-select><option>2021</option></v-select>
            </div>
            <div class="w-200px flex items-center">
              <v-label value="QUARTER" class="mr-2" />
              <v-select><option>2021</option></v-select>
            </div>
          </div>
          <div class="flex items-center justify-end">
            <div class="mr-3">
              <v-input-search
                v-model="searchByText"
                input-type="text"
                label="Search..."
                name="meetingsearch"
                paddingy="py-2"
              ></v-input-search>
            </div>
            <!-- filter starts -->
            <div class="bg-btnbudget cursor-pointer flex rounded-radius4 px-3 py-3 items-center shadow-filtershadow mr-4">
              <img src="@/assets/budget/budgetfilter.svg" class="w-4 mr-2" />
              <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
            </div>

            <!-- filter starts -->
            <!-- export starts -->
            <div
              class="bg-btnbudget cursor-pointer flex rounded-radius4 px-3 py-3 items-center shadow-filtershadow mr-4"
              @click="historyPage"
            >
              <img src="@/assets/budget/budgetfilter.svg" class="w-4 mr-2" />
              <span class="ml-1 mr-2 text-greytxt text-fs13">History</span>
            </div>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div class="table-responsive eng-det contenttable">
          <VTable :data="historybudget" class="w-full" :filters="filters" :hide-sort-icons="true">
            <template #head>
              <tr>
                <VTh sort-key="name">DATE </VTh>
                <VTh sort-key="owner">FROM</VTh>
                <VTh sort-key="Speaker">ACTION</VTh>
                <VTh sort-key="confirmed">TO </VTh>
                <VTh sort-key="Speaker">AMOUNT</VTh>
                <VTh sort-key="confirmed">USER </VTh>
              </tr>
            </template>
            <template #body="{ rows }">
              <tr v-for="row in rows" :key="row.id">
                <td class="">
                  {{ row.date }}
                </td>
                <td class="white-space-nowrap">
                  {{ row.from }}
                </td>
                <td class="">{{ row.action }}</td>
                <td  class="">
                  {{ row.to }}
                </td>
                <td class="">{{ row.amount }}</td>
                <td class="">
                  {{ row.user }}
                </td>
              </tr>
            </template>
          </VTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./History.ts"></script>
