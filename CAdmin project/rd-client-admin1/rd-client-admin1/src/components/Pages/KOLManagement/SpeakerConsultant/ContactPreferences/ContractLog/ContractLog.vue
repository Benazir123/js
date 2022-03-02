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
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="profile"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between">
            <ca-left-menu></ca-left-menu>

            <div class="w-spright">
              <div class="flex items-center justify-between mb-6">
                <v-title menu="Contract" class="mb-0 mbcan"></v-title>
                <div
                  class=" inline-flex items-center cursor-pointer
                    justify-center
                    rounded-radius6 text-fs14
                    bg-blue px-4 py-2 text-white
                  "
                >
                  <img src="@/assets/plus.svg" class="mr-2" />
                  Add Contract
                </div>
              </div>

              <div class="table-responsive">
                <!-- <tree-table class="table treetablewrp" :columns="columns" :table-data="tableData">
                  <template #nodeTemplate="nodeProps">
                    <utilization-data v-bind="nodeProps" :keys-to-calculate="keysToCalculate" :columns="columns"/>
                  </template>
                </tree-table> -->

                <VTable
                  class="w-full tabletreewrp text-spkfilter text-fs14"
                  :data="utilization"
                  :hide-sort-icons="true"
                  :page-size="pagePerRow"
                >
                  <template #head>
                    <tr class="text-secgrey text-fs14 font-semibold">
                      <VTh sort-key="contractname"><span class="w-300px inline-block">Contract</span></VTh>
                      <VTh sort-key="conttype">Type</VTh>
                      <VTh sort-key="contproduct">Product</VTh>
                      <VTh sort-key="contstartdate">Start Date</VTh>
                      <VTh sort-key="contenddate">End Date</VTh>
                      <VTh sort-key="contstatus">Status</VTh>
                      <VTh sort-key="contmaxcomhours"
                        >Max Contract<br />
                        Hours</VTh
                      >
                      <VTh sort-key="contmaxcomvalues"
                        >Max Contract<br />
                        Values</VTh
                      >
                      <VTh sort-key="contaction"></VTh>
                    </tr>
                  </template>

                  <template #body="{ rows }">
                    <tr>
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center text-spkfilter">
                          <img
                            v-if="togglefirstchild == true"
                            src="@/assets/utiopen.svg"
                            class="mr-3 cursor-pointer"
                            @click="togglefirstchild = !togglefirstchild"
                          />
                          <img
                            v-if="togglefirstchild == false"
                            src="@/assets/uticlose.svg"
                            class="mr-3 cursor-pointer"
                            @click="togglefirstchild = !togglefirstchild"
                          />
                          Master Service Aggreement
                        </div>
                      </td>
                      <td class="text-contype font-medium">Master</td>
                      <td class="text-contype font-medium">Adtralza, DSA</td>
                      <td class="text-contype font-medium">01/13/2021</td>
                      <td class="text-contype font-medium">12/31/2021</td>
                      <td>
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-medium">500 hrs</td>
                      <td class="text-contype font-medium">$2,00,000</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4" @click="showView()">
                          <img src="@/assets/ellip.svg" />
                        </div>
                        <ul
                          v-if="viewPop"
                          class="bg-white w-100px absolute right-0 top-full -mt-2 mr-4 border border-spkfilterborder rounded-radius5 z-10 shadow-filtershadow"
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
                      <td class="text-spkfilter font-medium">
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
                          Commercial
                        </div>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">Adtralza</td>
                      <td class="text-contype font-normal">01/13/2021</td>
                      <td class="text-contype font-normal">12/31/2021</td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
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
                          2021 Commercial SOW
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal">DSA</td>
                      <td class="text-contype font-normal">01/13/2021</td>
                      <td class="text-contype font-normal">12/31/2021</td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>

                    <tr v-if="showfirstchild2 && showfirstchildren" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          June 2021 Addendum to 2021 SOW
                        </div>
                      </td>
                      <td class="text-contype font-normal">ADDENDUM</td>
                      <td class="text-contype font-normal">Adtralza</td>
                      <td class="text-contype font-normal">01/13/2021</td>
                      <td class="text-contype font-normal">12/31/2021</td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
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
                          2021 Commercial SOW
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal">Adtralza</td>
                      <td class="text-contype font-normal">01/13/2021</td>
                      <td class="text-contype font-normal">12/31/2021</td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>

                    <tr v-if="showfirstchild5" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          June 2021 Addendum to 2021 SOW
                        </div>
                      </td>
                      <td class="text-contype font-normal">ADDENDUM</td>
                      <td class="text-contype font-normal">DSA</td>
                      <td class="text-contype font-normal">01/13/2021</td>
                      <td class="text-contype font-normal">12/31/2021</td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
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
                          Medical
                        </div>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">Adtralza</td>
                      <td class="text-contype font-normal">01/13/2021</td>
                      <td class="text-contype font-normal">12/31/2021</td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr v-if="togglesecondsecchild && togglefirstchild" class="child2">
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
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>

                    <tr v-if="showfirstchild6" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          Dale Vincent 25NOV2021 HCP Work Order 2 (Peds Strategy Consulting)
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">9 hrs</td>
                      <td class="text-contype font-normal">$36,000</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>

                    <tr v-if="showfirstchild6" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          Hazel Shane 17JAN2021 HCP Work Order 3 (Peds Ad Board).docx[75].pdf
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">35 hrs</td>
                      <td class="text-contype font-normal">$14,000</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr v-if="showfirstchild6" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          Alaa Abousaif 17JAN2021 HCP Work Order4 (MI& E Consulting - EXPAREL and PK[34].pdf
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">250 hrs</td>
                      <td class="text-contype font-normal">$100,000</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>

                    <tr v-if="togglesecondsecchild && togglefirstchild" class="child2">
                      <td>
                        <div class="flex items-center">
                          <img
                            v-if="showfirstchild7 == true"
                            src="@/assets/utiopen.svg"
                            class="mr-3 cursor-pointer"
                            @click="showfirstchild7 = !showfirstchild7"
                          />
                          <img
                            v-if="showfirstchild7 == false"
                            src="@/assets/uticlose.svg"
                            class="mr-3 cursor-pointer"
                            @click="showfirstchild7 = !showfirstchild7"
                          />
                          Medical Innovation & Educations
                        </div>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">-</td>
                      <td class="text-contype font-normal">-</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>

                    <tr v-if="showfirstchild7" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          Franklin 25NOV2021 HCP Work Order 2 (Peds Strategy Consulting)
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">9 hrs</td>
                      <td class="text-contype font-normal">$36,000</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>

                    <tr v-if="showfirstchild7" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          John James 17JAN2021 HCP Work Order 3 (Peds Ad Board).docx[75].pdf
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">35 hrs</td>
                      <td class="text-contype font-normal">$14,000</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>
                    <tr v-if="showfirstchild7" class="child3">
                      <td class="text-spkfilter font-normal">
                        <div class="flex items-center">
                          James Antony 17JAN2021 HCP Work Order4 (MI& E Consulting - EXPAREL and PK[34].pdf
                        </div>
                      </td>
                      <td class="text-contype font-normal">SOW</td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal"></td>
                      <td class="text-contype font-normal">
                        <v-smallbutton class="bg-green text-green text-fs12 actbtn ml-2 px-4 py-2 cursor-default">
                          Active
                        </v-smallbutton>
                      </td>
                      <td class="text-contype font-normal">250 hrs</td>
                      <td class="text-contype font-normal">$100,000</td>
                      <td class="relative">
                        <div class="cursor-pointer float-right mr-4">
                          <img src="@/assets/ellip.svg" />
                        </div>
                      </td>
                    </tr>
                  </template>
                </VTable>
              </div>
            </div>
          </div>

          <!--  -->
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./ContractLog.ts"></script>
