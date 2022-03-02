<template>
  <v-card-box>
    <v-title menu="AV" class="mb-4"></v-title>
    <!--  -->
    <div class="flex flex-wrap">
      <div class="w-full">
        <component
          :is="'tab-heading'"
          :key="reLoadeHeading"
          :active-tab="activeTab"
          :tab-list="tabListName"
          :tab-code="tabTittle"
          @tab-change="tabChange($event)"
        ></component>
        <div class="tab-content tab-space mt-6">
          <div
            :class="{
              hidden: activeTab !== 1,
              block: activeTab === 1,
            }"
          >
            <!--  -->
            <div class="flex flex-wrap">
              <div class="w-full">
                <div
                  class="
                    flex
                    items-end
                    justify-between
                    border-b border-searchbox
                  "
                >
                  <ul class="flex mb-0 list-none flex-wrap flex-row">
                    <li class="text-center cursor-pointer inline-block mr-8">
                      <a
                        class="
                          text-fs16
                          font-normal
                          inline-block
                          pb-2
                          cursor-pointer
                          relative
                          text-darkgrey
                        "
                        :class="{
                          'text-darkgrey': openInnerTab !== 1,
                          'text-textblue': openInnerTab === 1,
                        }"
                        @click="toggleInnerTabs(1)"
                      >
                        AV Information
                        <span
                          class="
                            w-12
                            h-0.5
                            inline-block
                            absolute
                            left-0
                            bottom-0
                          "
                          :class="{
                            'bg-white ': openInnerTab !== 1,
                            'bg-blue': openInnerTab === 1,
                          }"
                        ></span>
                      </a>
                    </li>
                    <li class="text-center cursor-pointer inline-block mr-8">
                      <a
                        class="
                          text-fs16
                          font-normal
                          inline-block
                          pb-2
                          cursor-pointer
                          relative
                          text-darkgrey
                        "
                        :class="{
                          'text-darkgrey': openInnerTab !== 2,
                          'text-textblue': openInnerTab === 2,
                        }"
                        @click="toggleInnerTabs(2)"
                      >
                        AV Request
                        <span
                          class="
                            w-12
                            h-0.5
                            inline-block
                            absolute
                            left-0
                            bottom-0
                          "
                          :class="{
                            'bg-white ': openInnerTab !== 2,
                            'bg-blue': openInnerTab === 2,
                          }"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content tab-space mt-8">
                  <div
                    :class="{
                      hidden: openInnerTab !== 1,
                      block: openInnerTab === 1,
                    }"
                  >
                    <div class="bg-avbg py-7 px-8 w-7/12">
                      <div class="mb-14 w-full">
                        <div v-if="isCheckedAv.length == 0" class="flex items-center justify-center font-bold">
                          <v-label value="Status:" class="text-greytxt text-fs16 font-bold mr-1" />
                          <p class="m-0 text-greytxt text-fs16">
                            Not Requested
                          </p>
                        </div>
                        <v-label value="Upload Confirmation Info" class="text-greytxt text-fs14 mb-8 font-semibold" />
                        <div class="w-full my-2 mb-8">
                          <label class="inline-flex items-center">
                            <v-checkbox
                              :disabled="true"
                              :is-checked="isCheckedAv.length != 0"
                              class="form-checkbox h-4 w-4 rounded-none"
                            />
                            <span class="ml-3 text-fs14 text-menuselectionlabel">AV Requested</span>
                          </label>
                        </div>
                        <div
                          v-if="document != '' && isAvRequest"
                          class="
                            flex flex-col
                            items-start
                            justify-start
                            font-bold
                          "
                        >
                          <div v-if="document.updatedAt" class="flex">
                            <v-label value="Date Ordered:" class="text-greytxt text-fs14 font-bold mr-1" />
                            <p class="m-0 text-greytxt text-fs14">
                              {{ dateFormate(document.updatedAt) }}
                            </p>
                          </div>
                          <div v-if="document.file_type">
                            <v-smallbutton
                              class="
                                bg-blue
                                rounded-radius4
                                py-2
                                px-6
                                text-white
                                mt-2
                                text-fs12
                              "
                              @click="download(document.file)"
                              >{{ document.file_type }}</v-smallbutton
                            >
                          </div>
                        </div>
                      </div>

                      <div class="mb-5 w-full">
                        <v-label value="Upload AV contract/agreement " class="text-greytxt text-fs14" />
                        <div
                          class="
                            w-full
                            my-2
                            bg-white
                            relative
                            border-dashed border-2 border-uploadarea
                            h-40
                            rounded-radius12
                            cursor-pointer
                          "
                        >
                          <div :class="{ ' disableview': ismultiLocation }">
                            <v-file-upload @selected-file="uploadFile($event)"></v-file-upload>
                          </div>
                          <div class="absolute bottom-4 w-full my-3">
                            <p class="text-fs14 text-greytxt text-center">
                              <!-- Drop your image here, or -->
                              <span v-if="fileName == ''" class="text-textblue">Select a file </span>
                              <span v-if="fileName != ''" class="text-textblue relative"
                                >{{ fileName }}
                                <div
                                  class="
                                    absolute
                                    -right-20
                                    -top-1
                                    px-1.5
                                    py-1.5
                                    flex
                                    bg-avbg
                                    rounded
                                    text-fs10 text-textblue
                                    font-semibold
                                    cursor-pointer
                                  "
                                  @click="removeFile()"
                                >
                                  <img src="@/assets/delete.svg" class="mr-1" />
                                  Remove
                                </div></span
                              >
                            </p>
                            <p
                              class="
                                text-secsemigrey text-fs12 text-center
                                mt-3
                              "
                            >
                              Supports Image,File
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-10 mb-8">
                      <v-smallbutton
                        :class="{ ' disableview': ismultiLocation }"
                        class="
                          bg-blue
                          rounded-radius4
                          py-2
                          px-6
                          text-white
                          ml-2
                          text-fs12
                          flex
                          items-center
                        "
                        @click="uploaAVdFile()"
                      >
                        Save
                        <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
                      </v-smallbutton>
                    </div>
                  </div>
                </div>
                <div
                  :class="{
                    hidden: openInnerTab !== 2,
                    block: openInnerTab === 2,
                  }"
                >
                  <!--  -->
                  <div class="flex flex-wrap">
                    <div class="w-full flex">
                      <div v-if="ismultiLocation" class="w-420">
                        <ul class="mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                          <li v-for="(data, index) in location" :key="index" class="mr-2 last:mr-0 flex-auto cursor-pointer">
                            <a
                              class="
                                text-xs
                                mb-4
                                font-bold
                                px-3
                                py-3
                                border border-uploadarea
                                rounded
                                block
                                leading-normal
                                relative
                              "
                              :class="{
                                'border-uploadarea bg-white ': activeLocation !== index,
                                'border-uploadarea  bg-avbg': activeLocation === index,
                              }"
                              @click="activeLoc(index, data.av)"
                            >
                              <span class="text-greytxt text-fs12 w-full block"> {{ data.name }}</span>
                              <span class="text-secsemigrey text-fs12 w-full block">{{ data.address }}</span>
                              <span class="text-secsemigrey text-fs12 w-full block"> {{ data.phone }}</span>
                              <b
                                class="
                                  absolute
                                  right-3
                                  top-0
                                  bottom-0
                                  flex
                                  justify-center
                                  items-center
                                "
                              >
                                <img src="@/assets/rightarrow.svg" alt="" class="w-2"
                              /></b>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="
                          relative
                          flex flex-col
                          min-w-0
                          break-words
                          w-full
                          mb-6
                        "
                      >
                        <div class="px-2 py-2 flex-auto">
                          <div class="tab-content tab-space">
                            <div
                              :class="{
                                hidden: openlocTab !== 1,
                                block: openlocTab === 1,
                              }"
                            >
                              <div class="bg-avbg py-4 px-6 mb-8">
                                <div v-if="!loader" class="grid grid-cols-3 gap-2">
                                  <div v-for="av in avList" :key="av.id">
                                    <div v-if="av.name != null" class="w-full mt-2 mb-4">
                                      <label class="inline-flex items-start">
                                        <v-checkbox
                                          :disabled="ismultiLocation"
                                          :is-checked="isChecked(av.id)"
                                          class="
                                            form-checkbox
                                            h-4
                                            w-4
                                            rounded-none
                                            mt-1
                                          "
                                          @change="updateAV($event, av.id)"
                                        />
                                        <span
                                          class="
                                            ml-3
                                            -mt-1
                                            text-fs13 text-greytxt
                                            leading-6
                                          "
                                          >{{ av.name }}</span
                                        >
                                      </label>
                                    </div>
                                  </div>

                                  <div></div>
                                </div>
                                <v-eng-loader v-if="loader"></v-eng-loader>
                              </div>
                            </div>
                            <div
                              :class="{
                                hidden: openlocTab !== 2,
                                block: openlocTab === 2,
                              }"
                            >
                              <div class="bg-avbg py-4 px-6 mb-8">
                                <div v-if="!loader" class="grid grid-cols-3 gap-2">
                                  <div v-for="av in avList" :key="av.id">
                                    <div v-if="av.name != null" class="w-full mt-2 mb-4">
                                      <label class="inline-flex items-start">
                                        <v-checkbox
                                          :is-checked="isChecked(av.id)"
                                          class="
                                            form-checkbox
                                            h-4
                                            w-4
                                            rounded-none
                                            mt-1
                                          "
                                          @change="updateAV($event, av.id)"
                                        />
                                        <span
                                          class="
                                            ml-3
                                            -mt-1
                                            text-fs13 text-greytxt
                                            leading-6
                                          "
                                          >{{ av.name }}</span
                                        >
                                      </label>
                                    </div>
                                  </div>

                                  <div></div>
                                </div>
                                <v-eng-loader v-if="loader"></v-eng-loader>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--  -->
                  <div class="-mt-10">
                    <v-label value="AV Comments" class="text-greytxt text-fs14 font-semibold mb-3.5" />
                    <div class="w-2/4" :class="{ ' disableview': ismultiLocation }">
                      <v-textarea v-model="avComments" type="text" />
                    </div>
                  </div>
                  <div class="mt-10 mb-8">
                    <!-- <v-smallbutton
                      class="bg-clrbtn rounded-radius4 py-2 px-6 text-greytxt ml-2 text-fs12"
                    >
                      Cancel
                    </v-smallbutton> -->
                    <v-smallbutton
                      :class="{ ' disableview': ismultiLocation }"
                      class="
                        bg-blue
                        rounded-radius4
                        py-2
                        px-6
                        text-white
                        ml-2
                        text-fs12
                        flex
                        items-center
                      "
                      @click="update()"
                    >
                      Save
                      <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
                    </v-smallbutton>
                  </div>
                  <v-eng-loader v-if="loader"></v-eng-loader>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
        <div
          class="speakernotes"
          :class="{
            hidden: activeTab !== 2,
            block: activeTab === 2,
          }"
        >
          <notes-page v-if="activeTab == 2" :meeting-id="meetingId" :tab-code="'notes'"></notes-page>
        </div>
        <div
          class="speakernotes"
          :class="{
            hidden: activeTab !== 3,
            block: activeTab === 3,
          }"
        >
          <task-page v-if="activeTab == 3" :meeting-id="meetingId" :tab-code="'tasks'"></task-page>
        </div>
      </div>
    </div>
    <!--  -->
    <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
  </v-card-box>
</template>
<script lang="ts" src="./AV.ts"></script>
