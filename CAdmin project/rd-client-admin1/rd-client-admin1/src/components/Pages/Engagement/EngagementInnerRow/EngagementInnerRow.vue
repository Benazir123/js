<template>
  <!-- engagement innerrow starts -->
  <tr v-if="innerinputtype == 'engagementinner'" class="greybox align-top">
    <td colspan="2">
      <v-smallbutton
        v-if="isCollabmeeting && rowData.primary_meeting_id"
        class="
          bg-blue
          text-white text-white
          flex
          items-center
          h-7
          rounded-radius8
          mb-2
          font-w-bold
        "
        @click="engdetailpage(rowData)"
      >
        <img src="@/assets/drawer/collab.svg" class="mr-3" />
        <span class="font-w-bold">Primary Meeting ID: {{ rowData.primary_meeting_id }}</span>
      </v-smallbutton>
      <!-- <p class="my-2 text-greytxt font-bold">July 17, 2021 | 5:00 PM</p> -->
      <span v-for="row in rowData.meeting_venues.location" :key="row.id">
        <p
          v-if="(row && row.eo_join_on_status && row.eo_join_on_status == 'Yes') || row.eo_join_on_status == ''"
          class="leading-6 tracking-wide"
        >
          {{ row.name }}<span v-if="row.address">,{{ row.address }}</span
          >, <br />
          <span v-if="row.city">{{ row.city }}</span>
          <span v-if="row.state">
            , <br />
            {{ row.state }} - {{ row.zip }}</span
          >
        </p>
      </span>
    </td>
    <td colspan="2">
      <p class="leading-6 tracking-wide">{{ rowData.topic.title }}</p>
    </td>
    <td colspan="2"></td>
    <td colspan="2">
      <p>
        <a class="flex items-center mb-2">
          <p class="w-52 leading-6 tracking-wide">No of Expected Attendees</p>
          <span class="text-engvalue font-semibold">{{ rowData.engagement_attendee_info.no_of_expected }}</span>
        </a>
        <a
          :class="{
            ' text-textblue cursor-pointer': rowData.has_collaborator_meeting,
          }"
          class="flex items-center mb-2 "
          @click="openPrescriber(false)"
        >
          <p class="w-52 leading-6 tracking-wide">
            No of Pre-registered Attendees
          </p>
          <span class="font-semibold">{{ rowData.engagement_attendee_info.confirmed }}</span></a
        >
        <a class="flex items-center mb-2">
          <p class="w-52 leading-6 tracking-wide">Needed to meet Minimum</p>
          <span class="text-engvalue font-semibold">{{ rowData.engagement_attendee_info.need_minimum_rule }}</span></a
        >
        <a
          class="flex items-center mb-2"
          :class="{
            ' text-textblue cursor-pointer': rowData.has_collaborator_meeting || isCollabmeeting,
          }"
          @click="openPrescriber(true)"
        >
          <p class="w-52 leading-6 tracking-wide">Actual Attendee</p>
          <span class="text-engvalue font-semibold">{{ rowData.engagement_attendee_info.total_actual_attendee }}</span>
        </a>
      </p>
    </td>
    <td colspan="3"></td>
  </tr>
  <!-- engagement innerrow ends -->

  <!-- Live Session innerrow starts -->
  <tr v-if="innerinputtype == 'livesession'" class="greybox align-top">
    <td colspan="2">
      <v-smallbutton
        v-if="isCollabmeeting && rowData.primary_meeting_id"
        class="
          bg-blue
          text-white text-white
          flex
          items-center
          h-7
          rounded-radius8
          mb-2
          font-w-bold
        "
        @click="engdetailpage(rowData)"
      >
        <img src="@/assets/drawer/collab.svg" class="mr-3" />
        <span class="font-w-bold">Primary Meeting ID: {{ rowData.primary_meeting_id }}</span>
      </v-smallbutton>
      <!-- <p class="my-2 text-greytxt font-bold">July 17, 2021 | 5:00 PM</p> -->
      <p
        v-if="rowData.meeting_venues && rowData.meeting_venues.location && rowData.meeting_venues.location.length != 0"
        class="leading-6 tracking-wide"
      >
        {{ rowData.meeting_venues.location[0].name }}
      </p>
    </td>
    <td colspan="3">
      <span class="leading-6 tracking-wide">{{ rowData.topic.title }}</span>
    </td>
    <!-- <td colspan="2"></td> -->
    <td colspan="2">
      <p>
        <a class="flex items-center mb-2">
          <p class="w-52 leading-6 tracking-wide">No of Expected Attendees</p>
          <span class="text-engvalue font-semibold">{{ rowData.engagement_attendee_info.total_invited }}</span>
        </a>
        <a
          :class="{
            ' text-textblue cursor-pointer': rowData.has_collaborator_meeting,
          }"
          class="flex items-center mb-2 "
          @click="openPrescriber(false)"
        >
          <p class="w-52 leading-6 tracking-wide">
            No of Pre-registered Attendees
          </p>
          <span class="font-semibold">{{ rowData.engagement_attendee_info.confirmed }}</span></a
        >
        <a class="flex items-center mb-2">
          <p class="w-52 leading-6 tracking-wide">Needed to meet Minimum</p>
          <span class="text-engvalue font-semibold">{{ rowData.engagement_attendee_info.need_minimum_rule }}</span></a
        >
        <a
          class="flex items-center mb-2"
          :class="{
            ' text-textblue cursor-pointer': rowData.has_collaborator_meeting || isCollabmeeting,
          }"
          @click="openPrescriber(true)"
        >
          <p class="w-52 leading-6 tracking-wide">Actual Attendee</p>
          <span class="text-engvalue font-semibold">{{ rowData.engagement_attendee_info.total_actual_attendee }}</span>
        </a>
      </p>
    </td>
    <td colspan="3"></td>
  </tr>
  <!-- Live Session innerrow ends -->

  <!-- collabators -->
  <div class="prescriber">
    <aside
      class="right-drawer ease-in-out transform transition-all duration-700 z-50"
      :style="{
        right: isPrescribe ? '0' : '-65%',
      }"
    >
      <div
        class="
        flex
        justify-between
        items-center
        text-base
        font-bold
        px-3
        py-2
        bg-blue
      "
      >
        <p class="text-base text-white font-bold">
          Total Attendees
        </p>
        <div class="cursor-pointer" @click="isPrescribe = false">
          <img src="@/assets/close-white.svg" />
        </div>
      </div>
      <!-- Collab meeeting Section -->
      <div v-if="isPrescribe" class="p-4 scroller scroll-team ">
        <attendee-info
          :count-info="rowData.count_info"
          :is-actual-attendee="isActualAttendee"
          :is-collabmeeting="isCollabmeeting"
        ></attendee-info>
      </div>
    </aside>

    <div
      :class="[
        'drawer-mask ease-in-out transform transition-all right-0 left-0',
        isPrescribe ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
      ]"
      :style="{
        transition: isPrescribe ? '.7s' : '0 delay-700',
      }"
      @click="isPrescribe = false"
    ></div>
  </div>
</template>
<script lang="ts" src="./EngagementInnerRow.ts"></script>
