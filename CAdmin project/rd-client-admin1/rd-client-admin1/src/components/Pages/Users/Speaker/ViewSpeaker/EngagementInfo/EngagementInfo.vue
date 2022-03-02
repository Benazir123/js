<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Users"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="border-b-2 border-searchbox  -m-4 p-4 mb-1">
            <v-title menu="Speaker Details"></v-title>
            <div class="flex items-center"></div>
          </div>

          <!--  -->
          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright">
              <div class="flex items-center justify-between relative my-2">
                <v-title menu="Engagement Info" class="my-2"></v-title>
                <!-- search starts -->
                <div class="flex absolute right-0 ">
                  <div class="">
                  <div class="w-64 mr-3">
                    <v-input-search
                      v-model="searchById"
                      input-type="text"
                      label="Search by Name"
                      class="search mb-10 "
                      name="meetingsearch"
                    ></v-input-search>
                  </div>
                  </div>
                  <div
                    class="
                    relative
                    cursor-pointer
                    flex
                    justify-center
                    rounded-radius8
                    px-4
                    items-center
                    border border-companyinputbox
                    mr-4
                  "
                  >
                    <img src="@/assets/filter.svg" class="w-4 mr-2" />
                    <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
                  </div>
                </div>
              </div>
              <!-- search ends -->
              <!-- ------------------ -->
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="tab-content tab-space">
                    <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
                      <!--  -->
                      <div class="flex-auto">
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
                                      >Engagment Details
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"
                                      />
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="name"
                                      >Topic
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="productname">Engagement Type <span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="startdate">Engagement Owner <span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="speaker">Speaker <span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="attendee">Attendees <span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="status"
                                      >Status
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"
                                      />
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="arrow"> <span sortKey="nosorting"/></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>
                                      {{ row.type }}
                                      <p class="text-graydark">
                                        July 17, 2021 | 5:00 PM
                                      </p>
                                    </td>
                                    <td>{{ row.name }}
                                    </td>
                                    <td>{{ row.productname }}</td>
                                    <td>
                                      {{ row.startdate }}
                                      <div class="flex">
                                        <img src="@/assets/profile.svg" class="cursor-pointer" />
                                        <p class="pt-1 ml-2">Janee Alanzo</p>
                                      </div>
                                    </td>
                                    <td>
                                      {{ row.speaker }}
                                      <div class="flex">
                                        <img src="@/assets/profile2.svg" class="cursor-pointer" />
                                        <p class="pt-1 ml-2">Susan Lucak</p>
                                      </div>
                                    </td>
                                    <td>
                                      {{ row.attendee }}
                                      <div class="flex md:w-32">
                                        <img src="@/assets/profile3.svg" class="cursor-pointer" />
                                        <img src="@/assets/profile2.svg" class="cursor-pointer -ml-2" />
                                        <img src="@/assets/profile.svg" class="cursor-pointer -ml-2" />
                                        <img src="@/assets/profile3.svg" class="cursor-pointer -ml-2" />
                                        <div
                                          class="w-8 h-8  rounded-full bg-profilegrey text-fs12 flex items-center justify-center text-white cursor-pointer -ml-2"
                                        >
                                          +3
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <span :class="'btn ' + engStatusColor(row.status)"> {{ row.status }}</span>

                                      <!-- <v-smallbutton  class="bg-lightgreen text-green ml-2">
         </v-smallbutton> -->
                                    </td>
                                    <td>
                                      {{ row.arrow }}
                                      <img src="@/assets/downarrow.svg" class="ml-2" />
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
    </div>
  </div>
</template>
<script lang="ts" src="./EngagementInfo.ts"></script>
