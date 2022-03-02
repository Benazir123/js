<template>
  <v-card-box>
    <!-- <v-title menu="Location" class="mb-4"></v-title> -->
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
            <div
              v-if="location && location.length != 0 && !loader"
              class="
                table-responsive
                englistdata
                tablebordercommon
                spkengagementtable
              "
            >
              <VTable class="w-full" :data="location" :hide-sort-icons="true">
                <template #head>
                  <tr>
                    <VTh v-if="isMultilocation" sort-key="img"></VTh>
                    <VTh sort-key="name"> Name </VTh>
                    <VTh sort-key="address">Address</VTh>
                    <VTh sort-key="city">City</VTh>
                    <VTh sort-key="state">State</VTh>
                    <VTh sort-key="zip">Zip</VTh>
                    <VTh sort-key="phone">Phone</VTh>
                    <VTh v-if="locationStatusEnable || isMultilocation" sort-key="status">{{ tableAction }}</VTh>
                  </tr>
                </template>
                <template #body="{ rows }">
                  <tr v-for="row in rows" :key="row.id">
                    <td v-if="isMultilocation">
                      <span v-if="row.eo_join_on_status != 'Yes'"> <img src="@/assets/office/office1.svg"/></span>
                      <span v-if="row.eo_join_on_status == 'Yes'"> <img src="@/assets/office/office2.svg"/></span>
                    </td>
                    <td>
                      {{ bindData(row.name) }}
                    </td>
                    <td>{{ bindData(row.address) }}</td>
                    <td>
                      {{ bindData(row.city) }}
                    </td>
                    <td>{{ bindData(row.state) }}</td>
                    <td>{{ bindData(row.zip) }}</td>
                    <td>{{ bindData(row.phone) }}</td>
                    <td>
                      <v-smallbutton
                        v-if="!isMultilocation && locationStatusEnable"
                        class="
                          bg-skyblue
                          text-bluetxt
                          p-1
                          px-2
                          mr-3
                          rounded-radius6
                          cursor-pointer
                        "
                        >{{ row.status }}</v-smallbutton
                      >
                      <div v-if="isMultilocation" class="flex items-center">
                        <p class="p-0 mr-5 rounded-radius6 cursor-pointer">
                          <img src="@/assets/editblue.svg" @click="openlocation(row.id)" />
                        </p>

                        <p class="p-0 rounded-radius6 cursor-pointer">
                          <img src="@/assets/views.svg" @click="officemsg(row)" />
                        </p>
                      </div>
                    </td>
                  </tr>
                </template>
              </VTable>
            </div>
            <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
            <v-eng-loader v-if="loader"></v-eng-loader>
            <v-no-data v-if="location.length == 0 && !loader"></v-no-data>
          </div>
        </div>
        <div
          class="speakernotes"
          :class="{
            hidden: activeTab !== 2,
            block: activeTab === 2,
          }"
        >
          <!--  -->
          <notes-page
            v-if="activeTab == 2"
            :meeting-id="meetingId"
            :tab-code="'notes'"
            :category-id="categoryIdNotes"
          ></notes-page>
          <!--  -->
        </div>
        <div
          class="speakernotes"
          :class="{
            hidden: activeTab !== 3,
            block: activeTab === 3,
          }"
        >
          <!--  -->
          <task-page v-if="activeTab == 3" :meeting-id="meetingId" :tab-code="'tasks'"></task-page>
          <!--  -->
        </div>
      </div>
    </div>
    <!--  -->
  </v-card-box>
  <div class="prescriber">
    <aside
      class="
        right-drawer
        ease-in-out
        transform
        transition-all
        duration-700
        z-50
      "
      :style="{
        right: isofficedrawer ? '0' : '-35%',
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
        "
      >
        <p class="text-base text-white font-bold">Manager Info</p>
        <div class="cursor-pointer" @click="isofficedrawer = false">
          <img src="@/assets/close-white.svg" />
        </div>
      </div>
      <!-- office message -->
      <div class="m-4">
        <div class="bg-white shadow-profilemenubox mb-3 rounded-radius6">
          <div class="border-b border-officebor py-3 px-2">
            <p class="text-fs16 font-w-bold text-black flex items-center px-2">
              <!-- <img src="@/assets/user.svg" class="mr-2" />  -->
              {{ bindData(officeInfo.office_manager_name) }}
            </p>
          </div>
          <div class="p-3">
            <div class="flex items-center justify-content-between">
              <div v-if="officeInfo.office_email && officeInfo.office_email != ''" class="px-2">
                <p class="text-fs11 font-w-bold text-logininputtext flex items-center pb-2">
                  <img src="@/assets/office/mail.svg" class="mr-2" /> Mail:
                </p>
                <p class="text-fs12 text-engvalue ">
                  {{ bindData(officeInfo.office_email) }}
                </p>
              </div>
              <div v-if="officeInfo.office_phone && officeInfo.office_phone != ''" class="px-2">
                <p class="text-fs11 font-w-bold text-logininputtext flex items-center pb-2">
                  <img src="@/assets/office/call.svg" class="mr-2" /> Phone No:
                </p>
                <p class="text-fs12 text-engvalue ">
                  {{ bindData(officeInfo.office_phone) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- office message -->
    </aside>

    <div
      :class="[
        'drawer-mask ease-in-out transform transition-all right-0 left-0',
        isofficedrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
      ]"
      :style="{
        transition: isofficedrawer ? '.7s' : '0 delay-700',
      }"
      @click="isofficedrawer = false"
    ></div>
  </div>
  <!--office  -->
  <div class="deletepopup">
    <div v-if="showlocations" class="drawer-mask justify-center items-center flex z-50">
      <v-confirmation-modal :header="true">
        <template #header>
          <h4 class="text-fs20 text-white font-bold">Message</h4>
          <img src="@/assets/close-white.svg" class="cursor-pointer" @click="showlocations = false" />
        </template>
        <template #description>
          <div class="flex flex-row items-center justify-center">
            <img src="@/assets/office/locations.svg" class="mr-4" />
            <p class="text-center text-greytxt font-semibold text-fs16 py-4">
              Will you be in attendance with your HCP's in this office?
            </p>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <v-smallbutton
              type="submit"
              class="
                flex
                font-w-bold
                text-fs12
                py-2
                px-10
                float-right
                text-white
                bg-blue
                rounded-radius6
                mr-3
              "
              @click="changeLiveLocation('yes')"
              >Yes
              <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
            </v-smallbutton>
            <v-smallbutton
              type="submit"
              class="
                flex
                font-w-bold
                text-fs12
                mr-3
                py-2
                px-10
                float-right
                text-greytxt
                bg-clrbtn
                rounded-radius6
              "
              @click="changeLiveLocation('no')"
              >No
              <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
            </v-smallbutton>
            <v-smallbutton
              type="submit"
              class="
                flex
                font-w-bold
                text-fs12
                mr-3
                py-2
                px-10
                float-right
                text-greytxt
                bg-clrbtn
                rounded-radius6
              "
              @click="showlocations = false"
              >Cancel
            </v-smallbutton>
          </div>
        </template>
      </v-confirmation-modal>
    </div>
    <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
  </div>
</template>
<script lang="ts" src="./Location.ts"></script>
