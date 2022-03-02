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
        <v-card-box>
          <div class="border-b-2 border-searchbox  -m-4 p-4 mb-2">
            <v-title menu="Speaker Details" class="-mb-0"></v-title>
            <div class="flex items-center"></div>
          </div>

          <!--  -->
          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright">
              <div class="flex items-center justify-between mb-3">
                <v-title menu="Comments" class=""></v-title>
                <!-- datepicker starts -->
                <v-smallbutton type="submit" class="text-fs13 bg-blue px-8 py-2 text-white mb-2">Add comment </v-smallbutton>
              </div>
              <!-- datepicker ends -->
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
                                      >NOTES NAME
                                      <span sortKey="nosorting" />
                                    </VTh>
                                    <VTh sort-key="name">CATEGORY <span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="productname">UPDATED BY <span sortKey="nosorting"/></VTh>
                                    <VTh sort-key="startdate">UPDATED DATE <span sortKey="nosorting"/></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>{{ row.type }}</td>
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.productname }}</td>
                                    <td>{{ row.startdate }}</td>
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
<script lang="ts" src="./Comments.ts"></script>
