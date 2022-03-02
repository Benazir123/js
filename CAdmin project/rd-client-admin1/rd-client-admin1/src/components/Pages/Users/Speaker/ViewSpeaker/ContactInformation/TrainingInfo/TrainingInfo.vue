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
          <div
            class="
              flex
              justify-between
              items-center
              border-b-2 border-searchbox
              -m-4
              p-4
              mb-2
            "
          >
            <v-title menu="Speaker Details" class="mb-0"></v-title>
            <!-- <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="contractlog"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div> -->
          </div>

          <!--  -->
          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright">
              <div
                class="
                  flex
                  items-center
                  justify-between
                  border-b-2 border-searchbox
                 mt-3  pb-3
                "
              >
                <v-title menu="Training" class=""></v-title>

                <!-- datepicker starts -->
                <div>
                  <v-date-picker></v-date-picker>
                </div>
              </div>
              <!-- datepicker ends -->
              <!-- ------------------ -->
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="flex items-centerpt-3 pt-4 border-b-2  border-searchbox">
                    <ul class="flex mb-0 list-none flex-wrap flex-row">
                      <li class="text-center cursor-pointer">
                        <a
                          class="
                            text-fs16
                            font-semibold
                            px-11
                            py-3
                            block
                            leading-normal
                            rounded-tl-radius8
                            rounded-bl-none
                            rounded-tr-radius8
                            rounded-br-none
                          "
                          :class="{
                            'text-secsemigrey ': openTab !== 1,
                            'text-textblue bg-tabactiveblue': openTab === 1,
                          }"
                          @click="toggleTabs(1)"
                        >
                          Active
                        </a>
                      </li>
                      <li class="text-center cursor-pointer">
                        <a
                          class="
                            text-fs16
                            font-semibold
                            px-11
                            py-3
                            block
                            leading-normal
                            rounded-tr-radius8
                            rounded-br-none
                            rounded-tl-radius8
                            rounded-bl-none
                          "
                          :class="{
                            'text-secsemigrey ': openTab !== 2,
                            'text-textblue bg-tabactiveblue': openTab === 2,
                          }"
                          @click="toggleTabs(2)"
                        >
                          Historical
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="tab-content tab-space">
                    <div
                      :class="{
                        hidden: openTab !== 1,
                        block: openTab === 1,
                      }"
                    >
                      <div class="flex absolute right-0 top-56">
                        <div class="w-64 mr-3">
                          <v-input-search
                            v-model="searchById"
                            input-type="text"
                            label="Search by Name"
                            class="search"
                            name="meetingsearch"
                          ></v-input-search>
                        </div>
                        <div
                          class="
                        relative
                        cursor-pointer
                        flex
                        justify-center
                        rounded-radius8
                        px-2
                        items-center
                        border border-companyinputbox
                        mr-4
                      "
                        >
                          <img src="@/assets/filter.svg" class="w-4 mr-2" />
                          <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
                          <span
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
                        "
                            >{{ filterCount && filterCount.length }}2</span
                          >
                        </div>
                      </div>
                      <!--  -->
                      <div class="flex justify-between pt-6 border-b-2 border-searchbox relative">
                        <ul class="flex mb-0 list-none pt-3 ">
                          <li class="text-center -mb-0.5">
                            <a
                              class=" relative
                                text-fs16
                                font-normal
                                pl-0 pr-8
                               pt-2 pb-3
                                block
                                leading-normal
                                cursor-pointer
                              " @click="toggleTabsInner(1)"
                               :class="{
                                'text-secsemigrey': openTabInner !== 1,
                              ' text-textblue ': openTabInner === 1,
                              }"
                            >
                              Required
                              <span  :class="{
                                'text-grey': openTabInner !== 1,
                                'border-b-2 border-tabactbor text-textblue h-2 w-10 absolute bottom-0 left-0': openTabInner === 1,
                              }"></span>
                            </a>
                          </li>
                          <li class="text-center -mb-0.5">
                            <a
                              class="
                                text-fs16 relative
                                font-normal
                                pl-0 pr-8
                               pt-2 pb-3
                                block
                                leading-normal
                                cursor-pointer
                              "
                              :class="{
                                'text-secsemigrey': openTabInner !== 2,
                              ' text-textblue ': openTabInner === 2,
                              }"
                              @click="toggleTabsInner(2)"
                            >
                              Optional
                               <span  :class="{
                                'text-white': openTabInner !== 2,
                                'border-b-2 border-tabactbor text-textblue h-2 w-10 absolute bottom-0 left-0': openTabInner === 2,
                              }"></span>
                            </a>
                          </li>
                          <li class="text-center -mb-0.5">
                            <a
                              class="
                                text-fs16 relative
                                font-normal
                                pl-0 pr-8
                               pt-2 pb-3
                                block
                                leading-normal
                                cursor-pointer
                              "
                               :class="{
                                'text-secsemigrey': openTabInner !== 3,
                              ' text-textblue ': openTabInner === 3,
                              }"
                              @click="toggleTabsInner(3)"
                            >
                              RD Training <span  :class="{
                                'text-grey': openTabInner !== 3,
                                'border-b-2 border-tabactbor text-textblue h-2 w-10 absolute bottom-0 left-0': openTabInner === 3,
                              }"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
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
                                      >Training/Topic Name
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="productname"
                                      >Product Name
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="startdate"
                                      >Start Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="enddate"
                                      >End Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="completeddate"
                                      >Completed Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="status"
                                      >Meeting Status
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                  </tr>
                                </template>
                                <template #body="{ rows }">
                                  <tr v-for="row in rows" :key="row.id">
                                    <td>{{ row.type }}</td>
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.productname }}</td>
                                    <td>{{ row.startdate }}</td>
                                    <td>{{ row.enddate }}</td>
                                    <td>{{ row.completeddate }}</td>

                                    <td>
                                      <v-smallbutton
                                        class="
                                          bg-skyblue
                                          text-bluetxt
                                          p-1
                                          px-6
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
                                    <!-- <VTh sortKey="name"
                                >Training Name<span sortKey="nosorting"
                              /></VTh> -->
                                    <VTh sort-key="startdate"
                                      >Start Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="enddate"
                                      >End Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="completeddate"
                                      >Completed Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="status"
                                      >Status
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
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
                                    <VTh sort-key="lastviewdatedate"
                                      >Last View Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
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
                    <div
                      :class="{
                        hidden: openTab !== 2,
                        block: openTab === 2,
                      }"
                    >
                      <!--  -->
                      <ul
                        class="
                          flex
                          mb-0
                          list-none
                          pt-3
                          border-b-2 border-searchbox
                          my-6
                        "
                      >
                        <li class="text-center -mb-0.5">
                          <a
                            class="
                              text-fs16
                              font-normal
                              px-4
                              py-2
                              block
                              leading-normal
                              cursor-pointer
                            "
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
                            class="
                              text-fs16
                              font-normal
                              px-4
                              py-2
                              block
                              leading-normal
                              cursor-pointer
                            "
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
                                      >Training Name
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="startdate"
                                      >Start Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="enddate"
                                      >End Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="completeddate"
                                      >Completed Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="status"
                                      >Status
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
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
                                    <VTh sort-key="name"
                                      >Training Name
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="startdate"
                                      >Start Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="enddate"
                                      >End Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="completeddate"
                                      >Completed Date
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
                                    <VTh sort-key="status"
                                      >Status
                                      <span
                                        class="nosort"
                                        :class="{
                                          nosort: sortOrder === 0,
                                          ascendingorder: sortOrder === 1,
                                          ascendingorder: sortOrder === -1,
                                        }"/>
                                      <span sortKey="nosorting"
                                    /></VTh>
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
<script lang="ts" src="./TrainingInfo.ts"></script>
