<template>
  <div class="flex bg-lite-blue-bg generalspk commonform">
    <div class="flex justify-between w-full h-full">
      <div class="w-full">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Project"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="flex items-center justify-between p-4 mb-1 -m-4 border-b border-searchbox commtitle">
            <v-title menu="Create Form" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center cursor-pointer text-fs13 text-bluetxt" @click="backproject()"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between mt-8">
            <project-left-menu></project-left-menu>
            <div class="w-spright logimenu relative">
              <ul class="flex flex-row flex-wrap mb-0 list-none">
                <li>
                  <a
                    class="
                      flex
                      block
                      px-12
                      py-2
                      font-semibold
                      leading-normal
                      border border-b-0 border-white
                      rounded-bl-none rounded-br-none
                      cursor-pointer
                      text-fs16
                      rounded-tl-radius8 rounded-tr-radius8
                    "
                    :class="{
                      'text-darkgrey bg-white text-secsemigrey ': openLogTab !== 1,
                      'text-white bg-tabactiveblue border border-tabactbor text-textblue': openLogTab == 1,
                    }"
                    v-on:click="toggleLogTabs(1)"
                  >
                    <span class="absolute w-10"></span>
                    Invoice
                  </a>
                </li>
                <li>
                  <a
                    class="
                      flex
                      block
                      px-12
                      py-2
                      font-semibold
                      leading-normal
                      border border-b-0 border-white
                      rounded-bl-none rounded-br-none
                      cursor-pointer
                      text-fs16
                      rounded-tl-radius8 rounded-tr-radius8
                    "
                    :class="{
                      'text-darkgrey bg-white text-secsemigrey ': openLogTab !== 2,
                      'text-white bg-tabactiveblue border border-tabactbor text-textblue': openLogTab == 2,
                    }"
                    v-on:click="toggleLogTabs(2)"
                  >
                    <span class="absolute w-10"></span>
                    Logistics
                  </a>
                </li>
              </ul>
              <div class="relative flex flex-col min-w-0 break-words">
                <div class="">
                  <div class="mt-3 tab-content tab-space">
                    <div v-bind:class="{ hidden: openLogTab !== 1, block: openLogTab === 1 }">
                      <div class="flex items-center justify-end absolute right-0 -top-10">
                        <div class="w-64 mr-3 searchbtn">
                          <v-input-search
                            v-model="searchByName"
                            label="Search by Meeting ID"
                            input-type="text"
                            name="namesearch"
                            @clearSearch="clearSearch('searchByName')"
                          ></v-input-search>
                        </div>
                        <div
                          class="
                            exportlog
                            mr-2
                            bg-graymenu
                            cursor-pointer
                            flex
                            rounded-radius4
                            px-4
                            py-2
                            items-center
                            shadow-filtershadow
                            rounded-radius8
                          "
                        >
                          <img src="@/assets/export.svg" class="mr-2" />
                          <span class="ml-1 text-greytxt text-fs13 font-normal">Export</span>
                        </div>
                        <v-smallbutton
                          class="bg-blue py-1.5 px-4 rounded-radius6 text-white flex text-fs14 items-center"
                          @click="openaddLogdrawer()"
                          ><img src="@/assets/addwhite.svg" class="mr-2" />Add New</v-smallbutton
                        >
                      </div>
                      <div class="table-responsive eng-det hcpbord logitable">
                        <VTable :data="logisticstable" class="w-full" :filters="filters" :hideSortIcons="true">
                          <template #head>
                            <tr>
                              <VTh sortKey="nosorting" #default="{}"> <div class="w-40">Consultant Name</div> </VTh>

                              <VTh sortKey="nosorting"> Description </VTh>
                              <VTh sortKey="nosorting"> Invoice# </VTh>
                              <VTh sortKey="nosorting">Hours</VTh>

                              <VTh sortKey="nosorting">Paid to Whom </VTh>
                              <VTh sortKey="nosorting">Date </VTh>
                              <VTh sortKey="nosorting">Payment Type </VTh>
                              <VTh sortKey="nosorting">Amount </VTh>
                              <VTh sortKey="nosorting">Version </VTh>
                              <VTh sortKey="nosorting">Action</VTh>
                            </tr>
                          </template>
                          <template #body="{ rows }">
                            <tr v-for="row in rows" :key="row.id">
                              <td>
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 w-8 h-8">
                                    <component
                                      :is="'v-profile'"
                                      :key="imgErrorSpk"
                                      :small-profile="true"
                                      :side-menu="true"
                                      :user-info="{
                                        letter_name: 'TA',
                                        full_name: 'Tala Ayyad',
                                        img: '',
                                        errorImg: '',
                                        id: '',
                                      }"
                                      @errorImg="errorImg(row.engagement_owner.user)"
                                    ></component>
                                  </div>
                                  <div class="ml-3">
                                    <p class="whitespace-no-wrap">
                                      {{ row.owner }}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="w-44">{{ row.description }}</div>
                              </td>
                              <td>
                                {{ row.invoice }}
                              </td>
                              <td>
                                <div class="w-10">{{ row.hours }}</div>
                              </td>
                              <td>
                                {{ row.paid }}
                              </td>
                              <td align="center ">
                                {{ row.date }}
                              </td>

                              <td>{{ row.payment }}</td>

                              <td>{{ row.amount }}</td>
                              <td>
                                <div class="my-1">
                                  <select
                                    class="
                                      border border-graymenu
                                      outline-none
                                      focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0
                                      rounded-md
                                      shadow-none
                                      text-sm
                                      py-2
                                      block
                                      w-auto
                                      leading-normal
                                      text-dashselect text-fs14
                                      rounded-radius5
                                    "
                                  >
                                    <option selected="selected">1</option>
                                    <option>1</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </td>
                              <td>
                                <div class="flex">
                                  <img src="@/assets/views.svg" class="cursor-pointer" @click="openLogdrawer()" />
                                  <img src="@/assets/editblue.svg" class="ml-2 cursor-pointer" @click="openaddLogdrawer()" />
                                </div>
                              </td>
                            </tr>
                          </template>
                        </VTable>
                      </div>
                      <div>
                        <table class="flex justify-end w-100 logitable text-greytxt">
                          <tr>
                            <td width="150"><div class="w-50">Total</div></td>
                            <td width="60">$28,000</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <!-- notes -->
                    <div class="speakernotes" v-bind:class="{ hidden: openLogTab !== 2, block: openLogTab === 2 }">
                      <p
                        style="display: none"
                        class="text-red-600 text-center p-40 font-bold flex justify-center items-center"
                      >
                        Coming Soon
                      </p>
                      <div class="table-responsive hcpbord eng-det ">
                        <VTable :data="logdetailtab" class="w-full" :filters="filters" :hideSortIcons="true">
                          <template #head>
                            <tr>
                              <VTh sortKey="nosorting" #default="{}"> <div class="">Meeting ID</div> </VTh>

                              <VTh sortKey="nosorting"> Engagement Type </VTh>
                              <VTh sortKey="nosorting"> Event Type </VTh>
                              <VTh sortKey="nosorting">Date/Time</VTh>

                              <VTh sortKey="nosorting">Number of <br />Consultants</VTh>
                              <VTh sortKey="nosorting">Location Name </VTh>
                              <VTh sortKey="nosorting"
                                >Location City<br />
                                / State
                              </VTh>
                              <VTh sortKey="nosorting">Status </VTh>
                              <VTh sortKey="nosorting">Total Cost </VTh>
                              <VTh sortKey="nosorting">Action</VTh>
                              <VTh sortKey="arrow"></VTh>
                            </tr>
                          </template>
                          <template #body="{ rows }">
                            <tr v-for="row in rows" :key="row.id">
                              <td>
                                {{ row.id }}
                              </td>
                              <td>
                                <div>{{ row.typeeng }}</div>
                              </td>
                              <td>
                                {{ row.typeenvt }}
                              </td>
                              <td>
                                <div class="">{{ row.datetime }}</div>
                              </td>
                              <td>
                                {{ row.consultant }}
                              </td>
                              <td>
                                <div class="w-32">
                                  {{ row.lname }}
                                </div>
                              </td>

                              <td>{{ row.lcitystate }}</td>
                              <td>
                                <span :class="'btn ' + engStatusColor(row.status)"> {{ row.status }}</span>
                              </td>
                              <td>{{ row.cost }}</td>
                              <td>
                                <div class="flex">
                                  <img src="@/assets/views.svg" class="cursor-pointer" />
                                  <img src="@/assets/editblue.svg" class="ml-2 cursor-pointer"  />
                                </div>
                              </td>
                              <td class="arrowtd">
                                <div class="">
                                <!-- <img src="@/assets/downarrow.svg" @click="hideEngDetails = true" class="cursor-pointer" /> -->
                                <img :src="changeArrow"  @click="showarrowDetails" class="cursor-pointer" />
                                </div>
                              </td>
                            </tr>
                                <logistics-inner-row v-if="innerrow"></logistics-inner-row>
                          </template>
                        </VTable>
                      </div>
                    </div>
                    <!-- notes -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
   
    <!--  -->
    <div class="prescriber logdrawermask">
      <aside
        class="right-drawer ease-in-out transform transition-all duration-700 z-50"
        :style="{
          right: isOpenLogdrawer ? '0' : '-85%',
        }"
      >
        <div class="flex justify-between items-center text-base font-bold rounded-t-lg mb-2 px-3 py-2 bg-blue text-white">
          <p class="text-base text-parenttheme-white font-semibold">Invoice</p>
          <div class="cursor-pointer" @click="isOpenLogdrawer = false">
            <img src="@/assets/close-white.svg" />
          </div>
        </div>
        <!-- Collab meeeting Section -->
        <drawer-logistics v-if="isOpenLogdrawer"></drawer-logistics>
      </aside>

      <div
        :class="[
          'drawer-mask ease-in-out transform transition-all right-0 left-0',
          isOpenLogdrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
        ]"
        :style="{
          transition: isOpenLogdrawer ? '.7s' : '0 delay-700',
        }"
        @click="isOpenLogdrawer = false"
      ></div>

      <!--  -->
    </div>
    <div class="prescriber openlogadd">
      <aside
        class="right-drawer ease-in-out transform transition-all duration-700 z-50"
        :style="{
          right: isOpenaddLogdrawer ? '0' : '-85%',
        }"
      >
        <div class="flex justify-between items-center text-base font-bold rounded-t-lg mb-2 px-3 py-2 bg-blue text-white">
          <p class="text-base text-parenttheme-white font-semibold">Add New</p>
          <div class="cursor-pointer" @click="isOpenaddLogdrawer = false">
            <img src="@/assets/close-white.svg" />
          </div>
        </div>
        <!-- Collab meeeting Section -->
        <div class="p-4 scroller scroll-ffsalign relative">
          <div class="relative flex justify-end">
            <div class="absolute -top-4 right-0">
              <v-date-picker isSingleDate="true"></v-date-picker>
            </div>
          </div>
          <p class="text-greytxt text-fs14 mb-2 -mt-2">From</p>
          <div class="bg-tabactiveblue p-4 rounded-xl mb-3 mt-5 border-logbor border">
            <div class="grid grid-cols-2 gap-4">
              <div class="mb-3 virtual-input">
                <v-label value="Consultant Name" class="mb-2" />
                <v-inputall inputType="text" label="Enter Consultant Name" name="name" v-model="name" />
              </div>
              <div class="mb-3 virtual-input">
                <v-label value="Insitute Name" class="mb-2" />
                <v-inputall inputType="text" label="Enter Insitute Name" name="name" v-model="name" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4">
              <div class="mb-3 virtual-input">
                <v-label value="Address" class="mb-2" />
                <v-inputall inputType="text" label="Enter Address" name="name" v-model="name" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="mb-3 virtual-input">
                <v-label value="Phone Number" class="mb-2" />
                <v-inputall inputType="number" label=" Enter Phone Number" name="name" v-model="name" />
              </div>
              <div class="mb-3 virtual-input">
                <v-label value="Email" class="mb-2" />
                <v-inputall inputType="text" label=" Enter Email" name="name" v-model="name" />
              </div>
            </div>
          </div>

          <p class="text-greytxt text-fs14 mb-2">To</p>
          <div class="bg-tabactiveblue p-4 rounded-xl mb-3 border-logbor border">
            <div class="grid grid-cols-1 gap-4">
              <div class="mb-3 virtual-input">
                <v-label value="Company Name" class="mb-2" />

                <v-inputall inputType="text" label="Enter Consultant Name" name="name" v-model="name" />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4">
              <div class="mb-3 virtual-input">
                <v-label value="Address" class="mb-2" />
                <v-inputall inputType="text" label="Enter Address" name="name" v-model="name" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="mb-3 virtual-input">
                <v-label value="Phone Number" class="mb-2" />
                <v-inputall inputType="number" label="Enter Phone Number" name="name" v-model="name" />
              </div>
              <div class="mb-3 virtual-input">
                <v-label value="Email" class="mb-2" />
                <v-inputall inputType="text" label="Enter Email" name="name" v-model="name" />
              </div>
            </div>
          </div>

          <p class="text-greytxt text-fs16 mb-2">Description</p>
          <div class="mb-3 virtual-input">
            <v-inputall inputType="text" label="Enter Consultant Name" name="name" v-model="name" />
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="mb-3 virtual-input">
              <v-label value="Hours" class="mb-2" />
              <v-inputall inputType="number" label=" Enter Hours" name="name" v-model="name" />
            </div>
            <div class="mb-3 virtual-input">
              <v-label value="Rate" class="mb-2" />
              <v-inputall inputType="number" label=" Enter Rate" name="name" v-model="name" />
            </div>
            <div class="mb-3 virtual-input">
              <v-label value="Amount" class="mb-2" />
              <v-inputall inputType="text" label="Enter Amount" name="name" v-model="name" />
            </div>
          </div>
        </div>
        <!--padding form-->
        <div
          class="
            p-2
            px-2
            ml-0
            mr-2
            border-t
            text-fs18
            block
            border-opacity-25 border-filtertitle
            absolute
            right-0
            bottom-0
            left-0
            flex
            justify-end
          "
        >
          <v-smallbutton
            class="
              bg-clrbtn
              flex
              rounded-radius4
              px-4
              py-2
              text-fs13 text-utilihr
              items-center
              font-normal
              mr-4
              justify-content-end
            "
            >Cancel
          </v-smallbutton>
          <v-smallbutton class="bg-blue py-2 px-4 rounded-radius6 font-normal text-white flex text-fs13 items-center"
            >Add</v-smallbutton
          >
        </div>
      </aside>

      <div
        :class="[
          'drawer-mask ease-in-out transform transition-all right-0 left-0',
          isOpenaddLogdrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
        ]"
        :style="{
          transition: isOpenaddLogdrawer ? '.7s' : '0 delay-700',
        }"
        @click="isOpenaddLogdrawer = false"
      ></div>

      <!--  -->
    </div>
  </div>
</template>
<script lang="ts" src="./Logistics.ts"></script>
