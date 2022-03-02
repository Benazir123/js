<template>
  <div class="dashboardselect">
    <div class="flex bg-lite-blue-bg">
      <div class="flex w-full h-full justify-between">
        <div class="w-full text-semired">
          <!-- HEADER START -->
          <div class="flex justify-between">
            <div>
              <!-- <v-breadcrumb>
              <template #mainmenu>Dashboard </template>
              <template #currentmenu>Engagement Dashboard</template>
            </v-breadcrumb> -->
              <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Engagement Dashboard"></v-breadcrumb>
              <v-title menu="Engagement Dashboard"></v-title>
            </div>

            <div class="flex relative items-center dashright z-50">
              <div class="w-64 searchinput">
                <v-input-search
                  v-model="searchById"
                  input-type="text"
                  label="Search by Name"
                  class="search"
                  name="meetingsearch"
                ></v-input-search>
              </div>
              <div class="relative">
                <v-smallbutton
                  class="
                    bg-blue
                    flex
                    rounded-radius4
                    px-4
                    py-3
                    text-white
                    items-center
                    mx-3
                    tracking-normal
                  "
                  @click="show = !show"
                  ><img src="@/assets/graphdashboard.svg" class="mr-2" /> Graph Default</v-smallbutton
                >
                <!-- graph show -->
                <div v-if="show">
                  <div
                    class="
                    absolute
                    top-full
                    mt-4
                    bg-white
                    z-30
                    rounded-radius10
                    shadow-filtershadow
                    w-800
                    right-0
                  "
                  >
                    <div class="py-2">
                      <div
                        class="
                        border-b border-filtertitle border-opacity-25
                        py-2
                        px-4
                      "
                      >
                        <div class="w-64 searchinput">
                          <v-input-search
                            v-model="searchById"
                            input-type="text"
                            label="Search by Name"
                            class="search"
                            name="meetingsearch"
                          ></v-input-search>
                        </div>
                      </div>
                      <div class="scroller h-300">
                        <ul class="mt-4 px-4 text-greytxt grid grid-cols-2 gap-4">
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/pie1.svg" class="p-2 mr-3 " />Speaker Engagement Status Tracker
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar1.svg" class=" p-2 mr-3 " />Engagement by region and quarter
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar2.svg" class=" p-2 mr-3" />Engagement by region and quarter
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/pie2.svg" class=" p-2 mr-3 " />Speaker Engagement Status Tracker
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar3.svg" class=" p-2 mr-3 " />Financial Report - Overall Spending
                              per region and quarter
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar2.svg" class=" p-2 mr-3" />Engagement by region and quarter and
                              quarter
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar2.svg" class=" p-2 mr-3 " />Engagement by region and quarter
                              and quarter
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar2.svg" class=" p-2 mr-3 " />Financial Report - Overall Spending
                              per region and quarter
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar2.svg" class=" p-2 mr-3 " />Speaker Engagement Status Tracker
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                          <li
                            class="
                          flex
                          justify-between
                          items-center
                          pb-3
                          text-fs13
                          border-b border-rightmenuborder
                        "
                          >
                            <p class="flex items-center  w-5/6">
                              <img src="@/assets/dashboard/bar2.svg" class=" p-2 mr-3 " />Financial Report - Overall Spending
                              per region and quarter
                            </p>
                            <v-checkbox></v-checkbox>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="p-4 px-2 text-fs18 block flex justify-end">
                      <v-smallbutton
                        class="
                        bg-clrbtn
                        flex
                        rounded-radius6
                        text-clrtxt
                        px-8
                        py-2
                        mr-2
                        text-fs14
                        items-center
                        mr-4
                        tracking-normal
                      "
                        >Clear</v-smallbutton
                      >
                      <v-smallbutton
                        class="
                        bg-blue
                        flex
                        rounded-radius6
                        px-8
                        py-2
                        text-fs14 text-white
                        items-center
                        mr-7
                        tracking-normal
                      "
                        >Set as Default</v-smallbutton
                      >
                    </div>
                  </div>
                </div>
                <!-- graph show -->
              </div>
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
                  v-if="filterCount && filterCount.length != 0"
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
                  >{{ filterCount && filterCount.length }}</span
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
          <!-- HEADER END -->
          <ca-right-menu></ca-right-menu>

          <!-- Speaker Engagement Status Tracker Start @click="dashtable"-->
          <v-card-box>
            <div class="grid grid-cols-2 gap-10">
              <div class="min-h-300px">
                <div class="flex items-center justify-between">
                  <v-title
                    class="cursor-pointer titledash w-5/6"
                    menu="Speaker Engagement Status Tracker"
                    @click="dashtable"
                  ></v-title>
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
                <apexchart type="pie" width="450" :options="chartOptions" :series="series"></apexchart>
              </div>
              <div class="min-h-300px">
                <div class="flex items-start justify-between">
                  <v-title
                    class="cursor-pointer titledash w-5/6"
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
                        ml-3
                      "
                    >
                      <img src="@/assets/filter.svg" class="w-4" />
                    </div>
                  </div>
                </div>
                <apexchart
                  type="bar"
                  height="350"
                  :options="chartOptionsregionquarter"
                  :series="seriesregionquarter"
                ></apexchart>
              </div>
            </div>
          </v-card-box>
          <!-- Speaker Engagement Status Tracker end -->

          <!-- Engagement by Region and Quarter - Filter by Engagement Topics -->

          <!-- Engagement by Region and Quarter - Filter by Engagement Topics -->
          <!-- Financial Report - Overall Spending Per Region and Quater -->
          <v-card-box>
            <div class="min-h-300px">
              <div class="flex items-start justify-between">
                <v-title
                  class="cursor-pointer titledash w-5/6"
                  menu="Financial Report - Overall Spending Per Region and Quater"
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
                      ml-3
                    "
                  >
                    <img src="@/assets/filter.svg" class="w-4" />
                  </div>
                </div>
              </div>
              <apexchart
                type="bar"
                height="350"
                :options="chartOptionsFinancialReport"
                :series="seriesFinancialReport"
              ></apexchart>
            </div>
          </v-card-box>
          <!-- Financial Report - Overall Spending Per Region and Quater -->
          <!-- Engagements - No of Engagements by Engagement Status -->
          <v-card-box>
            <div class="grid grid-cols-2 gap-10">
              <div class="min-h-300px">
                <div class="flex items-start justify-between">
                  <v-title
                    class="cursor-pointer titledash w-5/6"
                    menu="Engagements - No of Engagements by Engagement Status"
                  ></v-title>
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
                  :options="chartOptionsEngagementStatus"
                  :series="seriesEngagementStatus"
                ></apexchart>
              </div>
              <div class="min-h-300px">
                <div class="flex items-start justify-between">
                  <v-title class="cursor-pointer titledash w-5/6" menu="Total Attendess by Professional Type"></v-title>
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
                        ml-3
                      "
                    >
                      <img src="@/assets/filter.svg" class="w-4" />
                    </div>
                  </div>
                </div>
                <apexchart
                  type="pie"
                  width="450"
                  :options="chartOptionsTotalAttendess"
                  :series="seriesTotalAttendess"
                ></apexchart>
              </div>
            </div>
          </v-card-box>
          <!-- Engagements - No of Engagements by Engagement Status -->

          <!-- Program By Region compared to lead and average -->
          <v-card-box>
            <div class="grid grid-cols-2 gap-10">
              <div class="min-h-300px">
                <div class="flex items-start justify-between">
                  <v-title
                    class="cursor-pointer titledash w-5/6"
                    menu="Program By Region compared to lead and average"
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
                        ml-3
                      "
                    >
                      <img src="@/assets/filter.svg" class="w-4" />
                    </div>
                  </div>
                </div>
                <apexchart
                  type="bar"
                  height="350"
                  :options="chartOptionsProgramByRegion"
                  :series="seriesProgramByRegion"
                ></apexchart>
              </div>
              <!-- Program By Region compared to lead and average -->
              <!-- Total Attendess by Professional Type -->
              <div class="min-h-300px">
                <div class="flex items-start justify-between">
                  <v-title class="cursor-pointer titledash w-5/6" menu="Total Attendess by Professional Type"></v-title>
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
                        ml-3
                      "
                    >
                      <img src="@/assets/filter.svg" class="w-4" />
                    </div>
                  </div>
                </div>
                <apexchart
                  type="pie"
                  width="450"
                  :options="chartOptionsTotalAttendess"
                  :series="seriesTotalAttendess"
                ></apexchart>
              </div>
              <!-- Total Attendess by Professional Type -->
            </div>
          </v-card-box>
        </div>
      </div>
    </div>
    <aside
      class="
        right-drawer
        ease-in-out
        transform
        transition-all
        duration-700
        z-50
      "
      :style="{
        right: istabledrawer ? '0' : '-85%',
      }"
    >
      <div
        class="
          flex
          justify-between
          items-center
          text-base
          font-bold
          rounded-t-lg
          mb-2
          px-3
          py-2
          bg-blue
        "
      >
        <p class="text-base text-white font-bold">
          Speaker Engagement Tracker - Accepted
        </p>
        <div class="cursor-pointer" @click="istabledrawer = false">
          <img src="@/assets/close-white.svg" />
        </div>
      </div>
      <drawertable class=""></drawertable>
    </aside>

    <div
      :class="[
        'drawer-mask ease-in-out transform transition-all right-0 left-0',
        istabledrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
      ]"
      :style="{
        transition: istabledrawer ? '.7s' : '0 delay-700',
      }"
      @click="istabledrawer = false"
    ></div>
  </div>
  <!-- <button type="submit" @click="logout" >Log Out</button> -->
</template>
<script lang="ts" src="./Dashboard.ts"></script>
