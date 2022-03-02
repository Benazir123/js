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
            <div class="w-spright">
            <div class="flex justify-between items-center">
            
                <v-title menu="Notes" class="-mb-0"></v-title>
              <v-smallbutton
                    class="bg-blue py-1.5 px-4 rounded-radius6 text-white flex text-fs14 items-center" @click="openaddnotesproject()"><img src="@/assets/addwhite.svg" class="mr-2" />Add Notes</v-smallbutton>
            </div>
         
           <div class="table-responsive hcpbord notetabs mt-3">
                        <VTable :data="logisticstable" class="w-full" :filters="filters" :hideSortIcons="true">
                          <template #head>
                            <tr>
                              <VTh sortKey="nosorting" #default="{}"> <div class="w-80">Notes Name</div> </VTh>

                              <VTh sortKey="nosorting">  Category</VTh>
                              <VTh sortKey="nosorting"> Updated By</VTh>
                              <VTh sortKey="nosorting"> Updated Date </VTh>
                            </tr>
                          </template>
                          <template #body="{ rows }">
                            <tr v-for="row in rows" :key="row.id">
                              <td>
                                <div class="w-96">{{ row.description }}</div>
                              </td>
                              <td>
                                {{ row.invoice }}
                              </td>
                              <td>
                                <div class="w-30">{{ row.hours }}</div>
                              </td>
                              <td>
                                {{ row.paid }}
                              </td>
                            </tr>
                          </template>
                        </VTable>
                      </div>
            </div>
                       </div>
        </v-card-box>
      </div>
    </div>
    <div class="prescriber">
                <aside
                  class="right-drawer ease-in-out transform transition-all duration-700 z-50"
                  :style="{
                    right: addnotesproject ? '0' : '-85%',
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

                      <p class="text-base text-parenttheme-white font-semibold"> Add Note</p>
                    </div>
                    <div class="cursor-pointer" @click="addnotesproject = false">
                      <img src="@/assets/close-white.svg" />
                    </div>
                  </div>
                  <!-- Collab meeeting Section -->
                      <div class="px-5 py-3">
                    <div class="mb-5">
                    <v-label value="Category Name" class="mb-2" />
                    <select class="border border-graymenu w-full outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 block w-auto leading-normal text-dashselect text-fs14 rounded-radius5 ">
                      <option selected="selected">Select Category Name</option>
                      <option>Payments</option>
                    </select>
                    </div>
                    <div class="mb-5">
                        <v-label value="Notes Name" class="text-greytxt text-fs14 mb-2" />
                     <v-textarea type="text" />
                      </div>
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
                        type="submit"
                        class="font-w-bold text-fs12 py-2 px-5 float-right text-greytxt bg-clrbtn rounded-radius6 mr-4"
                        >Cancel
                      </v-smallbutton>
                      <v-smallbutton
                        class="
                            bg-blue
                            flex
                            rounded-radius6
                            px-4
                            py-2
                            text-fs12 text-white
                            items-center
                            tracking-normal
                            justify-content-end
                            font-w-bold
                          "
                        >Submit
                        <!-- <img src="@/assets/button-bar-loader.svg" class="ml-2 w-6" /> -->
                      </v-smallbutton>
                    </div>
                      </div>
                </aside>

                <div
                  :class="[
                    'drawer-mask ease-in-out transform transition-all right-0 left-0',
                    addnotesproject ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
                  ]"
                  :style="{
                    transition: addnotesproject ? '.7s' : '0 delay-700',
                  }"
                  @click="addnotesproject = false"
                ></div>
              </div>
  </div>
</template>
<script lang="ts" src="./Notes.ts"></script>
