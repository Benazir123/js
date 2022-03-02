<template>
  <v-card-box>
    <!-- <v-title menu="Speaker" class="px-3 pl-0 mb-0"></v-title> -->
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="relative">
          <component
            :is="'tab-heading'"
            :key="reLoadeHeading"
            :active-tab="activeTab"
            :tab-list="tabListName"
            :tab-code="tabTittle"
            @tab-change="tabChange($event)"
          ></component>
        </div>
        <div class="relative flex flex-col min-w-0 break-words">
          <div class="">
            <div class="tab-content tab-space mt-8">
              <div
                :class="{
                  hidden: activeTab !== 1,
                  block: activeTab === 1,
                }"
              >
                <v-smallbutton
                  v-if="activeTab == 1 && addSpeakerEnable"
                  class="
                    bg-blue
                    px-3
                    rounded-radius6
                    text-white
                    flex
                    text-fs14
                    items-center
                    absolute
                    -top-11
                    right-3
                  "
                  @click="openAddForm()"
                  ><img src="@/assets/addwhite.svg" class="mr-2" />Add Speaker</v-smallbutton
                >
                <div v-if="spkList.length != 0 && !loader" class="table-responsive englistdata">
                  <VTable
                    class="w-full min-w-full divide-y divide-gray-200 bg-white"
                    :data="spkList"
                    :hide-sort-icons="true"
                  >
                    <template #head>
                      <tr>
                        <VTh sort-key="spkname">Speaker</VTh>
                        <VTh sort-key="invited">Invited by</VTh>
                        <VTh sort-key="spkrequeststatus">Request Status</VTh>
                        <VTh sort-key="spkstatus">Status</VTh>
                      </tr>
                    </template>
                    <template #body="{ rows }">
                      <tr v-for="row in rows" :key="row.id">
                        <td>
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-8 h-8">
                              <component
                                :is="'v-profile'"
                                :key="imgError"
                                :small-profile="true"
                                :side-menu="true"
                                :user-info="{
                                  letter_name: row.short_name,
                                  full_name: row.fullName,
                                  errorImg: row.errorImg ? row.errorImg : false,
                                  img: row.photo,
                                  id: '',
                                }"
                                @errorImg="errorImg(row)"
                              ></component>
                            </div>
                            <div class="ml-3 flex items-center">
                              <p class="whitespace-no-wrap">
                                {{ bindData(row.full_name) }}
                              </p>
                              <span v-if="row.nationalSpeaker == 1" class="group relative ml-3 w-4 h-4">
                                <img src="@/assets/flag.svg" alt="" />
                                <b
                                  class="
                                    absolute
                                    top-0
                                    left-full
                                    bg-secgrey
                                    text-white
                                    p-1
                                    px-3
                                    rounded-radius4
                                    -mt-1
                                    ml-2
                                    hidden
                                    group-hover:block
                                  "
                                  >National Speaker</b
                                >
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>{{ bindData(row.invitee_by) }}</td>
                        <td>
                          <v-smallbutton
                            v-if="row.requestStatus.name"
                            :style="{
                              color: row.requestStatus.text_color,
                              background: row.requestStatus.bg_color,
                            }"
                            class="
                              bg-skyblue
                              text-bluetxt
                              p-1
                              px-3
                              rounded-radius6
                              cursor-default
                            "
                            >{{ row.requestStatus.name }}</v-smallbutton
                          >
                        </td>
                        <td class="w-72">
                          <div class="mr-8">
                            <div class="my-1 selectgreenbtn selecthide relative">
                              <select
                                v-if="row.status.name"
                                :id="row.status.id"
                                v-model="row.status.id"
                                :disabled="
                                  row.status.id == 3 ||
                                    row.status.id == 2 ||
                                    row.status.id == 4 ||
                                    row.status.id == 11 ||
                                    (row.status.id == 9 &&
                                      (meetingStatus != 'Awaiting Speaker Reply' || meetingStatus != 'Speaker Declined'))
                                "
                                :style="{
                                  color: row.status.text_color,
                                  background: row.status.bg_color,
                                }"
                                class="
                                  border border-graymenu
                                  outline-none
                                  focus:border-graymenu
                                  focus:ring-0
                                  focus:ring-indigo-200
                                  focus:ring-opacity-0
                                  shadow-none
                                  text-sm
                                  py-2
                                  block
                                  w-full
                                  leading-normal
                                  text-dashselect text-fs14
                                  rounded-radius5
                                  cursor-pointer
                                "
                                @click="checkIsdisabled(row.status.id)"
                                @change="changeSpkStatus(row)"
                              >
                                <option
                                  v-for="value in speakerStatus"
                                  :key="value.status_id"
                                  class="bg-accpectbtn text-accepttxt"
                                  :value="value.status_id"
                                  :selected="row.status.id == value.status_id"
                                  :disabled="value.disabled"
                                >
                                  {{ value.status }}
                                </option>
                              </select>
                              <img
                                v-if="row.statusChangeLoader"
                                src="@/assets/button-bar-blackloader.svg"
                                class="ml-2 w-6 absolute top-1.5 right-2"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </VTable>
                </div>
                <v-pagination
                  v-if="spkList && spkList.length != 0 && !loader"
                  v-model="currentPage"
                  :pages="totalPages"
                  :range-size="1"
                  active-color="#DCEDFF"
                  :hide-first-button="false"
                  :hide-last-button="false"
                  @update:modelValue="
                    currentPage;
                    listSpeaker(currentPage);
                  "
                />
                <v-no-data v-if="spkList.length == 0 && !loader"></v-no-data>
                <!-- Loader Component -->
                <v-eng-loader v-if="loader"></v-eng-loader>
              </div>
              <!-- notes -->
              <div
                class="speakernotes"
                :class="{
                  hidden: activeTab !== 2,
                  block: activeTab === 2,
                }"
              >
                <notes-page
                  v-if="activeTab == 2"
                  :meeting-id="meetingId"
                  :tab-code="'notes'"
                  :category-id="categoryIdNotes"
                ></notes-page>
              </div>
              <!-- notes -->
              <!-- notes -->
              <div
                class="speakernotes"
                :class="{
                  hidden: activeTab !== 3,
                  block: activeTab === 3,
                }"
              >
                <task-page v-if="activeTab == 3" :meeting-id="meetingId" :tab-code="'tasks'"></task-page>
              </div>
              <!-- notes -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card-box>
  <!-- Add new speaker -->
  <div class="prescriber">
    <add-form
      v-if="openForm"
      :is-open="openForm"
      :info="tabInfo"
      :is-add-form="isAddForm"
      :is-add-button="showAddIcon"
      @close-form="cloeForm($event)"
    ></add-form>
  </div>
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
  <!--  -->
</template>
<script lang="ts" src="./Speaker.ts"></script>
