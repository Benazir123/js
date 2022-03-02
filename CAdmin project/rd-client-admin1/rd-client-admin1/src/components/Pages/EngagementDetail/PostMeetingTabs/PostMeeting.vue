<template>
  <v-card-box>
    <v-title menu="Post Meeting" class="mb-4"></v-title>
    <!--  -->

    <div class="flex flex-wrap">
      <div class="w-full">
        <component
          :is="'tab-heading'"
          :key="reLoadeHeading"
          :active-tab="activeTab"
          :tab-list="tabListName"
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
                        Sign In Sheet
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
                        Receipt
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
                    <div
                      v-if="tabSetValue.length != 0 && !loader"
                      class="table-responsive englistdata tablebordercommon spkengagementtable"
                    >
                      <VTable class="w-full" :data="tabSetValue" :hide-sort-icons="true" :page-size="10">
                        <template #head>
                          <tr>
                            <VTh sort-key="name">
                              Name
                            </VTh>
                            <VTh sort-key="usertype">User Type</VTh>
                            <VTh sort-key="signature">Signature</VTh>
                            <VTh sort-key="survey"></VTh>
                          </tr>
                        </template>
                        <template #body="{ rows }">
                          <tr v-for="row in rows" :key="row.id">
                            <td class="cursor-pointer w-96">
                              <div>
                                <component
                                  :is="'v-profile'"
                                  :key="imgError"
                                  :small-profile="true"
                                  :side-menu="false"
                                  :user-info="{
                                    letter_name: row.short_name,
                                    full_name: row.full_name,
                                    img: row.photo,
                                    errorImg: row.errorImg ? row.errorImg : false,
                                    id: row.id ? row.id : '',
                                  }"
                                  @errorImg="errorImg(row)"
                                ></component>
                              </div>
                            </td>
                            <td class="cursor-pointer w-80">
                              {{ row.user_type }}
                            </td>
                            <td>
                              <div v-if="row.signature" class="border border-uploadarea rounded-radius4 px-2 py-1.5 w-60">
                                <img :src="row.signature" class="w-auto h-6" />
                              </div>
                              <v-smallbutton
                                v-else
                                :style="{
                                  color: '#328eff',
                                  background: '#edf5ff',
                                }"
                                class="
                                  bg-stpink
                                  py-2
                                  px-4
                                  text-white
                                  ml-2
                                  text-fs13
                                  rounded-radius4
                                  font-normal

                                "
                              >
                                No show
                              </v-smallbutton>
                            </td>
                            <td class="text-right">
                              <v-smallbutton
                                v-if="row.signature"
                                class="
                                  text-white
                                  bg-yellow
                                  rounded-radius6
                                 py-2 px-8 mr-5 text-fs13 font-w-normal"
                                @click="getsurvey()"
                                >Survey</v-smallbutton
                              >
                            </td>
                          </tr>
                        </template>
                      </VTable>
                    </div>
                    <v-pagination
                      v-if="tabSetValue.length != 0"
                      v-model="currentPage"
                      :pages="totalPages"
                      :range-size="1"
                      active-color="#DCEDFF"
                      :hide-first-button="false"
                      :hide-last-button="false"
                    />
                    <v-no-data v-if="tabSetValue.length == 0 && !loader"></v-no-data>
                    <v-eng-loader v-if="loader"></v-eng-loader>
                  </div>
                </div>
                <div
                  :class="{
                    hidden: openInnerTab !== 2,
                    block: openInnerTab === 2,
                  }"
                >
                  <!--  -->
                  <!-- <v-no-data></v-no-data> -->
                  <div
                    v-if="tabSetValue.length != 0"
                    class="table-responsive englistdata tablebordercommon spkengagementtable"
                  >
                    <VTable class="w-full" :data="tabSetValue" :hide-sort-icons="true" :page-size="10">
                      <template #head>
                        <tr>
                          <VTh sort-key="name">
                            Bills
                          </VTh>
                          <VTh sort-key="usertype">Venue/Caterer</VTh>
                          <VTh sort-key="signature">Receipt Total</VTh>
                          <VTh sort-key="signature1"></VTh>
                        </tr>
                      </template>
                      <template #body="{ rows }">
                        <tr v-for="row in rows" :key="row.id">
                          <td>
                            <img :src="row.food_beverage_image" class="w-24" @click="download(row.food_beverage_image)" />
                          </td>
                          <td class="cursor-pointer ">
                            {{ bindData(row.venueOrCaterer) }}
                          </td>

                          <td>
                            {{ dollorFormat(row.receiptAmount) }}
                          </td>
                          <td>
                            <img src="@/assets/views.svg" class="cursor-pointer " />
                          </td>
                        </tr>
                      </template>
                    </VTable>
                  </div>
                  <v-pagination
                    v-if="tabSetValue.length != 0"
                    v-model="currentPage"
                    :pages="totalPages"
                    :range-size="1"
                    active-color="#DCEDFF"
                    :hide-first-button="false"
                    :hide-last-button="false"
                  />
                  <v-no-data v-if="tabSetValue.length == 0 && !loader"></v-no-data>
                  <v-eng-loader v-if="loader"></v-eng-loader>

                  <!--  -->
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

    <aside
      class="right-drawer surveypop ease-in-out transform transition-all duration-700 z-50"
      :style="{
        right: openForm ? '0' : '-625px',
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
        py-3
        bg-blue
        text-white
      "
      >
        <p class="text-parenttheme-white font-semibold">Survey</p>
        <!-- @click="openForm = false" -->
        <div class="cursor-pointer" @click="getsurvey()">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8L8 24" stroke="#fff" stroke-width="3" />
            <path d="M8 8L24 24" stroke="#fff" stroke-width="3" />
          </svg>
        </div>
      </div>
      <!-- Collab meeeting Section -->
      <div v-if="openForm">
        <div class="scroller scroll-survey">
          <ul class="">
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              Speaker was able to effectively articulate the presentation .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The speaker engaged the audience .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The speaker effectively answered questions .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The meeting format afforded a conducive learning environment .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The Radius Direct Application utilized for this meeting provided an interactive engagement .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The speaker engaged the audience .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The speaker effectively answered questions .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              Speaker was able to effectively articulate the presentation .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The speaker effectively answered questions .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
            <li class="text-fs14 font-normal py-6 px-8 border-b border-uploadarea">
              The meeting format afforded a conducive learning environment .?
              <span class="block text-fs14 font-semibold mt-3">Somewhat Agree</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <div
      :class="[
        'drawer-mask ease-in-out transform transition-all right-0 left-0',
        openForm ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
      ]"
      :style="{
        transition: openForm ? '.7s' : '0 delay-700',
      }"
      @click="openForm = false"
    ></div>
  </v-card-box>
</template>
<script lang="ts" src="./PostMeeting.ts"></script>
