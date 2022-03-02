<template>
  <div class="flex bg-lite-blue-bg viewspk">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Users"></v-breadcrumb>
          </div>
        </div>
        <!-- HEADER END -->
        <!-- v-card box -->
        <v-card-box>
          <div class="border-b-2 border-searchbox  -m-4 p-4 mb-2">
            <v-title menu="Speaker Details" class="-mb-0"></v-title>
            <div class="flex items-center"></div>
          </div>

          <!--  -->
          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright ffsdesign">
              <div class="flex items-center justify-between relative mb-3 py-2">
                <v-title menu="FFS" class="mb-0"></v-title>

                <!-- search starts -->
                <div class="flex  ">
                  <span class="text-black pt-2 mr-3">YEAR</span>
                  <v-select class="h-10">
                    <option>2021</option>
                  </v-select>
                  <div
                    class=" inline-flex items-center cursor-pointer
                    justify-center ml-3
                    rounded-radius6 text-fs14
                    bg-blue px-4 py-2 text-white
                  "
                    @click="openffsdrawer()"
                  >
                    <img src="@/assets/plus.svg" class="mr-2" />
                    Add Fee for Service
                  </div>
                </div>
                <!-- search ends -->
              </div>
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
                            <div class="table-responsive tablebordercommon ffstable innerbox">
                              <VTable
                                class="w-full"
                                :data="spkTrainingRequired"
                                :hide-sort-icons="true"
                                :page-size="pagePerRow"
                              >
                                <template #head>
                                  <tr>
                                    <VTh sort-key="type" class="w-40 text-fs16 text-ffstitle"
                                      >Tiering

                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="virtual" class="w-56" style="border-colopse:seperate;border-spac">
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="bio" class="w-72">
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="miles" class="w-56 mx-4">
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="amount" class="w-40">
                                      <span sortKey="nosorting" />
                                    </VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>
                                      {{ row.type }}
                                      <div>
                                        <v-input></v-input>
                                        <p class="text-right mt-1 font-normal mb-2 text-ffstext">
                                          (Tier)
                                        </p>
                                      </div>
                                    </td>

                                    <td>
                                      {{ row.virtual }}
                                      <div>
                                        <v-input></v-input>
                                        <p class="text-right mt-1 font-normal mb-2 text-ffstext">
                                          (Engagement Type)
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      {{ row.bio }}
                                      <div>
                                        <v-input></v-input>
                                        <p class="text-right mt-1 font-normal mb-2 text-ffstext">
                                          (Specialty)
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      {{ row.miles }}
                                      <div>
                                        <v-input></v-input>
                                        <p class="text-right mt-1 font-normal mb-2 text-ffstext">
                                          (Distance)
                                        </p>
                                      </div>
                                    </td>
                                    <td>
                                      {{ row.amount }}
                                      <div>
                                        <v-input></v-input>
                                        <p class="text-right mt-1 font-normal mb-2 text-logininputtext">
                                          (Amount)
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </template>
                              </VTable>
                            </div>
                            <!-- table ends -->
                            <div class="flex items-center justify-end mt-4">
                              <div
                                class=" inline-flex  cursor-pointer rounded-radius6 text-fs14 bg-blue px-4 py-2 text-white "
                              >
                                Update
                              </div>
                            </div>
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
        <!-- v-card box -->
      </div>
    </div>
    <div class="prescriber ">
      <aside
        class="right-drawer ease-in-out transform transition-all duration-700 z-50 scroller"
        :style="{
          right: inTabledrawer ? '0' : '-35%',
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
        py-2
        bg-blue
        text-white
      "
        >
          <p class="text-base text-parenttheme-white font-semibold pl-4">
            Add Fee for Service
          </p>
          <div class="cursor-pointer" @click="inTabledrawer = false">
            <img src="@/assets/close-white.svg" />
          </div>
        </div>
        <!-- Collab meeeting Section -->
        <div class="fixed h-10">
        <drawertable></drawertable></div>
      </aside>
      <div
        :class="[
          'drawer-mask ease-in-out transform transition-all right-0 left-0',
          inTabledrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
        ]"
        :style="{
          transition: inTabledrawer ? '.7s' : '0 delay-700',
        }"
        @click="inTabledrawer = false"
      ></div>
    </div>
    </div>
</template>
<script lang="ts" src="./FFS.ts"></script>
