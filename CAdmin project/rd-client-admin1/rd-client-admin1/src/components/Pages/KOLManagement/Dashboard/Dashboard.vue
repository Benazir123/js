<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired pr-6">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <!-- <v-breadcrumb>
              <template #mainmenu>Dashboard </template>
              <template #currentmenu>Engagement Dashboard</template>
            </v-breadcrumb> -->
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Dashboard"></v-breadcrumb>
            <v-title menu="Engagement Dashboard"></v-title>
          </div>
          <div class="flex relative items-center dashright z-50">
            <!-- filter starts -->
            <div
              class="
                bg-bigfil
                cursor-pointer
                flex
                rounded-radius4
                px-4
                py-3
                items-center
                shadow-filtershadow
                mr-4
              "
              @click="showfilter"
            >
              <img src="@/assets/filter.svg" class="w-4 mr-2" />
              <span class="mr-2 text-greytxt text-fs13">Filters</span>
              <span
                class="
                  bg-blue
                  w-5
                  h-5
                  rounded-radius100
                  text-white
                  flex
                  justify-center
                  items-center
                  text-fs11
                "
                >2</span
              >
            </div>
            <!-- filter ends -->

            <!-- datepicker starts -->
            <v-date-picker></v-date-picker>
            <!-- datepicker ends -->

            <component
              :is="'v-filter'"
              v-if="hidefilter"
              :key="filterKey"
              :eng-filter="engFilter"
              @apply-filter="applyFilter($event)"
            ></component>
          </div>
        </div>
        <!--  -->
        <!-- Speaker Engagement Status Tracker Start @click="dashtable"-->
        <v-card-box>
          <div class="min-h-300px">
            <div class="flex items-center justify-between">
              <v-title class="cursor-pointer" menu="Speaker Engagement Status Tracker" @click="dashtable"></v-title>
              <div
                class="
                  bg-smfil
                  cursor-pointer
                  inline-flex
                  rounded-radius7
                  px-2
                  py-2
                  items-center
                  shadow-filtershadow
                "
              >
                <img src="@/assets/filter.svg" class="w-4" />
              </div>
            </div>
            <apexchart type="pie" width="450" :options="spkengChart" :series="series"></apexchart>
          </div>
        </v-card-box>
        <!-- Speaker Engagement Status Tracker end -->
        <!-- Engagement by Region and Quarter - Filter by Engagement Topics -->
        <v-card-box>
          <div class="min-h-300px">
            <div class="flex items-center justify-between">
              <v-title
                class="cursor-pointer"
                menu="Engagement by Region and Quarter - Filter by Engagement Topics"
              ></v-title>
              <div class="flex items-center">
                <v-select>
                  <option>Q1</option>
                  <option>Q2</option>
                  <option selected="selected">Q3</option>
                  <option>Q4</option>
                  <option>Q4</option>
                </v-select>
                <div
                  class="
                    bg-smfil
                    cursor-pointer
                    inline-flex
                    rounded-radius7
                    px-2
                    py-2
                    items-center
                    shadow-filtershadow
                    ml-8
                  "
                >
                  <img src="@/assets/filter.svg" class="w-4" />
                </div>
              </div>
            </div>
            <apexchart
              type="bar"
              height="350"
              :options="chartOptionsregionquarterkol"
              :series="seriesregionquarterkol"
            ></apexchart>
          </div>
        </v-card-box>
        <!-- Engagement by Region and Quarter - Filter by Engagement Topics -->
        <!-- Engagements - No of Engagements by Engagement Status -->
        <v-card-box>
          <div class="min-h-300px">
            <div class="flex items-center justify-between">
              <v-title class="cursor-pointer" menu="Engagements - No of Engagements by Engagement Status"></v-title>
              <div
                class="
                  bg-smfil
                  cursor-pointer
                  inline-flex
                  rounded-radius7
                  px-2
                  py-2
                  items-center
                  shadow-filtershadow
                "
              >
                <img src="@/assets/filter.svg" class="w-4" />
              </div>
            </div>
            <apexchart
              type="donut"
              width="500"
              :options="chartOptionsEngagementStatusKol"
              :series="seriesEngagementStatuskol"
            ></apexchart>
          </div>
        </v-card-box>
        <!-- Engagements - No of Engagements by Engagement Status -->

        <!-- Financial Report - Overall Spending Per Region and Quater -->
        <v-card-box>
          <div class="min-h-300px">
            <div class="flex items-center justify-between">
              <v-title class="cursor-pointer" menu="Financial Report - Overall Spending Per Region and Quater"></v-title>
              <div class="flex items-center">
                <v-select>
                  <option>Q1</option>
                  <option>Q2</option>
                  <option selected="selected">Q3</option>
                  <option>Q4</option>
                  <option>Q4</option>
                </v-select>
                <div
                  class="
                    bg-smfil
                    cursor-pointer
                    inline-flex
                    rounded-radius7
                    px-2
                    py-2
                    items-center
                    shadow-filtershadow
                    ml-8
                  "
                >
                  <img src="@/assets/filter.svg" class="w-4" />
                </div>
              </div>
            </div>
            <apexchart
              type="bar"
              height="350"
              :options="chartOptionsFinancialReportkol"
              :series="seriesFinancialReportkol"
            ></apexchart>
          </div>
        </v-card-box>
        <!-- Financial Report - Overall Spending Per Region and Quater -->
        <!-- Program By Region compared to lead and average -->
        <v-card-box>
          <div class="min-h-300px">
            <div class="flex items-center justify-between">
              <v-title class="cursor-pointer" menu="Program By Region compared to lead and average"></v-title>
              <div class="flex items-center">
                <v-select>
                  <option>Q1</option>
                  <option>Q2</option>
                  <option selected="selected">Q3</option>
                  <option>Q4</option>
                  <option>Q4</option>
                </v-select>
                <div
                  class="
                    bg-smfil
                    cursor-pointer
                    inline-flex
                    rounded-radius7
                    px-2
                    py-2
                    items-center
                    shadow-filtershadow
                    ml-8
                  "
                >
                  <img src="@/assets/filter.svg" class="w-4" />
                </div>
              </div>
            </div>
            <apexchart
              type="bar"
              height="350"
              :options="chartOptionsProgramByRegionkol"
              :series="seriesProgramByRegionkol"
            ></apexchart>
          </div>
        </v-card-box>
        <!-- Program By Region compared to lead and average -->

        <!-- Total Attendess by Professional Type -->
        <v-card-box>
          <div class="min-h-300px">
            <div class="flex items-center justify-between">
              <v-title class="cursor-pointer" menu="Total Attendess by Professional Type"></v-title>
              <div class="flex items-center">
                <v-select>
                  <option>Q1</option>
                  <option>Q2</option>
                  <option selected="selected">Q3</option>
                  <option>Q4</option>
                  <option>Q4</option>
                </v-select>
                <div
                  class="
                    bg-smfil
                    cursor-pointer
                    inline-flex
                    rounded-radius7
                    px-2
                    py-2
                    items-center
                    shadow-filtershadow
                    ml-8
                  "
                >
                  <img src="@/assets/filter.svg" class="w-4" />
                </div>
              </div>
            </div>
            <apexchart
              type="pie"
              width="450"
              :options="chartOptionsTotalAttendessKol"
              :series="seriesTotalAttendessKol"
            ></apexchart>
          </div>
        </v-card-box>
        <!-- Total Attendess by Professional Type -->
        <!--  -->
      </div>
      <ca-right-menu></ca-right-menu>
    </div>
  </div>

  <!-- <button type="submit" @click="logout" >Log Out</button> -->
</template>
<script lang="ts" src="./Dashboard.ts"></script>
