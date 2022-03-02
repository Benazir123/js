<template>
  <v-card-box>
    <!-- <v-title menu="Speaker" class="px-3 mb-0" ></v-title> -->
    <!--  -->
    <!-- <v-smallbutton
      v-if="activeTab == 1 && addCaterEnable"
      @click="openAddForm()"
      class="
        absolute
        mt-11
        right-3
        bg-blue
        px-3
        rounded-radius6
        text-white
        flex
        text-fs14
        items-center
      "
      ><img src="@/assets/addwhite.svg" class="mr-2" />Add
      Caterer</v-smallbutton
    > -->
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
                  class="
                    absolute
                    -mt-16
                    right-3
                    bg-blue
                    px-3
                    rounded-radius6
                    text-white
                    flex
                    text-fs14
                    items-center
                  "
                  @click="openAddForm()"
                  ><img src="@/assets/addwhite.svg" class="mr-2" /> Add Caterer</v-smallbutton
                >
                <div v-if="catererList.length != 0 && !loader" class="table-responsive englistdata">
                  <VTable class="w-full" :data="catererList" :hide-sort-icons="true">
                    <template #head>
                      <tr>
                        <VTh sort-key="name">Name of Caterer </VTh>
                        <VTh sort-key="city">City</VTh>
                        <VTh sort-key="State">State</VTh>
                        <VTh sort-key="phone">Phone number</VTh>
                        <VTh sort-key="contact">Contact Name</VTh>
                        <VTh sort-key="office">Office name</VTh>
                        <VTh sort-key="address">Office Address</VTh>
                        <VTh sort-key="phone">Office Phone Number</VTh>
                        <VTh sort-key="action">Action</VTh>
                      </tr>
                    </template>
                    <template #body="{ rows }">
                      <tr v-for="row in rows" :key="row.id">
                        <td>{{ bindData(row.caterer && row.caterer.name) }}</td>
                        <td>{{ bindData(row.caterer && row.caterer.city) }}</td>
                        <td>
                          {{ bindData(row.caterer && row.caterer.state) }}
                        </td>
                        <td>
                          {{ bindData(row.caterer && row.caterer.phone) }}
                        </td>
                        <td>
                          {{ bindData(row.caterer && row.caterer.contact_name) }}
                        </td>
                        <td>
                          <span>{{ bindData(row.location && row.location.name) }}</span>
                        </td>

                        <td>
                          <span>{{ bindData(row.location && row.location.address) }}</span>
                        </td>
                        <td>
                          <span>{{ bindData(row.location && row.location.phone) }}</span>
                        </td>
                        <td>
                          <div class="mr-8 flex items-center w-52">
                            <div class="my-1 selectgreenbtn selecthide relative">
                              <select
                                v-if="row.caterer.status"
                                :id="row.caterer.status_id"
                                v-model="row.caterer.status_id"
                                :disabled="addCaterEnable == false"
                                :style="{
                                  color: row.caterer.text_color,
                                  background: row.caterer.bg_color,
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
                                @click="checkIsdisabled(row.caterer.status_id)"
                                @change="changeCaterStatus(row, $event.target.value)"
                              >
                                <option
                                  v-for="value in catererStatus"
                                  :key="value.id"
                                  class="bg-accpectbtn text-accepttxt"
                                  :value="value.id"
                                  :disabled="value.disabled"
                                  :selected="row.caterer.status_id == value.id"
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
                            <p
                              class="
                                p-0
                                w-10
                                ml-2
                                rounded-radius6
                                cursor-pointer
                              "
                              :class="[addCaterEnable == false ? ' disableview' : '']"
                              @click="deleteCater(row.caterer.id, row.caterer.status_id)"
                            >
                              <img src="@/assets/deletered.svg" />
                            </p>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </VTable>
                </div>
                <v-pagination
                  v-if="catererList && catererList.length != 0 && !loader"
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
                <v-no-data v-if="catererList.length == 0 && !loader"></v-no-data>
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
    <div class="deletepopup">
      <div v-if="showdelete" class="drawer-mask justify-center items-center flex z-50">
        <v-confirmation-modal :header="true">
          <template #header>
            <h4 class="text-fs20 text-white font-bold">Delete</h4>
            <img src="@/assets/close-white.svg" class="cursor-pointer" @click="showdelete = false" />
          </template>
          <template #description>
            <p class="text-center text-greytxt font-semibold text-fs16 py-4">
              Are you sure you want to delete the caterer?
            </p>
          </template>
          <template #footer>
            <div class="flex justify-end">
              <v-smallbutton
                type="submit"
                class="
                  flex
                  font-w-normal
                  text-fs12
                  mr-3
                  py-2
                  px-10
                  float-right
                  text-greytxt
                  bg-clrbtn
                  rounded-radius6
                "
                @click="showdelete = false"
                >No
              </v-smallbutton>
              <v-smallbutton
                type="submit"
                class="
                  flex
                  font-w-normal
                  text-fs12
                  py-2
                  px-10
                  float-right
                  text-white
                  bg-blue
                  rounded-radius6
                "
                @click="cater"
                >Yes
                <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
              </v-smallbutton>
            </div>
          </template>
        </v-confirmation-modal>
      </div>
    </div>
  </v-card-box>
  <div class="prescriber">
    <add-form
      v-if="openForm"
      :is-open="openForm"
      :info="tabInfo"
      :is-add-form="isAddForm"
      :form-data="initformData"
      @close-form="cloeForm($event)"
      @delete-cost="deleteCost($event)"
    ></add-form>
  </div>
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
</template>
<script lang="ts" src="./Caterer.ts"></script>
