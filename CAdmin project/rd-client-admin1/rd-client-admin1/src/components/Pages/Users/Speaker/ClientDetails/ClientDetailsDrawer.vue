<template>
  <!-- table starts -->
  <div class="p-5">
    <div class="table-responsive englistdata">
      <VTable
        :data="clientDetailList"
        class="w-full min-w-full divide-y divide-gray-200 bg-white"
        :hide-sort-icons="true"
        :page-size="10"
        :current-page="currentPage"
      >
        <!--  -->
        <template #head>
          <tr>
            <VTh sort-key="name">Name</VTh>
            <VTh sort-key="id" class="whitespace-no-wrap">User Type</VTh>
            <VTh sort-key="topic">Territory Name</VTh>
            <VTh sort-key="Type">Territory ID</VTh>
            <VTh sort-key="owner">Phone Number</VTh>
            <VTh sort-key="Speaker"><div class="w-48">Email Address</div></VTh>
            <VTh sort-key="nosorting">No. of Engagements Occurred</VTh>
            <VTh sort-key="status">No. of Engagements Scheduled</VTh>
            <VTh sort-key="nosorting">No. of Total Engagements</VTh>
            <VTh sort-key="nosorting">No. of Cancelled Engagements</VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <template v-for="row in rows" :key="row.id">
            <tr>
              <td>
                <div class="flex flex-col">
                  <div class="flex items-center">
                    <a class="cursor-pointer" @click="engdetailpage(row)">
                      <b class="text-fs16 whitespace-nowrap">ID {{ row.actual_id }},</b></a
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
                      @click="openColloborator"
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
                    >
                      <img :src="foodicon" />
                    </div>
                  </div>
                  <span class="text-darkgrey text-fs12">{{ dateFormate(row.start_time) }}</span>
                </div>
              </td>
              <td>{{ row.id }}</td>
              <td>
                <div class="topicwidth">{{ row.topic.description }}</div>
              </td>
              <td>
                {{ row.engagement_type.name }}
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
                        errorImg: row.engagement_owner.user.photo ? row.engagement_owner.user.photo : false,
                        id: row.id ? row.id : '',
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
                        img: row.engagement_owner.user.photo,
                        id: row.id ? row.id : '',
                      }"
                      @errorImg="errorImg(row.engagement_speaker.user[0])"
                    ></component>
                  </div>
                  <div class="ml-3 flex">
                    <p class="whitespace-no-wrap">
                      {{ row.engagement_speaker.user[0].full_name }}
                    </p>
                    <img :src="statusMarkforSpeker" class="ml-2" />
                  </div>
                </div>
              </td>
              <!-- <td align="center">
                <span>{{ row.no_of_collabrator }}</span>
              </td> -->
              <td class="whitespace-nowrap">
                Total Attendees -
                <span v-if="row.engagement_attendee_info && row.engagement_attendee_info.total_invited">{{
                  row.engagement_attendee_info.total_invited
                }}</span>
              </td>
              <td>
                <span
                  :style="{
                    color: row.engagement_status.text_color,
                    background: row.engagement_status.bg_color,
                  }"
                  class="btn"
                >
                  {{ row.engagement_status.name }}</span
                >

                <v-smallbutton v-if="row.is_revert" class="bg-revert text-white ml-2">
                  Revert
                </v-smallbutton>
              </td>
              <td>
                {{ row.product.name }}
              </td>
              <td>
                <img
                  v-if="row.isopen_inner_arrow"
                  :src="downArrow"
                  class="cursor-pointer"
                  @click="showInnerRow(row.id, row)"
                />
                <img
                  v-if="row.isopen_inner_arrow == false"
                  :src="upArrow"
                  class="cursor-pointer"
                  @click="showInnerRow(row.id, row)"
                />
              </td>
            </tr>
          </template>
        </template>
      </VTable>
    </div>
    <v-pagination
      v-if="clientDetailList.length != 0"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        clientDetailsList(currentPage);
      "
    />
  </div>
  <!-- table starts -->

  <component :is="'v-loader'" v-if="loader"></component>
</template>
<script lang="ts" src="./ClientDetailsDrawer.ts"></script>
