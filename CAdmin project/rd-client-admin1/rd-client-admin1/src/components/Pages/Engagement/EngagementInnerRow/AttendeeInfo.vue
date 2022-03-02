<template>
  <div v-if="!isActualAttendee">
    <div v-if="countInfo.primary_engagement" class="pb-6">
      <h3 class="text-base15 text-greytxt text-left font-medium mb-2">
        Primary Engagement
      </h3>
      <ul class="mt-3 text-greytxt">
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right6.svg" class="bg-pink p-2 mr-2 rounded-radius10" />Total Attendees
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.primary_engagement.total_attendee) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right7.svg" class="bg-skyblue p-2 mr-2 rounded-radius10" />Prescriber
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.primary_engagement.prescriber) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right8.svg" class="bg-lightgreen p-2 mr-2 rounded-radius10" />Non Prescriber
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.primary_engagement.non_prescriber) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right9.svg" class="bg-lightorange p-2 mr-2 rounded-radius10" />Actual Attendee
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.primary_engagement.actual_attendee) }}</span>
        </li>
      </ul>
    </div>

    <div v-if="countInfo.collaborator_engagement" class="pb-6">
      <h3 class="text-base15 text-greytxt text-left font-medium mb-2">
        Collaborators Engagement
      </h3>
      <ul class="mt-3 text-greytxt">
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right10.svg" class="bg-clrbtn p-2 mr-2 rounded-radius10" />Collaborators
            participating
          </p>
          <span class="font-semibold text-base">{{
            bindData(countInfo.collaborator_engagement.collaborate_participant)
          }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right6.svg" class="bg-pink p-2 mr-2 rounded-radius10" />Total Attendees
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.collaborator_engagement.total_attendee) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right7.svg" class="bg-skyblue p-2 mr-2 rounded-radius10" />Prescriber
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.collaborator_engagement.prescriber) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right8.svg" class="bg-lightgreen p-2 mr-2 rounded-radius10" />Non Prescriber
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.collaborator_engagement.non_prescriber) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right9.svg" class="bg-lightorange p-2 mr-2 rounded-radius10" />Actual Attendee
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.collaborator_engagement.actual_attendee) }}</span>
        </li>
      </ul>
    </div>
    <div class="pb-6">
      <h3 class="text-base15 text-greytxt text-left font-medium mb-2">
        Employees
      </h3>
      <ul class="mt-3 text-greytxt">
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right6.svg" class="bg-pink p-2 mr-2 rounded-radius10" />Total Employees
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.employee.total) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right7.svg" class="bg-skyblue p-2 mr-2 rounded-radius10" />Total Employees Primary
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.employee.total_for_primary) }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right8.svg" class="bg-lightgreen p-2 mr-2 rounded-radius10" />Total Employees
            Collaborator
          </p>
          <span class="font-semibold text-base">{{ bindData(countInfo.employee.total_for_collaborator) }}</span>
        </li>
      </ul>
    </div>
  </div>
  <div v-if="isActualAttendee">
    <div class="pb-6">
      <h3 v-if="!isCollabmeeting" class="text-base15 text-greytxt text-left font-medium mb-2">
        Primary Engagement
      </h3>
      <ul class="mt-3 text-greytxt">
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right7.svg" class="bg-skyblue p-2 mr-2 rounded-radius10" />Prescriber
          </p>
          <span class="font-semibold text-base">{{
            bindData(countInfo.actualAttendeeData.attendee_prescriber_for_primary)
          }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right8.svg" class="bg-lightgreen p-2 mr-2 rounded-radius10" />Non Prescriber
          </p>
          <span class="font-semibold text-base">{{
            bindData(countInfo.actualAttendeeData.non_prescriber_for_primary)
          }}</span>
        </li>
      </ul>
    </div>
    <div v-if="!isCollabmeeting" class="pb-6">
      <h3 class="text-base15 text-greytxt text-left font-medium mb-2">
        Collaborators Engagement
      </h3>
      <ul class="mt-3 text-greytxt">
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right7.svg" class="bg-skyblue p-2 mr-2 rounded-radius10" />Prescriber
          </p>
          <span class="font-semibold text-base">{{
            bindData(countInfo.actualAttendeeData.attendee_prescriber_for_collabrator)
          }}</span>
        </li>
        <li
          class="
            flex
            justify-between
            items-center
            py-3
            text-fs13
            border-b border-rightmenuborder
          "
        >
          <p class="flex items-center">
            <img src="@/assets/drawer/menu-right8.svg" class="bg-lightgreen p-2 mr-2 rounded-radius10" />Non Prescriber
          </p>
          <span class="font-semibold text-base">{{
            bindData(countInfo.actualAttendeeData.non_prescriber_for_collabrator)
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" src="./AttendeeInfo.ts"></script>
