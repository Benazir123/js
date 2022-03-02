<template>
  <v-card-box>
    <!-- <v-title menu="Collaboration" class="mb-4"></v-title> -->
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

        <div class="tab-content tab-space mt-8">
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
                        Accepted
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
                        Pending
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

                  <div class="flex items-center relative colbsearch mb-2">
                    <v-input-search
                      v-model="searchByName"
                      input-type="text"
                      label="Search"
                      name="meetingsearch"
                      @clearSearch="clearSearch()"
                    ></v-input-search>

                    <!-- filter starts -->
                    <div
                      class="
                        bg-graymenu
                        cursor-pointer
                        flex
                        rounded-radius4
                        px-5
                        py-3
                        ml-4
                        items-center
                        shadow-filtershadow
                      "
                      @click="collshowfilter"
                    >
                      <img src="@/assets/filter.svg" class="w-4 mr-2" />
                      <span class="ml-1 mr-5 text-greytxt text-fs12">Filters</span>
                    </div>

                    <div
                      v-if="collhidefilter"
                      class="fixed top-0 bottom-0 left-0 z-20 right-0"
                      @click="collshowfilter"
                    ></div>
                    <div
                      v-if="collhidefilter"
                      class="
                        absolute
                        top-full
                        mt-2
                        bg-white
                        z-30
                        rounded-radius10
                        shadow-filtershadow
                        w-500px
                        right-0
                        collabfilter
                        overflow-hidden
                      "
                    >
                      <h3
                        class="
                          p-3
                          px-4
                          border-b border-opacity-25
                          text-fs14
                          block
                          border-filtertitle
                          font-normal
                          bg-collafilter
                          text-white
                        "
                      >
                        Filter
                      </h3>
                      <div class="scroller scrollheight mb-2">
                        <vue-collapsible-panel-group accordion>
                          <vue-collapsible-panel v-for="row in geoList" :key="row.id" :expanded="true">
                            <template #title>
                              <label class="inline-flex items-center relative">
                                <v-checkbox
                                  :is-checked="row.selected == true"
                                  class="form-checkbox h-4 w-4 rounded-none"
                                  @change="selectHierachy(row, $event.target.checked)"
                                />
                                <span class="ml-3 text-fs14 text-menuselectionlabel">{{ row.field_name }}</span>
                              </label>
                              <span
                                v-if="getCollaborationCount(row.field, row.field_name) != 0"
                                class="
                                  bg-blue
                                  w-20px
                                  h-20px
                                  rounded-radius100
                                  text-white
                                  absolute
                                  right-12
                                  flex
                                  justify-center
                                  items-center
                                  text-fs11
                                  px-2
                                  py-2
                                "
                                >{{ getCollaborationCount(row.field, row.field_name) }}</span
                              >
                            </template>
                            <template #content>
                              <div v-if="row.child && row.child.length != 0">
                                <col-filter
                                  :bind-row="row.child"
                                  :count-data="collabCountArray"
                                  @user-data="getCheckedData($event)"
                                ></col-filter>
                              </div>
                            </template>
                          </vue-collapsible-panel>
                        </vue-collapsible-panel-group>
                      </div>
                      <div
                        class="
                          p-4
                          px-2
                          border-t
                          text-fs18
                          block
                          border-opacity-25 border-filtertitle
                          flex
                          justify-end
                        "
                      >
                        <!-- <v-smallbutton
                          class="
                            bg-clrbtn
                            flex
                            rounded-radius6
                            text-clrtxt
                            px-8
                            py-2
                            mr-2
                            text-fs14
                            items-center
                            mr-4
                            tracking-normal
                          "
                          @click="clearAllFilter"
                          >Clear All</v-smallbutton
                        > -->
                        <v-smallbutton
                          class="
                            bg-blue
                            flex
                            rounded-radius6
                            px-8
                            py-2
                            text-fs14 text-white
                            items-center
                            mr-7
                            tracking-normal
                          "
                          @click="applyFilter"
                          >Apply</v-smallbutton
                        >
                      </div>
                    </div>
                    <!-- Filter ends  -->
                  </div>
                </div>
                <div class="tab-content tab-space mt-8">
                  <div
                    :class="{
                      hidden: openInnerTab !== 1,
                      block: openInnerTab === 1,
                    }"
                  >
                    <div v-if="!loader && collobaration.length != 0" class="table-responsive colbtable">
                      <VTable class="w-full" :data="collobaration" :hide-sort-icons="true">
                        <template #head>
                          <tr>
                            <VTh sort-key="collaborator" class="w-80">Collaborator</VTh>
                            <VTh sort-key="engagementid">Engagement ID</VTh>
                            <VTh sort-key="actualid">Actual ID</VTh>
                            <VTh sort-key="city">City</VTh>
                            <VTh sort-key="state">State</VTh>
                            <VTh sort-key="totalinviteesconfirmed">Total Invitees Confirmed</VTh>
                            <VTh sort-key="totalinviteesconfirmed">Total Invitees Confirmed</VTh>
                            <VTh sort-key="meetingstatus" class="w-56">Meeting Status</VTh>
                          </tr>
                        </template>
                        <template #body="{ rows }">
                          <tr v-for="row in rows" :key="row.id">
                            <td>
                              <p class="flex items-center">
                                <v-profile
                                  :key="imgError"
                                  :small-profile="true"
                                  :side-menu="true"
                                  :user-info="{
                                    letter_name: row.short_name,
                                    full_name: row.full_name,
                                    img: row.photo,
                                    errorImg: row.imgError ? row.imgError : false,
                                    id: row.id,
                                  }"
                                  class="my-4"
                                  @errorImg="errorImg(row)"
                                >
                                </v-profile>
                                <span>{{ bindData(row.full_name) }}</span>
                              </p>
                            </td>
                            <td>{{ bindData(row.engagement_id) }}</td>
                            <td
                              class="
                                text-fs16
                                whitespace-nowrap
                                text-bluetxt
                                cursor-pointer
                              "
                            >
                              <a @click="engdetailpage(row.actual_id)">{{ bindData(row.actual_id) }}</a>
                            </td>
                            <td>{{ bindData(row.city) }}</td>
                            <td>{{ bindData(row.state) }}</td>
                            <td>{{ bindData(row.no_of_invited) }}</td>
                            <td>{{ bindData(row.no_of_confirmed) }}</td>
                            <td class="whitespace-nowrap">
                              <v-smallbutton
                                v-if="
                                  row.didNotAttend == 'true' &&
                                    (engData.engagement_type.name == 1 || engData.engagement_type.name == 4) &&
                                    (engData.engagement_status == 'Pending Close Out' ||
                                      engData.engagement_status == 'Completed')
                                "
                                class="
                                  bg-stpink
                                  py-2
                                  px-4
                                  text-white
                                  ml-2
                                  text-fs13
                                  min-w-137px
                                  rounded-radius4
                                  font-semibold
                                "
                              >
                                Do Not Attend
                              </v-smallbutton>
                              <v-smallbutton
                                v-else
                                :style="{
                                  color: row.status.text_color,
                                  background: row.status.bg_color,
                                }"
                                class="
                                  bg-yellow
                                  py-2
                                  px-4
                                  text-white
                                  ml-2
                                  text-fs13
                                  min-w-137px
                                  rounded-radius4
                                  font-semibold
                                "
                              >
                                Joined
                              </v-smallbutton>
                            </td>
                          </tr>
                        </template>
                      </VTable>
                    </div>
                    <v-pagination
                      v-if="collobaration && collobaration.length != 0 && !loader"
                      v-model="currentPage"
                      :pages="totalPages"
                      :range-size="1"
                      active-color="#DCEDFF"
                      :hide-first-button="false"
                      :hide-last-button="false"
                      @update:modelValue="
                        currentPage;
                        listColloabaration('', openInnerTab);
                      "
                    />
                    <v-no-data v-if="collobaration.length == 0 && !loader"></v-no-data>
                    <v-eng-loader v-if="loader"></v-eng-loader>
                  </div>
                </div>
                <div
                  :class="{
                    hidden: openInnerTab !== 2,
                    block: openInnerTab === 2,
                  }"
                >
                  <div v-if="!loader && collobaration.length != 0" class="table-responsive colbtable">
                    <VTable class="w-full" :data="collobaration" :hide-sort-icons="true">
                      <template #head>
                        <tr>
                          <VTh sort-key="contentimg" class="w-80">Collaborator</VTh>
                          <VTh sort-key="contentname">Territory</VTh>
                          <VTh sort-key="contentname">City</VTh>
                          <VTh sort-key="contentname">State</VTh>
                          <VTh sort-key="action" class="w-56">Status</VTh>
                        </tr>
                      </template>
                      <template #body="{ rows }">
                        <tr v-for="row in rows" :key="row.id">
                          <td>
                            <p class="flex items-center">
                              <v-profile
                                :key="imgError"
                                :small-profile="true"
                                :side-menu="true"
                                :user-info="{
                                  letter_name: row.short_name,
                                  full_name: row.full_name,
                                  img: row.photo,
                                  errorImg: row.imgError ? row.imgError : false,
                                  id: row.id ? row.id : '',
                                }"
                                class="my-4"
                                @errorImg="errorImg(row)"
                              >
                              </v-profile>
                              <span>{{ bindData(row.full_name) }}</span>
                            </p>
                          </td>
                          <td>{{ bindData(row.territory) }}</td>
                          <td>{{ bindData(row.city) }}</td>
                          <td>{{ bindData(row.state) }}</td>
                          <td>
                            <v-smallbutton
                              v-if="row.status.name"
                              :style="{
                                color: row.status.text_color,
                                background: row.status.bg_color,
                              }"
                              class="
                                bg-yellow
                                py-2
                                px-4
                                text-white
                                ml-2
                                text-fs13
                                font-semibold
                              "
                            >
                              {{ row.status.name }}
                            </v-smallbutton>
                          </td>
                        </tr>
                      </template>
                    </VTable>
                  </div>
                  <v-pagination
                    v-if="collobaration && collobaration.length != 0 && !loader"
                    v-model="currentPage"
                    :pages="totalPages"
                    :range-size="1"
                    active-color="#DCEDFF"
                    :hide-first-button="false"
                    :hide-last-button="false"
                    @update:modelValue="
                      currentPage;
                      listColloabaration('', openInnerTab);
                    "
                  />
                  <v-no-data v-if="collobaration.length == 0 && !loader"></v-no-data>
                  <v-eng-loader v-if="loader"></v-eng-loader>
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
          <notes-page v-if="activeTab == 2" :meeting-id="meetingId" :tab-code="'notes'"></notes-page>
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
        </div>
      </div>
    </div>
    <!--  -->
  </v-card-box>
  <component :is="'v-loader'" v-if="collabrationFilterLoader"></component>
</template>
<script lang="ts" src="./Collobaration.ts"></script>
