<template>
  <div class="flex bg-lite-blue-bg viewspk">
    <div class="flex w-full h-full justify-between">
      <div class="w-full">
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
          </div>
          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright">
              <v-title menu="Cap" class="-mb-0 text-greytxt font-semibold tracking-tight"></v-title>

              <div class="flex flex-nowrap scroller gap-4 mt-8 pb-4 mb-2">
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    border border-1.0263px
                    rounded-radius40
                    p-4
                    border-searchbox
                    w-300px
                    flex-none
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">CAP AMOUNT</h3>
                    <b class="text-fs20 font-bold text-textblue mt-2 block">$2,00,000</b>
                  </div>
                  <img src="@/assets/cap-amount.svg" />
                </div>
                <!-- <div class="flex items-center justify-between border border-1.0263px rounded-radius40 p-4 border-searchbox w-300px flex-none">
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">SOFT CAP AMOUNT</h3>
                    <b class="text-fs20 font-bold text-textblue mt-2 block">$372,600</b>
                  </div>
                  <img src="@/assets/cap-amount.svg" />
                </div> -->
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    border border-1.0263px
                    rounded-radius40
                    p-4
                    border-searchbox
                    w-300px
                    flex-none
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">SPEND TO CAP</h3>
                    <b class="text-fs20 font-bold text-textblue mt-2 block">$85,000</b>
                  </div>
                  <img src="@/assets/utilized.svg" />
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
                    w-300px
                    flex-none
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">% OF CAP UTILIZED</h3>
                    <b class="text-fs20 font-bold text-greenclr mt-2 block">$1,15,000</b>
                  </div>
                  <img src="@/assets/remaining.svg" />
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
                    w-300px
                    flex-none
                  "
                >
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">REMAINING CAP</h3>
                    <b class="text-fs20 font-bold text-yellow mt-2 block">$3,12,000</b>
                  </div>
                  <img src="@/assets/remaining.svg" />
                </div>
              </div>
              <!-- ---------------- -->
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="flex justify-between items-center relative">
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
                            rounded-tl-radius8 rounded-bl-radius8 rounded-tr-none rounded-br-none
                            flex
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
                            rounded-tr-radius8 rounded-br-radius8 rounded-tl-none rounded-bl-none
                            flex
                          "
                          :class="{
                            'text-greytxt bg-graymenu': openTab !== 2,
                            'text-white bg-blue': openTab === 2,
                          }"
                          @click="toggleTabs(2)"
                        >
                          <img v-if="openTab === 2 ? true : false" src="@/assets/mapview.svg" class="mr-2" />
                          <img v-if="openTab === 1 ? true : false" src="@/assets/mapviewinactive.svg" class="mr-2" />Map view
                        </a>
                      </li>
                    </ul>
                    <div class="relative">
                      <div
                        class="
                          float-right
                          cursor-pointer
                          relative
                          flex
                          justify-center
                          rounded-radius8
                    px-4
                    py-2
                    items-center
                    border border-companyinputbox
                    mr-4
                        "
                        @click="showFilter()"
                      >
                        <img src="@/assets/filter.svg" class="mr-2" />
                        Filters

                        <ul
                          v-if="filterPop"
                          class="
                            bg-white
                            w-full
                            absolute
                            right-0
                            top-full
                            border border-spkfilterborder
                            rounded-radius5
                            z-10
                            shadow-filtershadow
                          "
                        >
                          <li class="border-b border-spkfilterinnerborder">
                            <a class="cursor-pointer flex items-center text-spkfilter text-fs12 p-2 px-3"> International </a>
                          </li>
                          <li>
                            <a class="cursor-pointer flex items-center text-spkfilter text-fs12 p-2 px-3"> US </a>
                          </li>
                        </ul>
                      </div>
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
                      <div class="table-responsive">
                        <!-- <tree-table class="table treetablewrp" :columns="columns" :table-data="tableData">
                  <template #nodeTemplate="nodeProps">
                    <utilization-data v-bind="nodeProps" :keys-to-calculate="keysToCalculate" :columns="columns"/>
                  </template>
                </tree-table> -->
                        <!-- <VTooltip v-if="showPopover" :offset="offset">
      <template #popper>
