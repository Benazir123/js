<template>
  <div>
     <div class="flex justify-between ">
          <div>
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Project"></v-breadcrumb>
          </div>
        </div>
     <v-card-box>
     <div class="flex justify-between items-center">
       <h4 class="block text-left text-fs20 block text-greytxt leading-loginlabellineheight font-semibold">
    Project
  </h4>
     <div class="flex items-center">
      <v-smallbutton
      class="bg-blue py-2 px-4 rounded-radius6 text-white flex text-fs14 items-center" @click="addnewspeakerdrawer()" 
      ><img src="@/assets/addwhite.svg" class="mr-2" />Add New</v-smallbutton
    >
     <v-smallbutton  
          class="
            bg-yellow
            text-white
            py-2
            px-6
            rounded-radius6
            cursor-pointer
            ml-2
            text-fs14
            font-w-normal
          "
          >Upload</v-smallbutton
        >
    </div>
     </div>
     </v-card-box>
    <v-card-box>
      <div class="flex justify-between relative">
        <div class="flex">
              <div class="mr-8">
                <v-label value="Product" class="text-formlabel text-fs14 font-bold" />
                <div class="my-1 kolconsultantdrop">
                  <select class="border border-graymenu w-full outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 block w-auto leading-normal text-dashselect text-fs14 rounded-radius5" >
                    <option selected="selected">Xifaxan0HE-2021-001</option>
                    <option>Xifaxan0HE-2021-002</option>
                    <option>Xifaxan0HE-2021-003</option>
                    <option>Xifaxan0HE-2021-004</option>
                    <option>Xifaxan0HE-2021-005</option>
                  </select>
                </div>
              </div>
              <div class="mr-8">
                <v-label value="Year" class="text-formlabel text-fs14 font-bold" />
                <div class="my-1 kolconsultantdrop">
                  <select class="border border-graymenu w-full outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 block w-auto leading-normal text-dashselect text-fs14 rounded-radius5">
                    <option selected="selected">2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                  </select>
                </div>
              </div>
          <!-- Search one -->
        </div>
        <div class="flex relative items-center" style="display:none">
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
              py-2
            "
              >2</span
            >
          </div>
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
            rounded-radius8
          "
              >
                <img src="@/assets/export.svg" class="mr-2" />
                <span class="ml-1 text-greytxt text-fs13 font-normal">Export</span>
              </div>
              <v-date-picker
          @apply-date-filter="applyDateFilter($event)"
        ></v-date-picker>
        </div>
      </div>
      <div v-if="hidefilter" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="showfilter"></div>
      <component
        :is="'v-filter'"
        v-if="hidefilter"
        :key="filterKey"
        :eng-filter="engFilter"
        @apply-filter="applyFilter($event)"
      ></component>
    </v-card-box>
    <div class="table-responsive eng-det projectsdetailss">
      <VTable :data="project" class="w-full" :filters="filters" :hideSortIcons="true">
        <template #head>
          <tr>
            <VTh sortKey="nosorting"><v-checkbox /> </VTh>

            <VTh sortKey="nosorting">
              Assessment #
            </VTh>
            <VTh sortKey="nosorting">
              Strategic<br> Imperatives</VTh>
            <VTh sortKey="nosorting">Product/ Asset Team</VTh>

            <VTh sortKey="nosorting"
              >Engagement Type</VTh>
            <VTh sortKey="nosorting">Estimated # of HCPs<br> per Engagement  </VTh>
            <VTh sortKey="nosorting">Estimated Time Frame </VTh>
            <VTh sortKey="nosorting"># of Tier 1 </VTh>
            <VTh sortKey="nosorting"># of Tier 2 </VTh>
            <VTh sortKey="nosorting"># of Tier 3 </VTh>
            <VTh sortKey="nosorting">Estimated Total Expenses </VTh>
            <VTh sortKey="nosorting">Status </VTh>
            <VTh sortKey="nosorting" class="w-24">Actions </VTh>
            <VTh sortKey="arrow" class="w-44"></VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
            <v-checkbox />
            </td>
            <td><a  @click="createproject()" class="cursor-pointer">{{ row.id }}
           </a></td>
            <td >  {{ row.value}}
            </td>
            <td>
            {{ row.product }}
            </td>
            <td>
            {{ row.type }}
            </td>
            <td align="center ">
            {{row.eng }}
            </td>

            <td>
              {{ row.timeframe }}
            </td>
            <td>2</td>
            <td>4</td>
            <td>6</td>
            <td>{{ row.expense }}</td>
            <td>       <div class="flex">
                <span  :class="'btn '+ engStatusColor(row.status)"> {{row.status}}</span>
              </div></td>
            <td class="w-24"> <div class="flex items-center w-24">
              <a >     <img src="@/assets/greencheck.svg" class="mr-3 cursor-pointer" /></a>
                 <a >  <img src="@/assets/closered.svg" class="mr-3 cursor-pointer" /></a>
                   <a> <img src="@/assets/editblue.svg" class="cursor-pointer" /></a>
                          </div></td>
            <td>
              <!-- <img src="@/assets/downarrow.svg" @click="hideEngDetails = true;" class="cursor-pointer"/> -->
              <img :src="changeArrow"  class="cursor-pointer mr-8" />
              <!-- @click="showEngDetails" -->
            </td>
          </tr>
           <engagement-inner-row v-if="innerrow"></engagement-inner-row>
        </template>
      </VTable>


             <!-- Add New Project -->
              <div class="prescriber speakerdrawers">
      <aside
        class="z-50 transition-all duration-700 ease-in-out transform right-drawer"
        :style="{
          right: isaddnewspeakerdrawer ? '0' : '-85%',
        }"
      >
        <div
          class="flex items-center justify-between px-3 py-2 mb-2 text-base font-bold text-white rounded-t-lg bg-blue"
        >
          <div class="flex">
            <p class="text-base font-semibold text-parenttheme-white">
              Add Project
            </p>
          </div>
          <div class="cursor-pointer" @click="isaddnewspeakerdrawer = false">
            <img src="@/assets/close-white.svg" />
          </div>
        </div>
        <!-- Collab meeeting Section -->
      <div class="p-4 text-xs h-4/5 scroller">
        <div class="pb-3">
                      <v-label value="ID" class="mb-2" />
                      <v-inputall v-model="name" inputType="text"  name="name" label=""  />
                    </div>
                    <div class="pb-3">
                      <v-label value="Type of Engagement" class="mb-2"  />
       <v-select name="Type of Engagement">
                  <option disabled selected>Choose Engagement Type</option>
                  <option>Advisor Board</option>
                  <option>Consultancy</option>
                </v-select>                    
                </div>

                    <div class="pb-3">
                      <v-label value="Contact Person" class="mb-2"  />
                      <v-inputall v-model="name" inputType="text" name="name" label=""/>
                    </div>
                    <div class="pb-3">
                      <v-label value="Estimated Timeframe" class="mb-2"   />
                      <v-inputall v-model="name" inputType="text" name="name" label="" />
                    </div>
                    <div class="pb-3">
                      <v-label value="Estimated # of Engagements" class="mb-2" />
                      <v-inputall v-model="name" inputType="text" name="name" label="" />
                    </div>

                    <div class="pb-3">
                      <v-label value="Estimated Expenses" class="mb-2" />
                          <div
                        class="
                          relative
                          flex
                          w-full
                          flex-wrap
                          items-stretch
                        "
                      >
                        <span
                          class="
                            z-10
                            top-0 bottom-0
                            leading-snug
                            font-normal
                            absolute
                            text-center text-gray-400
                            bg-transparent
                            rounded
                            text-base
                            items-center
                            justify-center
                            w-8
                            p-3 border-r border-graymenu
                            flex
                          "
                        >
                         $
                        </span>
                      <v-inputall v-model="name" inputType="number" name="name" class="mt-0" label=""   />
                          </div>
                    </div>
                       <div class="pb-3">
                      <v-label value="Product" class="mb-2" />
                      <v-inputall  v-model="name" inputType="text" name="name" label="" />
                    </div>
                    <div class="pb-3">
                      <v-label value="Reason for Engagement" class="mb-2" />
                      <v-textarea   type="text"  placeholder=""/>
                    </div>
      <div class="absolute bottom-0 left-0 right-0 flex justify-end block p-2 px-2 ml-0 mr-2 bg-white border-t border-opacity-25 text-fs18 border-filtertitle"><button class="flex items-center px-2 px-6 py-1 py-2 mr-4 font-normal font-bold transition duration-150 ease-in-out border-transparent text-fs12 active:bg-gray-900 focus:outline-none focus:ring-0 rounded-radius8 bg-clrbtn rounded-radius4 text-utilihr justify-content-end">Cancel </button><button class="flex items-center px-2 px-6 py-1 py-2 font-bold tracking-normal text-white transition duration-150 ease-in-out border-transparent text-fs12 active:bg-gray-900 focus:outline-none focus:ring-0 rounded-radius8 bg-blue rounded-radius6 text-fs14 justify-content-end">Submit </button></div>
      </div>
      </aside>

      <div
        :class="[
          'drawer-mask ease-in-out transform transition-all right-0 left-0',
          isaddnewspeakerdrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
        ]"
        :style="{
          transition: isaddnewspeakerdrawer ? '.7s' : '0 delay-700',
        }"
        @click="isaddnewspeakerdrawer = false"
      ></div>
    </div>
    </div>
    <VTPagination :boundary-links="true" />
                       <!-- <a @click="showspeakeraligndrawer()"> <img src="@/assets/editblue.svg" class="" /></a> -->


  </div>
</template>
<script lang="ts" src="./KolProject.ts"></script>
<style>

</style>