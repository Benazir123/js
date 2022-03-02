<template>
  <!-- attendee table -->
  <v-card-box>
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

        <div class="relative flex flex-col min-w-0 break-words">
          <div class="">
            <div class="tab-content tab-space mt-6">
              <div
                :class="{
                  hidden: activeTab !== 1,
                  block: activeTab === 1,
                }"
              >
                <v-smallbutton
                  v-if="engInfo.addAttendee"
                  class="
                    absolute
                    -mt-16
                    right-3
                    z-50
                    bg-blue
                    px-3
                    rounded-radius6
                    text-white
                    flex
                    text-fs14
                    items-center
                  "
                  @click="openAddForm()"
                  ><img src="@/assets/addwhite.svg" class="mr-2" /> Add Attendee</v-smallbutton
                >

                <div v-if="hcpList && hcpList.length != 0 && !loader" class="table-responsive englistdata">
                  <VTable :data="hcpList" class="w-full" :hide-sort-icons="true">
                    <template #head>
                      <tr>
                        <VTh sort-key="name"> Attendees </VTh>
                        <VTh sort-key="id" class="whitespace-no-wrap">Specialty </VTh>
                        <VTh sort-key="topic">Degree </VTh>
                        <VTh sort-key="Type">City </VTh>
                        <VTh sort-key="owner">State </VTh>
                        <VTh sort-key="Speaker"> State of License </VTh>
                        <VTh sort-key="nosorting">State of License # </VTh>
                        <VTh sort-key="NPI">NPI #</VTh>
                        <VTh sort-key="status">Status </VTh>
                        <VTh sort-key="Action">Action </VTh>
                        <VTh sort-key="Links">Links </VTh>
                      </tr>
                    </template>
                    <template #body="{ rows }">
                      <tr v-for="row in rows" :key="row.id">
                        <td>
                          <div class="flex items-center relative">
                            <div class="flex-shrink-0 w-8 h-8">
                              <component
                                :is="'v-profile'"
                                :key="imgError"
                                :small-profile="true"
                                :side-menu="true"
                                :user-info="{
                                  letter_name: row.short_name,
                                  full_name: row.full_name,
                                  errorImg: row.errorImg ? row.errorImg : false,
                                  img: row.photo,
                                  id: row.id ? row.id : '',
                                }"
                                @errorImg="errorImg(row)"
                              ></component>
                            </div>
                            <div
                              v-if="row.prescriber == 1"
                              class="
                                absolute
                                text-white
                                flex
                                rounded-full
                                items-center
                                justify-center
                                bg-precribe
                                w-4
                                h-4
                                font-bold
                                left-5
                                top-auto
                                -bottom-1
                                text-fs8
                              "
                            >
                              P
                            </div>
                            <div class="ml-3">
                              <p class="whitespace-no-wrap">
                                {{ bindData(row.full_name) }}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="flex">
                            {{ bindData(row.speciality) }}
                          </div>
                        </td>
                        <td>
                          {{ bindData(row.degree) }}
                        </td>
                        <td>{{ bindData(row.city) }}</td>
                        <td>
                          {{ bindData(row.state) }}
                        </td>
                        <td>{{ bindData(row.state_of_license) }}</td>
                        <td>
                          {{ bindData(row.state_of_license_no) }}
                        </td>
                        <td>
                          {{ bindData(row.npi) }}
                        </td>
                        <td>
                          <v-smallbutton
                            v-if="row.status"
                            :style="{
                              color: row.status.text_color,
                              background: row.status.bg_color,
                            }"
                            class="
                              bg-accpectbtn
                              text-accepttxt
                              p-1
                              px-2
                              rounded-radius6
                              cursor-default
                            "
                            >{{ row.status.name }}</v-smallbutton
                          >
                        </td>
                        <td>
                          <!--  v-if="row.status.id == 0" -->
                          <div v-if="row.status.id == 0" class="flex items-center">
                            <v-smallbutton
                              :class="[
                                meetingStatus != 'Awaiting HCP(s) RSVP' && meetingStatus != 'Upcoming' ? ' disableview' : '',
                              ]"
                              class="
                                actionbtns
                                cursor-pointer
                                border-0
                                text-fs13
                                mr-2
                                normal-case
                                font-bold
                                bg-green
                                text-actiongreens
                              "
                              @click="statusChange(1, row)"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                ></path></svg></v-smallbutton
                            ><v-smallbutton
                              :class="[
                                meetingStatus != 'Awaiting HCP(s) RSVP' && meetingStatus != 'Upcoming' ? ' disableview' : '',
                              ]"
                              class="
                                actionbtns
                                cursor-pointer
                                border-0
                                text-fs13
                                normal-case
                                font-bold
                                bg-red-200
                                text-red-500
                              "
                              @click="statusChange(2, row)"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path></svg
                            ></v-smallbutton>
                          </div>
                          <span v-else> -- </span>
                          <!-- <v-smallbutton
                            v-if="row.approve"
                            class="
                              bg-skyblue
                              text-bluetxt
                              p-1
                              px-3
                              rounded-radius6
                              cursor-default
                            "
                            >{{ row.approve }}</v-smallbutton
                          > -->
                        </td>
                        <td>
                          <span v-if="row.status.id != 0 && row.status.id != 9 && row.status.id != 2">
                            <img src="@/assets/links.svg" class="cursor-pointer" @click="copyLink(row.join_link)" />
                          </span>
                          <span v-else> -- </span>
                        </td>
                      </tr>
                    </template>
                  </VTable>
                </div>
                <v-pagination
                  v-if="hcpList && hcpList.length != 0 && !loader"
                  v-model="currentPage"
                  :pages="totalPages"
                  :range-size="1"
                  active-color="#DCEDFF"
                  :hide-first-button="false"
                  :hide-last-button="false"
                  @update:modelValue="
                    currentPage;
                    listHcp(currentPage);
                  "
                />
                <v-no-data v-if="hcpList.length == 0 && !loader"></v-no-data>
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
                <task-page
                  v-if="activeTab == 3"
                  :meeting-id="meetingId"
                  :tab-code="'tasks'"
                  :category-id="categoryIdTask"
                ></task-page>
              </div>
              <!-- notes -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card-box>
  <div class="prescriber">
    <add-form
      v-if="openForm"
      :is-open="openForm"
      :info="tabInfo"
      :form-data="initformData"
      :is-add-form="isAddForm"
      :email-form="emailFormDataForHcp"
      :is-remote="isRemote"
      @close-form="cloeForm($event)"
    ></add-form>
  </div>
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>

  <!-- attendee table -->
</template>
<script lang="ts" src="./Attendee.ts"></script>
