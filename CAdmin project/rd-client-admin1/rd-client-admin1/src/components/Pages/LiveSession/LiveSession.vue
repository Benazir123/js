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
      </div>
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
  <div v-if="engagementList.length != 0" class="table-responsive eng-det">
    <VTable :data="engagementList" class="w-full" :hide-sort-icons="true" :page-size="pagePerRow">
      <template #head>
        <tr>
          <VTh v-slot="{ sortOrder }" sort-key="name" default-sort="desc">
            Session Details
            <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
              }"
            />
          </VTh>
          <VTh sort-key="Type">Engagement Type</VTh>
          <VTh sort-key="owner">Engagement Owner</VTh>
          <VTh sort-key="Speaker">Speaker</VTh>
          <VTh sort-key="attendees">Attendees</VTh>
          <VTh sort-key="status"> Status </VTh>
          <VTh sort-key="innerrow"></VTh>
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
                  </div>
                  <div
                    v-if="row.is_food"
                    class="
                      bg-lightyellow
                      w-6
                      h-6
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ml-1
                    "
                    @click="engdetailpage(row)"
                  >
                    <img :src="foodicon" />
                  </div>
                </div>
                <span class="text-darkgrey text-fs12" @click="engdetailpage(row)">{{ dateFormate(row.start_time) }}</span>
              </div>
            </td>
            <td @click="engdetailpage(row)">
              {{ bindData(row.engagement_type.name) }}
            </td>
            <td>
              <div class="flex items-center">
                <div class="flex-shrink-0 w-8 h-8" @click="showUserProfile()">
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
                      id: row.engagement_owner.id ? row.engagement_owner.id : '',
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
            <td>
              <div
                v-if="row.engagement_speaker && row.engagement_speaker.user && row.engagement_speaker.user.length != 0"
                class="flex items-center"
              >
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
                      id: row.engagement_speaker.user[0].id ? row.engagement_speaker.user[0].id : '',
                    }"
                    @errorImg="errorImg(row.engagement_speaker.user[0])"
                  ></component>
                </div>
                <div class="ml-3 flex">
                  <p class="whitespace-no-wrap">
                    {{ row.engagement_speaker.user[0].full_name }}
                  </p>
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
                </div>
              </div>
            </td>

            <td>
              <div v-if="row.invitees_info.user && row.invitees_info.user.length" class="relative">
                <ul class="flex align-center cursor-pointer">
                  <li
                    v-for="attendee in row.invitees_info.user.slice(0, 3)"
                    :key="attendee.id"
                    class="w-8 h-8 -ml-4 cursor-pointer"
                  >
                    <component
                      :is="'v-profile'"
                      :key="imgErrorSpk"
                      class="flex flex-row items-center py-2"
                      :small-profile="true"
                      :side-menu="true"
                      :user-info="{
                        letter_name: attendee.short_name,
                        full_name: attendee.full_name,
                        img: attendee.photo,
                        errorImg: attendee.errorImg ? attendee.errorImg : false,
                        id: attendee.id ? attendee.id : '',
                      }"
                      @errorImg="errorImg(attendee)"
                    ></component>
                  </li>
                  <li
                    v-if="row.invitees_info.user.length > 3"
                    class="w-8 h-8 -ml-4 cursor-pointer"
                    @click="openMoreAttendee"
                  >
                    <span
                      class="
                        w-full
                        h-full
                        inline-flex
                        items-center
                        text-white
                        justify-center
                        bg-attcount
                        rounded-full
                      "
                    >
                      +3
                    </span>
                  </li>
                </ul>
                <!-- hidden -->
                <div v-if="hidefilter" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="openMoreAttendee"></div>
                <div
                  v-if="hidefilter"
                  class="
                    bg-white
                    shadow-attendeesshadow
                    rounded-radius10
                    p-4
                    absolute
                    z-30
                    w-64
                    mt-4
                    -ml-8
                  "
                >
                  <div class="scroller h-80">
                    <span
                      class="
                        flex flex-row
                        items-center
                        pb-4
                        mb-4
                        border-b border-attendeesborder
                      "
                    >
                      <div class="flex items-center">
                        <component
                          :is="'v-profile'"
                          :key="imgErrorSpk"
                          class="
                            flex flex-row
                            items-center
                            pb-4
                            mb-4
                            border-b border-attendeesborder
                          "
                          :small-profile="true"
                          :side-menu="true"
                          :user-info="{
                            letter_name: 'test',
                            full_name: 'test',
                            img: '',
                            errorImg: false,
                            id: '',
                          }"
                          @errorImg="errorImg(attendee)"
                        ></component>
                        <h4 class="text-fs12 text-black font-medium ml-3">
                          From Alex Manda
                        </h4>
                      </div>
                    </span>
                    <!-- <component
                    :is="'v-profile'"
                    class=" flex flex-row
                      items-center
                      pb-4
                      mb-4
                      border-b border-attendeesborder"
                    :small-profile="true"
                    :side-menu="true"
                    :key="imgErrorSpk"
                    @errorImg="errorImg(attendee)"
                    :user-info="{
                      letter_name: 'test',
                      full_name: 'test',
                      img: '',
                      errorImg: false,
                    }"
                  ></component>
                   <h4 class="text-fs12 text-black font-medium ml-3">
                        From Alex Manda
                      </h4> -->
                  </div>
                </div>
              </div>
            </td>

            <td>
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
            :innerinputtype="'livesession'"
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
  <div class="userprofile">
    <aside
      class="
        right-drawer
        ease-in-out
        transform
        transition-all
        duration-700
        z-50
        w-40
      "
      :style="{
        right: isOpenUserProfiledrawer ? '0' : '-85%',
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
          px-4
          py-3
          bg-blue
        "
      >
        <p class="text-base text-white text-fs20 font-semibold">User Profile</p>
        <div class="cursor-pointer" @click="isOpenUserProfiledrawer = false">
          <img src="@/assets/close.svg" class="cursor-pointer" />
        </div>
      </div>
      <profile></profile>
    </aside>
  </div>
  <div
    :class="[
      'drawer-mask ease-in-out transform transition-all right-0 left-0',
      isOpenUserProfiledrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
    ]"
    :style="{
      transition: isOpenUserProfiledrawer ? '.7s' : '0 delay-700',
    }"
    @click="isOpenUserProfiledrawer = false"
  ></div>
  <!-- user profile -->
  <!-- Loader component -->
  <component :is="'v-loader'" v-if="loader"></component>
</template>
<script lang="ts" src="./LiveSession.ts"></script>
