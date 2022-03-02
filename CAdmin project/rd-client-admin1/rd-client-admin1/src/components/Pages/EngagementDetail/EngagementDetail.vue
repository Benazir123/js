<template>
  <!-- <layout> -->
  <v-breadcrumb breadcrumb="Engagement" subbreadcrumb="Engagement details"></v-breadcrumb>

  <div class="flex justify-between items-center">
    <v-title menu="Engagement Details"></v-title>
    <a class="flex items-center text-fs13 cursor-pointer" @click="backtoeng"
      ><img src="@/assets/backarrow.svg" class="mr-2" />Back</a
    >
  </div>
  <!-- Loader Component -->

  <v-card-box>
    <div class="flex items-center justify-between text-fs13">
      <div class="flex items-center">
        <h5 class="text-fs16 font-semibold text-secgrey mr-3">
          Engagement ID : <span v-if="engDetails.id">{{ engDetails.id }}</span>
        </h5>
        <v-smallbutton
          v-if="engDetails.cancel_engagement"
          class="
            bg-pink
            text-lightpink
            py-2
            px-3
            rounded-radius6
            cursor-default cursor-pointer
          "
          @click="initilizeForm('cancel')"
          >Cancel Engagement</v-smallbutton
        >
        <v-smallbutton
          class="
            bg-yellow
            text-white
            py-2
            px-3
            rounded-radius6
            cursor-pointer
            mx-2
          "
          >Change to Tokbox</v-smallbutton
        >
        <v-smallbutton
          v-if="engDetails.Upcoming"
          class="
            bg-upcomebg
            text-upcome
            py-2
            px-3
            rounded-radius6
            cursor-pointer
            mx-2
          "
          @click="changeToUpcoming('changetoupcoming')"
          >Change to Upcoming</v-smallbutton
        >

        <v-smallbutton
          v-if="
            engDetails.engagement_status && engDetails.engagement_status.name == 'Pending Close Out' && engDetails.is_revert
          "
          class="
            bg-upcomebg
            text-upcome
            py-2
            px-3
            rounded-radius6
            cursor-pointer
            mx-2
          "
          @click="clickRevert('Revert')"
          >Revert</v-smallbutton
        >
      </div>
      <div v-if="engDetails.engagement_status && engDetails.engagement_status.name">
        <!--  bg-join -->
        <v-smallbutton
          :style="{
            color: engDetails.engagement_status.text_color,
            background: engDetails.engagement_status.bg_color,
          }"
          class="text-white py-2 px-3 rounded-radius4 mx-3 cursor-default"
        >
          {{ engDetails.engagement_status.name }}</v-smallbutton
        >
      </div>
    </div>
    <!-- tab sextion starts -->
    <div class="flex flex-wrap mt-4">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap flex-row text-fs13">
          <li v-for="menu in engMenu" :key="menu" class="mb-3 mr-6 last:mr-0 text-center cursor-pointer">
            <a
              class="
                capitalize
                p-2
                flex
                items-center
                leading-normal
                border border-white
              "
              :class="{
                'text-greytxt bg-white border border-white': openTab !== menu.code,
                'text-textblue bg-tabactiveblue border border-tabactbor rounded-radius9': openTab === menu.code,
              }"
              @click="toggleTabs(menu)"
            >
              <img :src="getImagePath(menu)" class="mr-2" />
              {{ menu.eng_tab_title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- tab sextion ends -->
  </v-card-box>

  <div v-if="engDetails" class="flex flex-wrap">
    <div class="w-full">
      <div class="relative flex flex-col min-w-0 break-words">
        <div class="flex-auto">
          <div class="tab-content tab-space minh600">
            <div
              class="details"
              :class="{
                hidden: openTab !== 'details',
                block: openTab === 'details',
              }"
            >
              <details-page
                :key="detailsPage"
                :engagment-data="engDetails"
                :is-collobaration="isCollobaration"
                @tab-change="tabChange($event)"
              ></details-page>
            </div>
            <div
              class="approvals"
              :class="{
                hidden: openTab !== 'approvals',
                block: openTab === 'approvals',
              }"
            ></div>
            <div
              class="avs"
              :class="{
                hidden: openTab !== 'avs',
                block: openTab === 'avs',
              }"
            >
              <av-page
                v-if="openTab == 'avs'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-id-notes="categoryIdForNotes"
                :category-id-task="categoryIdForTask"
                :location="engDetails && engDetails.meeting_venues.location ? engDetails.meeting_venues.location : ''"
                :ismulti-location="engDetails.is_multi_location"
              ></av-page>
            </div>
            <div
              class="attendees"
              :class="{
                hidden: openTab !== 'attendees',
                block: openTab === 'attendees',
              }"
            >
              <attendee-page
                v-if="openTab == 'attendees'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-id-notes="categoryIdForNotes"
                :eng-info="engDetails"
                :meeting-status="engDetails && engDetails.engagement_status.name ? engDetails.engagement_status.name : ''"
              ></attendee-page>
            </div>
            <div
              class="speakers"
              :class="{
                hidden: openTab !== 'speakers',
                block: openTab === 'speakers',
              }"
            >
              <speaker-page
                v-if="openTab == 'speakers'"
                :meeting-id="meetingId"
                :tab-tittle="tabTittle"
                :tab-code="openTab"
                :category-id-notes="categoryIdForNotes"
                :meeting-status="engDetails && engDetails.engagement_status.name ? engDetails.engagement_status.name : ''"
                :add-speaker-enable="engDetails && engDetails.isAddSpeakerEnable ? engDetails.isAddSpeakerEnable : false"
                :eng-info="engDetails"
                @status-update="listEngDetails(meetingId)"
              ></speaker-page>
            </div>
            <div
              class="dms"
              :class="{
                hidden: openTab !== 'dms',
                block: openTab === 'dms',
              }"
            >
              <dm-page
                v-if="openTab == 'dms'"
                :meeting-id="meetingId"
                :tab-tittle="tabTittle"
                :tab-code="openTab"
                @status-update="listEngDetails(meetingId)"
              ></dm-page>
            </div>
            <div
              class="notes"
              :class="{
                hidden: openTab !== 'notes',
                block: openTab === 'notes',
              }"
            >
              <notes-page
                v-if="openTab == 'notes'"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-list="categoryList"
              ></notes-page>
            </div>
            <div
              class="tasks"
              :class="{
                hidden: openTab !== 'tasks',
                block: openTab === 'tasks',
              }"
            >
              <task-page
                v-if="openTab == 'tasks'"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-list="categoryList"
                :is-primary="true"
              ></task-page>
            </div>
            <div
              class="documents"
              :class="{
                hidden: openTab !== 'documents',
                block: openTab === 'documents',
              }"
            >
              <document-page v-if="openTab == 'documents'" :meeting-id="meetingId" :tab-code="openTab"></document-page>
            </div>
            <div
              class="employees"
              :class="{
                hidden: openTab !== 'employees',
                block: openTab === 'employees',
              }"
            >
              <employee-page
                v-if="openTab == 'employees'"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :is-add-employee="engDetails && engDetails.addEmploye ? engDetails.addEmploye : ''"
              ></employee-page>
            </div>
            <div
              class="notifications"
              :class="{
                hidden: openTab !== 'notifications',
                block: openTab === 'notifications',
              }"
            >
              <notification-page v-if="openTab == 'notifications'" :meeting-id="meetingId" :tab-code="openTab">
              </notification-page>
            </div>
            <div
              class="budgets"
              :class="{
                hidden: openTab !== 'budgets',
                block: openTab === 'budgets',
              }"
            >
              <budget-page v-if="openTab == 'budgets'" :meeting-id="meetingId" :tab-code="openTab"> </budget-page>
            </div>
            <div
              class="contents"
              :class="{
                hidden: openTab !== 'contents',
                block: openTab === 'contents',
              }"
            >
              <content-page v-if="openTab == 'contents'" :meeting-id="meetingId" :tab-code="openTab"></content-page>
            </div>
            <div
              class="costs"
              :class="{
                hidden: openTab !== 'costs',
                block: openTab === 'costs',
              }"
            >
              <cost-page
                v-if="openTab == 'costs'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :meeting-date="meetingDate"
              ></cost-page>
            </div>
            <div
              class="collaborations"
              :class="{
                hidden: openTab !== 'collaborations',
                block: openTab === 'collaborations',
              }"
            >
              <collobaration-page
                v-if="openTab == 'collaborations'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-id-notes="categoryIdForNotes"
                :category-id-task="categoryIdForTask"
                :from-details="fromDetails"
                :engagment-data="engDetails"
              ></collobaration-page>
            </div>
            <div
              class="caterers"
              :class="{
                hidden: openTab !== 'caterers',
                block: openTab === 'caterers',
              }"
            >
              <caterer-page
                v-if="openTab == 'caterers'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-id-notes="categoryIdForNotes"
                :meeting-status="engDetails && engDetails.engagement_status.name ? engDetails.engagement_status.name : ''"
                :add-cater-enable="engDetails && engDetails.isAddCatererEnable ? engDetails.isAddCatererEnable : false"
              ></caterer-page>
            </div>
            <div
              class="post-meeting"
              :class="{
                hidden: openTab !== 'post_meetings',
                block: openTab === 'post_meetings',
              }"
            >
              <post-meeting-page
                v-if="openTab == 'post_meetings'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-id-notes="categoryIdForNotes"
                :category-id-task="categoryIdForTask"
              ></post-meeting-page>
            </div>
            <div
              class="locations"
              :class="{
                hidden: openTab !== 'locations',
                block: openTab === 'location',
              }"
            >
              <location-page
                v-if="openTab == 'locations'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :ismulti-location="engDetails.is_multi_location"
              ></location-page>
            </div>
            <div
              class="logs"
              :class="{
                hidden: openTab !== 'logs',
                block: openTab === 'logs',
              }"
            >
              <log-page
                v-if="openTab == 'logs'"
                :tab-tittle="tabTittle"
                :meeting-id="meetingId"
                :tab-code="openTab"
                :category-id-notes="categoryIdForNotes"
                :category-id-task="categoryIdForTask"
              ></log-page>
            </div>
            <div
              class="supports"
              :class="{
                hidden: openTab !== 'supports',
                block: openTab === 'supports',
              }"
            >
              <support-page
                v-if="openTab == 'supports'"
                :meeting-id="meetingId"
                :tab-tittle="tabTittle"
                :tab-code="openTab"
              ></support-page>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="prescriber">
    <add-form
      v-if="openForm"
      :is-open="openForm"
      :info="tabInfo"
      :form-data="initformData"
      @close-form="openDeleteConfirmation($event)"
    ></add-form>
  </div>
  <div class="deletepopup">
    <div v-if="showcancel" class="drawer-mask justify-center items-center flex z-50">
      <v-confirmation-modal :header="true">
        <template #header>
          <h4 class="text-fs20 text-white font-bold">{{ headingData }}</h4>
          <img src="@/assets/close-white.svg" class="cursor-pointer" @click="showcancel = false" />
        </template>
        <template #description>
          <p class="text-center text-greytxt font-semibold text-fs16 py-4">
            {{ bodyData }}
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
              @click="showcancel = false"
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
              @click="callApi"
              >Yes
              <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
            </v-smallbutton>
          </div>
        </template>
      </v-confirmation-modal>
    </div>
  </div>

  <!-- table starts -->
  <!-- </layout> -->
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
</template>
<script lang="ts" src="./EngagementDetail.ts"></script>
