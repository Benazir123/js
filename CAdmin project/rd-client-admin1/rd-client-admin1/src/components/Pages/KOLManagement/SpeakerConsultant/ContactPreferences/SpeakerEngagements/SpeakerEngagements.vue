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
          <div
            class="
              flex
              justify-between
              items-center
              border-b border-searchbox
              -m-4
              p-4
              mb-8
            "
          >
            <v-title menu="Speaker / Consultant" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="spkEngagementback"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>
          <!--  -->
          <div class="flex justify-between">
            <ca-left-menu></ca-left-menu>
            <div class="w-spright">
              <v-title menu="Engagements" class=""></v-title>
              <!-- grid starts -->
              <div class="grid grid-cols-5 gap-4 mt-8">
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    border border-1.0263px
                    rounded-radius40
                    p-4
                    border-searchbox
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      TOTAL ENGAGEMENTS
                    </h3>
                    <b class="text-fs20 font-bold text-textblue mt-2 block">10</b>
                  </div>
                  <img src="@/assets/totalengamount.svg" />
                </div>
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    border border-1.0263px
                    rounded-radius40
                    p-4
                    border-searchbox
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      COMPLETED
                    </h3>
                    <b class="text-fs20 font-bold text-greenclr mt-2 block">3</b>
                  </div>
                  <img src="@/assets/completedamount.svg" />
                </div>
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    border border-1.0263px
                    rounded-radius40
                    p-4
                    border-searchbox
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      CANCELLED
                    </h3>
                    <b class="text-fs20 font-bold text-darkpink mt-2 block">4</b>
                  </div>
                  <img src="@/assets/canceledamount.svg" />
                </div>
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    border border-1.0263px
                    rounded-radius40
                    p-4
                    border-searchbox
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      UPCOMING
                    </h3>
                    <b class="text-fs20 font-bold text-yellow mt-2 block">2</b>
                  </div>
                  <img src="@/assets/upcomingamount.svg" />
                </div>
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    border border-1.0263px
                    rounded-radius40
                    p-4
                    border-searchbox
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      TOTAL EARNINGS
                    </h3>
                    <b
                      class="
                        text-fs20
                        font-bold
                        text-yellow
                        mt-2
                        block
                        text-bluetxt
                      "
                      >$345</b
                    >
                  </div>
                  <img src="@/assets/totalearning.svg" />
                </div>
              </div>
              <!-- grid ends -->

              <!-- ---------------- -->
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="flex justify-between items-center pt-8 relative">
                    <ul class="flex mb-0 list-none flex-wrap flex-row">
                      <li class="text-center cursor-pointer">
                        <a
                          class="
                            text-fs13
                            font-semibold
                            px-3
                            py-3
                            block
                            leading-normal
                            rounded-tl-radius8
                            rounded-bl-radius8
                            rounded-tr-none
                            rounded-br-none flex
                          "
                          :class="{
                            'text-greytxt bg-graymenu': openTab !== 1,
                            'text-white bg-blue': openTab === 1,
                          }"
                          @click="toggleTabs(1)"
                        >
                          <img v-if="openTab === 2 ? true : false" src="@/assets/listviewinactive.svg" class="mr-2" />
                          <img v-if="openTab === 1 ? true : false" src="@/assets/listview.svg" class="mr-2" />List view
                        </a>
                      </li>
                      <li class="text-center cursor-pointer">
                        <a
                          class="
                            text-fs13
                            font-semibold
                            px-3
                            py-3
                            block
                            leading-normal
                            rounded-tr-radius8
                            rounded-br-radius8
                            rounded-tl-none
                            rounded-bl-none flex
                          "
                          :class="{
                            'text-greytxt bg-graymenu': openTab !== 2,
                            'text-white bg-blue': openTab === 2,
                          }"
                          @click="toggleTabs(2)"
                        >
                          <img v-if="openTab === 2 ? true : false" src="@/assets/calendarview.svg" class="mr-2" />
                          <img
                            v-if="openTab === 1 ? true : false"
                            src="@/assets/calendarviewinactive.svg"
                            class="mr-2"
                          />Calendar view
                        </a>
                      </li>
                    </ul>
                    <div class="flex justify-end">
                      <!-- filter starts -->
                      <div
                        class="
                          bg-graymenu
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
                        <span class="ml-1 mr-2 text-black text-fs13">Filters</span>
                      </div>
                      <!-- filter starts -->
                      <!-- Date picker starts -->
                      <component
                        :is="'v-date-picker'"
                        :auto-apply="autoApply"
                        @apply-date-filter="applyDateFilter($event)"
                      ></component>
                      <!-- Date picker ends -->
                      <div v-if="hidefilter" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="showfilter"></div>
                      <component
                        :is="'v-filter'"
                        v-if="hidefilter"
                        :key="filterKey"
                        :eng-filter="engFilter"
                        @apply-filter="applyFilter($event)"
                      ></component>
                    </div>
                  </div>

                  <div class="tab-content tab-space mt-8">
                    <div
                      :class="{
                        hidden: openTab !== 1,
                        block: openTab === 1,
                      }"
                    >
                      <!--  -->
                      <!-- table starts -->
                      <div class="table-responsive tablebordercommon spkengagementtable">
                        <VTable class="w-full" :data="spkEngagement" :hide-sort-icons="true" :page-size="pagePerRow">
                          <template #head>
                            <tr>
                              <VTh sort-key="id"
                                >Eng ID
                                <span sortKey="nosorting" />
                              </VTh>
                              <VTh sort-key="date">Date<span sortKey="nosorting"/></VTh>
                              <VTh sort-key="region">Region<span sortKey="nosorting"/></VTh>
                              <VTh sort-key="topic">Topic<span sortKey="nosorting"/></VTh>
                              <VTh sort-key="owner">Eng Owner <span sortKey="nosorting"/></VTh>
                              <VTh sort-key="attendee">Total <br />Attendees <span sortKey="nosorting"/></VTh>
                              <VTh sort-key="status">Status <span sortKey="nosorting"/></VTh>
                              <VTh sort-key="ffs">FFS <span sortKey="nosorting"/></VTh>
                              <VTh sort-key="location">Location <span sortKey="nosorting"/></VTh>
                              <VTh sort-key="division">Division <span sortKey="nosorting"/></VTh>
                              <VTh sort-key="sybdivision">Subdivision <span sortKey="nosorting"/></VTh>
                              <VTh sort-key="type">Type <span sortKey="nosorting"/></VTh>
                            </tr>
                          </template>
                          <template #body="{ rows }">
                            <tr v-for="row in rows" :key="row.id">
                              <td>{{ row.id }}</td>
                              <td>
                                <div class="whitespace-nowrap">
                                  {{ row.date }}
                                </div>
                              </td>
                              <td>{{ row.region }}</td>
                              <td>
                                <div class="w-60">{{ row.topic }}</div>
                              </td>
                              <td>{{ row.owner }}</td>
                              <td>{{ row.attendee }}</td>
                              <td>
                                <span class="p-2 rounded-radius8" :class="spkengcolor(row.status)">{{ row.status }}</span>
                              </td>
                              <td>{{ row.ffs }}</td>
                              <td>{{ row.location }}</td>
                              <td>{{ row.division }}</td>
                              <td>{{ row.sybdivision }}</td>
                              <td>
                                <span class="p-2 rounded-radius8" :class="spkengcolor(row.type)">{{ row.type }}</span>
                              </td>
                            </tr>
                          </template>
                        </VTable>
                      </div>
                      <!-- table ends -->
                      <!--  -->
                    </div>
                    <div
                      class="relative"
                      :class="{
                        hidden: openTab !== 2,
                        block: openTab === 2,
                      }"
                    >
                      <!--  -->
                      <!-- <img src="@/assets/calanderview.svg" /> -->

                      <div
                        v-if="showPopover"
                        class="fixed z-40 top-0 bottom-0 left-0 right-0 w-screen h-screen"
                        @click="hidetooltip()"
                      ></div>

                      <div
                        v-if="showPopover"
                        class="popuptooltip bg-white fixed z-40 p-4 border border-rightmenuborder w-335px shadow-calbox rounded-radius16"
                        style="bottom: 10vh;