test      </template>
    </VTooltip> -->

                        <!-- <Popper arrow placement="right">
    <button>Trigger element</button>
    <template #content>
      <div>This is the Popper content</div>
    </template>
  </Popper> -->

                        <VTable
                          class="w-full tabletreewrp text-spkfilter text-fs14"
                          :data="utilization"
                          :hide-sort-icons="true"
                          :page-size="5"
                        >
                          <template #head>
                            <tr>
                              <VTh sort-key="contractname"><span class="w-300px inline-block">Contract</span></VTh>
                              <VTh sort-key="contproduct">Product</VTh>
                              <VTh sort-key="contstartdate">Start Date</VTh>
                              <VTh sort-key="contenddate">End Date</VTh>
                              <VTh sort-key="contamount">Cap Amount</VTh>
                              <!-- <VTh sortKey="contsoftcapamount"><span class="w-100px inline-block whitespace-normal">Soft Cap Amount</span></VTh>
                      <VTh sortKey="contsoftcap">Soft Cap</VTh> -->
                              <VTh sort-key="contutilization">Utilization</VTh>
                              <VTh sort-key="contremainingcap"
                                ><span class="w-100px inline-block whitespace-normal">Remaining Cap</span></VTh
                              >
                              <!-- <VTh sortKey="contremainingsoftcap"><span class="w-100px inline-block whitespace-normal">Remaining Soft Cap</span></VTh> -->
                              <VTh sort-key="conthours">Hours</VTh>
                              <VTh sort-key="conthoursutilized"
                                ><span class="w-100px inline-block whitespace-normal">Hours Utilized</span></VTh
                              >
                              <VTh sort-key="contremaininghours"
                                ><span class="w-100px inline-block whitespace-normal">Remaining Hours</span></VTh
                              >
                              <VTh sort-key="contaction"></VTh>
                            </tr>
                          </template>
                          <template #body="{ rows }">
                            <tr>
                              <td>
                                <div class="flex items-center">
                                  <img
                                    v-if="togglefirstchild == true"
                                    src="@/assets/utiopen.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="
                                      togglefirstchild = !togglefirstchild;
                                      showfirstchildren = false;
                                      togglesecondsecchild = false;
                                    "
                                  />
                                  <img
                                    v-if="togglefirstchild == false"
                                    src="@/assets/uticlose.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="
                                      togglefirstchild = !togglefirstchild;
                                      showfirstchildren = false;
                                      togglesecondsecchild = false;
                                    "
                                  />
                                 Corporate Cap Overview
                                </div>
                              </td>
                              <td>-</td>
                              <td>01/13/2021</td>
                              <td>12/31/2021</td>
                              <td>$372,600</td>
                              <!-- <td>$4,88,000</td>
                      <td>178%</td> -->
                              <td>$372,600</td>
                              <td>$1,15,000</td>
                              <!-- <td>$5,79,000</td> -->
                              <td>178%</td>
                              <td>$15,000</td>
                              <td>79</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4" @click="showView()">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                                <ul
                                  v-if="viewPop"
                                  class="
                                    bg-white
                                    w-100px
                                    absolute
                                    right-0
                                    top-full
                                    -mt-2
                                    mr-4
                                    border border-spkfilterborder
                                    rounded-radius5
                                    z-10
                                    shadow-filtershadow
                                  "
                                >
                                  <li class="border-b border-spkfilterinnerborder">
                                    <a class="cursor-pointer flex items-center text-spkfilter text-fs12 p-2 px-3">
                                      <img src="@/assets/edit.svg" class="mr-2" />
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a class="cursor-pointer flex items-center text-spkfilter text-fs12 p-2 px-3">
                                      <img src="@/assets/view.svg" class="mr-2" />
                                      View
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr v-if="togglefirstchild" class="child1">
                              <td>
                                <div class="flex items-center">
                                  <img
                                    v-if="showfirstchildren == true"
                                    src="@/assets/utiopen.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchildren = !showfirstchildren"
                                  />
                                  <img
                                    v-if="showfirstchildren == false"
                                    src="@/assets/uticlose.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchildren = !showfirstchildren"
                                  />

                                  US
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$1,70,000</td>
                              <!-- <td>$1,61,000</td>
                      <td>90%</td> -->
                              <td>$70,000</td>
                              <td>$1,00,000</td>
                              <!-- <td>$2,22,000</td> -->
                              <td>75</td>
                              <td>12</td>
                              <td>16</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>

                            <tr v-if="showfirstchildren" class="child2">
                              <td>
                                <div class="flex items-center">
                                  <img
                                    v-if="showfirstchild2 == true"
                                    src="@/assets/utiopen.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild2 = !showfirstchild2"
                                  />
                                  <img
                                    v-if="showfirstchild2 == false"
                                    src="@/assets/uticlose.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild2 = !showfirstchild2"
                                  />

                                  Commercial
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$70,000</td>
                              <!-- <td>$28,000</td>
                      <td>90%</td> -->
                              <td>$40,000</td>
                              <td>$30,000</td>
                              <!-- <td>$22,000</td> -->
                              <td>75</td>
                              <td>12</td>
                              <td>16</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild2 && showfirstchildren" class="child3">
                              <td>
                                <div class="flex items-center">June 2021 Addendum to 2021 SOW</div>
                              </td>
                              <td>Adtralza</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$20,000</td>
                              <!-- <td>$16,200</td>
                      <td>90%</td> -->
                              <td>$10,000</td>
                              <td>$10,000</td>
                              <!-- <td>$13,700 </td> -->
                              <td>45</td>
                              <td>6</td>
                              <td>39</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild2 && showfirstchildren" class="child3">
                              <td>
                                <div class="flex items-center">June 2021 Addendum to 2021 SOW</div>
                              </td>
                              <td>DSA</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$50,000</td>
                              <!-- <td>$12,000 </td>
                      <td>90%</td> -->
                              <td>$30,000</td>
                              <td>$20,000</td>
                              <!-- <td>$8,300 </td> -->
                              <td>30</td>
                              <td>6</td>
                              <td>24</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchildren" class="child2">
                              <td>
                                <div class="flex items-center">
                                  <img
                                    v-if="showfirstchild3 == true"
                                    src="@/assets/utiopen.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild3 = !showfirstchild3"
                                  />
                                  <img
                                    v-if="showfirstchild3 == false"
                                    src="@/assets/uticlose.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild3 = !showfirstchild3"
                                  />
                                  Medical
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$1,00,000</td>
                              <!-- <td>$1,33,000</td>
                      <td>88%</td> -->
                              <td>$30,000</td>
                              <td>$65,000</td>
                              <!-- <td>$2,00,000</td> -->
                              <td>115</td>
                              <td>97</td>
                              <td>63</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild3 && showfirstchildren" class="child3">
                              <td>
                                <div class="flex items-center">
                                  <img
                                    v-if="showfirstchild6 == true"
                                    src="@/assets/utiopen.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild6 = !showfirstchild6"
                                  />
                                  <img
                                    v-if="showfirstchild6 == false"
                                    src="@/assets/uticlose.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild6 = !showfirstchild6"
                                  />
                                  Medical Affairs
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$20,000</td>
                              <!-- <td>$38,000 </td>
                      <td>35%</td> -->
                              <td>$10,000</td>
                              <td>$10,000</td>
                              <!-- <td>$1,05,000 </td> -->
                              <td>50</td>
                              <td>39</td>
                              <td>38</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild6 && showfirstchild3 && showfirstchildren" class="child4">
                              <td>
                                <div class="flex items-center">
                                  James 25NOV2021 HCP Work Order 2 (Peds Strategy Consulting)
                                </div>
                              </td>
                              <td>DSA</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$30,000</td>
                              <!-- <td>$10,000</td>
                      <td>5%</td> -->
                              <td>$10,000</td>
                              <td>$20,000</td>
                              <!-- <td>$9,000</td> -->
                              <td>25</td>
                              <td>15</td>
                              <td>6</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild3 && showfirstchildren" class="child3">
                              <td>
                                <div class="flex items-center">
                                  <img
                                    v-if="showfirstchild5 == true"
                                    src="@/assets/utiopen.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild5 = !showfirstchild5"
                                  />
                                  <img
                                    v-if="showfirstchild5 == false"
                                    src="@/assets/uticlose.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="showfirstchild5 = !showfirstchild5"
                                  />

                                  Medical Innovation & Educations
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$80,000</td>
                              <!-- <td>$95,000</td>
                      <td>25%</td> -->
                              <td>$20,000</td>
                              <td>$60,000</td>
                              <!-- <td>$50,000</td> -->
                              <td>65</td>
                              <td>58</td>
                              <td>25</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild5 && showfirstchild3 && showfirstchildren" class="child4">
                              <td>
                                <div class="flex items-center">
                                  James 25NOV2021 HCP Work Order 2 (Peds Strategy Consulting)
                                </div>
                              </td>
                              <td>DSA</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$30,000</td>
                              <!-- <td>$10,000</td>
                      <td>5%</td> -->
                              <td>$10,000</td>
                              <td>$20,000</td>
                              <!-- <td>$9,000</td> -->
                              <td>25</td>
                              <td>15</td>
                              <td>6</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild5 && showfirstchild3 && showfirstchildren" class="child4">
                              <td>
                                <div class="flex items-center">John James 17JAN2021 HCP Work Order 3 (Peds Ad Board)</div>
                              </td>
                              <td>Adtralza</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$20,000</td>
                              <!-- <td>$75,000</td>
                      <td>15%</td> -->
                              <td>$5,000</td>
                              <td>$15,000</td>
                              <!-- <td>$40,000</td> -->
                              <td>20</td>
                              <td>35</td>
                              <td>10</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="showfirstchild5 && showfirstchild3 && showfirstchildren" class="child4">
                              <td>
                                <div class="flex items-center">James Antony 25NOV2021 HCP Work Order 3 (Peds Ad Board)</div>
                              </td>
                              <td>DSA</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$30,000</td>
                              <!-- <td>$10,000</td>
                      <td>5%</td> -->
                              <td>$5,000</td>
                              <td>$25,000</td>
                              <!-- <td>$1,000</td> -->
                              <td>20</td>
                              <td>8</td>
                              <td>19</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>

                            <tr v-if="togglefirstchild" class="child1">
                              <td>
                                <div class="flex items-center">
                                  <img
                                    v-if="togglesecondsecchild == true"
                                    src="@/assets/utiopen.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="togglesecondsecchild = !togglesecondsecchild"
                                  />
                                  <img
                                    v-if="togglesecondsecchild == false"
                                    src="@/assets/uticlose.svg"
                                    class="mr-3 cursor-pointer"
                                    @click="togglesecondsecchild = !togglesecondsecchild"
                                  />

                                  Ex U S
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$30,000</td>
                              <!-- <td>$3,27,000</td>
                      <td>90%</td> -->
                              <td>$15,000</td>
                              <td>$15,000</td>
                              <!-- <td>$3,12,000</td> -->
                              <td>75</td>
                              <td>12</td>
                              <td>16</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>

                            <tr v-if="togglesecondsecchild && togglefirstchild" class="child2">
                              <td>
                                <div class="flex items-center">
                                  <!-- <img src="@/assets/utiopen.svg" class="mr-3 cursor-pointer" @click="togglesecondsecchild1 = !togglesecondsecchild1" v-if="togglesecondsecchild1 == true" />
                          <img src="@/assets/uticlose.svg" class="mr-3 cursor-pointer" @click="togglesecondsecchild1 = !togglesecondsecchild1" v-if="togglesecondsecchild1 == false" />  -->
                                  Commercial
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$20,000</td>
                              <!-- <td>$27,000</td>
                      <td>90%</td> -->
                              <td>$10,000</td>
                              <td>$10,000</td>
                              <!-- <td>$22,000</td> -->
                              <td>75</td>
                              <td>12</td>
                              <td>16</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                            <tr v-if="togglesecondsecchild && togglefirstchild" class="child2">
                              <td>
                                <div class="flex items-center">
                                  <!-- <img src="@/assets/utiopen.svg" class="mr-3 cursor-pointer" @click="togglesecondsecchild2 = !togglesecondsecchild2" v-if="togglesecondsecchild2 == true" />
                          <img src="@/assets/uticlose.svg" class="mr-3 cursor-pointer" @click="togglesecondsecchild2 = !togglesecondsecchild2" v-if="togglesecondsecchild2 == false" />  -->
                                  Medical
                                </div>
                              </td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>$10,000</td>
                              <!-- <td>$3,00,000</td>
                      <td>88%</td> -->
                              <td>5,000</td>
                              <td>$5,000</td>
                              <!-- <td>$2,90,000</td> -->
                              <td>115</td>
                              <td>97</td>
                              <td>63</td>
                              <td class="relative">
                                <div class="cursor-pointer float-right mr-4">
                                  <img src="@/assets/ellip.svg" />
                                </div>
                              </td>
                            </tr>
                          </template>
                        </VTable>
                      </div>
                      <!--  -->
                    </div>
                    <div
                      :class="{
                        hidden: openTab !== 2,
                        block: openTab === 2,
                      }"
                    >
                      <!-- map  -->
                      <div class="vue-world-map">
                        <Map ref="map_section" :active="legend.id" @hoverCountry="onHoverCountry"></Map>
                        <div
                          v-if="legend.name"
                          class="vue-map-legend bg-white shadow-maptooltip rounded-radius8 border-0 p-4 w-300px"
                          :style="'left:' + position.left + 'px; top: ' + position.top + 'px'"
                        >
                          <div class="vue-map-legend-header p-0">
                            <span
                              class="text-fs14 text-maptooltiptit font-semibold pb-0 mb-0 flex items-center justify-between"
                            >
                              {{ legend.name }}
                              <p class="cursor-pointer" @click="onHoverLeaveCountry()">
                                <img src="@/assets/closeblack.svg" />
                              </p>
                            </span>
                          </div>
                          <div class="vue-map-legend-content bg-white p-0 pt-4 mt-2 border-companyinputbox">
                            <div>
                              <h3
                                class="
                                  flex
                                  items-center
                                  justify-between
                                  text-fs12 text-maptooltipcon
                                  font-semibold
                                  cursor-pointer
                                "
                                @click="showcommercial()"
                              >
                                <b class="flex items-center font-semibold">
                                  <img v-if="commercialPop == true" src="@/assets/miniuti.svg" class="mr-2" />
                                  <img v-if="commercialPop == false" src="@/assets/plusuti.svg" class="mr-2" />
                                  Commercial
                                </b>
                                <span>$2350</span>
                              </h3>
                              <ul v-if="commercialPop" class="pl-6 mt-1">
                                <li class="text-contextmap flex items-center justify-between text-fs11 pt-1">
                                  <span class="text-contextmap font-normal">Commercial 1</span>
                                  <b class="font-semibold text-maptooltipcon">$1250</b>
                                </li>
                                <li class="text-contextmap flex items-center justify-between text-fs11 pt-1">
                                  <span class="text-contextmap font-normal">Commercial 2</span>
                                  <b class="font-semibold text-maptooltipcon">$1150</b>
                                </li>
                              </ul>
                            </div>

                            <div class="mt-2">
                              <h3
                                class="
                                  flex
                                  items-center
                                  justify-between
                                  text-fs12 text-maptooltipcon
                                  font-semibold
                                  cursor-pointer
                                "
                                @click="showmedical()"
                              >
                                <b class="flex items-center font-semibold">
                                  <img v-if="medicalPop == true" src="@/assets/miniuti.svg" class="mr-2" />
                                  <img v-if="medicalPop == false" src="@/assets/plusuti.svg" class="mr-2" />
                                  Medical
                                </b>
                                <span>$1450</span>
                              </h3>
                              <ul v-if="medicalPop" class="pl-6 mt-1">
                                <li class="text-contextmap flex items-center justify-between text-fs11 pt-1">
                                  <span class="text-contextmap font-normal">Medical 1</span>
                                  <b class="font-semibold text-maptooltipcon">$1250</b>
                                </li>
                                <li class="text-contextmap flex items-center justify-between text-fs11 pt-1">
                                  <span class="text-contextmap font-normal">Medical 2</span>
                                  <b class="font-semibold text-maptooltipcon">$1150</b>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <MapChart
                        :countryData="{'US': 4, 'CA': 7, 'GB': 8, 'IE': 14, 'ES': 21}"
                        countryStrokeColor="rgba(68, 68, 68, 0.45)"
                        defaultCountryFillColor="#F9F8F8"
                        /> -->
                      <!-- <img src="@/assets/utilizationmapview.svg" class="m-auto"/> -->
                      <!--  -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- ---------------- -->
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Cap.ts"></script>
<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
.vue-world-map,
#map-svg {
  height: 100%;
}
.vue-world-map {
  position: relative;
}
.vue-map-legend {
  width: 185px;
  background: #fff;
  overflow: auto;
  border: 1px solid;
  position: absolute;
}
.vue-map-legend-header {
  padding: 10px 15px;
}
.vue-map-legend-content {
  padding: 10px 15px;
  background: #dadbda8f;
  border-top: 1px solid #acacad;
}
</style>
