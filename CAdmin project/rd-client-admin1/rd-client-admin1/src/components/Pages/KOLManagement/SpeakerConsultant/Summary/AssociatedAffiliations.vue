<template>
  <div class="relative">
    <img src="@/assets/profile-edit.svg" class="cursor-pointer absolute right-4 top-3" />
    <v-card-inner-box title="Associated Affiliations" :titleicon="require('@/assets/associated-affiliations.svg')">
      <div class="w-full">
        <ul>
          <li class="secgrey text-fs13 mb-3 flex item-center">
            <img src="@/assets/left-arrow.svg" width="15" class="mr-2" />
            University of Medical Science California
          </li>
          <li class="secgrey text-fs13 mb-3 flex item-center">
            <img src="@/assets/left-arrow.svg" width="15" class="mr-2" /> Health Sciences New York
          </li>
          <li class="secgrey text-fs13 mb-3 ml-6">
            HCO(s): American Hospital Associates
          </li>
          <li class="secgrey text-fs13 mb-3 ml-6">Prescribers: Immunomedics</li>
        </ul>
      </div>
    </v-card-inner-box>
  </div>
</template>
