<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb
              breadcrumb="KOL Management"
              subbreadcrumb="Speaker Consultant"
              speakerbreadcrumb="Abbas Jonathan"
            ></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="flex justify-between items-center border-b border-searchbox -m-4 p-4 mb-8">
            <v-title menu="Speaker / Consultant" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="contractlog"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <!--  -->
          <div class="flex justify-between">
            <ca-left-menu></ca-left-menu>
            <div class="w-spright">
              <v-title menu="Training" class=""></v-title>
              <!-- ------------------ -->
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="flex justify-between items-centerpt-3 pb-4">
                    <ul class="flex mb-0 list-none flex-wrap  flex-row">
                      <li class="text-center cursor-pointer">
                        <a
                          class="text-fs13 font-semibold px-3 py-3 block leading-normal rounded-tl-radius8 rounded-bl-radius8 rounded-tr-none rounded-br-none"
                          :class="{
                            'text-greytxt bg-graymenu': openTab !== 1,
                            'text-white bg-blue': openTab === 1,
                          }"
                          @click="toggleTabs(1)"
                        >
                          Active Training
                        </a>
                      </li>
                      <li class="text-center cursor-pointer">
                        <a
                          class="text-fs13 font-semibold px-3 py-3 block leading-normal rounded-tr-radius8 rounded-br-radius8 rounded-tl-none rounded-bl-none"
                          :class="{
                            'text-greytxt bg-graymenu': openTab !== 2,
                            'text-white bg-blue': openTab === 2,
                          }"
                          @click="toggleTabs(2)"
                        >
                          Historical Training
                        </a>
                      </li>
                    </ul>
                    <div
                      class="
                    relative
                    bg-graymenu
                    cursor-pointer
                    flex
                    justify-center
                    rounded-radius4
                    px-4
                    py-3
                    items-center
                    shadow-filtershadow
                    mr-4
                  "
                      @click="showspkengfilter"
                    >
                      <img src="@/assets/filter.svg" class="w-4 mr-2" />
                      <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
                      <span
                        v-if="filterCount && filterCount.length != 0"
                        class="
                      bg-blue
                      w-20px
                      h-20px
                      rounded-radius100
                      text-white
                      flex
                      justify-center
                      items-center
                      text-fs11
                      px-2
                      py-2
                    "
                        >{{ filterCount && filterCount.length }}</span
                      >
                    </div>
                  </div>
                  <div class="tab-content tab-space">
                    <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
                      <!--  -->
                      <ul class="flex mb-0 list-none pt-3 border-b-2 border-searchbox ">
                        <li class="text-center -mb-0.5">
                          <a
                            class="text-fs16 font-normal px-4 py-2 block leading-normal cursor-pointer"
                            :class="{
                              'text-darkgrey': openTabInner !== 1,
                              'border-b-2 border-tabactbor text-textblue': openTabInner === 1,
                            }"
                            @click="toggleTabsInner(1)"
                          >
                            Required
                          </a>
                        </li>
                        <li class="text-center -mb-0.5">
                          <a
                            class="text-fs16 font-normal px-4 py-2 block leading-normal cursor-pointer"
                            :class="{
                              'text-darkgrey': openTabInner !== 2,
                              'border-b-2 border-tabactbor text-textblue': openTabInner === 2,
                            }"
                            @click="toggleTabsInner(2)"
                          >
                            Optional
                          </a>
                        </li>
                        <li class="text-center -mb-0.5">
                          <a
                            class="text-fs16 font-normal px-4 py-2 block leading-normal cursor-pointer"
                            :class="{
                              'text-darkgrey': openTabInner !== 3,
                              'border-b-2 border-tabactbor text-textblue': openTabInner === 3,
                            }"
                            @click="toggleTabsInner(3)"
                          >
                            Radius Direct
                          </a>
                        </li>
                      </ul>
                      <div class="py-5 flex-auto">
                        <div class="tab-content tab-space">
                          <div
                            :class="{
                              hidden: openTabInner !== 1,
                              block: openTabInner === 1,
                            }"
                          >
                            <!-- table starts -->
                            <div class="table-responsive tablebordercommon">
                              <VTable
                                class="w-full"
                                :data="spkTrainingRequired"
                                :hide-sort-icons="true"
                                :page-size="pagePerRow"
                              >
                                <template #head>
                                  <tr>
                                    <VTh sort-key="type"
                                      >Training Type
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="name">Training Name<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="startdate">Start Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="enddate">End Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="completeddate">Completed Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="status">Status<span sortKey="nosorting"/></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>{{ row.type }}</td>
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.startdate }}</td>
                                    <td>{{ row.enddate }}</td>
                                    <td>{{ row.completeddate }}</td>
                                    <td>
                                      <v-smallbutton
                                        class="
                                      bg-skyblue
                                      text-bluetxt
                                      p-1
                                      px-2
                                      mr-3
                                      rounded-radius6
                                      cursor-default
                                    "
                                        >{{ row.status }}
                                      </v-smallbutton>
                                    </td>
                                  </tr>
                                </template>
                              </VTable>
                            </div>
                            <!-- table ends -->
                          </div>
                          <div
                            :class="{
                              hidden: openTabInner !== 2,
                              block: openTabInner === 2,
                            }"
                          >
                            <!-- table starts -->
                            <div class="table-responsive tablebordercommon">
                              <VTable
                                class="w-full"
                                :data="spkTrainingOptional"
                                :hide-sort-icons="true"
                                :page-size="pagePerRow"
                              >
                                <template #head>
                                  <tr>
                                    <VTh sort-key="type"
                                      >Training Name
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <!-- <VTh sortKey="name"
                                >Training Name<span sortKey="nosorting"
                              /></VTh> -->
                                    <VTh sort-key="startdate">Start Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="enddate">End Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="completeddate">Completed Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="status">Status<span sortKey="nosorting"/></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>{{ row.type }}</td>
                                    <!-- <td>{{ row.name }}</td> -->
                                    <td>{{ row.startdate }}</td>
                                    <td>{{ row.enddate }}</td>
                                    <td>{{ row.completeddate }}</td>
                                    <td>
                                      <v-smallbutton
                                        class="
                                      bg-skyblue
                                      text-bluetxt
                                      p-1
                                      px-2
                                      mr-3
                                      rounded-radius6
                                      cursor-default
                                    "
                                        >{{ row.status }}
                                      </v-smallbutton>
                                    </td>
                                  </tr>
                                </template>
                              </VTable>
                            </div>
                            <!-- table ends -->
                          </div>
                          <div
                            :class="{
                              hidden: openTabInner !== 3,
                              block: openTabInner === 3,
                            }"
                          >
                            <!-- table starts -->
                            <div class="table-responsive tablebordercommon">
                              <VTable class="w-full" :data="spkTrainingRd" :hide-sort-icons="true" :page-size="pagePerRow">
                                <template #head>
                                  <tr>
                                    <VTh sort-key="name"
                                      >Training Name
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="lastviewdatedate">Last View Date<span sortKey="nosorting"/></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.lastviewdatedate }}</td>
                                  </tr>
                                </template>
                              </VTable>
                            </div>
                            <!-- table ends -->
                          </div>
                        </div>
                      </div>
                      <!--  -->
                    </div>
                    <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
                      <!--  -->
                      <ul class="flex mb-0 list-none pt-3 border-b-2 border-searchbox ">
                        <li class="text-center -mb-0.5">
                          <a
                            class="text-fs16 font-normal px-4 py-2 block leading-normal cursor-pointer"
                            :class="{
                              'text-darkgrey': openTabHistoricalInner !== 1,
                              'border-b-2 border-tabactbor text-textblue': openTabHistoricalInner === 1,
                            }"
                            @click="toggleTabHistoricalInner(1)"
                          >
                            Required
                          </a>
                        </li>
                        <li class="text-center -mb-0.5">
                          <a
                            class="text-fs16 font-normal px-4 py-2 block leading-normal cursor-pointer"
                            :class="{
                              'text-darkgrey': openTabHistoricalInner !== 2,
                              'border-b-2 border-tabactbor text-textblue': openTabHistoricalInner === 2,
                            }"
                            @click="toggleTabHistoricalInner(2)"
                          >
                            Optional
                          </a>
                        </li>
                      </ul>
                      <div class="py-5 flex-auto">
                        <div class="tab-content tab-space">
                          <div
                            :class="{
                              hidden: openTabHistoricalInner !== 1,
                              block: openTabHistoricalInner === 1,
                            }"
                          >
                            <!-- table starts -->
                            <div class="table-responsive tablebordercommon">
                              <VTable
                                class="w-full"
                                :data="spkHistoricalRequired"
                                :hide-sort-icons="true"
                                :page-size="pagePerRow"
                              >
                                <template #head>
                                  <tr>
                                    <VTh sort-key="type"
                                      >Training Type
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="name">Training Name<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="startdate">Start Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="enddate">End Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="completeddate">Completed Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="status">Status<span sortKey="nosorting"/></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>{{ row.type }}</td>
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.startdate }}</td>
                                    <td>{{ row.enddate }}</td>
                                    <td>{{ row.completeddate }}</td>
                                    <td>
                                      <v-smallbutton
                                        class="
                                      bg-skyblue
                                      text-bluetxt
                                      p-1
                                      px-2
                                      mr-3
                                      rounded-radius6
                                      cursor-default
                                    "
                                        >{{ row.status }}
                                      </v-smallbutton>
                                    </td>
                                  </tr>
                                </template>
                              </VTable>
                            </div>
                            <!-- table ends -->
                          </div>
                          <div
                            :class="{
                              hidden: openTabHistoricalInner !== 2,
                              block: openTabHistoricalInner === 2,
                            }"
                          >
                            <!-- table starts -->
                            <div class="table-responsive tablebordercommon">
                              <VTable
                                class="w-full"
                                :data="spkHistoricalOptional"
                                :hide-sort-icons="true"
                                :page-size="pagePerRow"
                              >
                                <template #head>
                                  <tr>
                                    <VTh sort-key="name">Training Name<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="startdate">Start Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="enddate">End Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="completeddate">Completed Date<span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="status">Status<span sortKey="nosorting"/></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.startdate }}</td>
                                    <td>{{ row.enddate }}</td>
                                    <td>{{ row.completeddate }}</td>
                                    <td>
                                      <v-smallbutton
                                        class="
                                      bg-skyblue
                                      text-bluetxt
                                      p-1
                                      px-2
                                      mr-3
                                      rounded-radius6
                                      cursor-default
                                    "
                                        >{{ row.status }}
                                      </v-smallbutton>
                                    </td>
                                  </tr>
                                </template>
                              </VTable>
                            </div>
                            <!-- table ends -->
                          </div>
                        </div>
                      </div>
                      <!--  -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- ------------------ -->
            </div>
          </div>
          <!--  -->
        </v-card-box>
      </div>
      <ca-right-menu></ca-right-menu>
    </div>
  </div>
</template>
<script lang="ts" src="./Training.ts"></script>