z-index: 100;
left: 13vw;"
                      >
                        <!-- :style="offset" -->
                        <div class="absolute top-0 right-0 mt-4 mr-4 cursor-pointer" @click="hidetooltip()">
                          <img src="@/assets/closeblue.svg" class="mr-2" />
                        </div>
                        <h3 class="text-fs16 text-caltextid font-semibold">
                          Engagement ID: 456
                        </h3>
                        <div class="scroller scrollcalnd">
                          <h6 class="text-fs14 text-caltext font-semibold mt-3">
                            Topic
                          </h6>
                          <p class="text-fs13 text-formlabel font-normal mt-3">
                            Vyzulta is specifically indicated for the reduction of intraocular pressure (IOP) in patients
                            with open-angle glaucoma or ocular hypertension.
                          </p>
                          <div class="grid grid-cols-2 gap-4 mb-3 pb-3 mt-3 pt-3 border-b border-t border-companyinputbox">
                            <!-- FIRST -->
                            <div>
                              <div class="text-greytxt font-semibold text-fs13 leading-loose	">
                                <span class="text-black">Engagement Owner</span><br />
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 w-8 h-8" @click="showUserProfile()">
                                    <component :is="'v-profile'" :small-profile="true"></component>
                                  </div>
                                  <div class="ml-3">
                                    <p class="text-greytxt text-fs13 font-normal">
                                      Joan Mancinelli
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- SECOND -->
                            <div>
                              <div class="text-greytxt font-semibold text-fs13 leading-loose text-center">
                                Total Attendees <br />
                                <span class="text-additionalinfo font-normal block text-center">4</span>
                              </div>
                            </div>
                          </div>

                          <div class="grid grid-cols-2 gap-4 mb-3 pb-3 border-b border-companyinputbox">
                            <!-- FIRST -->
                            <div>
                              <div class="text-greytxt font-semibold text-fs13 leading-loose	">
                                Location<br />
                                <span class="text-additionalinfo font-normal">Cheektowaga, NY</span>
                              </div>
                            </div>
                            <!-- SECOND -->
                            <div>
                              <div class="text-greytxt font-semibold text-fs13 leading-loose	">
                                Type<br />
                                <v-smallbutton
                                  type="submit"
                                  class="font-w-normal text-fs13 bg-green p-2 text-green  rounded-radius6"
                                  >International
                                </v-smallbutton>
                              </div>
                            </div>
                          </div>
                          <div class="grid grid-cols-3 gap-4">
                            <!-- FIRST -->
                            <div>
                              <div class="text-greytxt font-semibold text-fs13 leading-loose	">
                                FFS<br />
                                <span class="text-additionalinfo font-normal">$125.00</span>
                              </div>
                            </div>
                            <!-- SECOND -->
                            <div>
                              <div class="text-greytxt font-semibold text-fs13 leading-loose	">
                                Division<br />
                                <span class="text-additionalinfo font-normal">Division 1</span>
                              </div>
                            </div>

                            <!-- THIRD -->
                            <div>
                              <div class="text-greytxt font-semibold text-fs13 leading-loose	">
                                Subdivision<br />
                                <span class="text-additionalinfo font-normal">Subdivision 1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <FullCalendar
                        v-if="openTab === 2"
                        ref="fullCalendar"
                        :options="calendarOptions"
                        @eventMouseEnter="handleEventClick"
                      />

                      <!--  -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- ---------------- -->
            </div>
          </div>
          <!--  -->
        </v-card-box>
      </div>
      <ca-right-menu></ca-right-menu>
    </div>
  </div>
</template>
<script lang="ts" src="./SpeakerEngagements.ts"></script>
<!-- <style>
  .popuptooltip::after {
    content: "";
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 12px solid #fff;
    position: absolute;
    top: -12px;
  }
</style> -->
