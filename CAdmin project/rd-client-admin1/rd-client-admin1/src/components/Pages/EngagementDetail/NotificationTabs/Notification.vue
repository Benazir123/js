<template>
  <v-card-box>
    <v-title menu="Notifications" class="mb-4"></v-title>
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

        <div class="tab-content tab-space mt-6">
          <div
            :class="{
              hidden: activeTab !== 1,
              block: activeTab === 1,
            }"
          >
            <!-- notification design -->
            <div v-if="notification && notification.length != 0" class="table-responsive englistdata">
              <VTable class="w-full" :data="notification" :hide-sort-icons="true">
                <template #head>
                  <tr>
                    <VTh sort-key="collaborator" class="w-96">Message</VTh>
                    <VTh sort-key="engagementid">Type </VTh>
                    <VTh sort-key="actualid">Triggered By </VTh>
                    <VTh sort-key="city">Recipient</VTh>
                    <VTh sort-key="state">Status</VTh>
                    <VTh sort-key="totalinviteesconfirmed" class="w-16">Actions </VTh>
                  </tr>
                </template>
                <template #body="{ rows }">
                  <tr v-for="row in rows" :key="row.id">
                    <td>
                      {{ bindData(row.display_msg) }}
                    </td>
                    <td>{{ bindData(row.notification_type) }}</td>
                    <td>
                      <p v-if="row.sender_user" class="flex items-center">
                        <component
                          :is="'v-profile'"
                          :key="imgError"
                          :small-profile="true"
                          :side-menu="false"
                          :user-info="{
                            letter_name: row.sender_user.short_name,
                            full_name: row.sender_user.full_name,
                            errorImg: row.sender_user.errorImg ? row.sender_user.errorImg : false,
                            img: row.sender_user.photo,
                            id: row.sender_user.id ? row.sender_user.id : '',
                            degree: row.sender_user.degree ? row.sender_user.degree : '',
                          }"
                        ></component>
                        <!-- <span>{{ bindData(row.sender_user.full_name) }}</span> -->
                      </p>
                      <p v-if="!row.sender_user">---</p>
                    </td>
                    <td>
                      <p v-if="row.receiver_user" class="flex items-center">
                        <component
                          :is="'v-profile'"
                          :small-profile="true"
                          :side-menu="false"
                          :user-info="{
                            letter_name: row.receiver_user.short_name,
                            full_name: row.receiver_user.full_name,
                            errorImg: row.receiver_user.errorImg ? row.receiver_user.errorImg : false,
                            img: row.receiver_user.photo,
                            id: row.receiver_user.id ? row.receiver_user.id : '',
                            degree: row.receiver_user.degree ? row.receiver_user.degree : '',
                          }"
                        ></component>
                        <!-- <span>{{ bindData(row.full_name) }}</span> -->
                      </p>
                      <p v-if="!row.receiver_user">---</p>
                    </td>
                    <td>
                      <v-smallbutton
                        class=" bg-skyblue
                text-bluetxt
                p-1
                px-3
                text-fs13
                rounded-radius6
                cursor-default w-auto"
                      >
                        Sent
                      </v-smallbutton>
                    </td>
                    <td>
                      <v-smallbutton
                        class="bg-await   p-1
                px-3 text-approvebtn  text-fs13 rounded-radius6 "
                      >
                        Resend
                      </v-smallbutton>
                    </td>
                  </tr>
                </template>
              </VTable>
            </div>
            <v-pagination
              v-if="notification && notification.length != 0"
              v-model="currentPage"
              :pages="totalPages"
              :range-size="1"
              active-color="#DCEDFF"
              :hide-first-button="false"
              :hide-last-button="false"
              @update:modelValue="
                currentPage;
                listNotification(currentPage);
              "
            />
            <v-no-data v-if="notification.length == 0 && !loader"></v-no-data>
            <!-- Loader Component -->
            <v-eng-loader v-if="loader"></v-eng-loader>
            <!-- notification design -->
          </div>
        </div>
        <div
          :class="{
            hidden: activeTab !== 2,
            block: activeTab === 2,
          }"
        >
          <!--  -->
          <communication-page
            v-if="activeTab == 2"
            :meeting-id="meetingId"
            :tab-code="'communications'"
          ></communication-page>
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
          <notes-page
            v-if="activeTab == 3"
            :meeting-id="meetingId"
            :tab-code="'notes'"
            :category-id="categoryIdNotes"
          ></notes-page>
          <!--  -->
        </div>
        <div
          class="speakernotes"
          :class="{
            hidden: activeTab !== 4,
            block: activeTab === 4,
          }"
        >
          <!--  -->
          <task-page
            v-if="activeTab == 4"
            :meeting-id="meetingId"
            :tab-code="'tasks'"
            :category-id="categoryIdTask"
          ></task-page>
          <!--  -->
        </div>
      </div>
    </div>
    <!--  -->
  </v-card-box>
</template>
<script lang="ts" src="./Notification.ts"></script>
