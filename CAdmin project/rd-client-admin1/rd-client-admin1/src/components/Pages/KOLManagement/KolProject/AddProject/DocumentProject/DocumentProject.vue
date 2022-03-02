<template>
  <div class="flex bg-lite-blue-bg generalspk commonform">
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
                <div class="flex justify-between items-center">
                              <v-title menu="Documents" class="-mb-0"></v-title>
             
               <v-smallbutton class="bg-blue py-1.5 px-6 rounded-radius6 text-white flex text-fs14 items-center"
                    @click="addcommentproject()" ><img src="@/assets/addwhite.svg" class="mr-2" />Add Document</v-smallbutton>
                </div>
                <div class="table-responsive hcpbord mt-3" >
                <VTable :data="docdetails" class="w-full" :hideSortIcons="true">
                  <template #head>
                    <tr>
                      <VTh sortKey="nosorting">Name</VTh>
                      <VTh sortKey="nosorting">  Type </VTh>
                      <VTh sortKey="nosorting"> Document</VTh>
                      <VTh sortKey="nosorting">Actions</VTh>
                      <VTh sortKey="nosorting"></VTh>
                    </tr>
                  </template>
                  <template #body="{ rows }">
                    <tr v-for="row in rows" :key="row.id">
                        <td>{{ row.docname }}</td>
                        <td>{{ row.doctype }}</td>
                        <td>
                          <div class="flex items-center">
                          <img class="cursor-pointer" src="@/assets/pdfdoc.svg"> <span class="text-bluetxt text-fs13 ml-1.5">PDF</span>
                          </div>
                        </td>
                        <td><v-smallbutton
                              class="
                                bg-skyblue
                                text-bluetxt
                                p-1
                                px-2
                                mr-3
                                rounded-radius6
                                cursor-pointer
                              "
                              @click="download(row.content_preview_url)"
                              >Preview</v-smallbutton
                            ></td>
                        <td><v-small-button @click="editcommentproject()" class="cursor-pointer"><img src="@/assets/editblue.svg" /></v-small-button></td>
                    </tr>
                  </template>
                </VTable>
              </div>
              <VTPagination :boundary-links="true" style="display:none" />
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
    <!-- Add document starts here -->
     <div class="prescriber">
                <aside
                  class="right-drawer ease-in-out transform transition-all duration-700 z-50"
                  :style="{
                    right: adddocumentproject ? '0' : '-85%',
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

                      <p class="text-base text-parenttheme-white font-semibold"> Add new document</p>
                    </div>
                    <div class="cursor-pointer" @click="adddocumentproject = false">
                      <img src="@/assets/close-white.svg" />
                    </div>
                  </div>
                  <!-- Collab meeeting Section -->
                  <div class="px-5 py-3">
                    <div class="mb-5">
                    <v-label value="Document Type" class="mb-2" />
                    <select class="border border-graymenu w-full outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 block w-auto leading-normal text-dashselect text-fs14 rounded-radius5 ">
                      <option selected="selected">Select Document Type</option>
                      <option>PDF</option>
                      <option>DOC</option>
                    </select>
                    </div>
                    <div class="mb-5">
                        <v-label value="Upload Document" class="text-greytxt text-fs14" />
                        <div
                          class="
                            w-full
                            my-2
                            bg-white
                            relative
                            border-dashed border border-projectupload
                            h-40
                            rounded-radius5
                            cursor-pointer flex justify-center items-center bg-projectdocupload
                          "
                        >
                           <input
                                type="file"
                                class="
                                  absolute
                                  bottom-0
                                  top-0
                                  right-0
                                  opacity-0
                                  left-0
                                  w-full
                                "
                              />
                          <div class="">
                             <p class="text-fs14 text-greytxt text-center flex items-center">
                  <img src="@/assets/downloadblue.svg" class="mr-2" />

                  <span class="text-textblue font-normal text-fs14">Upload your Document </span>
                             </p>
                          </div>
                        </div>
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
                        class="font-w-normal text-fs12 py-2 px-5   float-right text-greytxt bg-clrbtn rounded-radius6 mr-4"
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
                    adddocumentproject ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
                  ]"
                  :style="{
                    transition: adddocumentproject ? '.7s' : '0 delay-700',
                  }"
                  @click="adddocumentproject = false"
                ></div>
              </div>
              <!-- Add document ends here -->
               <div class="prescriber">
                <aside
                  class="right-drawer ease-in-out transform transition-all duration-700 z-50"
                  :style="{
                    right: editdocumentproject ? '0' : '-85%',
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

                      <p class="text-base text-parenttheme-white font-semibold"> Edit Document</p>
                    </div>
                    <div class="cursor-pointer" @click="editdocumentproject = false">
                      <img src="@/assets/close-white.svg" />
                    </div>
                  </div>
                  <!-- Collab meeeting Section -->
                  <div class="px-5 py-3">
                    <div class="mb-5">
                    <v-label value="Document Type" class="mb-2" />
                    <select class="border border-graymenu w-full outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 block w-auto leading-normal text-dashselect text-fs14 rounded-radius5 ">
                      <option selected="selected">PDF</option>
                      <option>DOC</option>
                    </select>
                    </div>
                    <div class="mb-5">
                        <v-label value="Upload Document" class="text-greytxt text-fs14" />
                      <div class="flex justify-between items-center mt-3">
                        <div class="flex">
                         <img src="@/assets/documentsample.svg" class="w-20" />
                         <div class="ml-4">
                           <p class="text-fs14 text-doctext font-semibold">Document 1</p>
                           <span class="text-fs14 text-mbcolor">2.3 MB</span>
                         </div>
                        </div>
                         <img src="@/assets/delete.svg" class="mr-3" />
                      </div>
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
                        >Clear
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
                    editdocumentproject ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
                  ]"
                  :style="{
                    transition: editdocumentproject ? '.7s' : '0 delay-700',
                  }"
                  @click="editdocumentproject = false"
                ></div>
              </div>
  </div>
</template>
<script lang="ts" src="./DocumentProject.ts"></script>