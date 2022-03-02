<template>
  <div v-if="engData" class="flex flex-row">
    <v-card-box class="w-7/12 mr-5 p-7">
      <div class="flex flex-row divide-x divide-engborder">
        <div class="w-8/12">
          <ul class="text-greytxt text-fs13">
            <li class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">ID</label>
              <p class="w-80">{{ showData(engData.id) }}</p>
            </li>
            <li class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">Actual ID</label>
              <p class="w-80">{{ showData(engData.meeting_id) }}</p>
            </li>
            <li class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">Date & Time </label>
              <p class="w-80">{{ dateFormate(engData.start_time) }}</p>
            </li>
            <li class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">Type</label>
              <p v-if="engData.engagement_type" class="w-80">
                {{ showData(engData.engagement_type.name) }}
              </p>
            </li>
            <li class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">Company</label>
              <p v-if="engData.product" class="w-80">
                {{ showData(engData.company.name) }}
              </p>
            </li>
            <li v-if="engData.product && engData.product.company_product" class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">Product</label>
              <p class="w-80" v-html="engData.product.company_product"></p>
            </li>
            <li v-if="engData.topic && engData.topic.title" class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">Topic</label>
              <p class="w-80">
                {{ showData(engData.topic.title) }}
              </p>
            </li>
            <li v-if="engData.topic && engData.topic.description" class="flex flex-row mb-3">
              <label class="w-36 font-w-bold">Topic Descriptions</label>
              <p class="w-80">
                {{ showData(engData.topic.description) }}
              </p>
            </li>
          </ul>
        </div>
        <div class="px-3">
          <h5 v-if="engData.engagement_attendee_info" class="text-fs16 font-bold text-secgrey mb-3">
            Participant Summary
          </h5>
          <ul v-if="engData.engagement_attendee_info" class="text-greytxt text-fs13">
            <li class="flex flex-row mb-5">
              <label class="w-44 text-greytxt font-bold">Attendees Confirmed</label>
              <p class="text-darkgrey">
                {{ showData(engData.engagement_attendee_info.confirmed) }}
              </p>
            </li>
            <li class="flex flex-row mb-5">
              <label class="w-44 text-greytxt font-bold">Prescriber(s) Confirmed</label>
              <p class="text-darkgrey">
                {{ showData(engData.engagement_attendee_info.prescriber) }}
              </p>
            </li>
            <li class="flex flex-row mb-5">
              <label class="w-44 text-greytxt font-bold">Attendees Invited </label>
              <p class="text-darkgrey">
                {{ showData(engData.engagement_attendee_info.total_invited) }}
              </p>
            </li>
            <li class="flex flex-row mb-5">
              <label class="w-44 text-greytxt font-bold">No of Expected</label>
              <p class="text-darkgrey">
                {{ showData(engData.engagement_attendee_info.no_of_expected) }}
              </p>
            </li>
          </ul>
          <div v-if="engData.engagement_owner">
            <h5 class="text-fs16 font-bold text-secgrey mb-3">
              {{ engData.engagement_owner.header_title }}
            </h5>
            <v-profile
              :key="imgError"
              :small-profile="true"
              :user-info="{
                letter_name: engData.engagement_owner.user.short_name,
                full_name: engData.engagement_owner.user.full_name,
                img: engData.engagement_owner.user.photo,
                errorImg: engData.engagement_owner.user.errorImg ? engData.engagement_owner.user.errorImg : false,
                id: engData.engagement_owner.user.id ? engData.engagement_owner.user.id : '',
              }"
              @errorImg="errorImg(engData.engagement_owner.user)"
            ></v-profile>
          </div>
        </div>
      </div>
    </v-card-box>
    <!-- profile section -->
    <v-card-box class="w-3/12 mr-5">
      <div
        v-if="engData.engagement_speaker && engData.engagement_speaker.user && engData.engagement_speaker.user.length != 0"
        class="relative"
      >
        <div
          v-if="engData.engagement_speaker.user.length > 1"
          class="w-6 h-6  ml-2 cursor-pointer absolute top-3 right-11 z-10"
        >
          <span
            class="w-full h-full text-fs9 inline-flex items-center text-white justify-center bg-attcount rounded-full"
            @click="moreSpk(engData.engagement_speaker.user)"
          >
            +{{ engData.engagement_speaker.user.length - 1 }}
          </span>
        </div>
        <component
          :is="'v-profile'"
          :key="imgError"
          :small-profile="false"
          :user-info="{
            letter_name: engData.engagement_speaker.user[0].short_name,
            full_name: engData.engagement_speaker.user[0].full_name,
            img: engData.engagement_speaker.user[0].photo,
            errorImg: engData.engagement_speaker.user[0].errorImg ? engData.engagement_speaker.user[0].errorImg : false,
            id: '',
          }"
          class="my-4"
          @errorImg="errorImg(engData.engagement_speaker.user[0])"
        >
          <p class="text-darkgrey text-fs14">
            {{ engData.engagement_speaker.header_title }}
          </p>
        </component>

        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col text-center items-center">
            <p class="text-fs12 text-darkgrey font-bold mb-2">Invited by</p>
            <p class="text-secgrey text-fs14 font-bold">
              {{ showData(engData.invite_by.full_name) }}
            </p>
          </div>
          <div
            class="
              flex flex-col
              font-bold
              text-center
              items-center
              text-fs12
              white-space-nowrap
            "
          >
            <p class="text-darkgrey mb-2">Request Status</p>
            <v-smallbutton
              :style="{
                color: engData.engagement_speaker.user[0].invitee_text_color,
                background: engData.engagement_speaker.user[0].invitee_bg_color,
              }"
              class="
                bg-skyblue
                text-bluetxt
                p-1
                px-3
                rounded-radius6
                cursor-default
              "
              >{{ engData.engagement_speaker.user[0].invitee_status }}</v-smallbutton
            >
          </div>
          <div
            class="
              flex flex-col
              font-bold
              text-center
              items-center
              text-fs12
              white-space-nowrap
            "
          >
            <p class="text-darkgrey mb-2">Status</p>
            <v-smallbutton
              :style="{
                color: engData.engagement_speaker.user[0].status_text_color,
                background: engData.engagement_speaker.user[0].status_bg_color,
              }"
              class="
                bg-accpectbtn
                text-accepttxt
                p-1
                px-2
                rounded-radius6
                cursor-default
              "
              >{{ engData.engagement_speaker.user[0].status }}</v-smallbutton
            >
          </div>
        </div>
      </div>
      <div
        v-if="engData.engagement_speaker && engData.engagement_speaker.user && engData.engagement_speaker.user.length == 0"
        class="
          flex
          absolute
          inset-0
          items-center
          justify-center
          text-red-500
          font-semibold
          text-fs14
        "
      >
        <p>No Speaker Found</p>
      </div>
    </v-card-box>
    <!-- profile section -->
    <!-- Attendees starts -->
    <attendees-page :attendee-data="inviteeInfo" @hcp-tab-change="tabChange(11)"></attendees-page>
    <!-- Attendees ends -->
  </div>
  <div class="flex flex-row flex-wrap">
    <!-- Budget Summary starts -->
    <div class="w-3/12">
      <budgetsummary-page v-if="engData" :budget-summary="engData.meeting_budget_summary"></budgetsummary-page>
    </div>
    <!-- Budget Summary starts -->
    <div class="w-3/12">
      <location-page
        v-if="engData"
        :location-data="engData.meeting_venues"
        @location-tab-change="tabChange(10)"
      ></location-page>
    </div>
    <div class="w-6/12">
      <collabaration-page
        v-if="engData"
        :meeting-id="engagmentData.id"
        :is-collaboration="isCollaboration"
        :engagment-data="engData"
        @coll-tab-change="tabChange(5)"
      ></collabaration-page>
    </div>
  </div>
  <v-no-data v-if="!engData"></v-no-data>
  <div class="add-inner-form">
    <inner-form
      v-if="isShowMoreSpk"
      :show-more-spk="true"
      :is-open="isShowMoreSpk"
      :more-speaker="spkData"
      @close-inner-form="closeInnerForm"
    ></inner-form>
  </div>
</template>
<style>
.add-inner-form .right-drawer {
  width: 32vw !important;
}
</style>
<script lang="ts" src="./DetailsPage.ts"></script>
