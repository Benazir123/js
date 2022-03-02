<template>
  <!-- <layout> -->
  <v-title menu="Engagements"></v-title>
  <v-card-box>
    <div class="flex justify-between relative">
      <div class="flex">
        <div class="w-64 mr-3">
          <v-input-search
            v-model="searchById"
            input-type="number"
            label="Search by Meeting ID"
            name="meetingsearch"
            @update="listEngagement"
            @clearSearch="clearSearch('searchbyid')"
          ></v-input-search>
        </div>
        <!-- Search one -->
        <!-- Search two -->
        <div class="w-64 mr-3">
          <v-input-search
            v-model="searchByName"
            label="Search by Name"
            input-type="text"
            name="namesearch"
            @clearSearch="clearSearch('searchByName')"
          ></v-input-search>
        </div>
        <!-- Search two -->
      </div>
      <div class="flex relative items-center">
        <!-- filter starts -->
        <div
          class="
            bg-graymenu
            cursor-pointer
            flex
            rounded-radius4
            px-4
            py-3
            items-center
            shadow-filtershadow
            mr-4
          "
          @click="showfilter"
        >
          <img src="@/assets/filter.svg" class="w-4 mr-2" />
          <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
          <span
            v-if="filterCount && filterCount.length != 0"
            class="
              bg-blue
              w-20px
              h-20px
              rounded-radius100
              text-white
              flex
              justify-center
              items-center
              text-fs11
              px-2
              py-2
            "
            >{{ filterCount && filterCount.length }}</span
          >
        </div>

        <!-- filter starts -->
        <!-- export starts -->
        <div
          class="
            bg-graymenu
            cursor-pointer
            flex
            rounded-radius4
            px-4
            py-3
            items-center
            shadow-filtershadow
            mr-4
          "
          @click="exportFunction()"
        >
          <img src="@/assets/export.svg" class="mr-2" />
          <span class="ml-1 text-greytxt text-fs13 font-normal">Export</span>
        </div>
        <!-- export starts -->
        <!-- datepicker starts -->
        <!-- <v-date-picker
          @apply-date-filter="applyDateFilter($event)"
        ></v-date-picker> -->
        <component :is="'v-date-picker'" :auto-apply="autoApply" @apply-date-filter="applyDateFilter($event)"></component>
        <!-- datepicker ends -->
      </div>
      <div v-if="hidefilter" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="showfilter"></div>
      <component
        :is="'v-filter'"
        v-if="hidefilter"
        :key="filterKey"
        :eng-filter="engFilter"
        @apply-filter="applyFilter($event)"
      ></component>
    </div>
  </v-card-box>
  <!-- no eng found -->
  <div
    v-if="engagementList.length == 0"
    class="
      flex
      items-center
      justify-center
      text-red-500
      my-10
      font-semibold
      text-fs18
    "
  >
    <p>No Engagement Found</p>
  </div>
  <!-- no eng found -->
  <!-- table starts -->
  <div v-if="engagementList.length != 0" class="table-responsive eng-det ">
    <VTable :data="engagementList" class="w-full" :hide-sort-icons="true" :page-size="pagePerRow">
      <!--  -->
      <template #head>
        <tr>
          <VTh
            v-slot="{ sortOrder }"
            sort-key="name"
            default-sort="desc"
            @sortChanged="sorting(initSorting.id.sortOrter, 'id')"
            >Engagement Details
            <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: initSorting.id.sortOrter === 1,
                ascendingorder: initSorting.id.sortOrter === -1,
              }"
            />
          </VTh>
          <!-- <VTh sortKey="id" class="whitespace-no-wrap actu-id">Actual ID </VTh> -->
          <VTh sort-key="topic" @sortChanged="sorting(initSorting.topic.sortOrter, 'topic')"
            >Topic
            <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: initSorting.topic.sortOrter === 1,
                ascendingorder: initSorting.topic.sortOrter === -1,
              }"
          /></VTh>
          <VTh sort-key="type" @sortChanged="sorting(initSorting.engtype.sortOrter, 'engtype')"
            >Type
            <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: initSorting.engtype.sortOrter === 1,
                ascendingorder: initSorting.engtype.sortOrter === -1,
              }"
          /></VTh>
          <VTh sort-key="owner" @sortChanged="sorting(initSorting.eoname.sortOrter, 'eoname')"
            >Owner

            <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: initSorting.eoname.sortOrter === 1,
                ascendingorder: initSorting.eoname.sortOrter === -1,
              }"
          /></VTh>
          <VTh sort-key="Speaker" @sortChanged="sorting(initSorting.spkname.sortOrter, 'spkname')"
            ><div class="spek-width">
              <!-- <div class="w-48"> -->
              Speaker
              <span
                class="nosort"
                :class="{
                  nosort: sortOrder === 0,
                  ascendingorder: initSorting.spkname.sortOrter === 1,
                  ascendingorder: initSorting.spkname.sortOrter === -1,
                }"
              /></div
          ></VTh>
          <VTh sort-key="confirmed"># of Coll </VTh>
          <VTh sort-key="nosorting">Attendees </VTh>
          <VTh sort-key="status" @sortChanged="sorting(initSorting.meetingstatus.sortOrter, 'meetingstatus')"
            >Status
            <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: initSorting.meetingstatus.sortOrter === 1,
                ascendingorder: initSorting.meetingstatus.sortOrter === -1,
              }"
          /></VTh>
          <VTh sort-key="nosorting">Product </VTh>
          <VTh sort-key="ggy" width="41px"></VTh>
        </tr>
      </template>
      <template #body="{ rows }">
        <template v-for="row in rows" :key="row.id">
          <tr class="cursor-pointer">
            <td>
              <div class="flex flex-col">
                <div class="flex items-center">
                  <a class="cursor-pointer" @click="engdetailpage(row)">
                    <b class="text-fs16 whitespace-nowrap">ID {{ bindData(row.id) }},</b></a
                  >
                  <div
                    v-if="row.has_collaborator_meeting"
                    class="
                      bg-lightblue
                      cursor-pointer
                      w-6
                      h-6
                      group
                      relative
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ml-1
                    "
                    @click="openColloborator(row.meeting_id)"
                  >
                    <!-- -->
                    <img :src="collaborateIcon" />
                    <b
                      class="
                        absolute
                        top-0
                        left-full
                        bg-secgrey
                        text-white
                        p-1
                        px-3
                        rounded-radius4
                        -mt-1
                        ml-2
                        z-10
                        hidden
                        group-hover:block
                      "
                      ><i class=""></i>Colloborator</b
                    >
                  </div>
                  <div
                    v-if="row.is_multi_location"
                    class="
                      bg-lightblue
                      cursor-pointer
                      w-6
                      h-6
                      group
                      relative
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ml-1
                    "
                  >
                    <img src="@/assets/office/locationenglist.svg" />
                    <b
                      class="
                        absolute
                        top-0
                        left-full
                        bg-secgrey
                        text-white
                        p-1
                        px-3
                        rounded-radius4
                        -mt-1
                        ml-2
                        z-10
                        hidden
                        group-hover:block
                      "
                      ><i class=""></i>Multi Location</b
                    >
                  </div>
                  <div
                    v-if="row.is_food"
                    class="
                      bg-lightyellow
                      w-6
                      h-6
                      group
                      relative
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ml-1
                    "
                    @click="engdetailpage(row)"
                  >
                    <img :src="foodicon" />
                    <b
                      class="
                        absolute
                        top-0
                        left-full
                        bg-secgrey
                        text-white
                        p-1
                        px-3
                        rounded-radius4
                        -mt-1
                        ml-2
                        hidden
                        group-hover:block
                      "
                      ><i class=""></i>Food</b
                    >
                  </div>
                </div>
                <span class="text-darkgrey text-fs12" @click="engdetailpage(row)">{{ dateFormate(row.start_time) }}</span>
              </div>
            </td>
            <!-- <td @click="engdetailpage(row)">{{ bindData(row.actual_id) }}</td> -->
            <td>
              <div class="topicwidth" @click="engdetailpage(row)">
                {{ bindData(row.topic.description) }}
              </div>
            </td>
            <td @click="engdetailpage(row)">
              {{ bindData(row.engagement_type.name) }}
            </td>
            <td>
              <div class="flex items-center">
                <div class="flex-shrink-0 w-8 h-8">
                  <component
                    :is="'v-profile'"
                    :key="imgErrorSpk"
                    :small-profile="true"
                    :side-menu="true"
                    :user-info="{
                      letter_name: row.engagement_owner.user.short_name,
                      full_name: row.engagement_owner.user.full_name,
                      img: row.engagement_owner.user.photo,
                      errorImg: row.engagement_owner.user.errorImg ? row.engagement_owner.user.errorImg : false,
                      id: row.engagement_owner.user.id ? row.engagement_owner.user.id : '',
                    }"
                    @errorImg="errorImg(row.engagement_owner.user)"
                  ></component>
                </div>
                <div class="ml-3">
                  <p
                    v-if="row.engagement_owner && row.engagement_owner.user && row.engagement_owner.user.full_name"
                    class="whitespace-no-wrap"
                  >
                    {{ row.engagement_owner.user.full_name }}
                  </p>
                </div>
              </div>
            </td>
            <td class="w-64">
              <div
                v-if="row.engagement_speaker && row.engagement_speaker.user && row.engagement_speaker.user.length != 0"
                class="flex items-center relative"
              >
                <!--  -->

                <div class="flex-shrink-0 w-8 h-8">
                  <component
                    :is="'v-profile'"
                    :key="imgErrorSpk"
                    :small-profile="true"
                    :side-menu="true"
                    :user-info="{
                      letter_name: row.engagement_speaker.user[0].short_name,
                      full_name: row.engagement_speaker.user[0].full_name,
                      errorImg: row.engagement_speaker.user[0].errorImg ? row.engagement_speaker.user[0].errorImg : false,
                      img: row.engagement_speaker.user[0].photo,
                      id: '',
                    }"
                    @errorImg="errorImg(row.engagement_speaker.user[0])"
                  ></component>
                </div>

                <!-- hidden -->

                <div class="ml-3 flex">
                  <p class="whitespace-no-wrap">
                    {{ row.engagement_speaker.user[0].full_name }}
                  </p>
                </div>
                <!--  -->
                <span class="group relative">
                  <img :src="spkStatusIcon(row.engagement_speaker.user[0].status)" class="ml-2 cursor-pointer" />
                  <b
                    v-if="row.engagement_speaker.user[0].status"
                    class="
                      absolute
                      top-0
                      left-full
                      bg-secgrey
                      text-white
                      p-1
                      px-3
                      rounded-radius4
                      -mt-1
                      ml-2
                      hidden
                      group-hover:block
                    "
                    ><i class=""></i>{{ row.engagement_speaker.user[0].status }}</b
                  >
                </span>
                <div
                  v-if="row.engagement_speaker.user.length > 1"
                  class="flex-shrink w-5 h-5 ml-2 cursor-pointer"
                  @click="openMoreSpk(row, row.engagement_speaker.user)"
                >
                  <span
                    class="
                      w-full
                      h-full
                      text-fs9
                      inline-flex
                      items-center
                      text-white
                      justify-center
                      bg-attcount
                      rounded-full
                    "
                  >
                    +{{ row.engagement_speaker.user.length - 1 }}
                  </span>
                </div>
                <div
                  v-if="row.hidespklist"
                  class="fixed top-0 bottom-0 left-0 z-20 right-0"
                  @click="openMoreSpk(row, row.engagement_speaker.user)"
                ></div>
                <div
                  v-if="row.hidespklist"
                  class="
                    bg-white
                    shadow-filtershadow
                    rounded-radius10
                    p-4
                    absolute
                    z-30
                    w-64 profilewrp
                    border
                    top-full
                    mt-2
                    -ml-8
                  "
                >
                  <div class="scroller max-h-40">
                    <div v-for="(data, index) in moreSpeaker" :key="index" class="flex items-center pb-4">
                      <div v-if="index != 0" class="flex-shrink-0 w-8 h-8">
                        <component
                          :is="'v-profile'"
                          :key="imgErrorSpk"
                          :small-profile="true"
                          :side-menu="true"
                          :user-info="{
                            letter_name: data.short_name,
                            full_name: data.full_name,
                            errorImg: data.errorImg ? data.errorImg : false,
                            img: data.photo,
                            id: '',
                          }"
                          @errorImg="errorImg(data)"
                        ></component>
                      </div>
                      <div v-if="index != 0" class="flex">
                        <p class="whitespace-no-wrap ml-3">
                          {{ data.full_name }}
                        </p>
                        <img :src="spkStatusIcon(data.status)" class="ml-2 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td align="center" @click="engdetailpage(row)">
              <span> {{ bindData(row.no_of_collabrator) }}</span>
            </td>
            <td class="whitespace-nowrap" @click="engdetailpage(row)">
              <!-- Total Attendees - -->
              <span v-if="row.engagement_attendee_info && row.engagement_attendee_info.total_invited">{{
                bindData(row.engagement_attendee_info.total_invited)
              }}</span>
            </td>
            <td>
              <div class="flex">
                <span
                  :style="{
                    color: row.engagement_status.text_color,
                    background: row.engagement_status.bg_color,
                  }"
                  class="btn cussize"
                  @click="engdetailpage(row)"
                >
                  {{ row.engagement_status.name }}</span
                >
                <!--   v-if="row.is_revert"
 -->
                <v-smallbutton
                  v-if="row.engagement_status.name == 'Pending Close Out' && row.is_revert"
                  class="bg-revert text-white ml-2"
                  @click="clickRevert(row)"
                >
                  Revert
                </v-smallbutton>
              </div>
            </td>
            <td @click="engdetailpage(row)">
              {{ bindData(row.product.name) }}
            </td>
            <td class="arrowtd" @click="showInnerRow(row.id, row)">
              <img v-if="row.isopen_inner_arrow" :src="downArrow" class="cursor-pointer" />
              <img v-if="row.isopen_inner_arrow == false" :src="upArrow" class="cursor-pointer" />
            </td>
          </tr>

          <engagement-inner-row
            v-if="expendedRow.includes(row.id)"
            :row-data="expendedRowData"
            :is-collabmeeting="false"
            :innerinputtype="'engagementinner'"
          ></engagement-inner-row>
        </template>
      </template>
    </VTable>
  </div>

  <v-pagination
    v-if="engagementList.length != 0"
    v-model="currentPage"
    :pages="totalPages"
    :range-size="1"
    active-color="#DCEDFF"
    :hide-first-button="false"
    :hide-last-button="false"
    @update:modelValue="
      currentPage;
      listEngagement(currentPage);
    "
  />

  <!-- table starts -->
  <!-- collabators -->
  <aside
    class="right-drawer ease-in-out transform transition-all duration-700 z-50"
    :style="{
      right: isOpendrawer ? '0' : '-85%',
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
        text-white
      "
    >
      <p class="text-base text-parenttheme-white font-semibold">
        Collaborator’s Engagements
      </p>
      <div class="cursor-pointer" @click="isOpendrawer = false">
        <img src="@/assets/close-white.svg" />
      </div>
    </div>
    <!-- Collab meeeting Section -->
    <drawer v-if="isOpendrawer" :primary-id="primaryMeetingId" class="p-4"></drawer>
  </aside>

  <div
    :class="[
      'drawer-mask ease-in-out transform transition-all right-0 left-0',
      isOpendrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
    ]"
    :style="{
      transition: isOpendrawer ? '.7s' : '0 delay-700',
    }"
    @click="isOpendrawer = false"
  ></div>
  <!-- </layout> -->
  <!-- uer profile -->
  <profile v-if="isOpenUserProfiledrawer" :show-profile="isOpenUserProfiledrawer"></profile>
  <!-- user profile -->
  <!-- Loader component -->
  <component :is="'v-loader'" v-if="loader"></component>

  <div class="deletepopup">
    <div v-if="showPopup" class="drawer-mask justify-center items-center flex z-50">
      <v-confirmation-modal :header="true">
        <template #header>
          <h4 class="text-fs20 text-white font-bold">{{ headingData }}</h4>
          <img src="@/assets/close-white.svg" class="cursor-pointer" @click="showPopup = false" />
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
              @click="showPopup = false"
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
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
</template>
<script lang="ts" src="./Engagement.ts"></script>
