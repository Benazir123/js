<template>
  <div>
    <v-breadcrumb breadcrumb="Dashboard " subbreadcrumb="Budget"></v-breadcrumb>
    <v-title menu="Budget"></v-title>
    <div>
      <v-card-box>
        <div class="flex items-center border-b border-searchbox pb-2 mb-2">
          <v-title menu="Company" class="mb-0"></v-title>
          <span class="text-ffstext bg-greenscomp p-2 px-3 ml-3 rounded-full">Ortho Dermatologics</span>
        </div>
        <div class="grid grid-cols-7 gap-6">
          <div class="w-150px">
            <v-label value="YEAR" class="mb-2" />
            <v-select><option>2021</option></v-select>
          </div>
          <div class="w-150px">
            <v-label value="QUARTER" class="mb-2" />
            <v-select><option>2021</option></v-select>
          </div>
          <div>
            <v-label value="TOTAL BUDGET" class="mb-1" />
            <h4 class="text-ffstext text-fs28 font-w-bold">$22,000.00</h4>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-4 gap-6 mt-3">
          <div class="bg-totalspend rounded-lg p-4">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-dashselect text-fs13 mb-1">TOTAL SPEND YTD</p>
                <h2 class="text-fs24 mb-2 text-dashselect"><b class="">72,350</b></h2>
              </div>
              <div class="bg-budgetwavebg rounded-radius10 p-2"><img src="@/assets/budget/budgetwave.svg" alt="" /></div>
            </div>
            <div class="flex items-center mt-2">
              <img src="@/assets/budget/budgetgraph.svg" alt="" class="mr-1" />
              <p class="text-successgreen">6.9%</p>
            </div>
          </div>
          <div class="bg-remaining rounded-lg p-4">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-dashselect text-fs13 mb-1">REMAINING</p>
                <h2 class="text-fs24 mb-2 text-dashselect"><b class="">$19,900.00</b></h2>
              </div>
              <div class="bg-remainicon rounded-radius10 p-2"><img src="@/assets/budget/budgetwave.svg" alt="" /></div>
            </div>
            <div class="flex items-center mt-2">
              <img src="@/assets/budget/budgetgraph.svg" alt="" class="mr-1" />
              <p class="text-successgreen">19.3%</p>
            </div>
          </div>
          <div class="bg-allocated rounded-lg p-4">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-dashselect text-fs13 mb-1">ALLOCATED</p>
                <h2 class="text-fs24 mb-2 text-dashselect"><b class="">$11,000.00</b></h2>
              </div>
              <div class="bg-allocatteicon rounded-radius10 p-2"><img src="@/assets/budget/budgetwave.svg" alt="" /></div>
            </div>
            <div class="flex items-center mt-2">
              <img src="@/assets/budget/decreasegraph.svg" alt="" class="mr-1" />
              <p class="text-dangertext">12.5%</p>
            </div>
          </div>
          <div class="bg-unallocated rounded-lg p-4">
            <div class="flex justify-between items-start">
              <div>
                <p class="text-dashselect text-fs13 mb-1">UNALLOCATED</p>
                <h2 class="text-fs24 mb-2 text-dashselect"><b class="">$8,900.00</b></h2>
              </div>
              <div class="bg-unallocateicon rounded-radius10 p-2"><img src="@/assets/budget/budgetwave.svg" alt="" /></div>
            </div>
            <div class="flex items-center mt-2">
              <img src="@/assets/budget/decreasegraph.svg" alt="" class="mr-1" />
              <p class="text-dangertext">12.5%</p>
            </div>
          </div>
        </div>
      </v-card-box>
    </div>
    <div>
      <budget-chart></budget-chart>
    </div>
    <v-card-box>
      <div class="flex relative items-center justify-end mb-3">
        <div class="w-1/4 mr-3">
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
        <div class="relative">
          <div
            class="
              cursor-pointer
              flex
              float-right
              cursor-pointer
              bg-btnbudget
              shadow-filtershadow
              relative
              rounded-radius4
              text-fs13 text-greytxt
              px-3
              py-3
            "
            @click="showfundFilter()"
          >
            <span class="w-13"> <img src="@/assets/budgets.svg" class="mr-2" /></span>
            Manage Fund

            <ul
              v-if="filterfundPop"
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
                <a class="cursor-pointer flex items-center text-spkfilter text-fs12 p-2 px-3"> <img src="@/assets/budget/addfund.svg" >Fund </a>
              </li>
              <li>
                <a class="cursor-pointer flex items-center text-spkfilter text-fs12 p-2 px-3"> Distribute </a>
              </li>
              <li>
                <a class="cursor-pointer flex items-center text-spkfilter text-fs12 p-2 px-3">  Transfer Fund </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bg-btnbudget ml-3 cursor-pointer flex rounded-radius4 px-3 py-3 items-center shadow-filtershadow mr-4"
          @click="historyPage"
        >
          <img src="@/assets/budget/budgetfilter.svg" class="w-4 mr-2" />
          <span class="ml-1 mr-2 text-greytxt text-fs13">History</span>
        </div>
      </div>

      <div class="table-responsive">
        <VTable
          class="w-full tabletreewrp text-spkfilter text-fs14"
          :data="utilization"
          :hide-sort-icons="true"
          :page-size="5"
        >
          <template #head>
            <tr>
              <VTh sort-key="contractname"><span class="w-300px inline-block">BUDGET OWNER</span></VTh>
              <VTh sort-key="conlist"><span class="w-20px inline-block"></span></VTh>
              <VTh sort-key="contproduct">TOTAL BUDGET</VTh>
              <VTh sort-key="contstartdate">ACTUAL SPENT</VTh>
              <VTh sort-key="contenddate">COMMITTED</VTh>
              <VTh sort-key="contamount">REMAINING BUDGET</VTh>
              <!-- <VTh sortKey="contsoftcapamount"><span class="w-100px inline-block whitespace-normal">Soft Cap Amount</span></VTh>
                      <VTh sortKey="contsoftcap">Soft Cap</VTh> -->
              <VTh sort-key="contutilization">UNALLOCATED</VTh>
              <VTh sort-key="contremainingcap"><span class="w-100px inline-block whitespace-normal">ALLOCATED </span></VTh>
            </tr>
          </template>
          <template #body="{ rows }">
            <tr>
              <td>
                <div class="flex items-center justify-between">
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
                    Arazlo
                  </div>
                </div>
              </td>
              <td>
                <div><img src="@/assets/budget/collapse.svg" class="mr-3 cursor-pointer" /></div>
              </td>
              <td>-</td>
              <td>01/13/2021</td>
              <td>12/31/2021</td>
              <td>$2,00,000</td>
              <!-- <td>$4,88,000</td>
                      <td>178%</td> -->
              <td>$85,000</td>
              <td>$1,15,000</td>
            </tr>
            <tr v-if="togglefirstchild" class="child1">
              <td>
                <div class="flex items-center justify-between">
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

                    East (Amanda Broesder)
                  </div>
                </div>
              </td>
              <td>
                <div><img src="@/assets/budget/collapse.svg" class="mr-3 cursor-pointer" /></div>
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>$1,70,000</td>
              <!-- <td>$1,61,000</td>
                      <td>90%</td> -->
              <td>$70,000</td>
              <td>$1,00,000</td>
            </tr>

            <tr v-if="showfirstchildren" class="child2">
              <td>
                <div class="flex items-center">Mid-Atlantic -East(Austin Kinchen)</div>
              </td>
              <td></td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>$70,000</td>
              <!-- <td>$28,000</td>
                      <td>90%</td> -->
              <td>$40,000</td>
              <td>$30,000</td>
            </tr>

            <!--  -->
            <tr>
              <td>
                <div class="flex items-center justify-between">
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
                    SLIQ
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <img
                    src="@/assets/budget/collapse.svg"
                    class="mr-3 cursor-pointer"
                  />
                </div>
              </td>
              <td>-</td>
              <td>01/13/2021</td>
              <td>12/31/2021</td>
              <td>$2,00,000</td>
              <!-- <td>$4,88,000</td>
                      <td>178%</td> -->
              <td>$85,000</td>
              <td>$1,15,000</td>
            </tr>
            <!--  -->
            <!--  -->
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
                  DUOBRII
                </div>
              </td>
              <td></td>
              <td>-</td>
              <td>01/13/2021</td>
              <td>12/31/2021</td>
              <td>$2,00,000</td>
              <!-- <td>$4,88,000</td>
                      <td>178%</td> -->
              <td>$85,000</td>
              <td>$1,15,000</td>
            </tr>
            <!--  -->

            <!--  -->
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
                  JUBLIA
                </div>
              </td>
              <td></td>
              <td>-</td>
              <td>01/13/2021</td>
              <td>12/31/2021</td>
              <td>$2,00,000</td>
              <!-- <td>$4,88,000</td>
                      <td>178%</td> -->
              <td>$85,000</td>
              <td>$1,15,000</td>
            </tr>
            <!--  -->
            <!--  -->
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
                  PLUS + Physician Dispense
                </div>
              </td>
              <td></td>
              <td>-</td>
              <td>01/13/2021</td>
              <td>12/31/2021</td>
              <td>$2,00,000</td>
              <!-- <td>$4,88,000</td>
                      <td>178%</td> -->
              <td>$85,000</td>
              <td>$1,15,000</td>
            </tr>
            <!--  -->
          </template>
        </VTable>
      </div>
    </v-card-box>
  </div>
</template>
<script lang="ts" src="./Budget.ts"></script>
