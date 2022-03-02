<template>
  <div class="flex bg-lite-blue-bg commonform">
    <div class="flex w-full h-full justify-between">
      <div class="w-full">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Project"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="flex justify-between items-center border-b border-searchbox -m-4 p-4 mb-1 commtitle">
            <v-title menu="Create Form" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="backproject()"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between mt-8">
            <project-left-menu></project-left-menu>
            <div class="w-spright">
              <div class="flex justify-between mt-2">
                <h6 class="text-ffstitle my-2 text-fs16">
                  Assessment Details <span class="text-darkgrey text-fs14">(Xifaxan0HE-2021-001)</span>
                </h6>
                <div class="flex items-center">
                  <v-smallbutton
                    class="bg-blue py-1.5 px-4 rounded-radius6 text-white flex text-fs14 items-center"
                     @click="showspeakeraligndrawer()"
                    ><img src="@/assets/addwhite.svg" class="mr-2" />Add New</v-smallbutton
                  >
                  <div
                    class="
                      bg-graymenu
                      cursor-pointer
                      flex
                      rounded-radius4
                      px-4
                      py-2
                      items-center
                      shadow-filtershadow
                      ml-2
                      rounded-radius8
                    "
                  >
                    <img src="@/assets/export.svg" class="mr-2" />
                    <span class="ml-1 text-greytxt text-fs13 font-normal">Export</span>
                  </div>
                </div>
              </div>
              <div class="table-responsive hcpbord mt-3" >
                <VTable :data="hcpdetail" class="w-full" :filters="filters" :hideSortIcons="true">
                  <template #head>
                    <tr>
                      <VTh sortKey="nosorting">Name</VTh>

                      <VTh sortKey="nosorting" class="w-28"> Address </VTh>
                      <VTh sortKey="nosorting"> City</VTh>
                      <VTh sortKey="nosorting">State</VTh>

                      <VTh sortKey="nosorting">Zip</VTh>
                      <VTh sortKey="nosorting">ID</VTh>
                      <VTh sortKey="nosorting">License #</VTh>
                      <VTh sortKey="nosorting">Tier</VTh>
                      <VTh sortKey="nosorting">Rate</VTh>
                      <VTh sortKey="nosorting">Pre/Post <br />Service Time</VTh>
                      <VTh sortKey="nosorting">Service Hours</VTh>
                      <VTh sortKey="nosorting">Travel Hours</VTh>
                      <VTh sortKey="nosorting">Contract Hours</VTh>
                      <VTh sortKey="nosorting"> Total Compensation</VTh>
                      <VTh sortKey="nosorting">Status</VTh>
                      <VTh sortKey="nosorting" class="w-24">Actions </VTh>
                    </tr>
                  </template>
                  <template #body="{ rows }">
                    
                    <tr v-for="row in rows" :key="row.id" >
                      <td>
                        <div class="flex items-center w-40">
                          <div class="flex-shrink-0 w-8 h-8" @click="showUserProfile()">
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
                      <td class="w-28">
                        <div class="w-56">{{ row.address }}</div>
                      </td>
                      <td>{{ row.city }}</td>
                      <td>{{ row.state }}</td>
                      <td>{{ row.zip }}</td>
                      <td>{{ row.id }}</td>

                      <td>{{ row.license }}</td>
                      <td>1</td>
                      <td>650</td>
                      <td>650</td>
                      <td>1.5</td>
                      <td>2.5</td>
                      <td>1.5</td>
                      <td>$5,000</td>
                      <td>
                        <div class="flex">
                          <span :class="'btn ' + engStatusColor(row.statusmark)"> {{ row.statusmark }}</span>
                        </div>
                      </td>
                      <td class="actionhcp">
                        <div class="flex items-center justify-center w-24 relative ">
                          <img src="@/assets/ellip.svg" @click="openmore()" class="cursor-pointer p-3" />
                          <!-- <v-small-button
                            ><img src="@/assets/downloadblue.svg" class="mr-4 cursor-pointer"
                          /></v-small-button>
                          <v-small-button><img src="@/assets/views.svg" class="mr-4 cursor-pointer" /></v-small-button>
                          <v-small-button class="cursor-pointer"><img src="@/assets/editblue.svg" /></v-small-button> -->
                          <div class="fixed top-full bottom-0 left-0 z-20 right-0" v-if="showmore" @click="openmore()"></div>
                          <div
                            v-if="showmore"
                            class=" actionhcpdetail
                              border border-spkfilterborder
                              rounded-radius5
                              shadow-filtershadow
                              bg-white
                              absolute
                              right-10
                              top-6
                              w-28
                              z-40
                            "
                          >
                            <ul >
                              <li
                                class="
                                  cursor-pointer
                                  flex
                                  items-center
                                  text-spkfilter text-fs12
                                  border-b border-spkfilterinnerborder
                                  px-3
                                  py-2
                                "
                              >
                                <img src="@/assets/edit.svg" class="mr-2 w-4" /><span>Edit</span>
                              </li>
                              <li
                                class="
                                  cursor-pointer
                                  flex
                                  items-center
                                  text-spkfilter text-fs12
                                  border-b border-spkfilterinnerborder
                                  px-3
                                  py-2
                                "
                              >
                                <img src="@/assets/eyegrey.svg" class="mr-2 w-4" />View
                              </li>
                              <li
                                class="
                                  cursor-pointer
                                  flex
                                  items-center
                                  text-spkfilter text-fs12
                                  border-b border-spkfilterinnerborder
                                  px-3
                                  py-2
                                "
                              >
                                <img src="@/assets/exportgrey.svg" class="mr-2 w-4" />Export
                              </li>
                              <li
                                class="
                                  cursor-pointer
                                  flex
                                  items-center
                                  text-spkfilter text-fs12
                                  border-b border-spkfilterinnerborder
                                  px-3
                                  py-2
                                "
                              >
                                <img src="@/assets/logistics.svg" class="mr-2 w-4" />Logistics
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style="display:none">
                      <td colspan="16"> <p class="text-center p-10 text-red-600 font-bold">Please add HCP for Assessment Details </p>
                      </td>
                    </tr>
                    <engagement-inner-row v-if="innerrow"></engagement-inner-row>
                  </template>
                </VTable>
              </div>
              <VTPagination :boundary-links="true" style="display:none" />
              <div class="prescriber hcpdrawers">
                <aside
                  class="right-drawer ease-in-out transform transition-all duration-700 z-50"
                  :style="{
                    right: isOpenspeakeraligndrawer ? '0' : '-85%',
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
                      px-3
                      py-2
                      bg-blue
                      text-white
                    "
                  >
                    <div class="flex">
                      <img src="@/assets/speakeralign.svg" class="mr-2" />

                      <p class="text-base text-parenttheme-white font-semibold"> Speaker Aligned</p>
                    </div>
                    <div class="cursor-pointer" @click="isOpenspeakeraligndrawer = false">
                      <img src="@/assets/close-white.svg" />
                    </div>
                  </div>
                  <!-- Collab meeeting Section -->
                  <drawertable></drawertable>
                </aside>

                <div
                  :class="[
                    'drawer-mask ease-in-out transform transition-all right-0 left-0',
                    isOpenspeakeraligndrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
                  ]"
                  :style="{
                    transition: isOpenspeakeraligndrawer ? '.7s' : '0 delay-700',
                  }"
                  @click="isOpenspeakeraligndrawer = false"
                ></div>
              </div>
              <!-- add new page -->
              <!-- Add New Speaker -->
              <!-- add new page -->
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./HcpDetails.ts"></script>
