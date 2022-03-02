<template>
  <v-card-box class="relative h-full">
    <h5 class="text-fs18 font-w-bold text-secgrey mb-3">Collobaration</h5>

    <div v-if="isCollaboration && collList.length != 0" class="flex flex-wrap">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li>
            <a
              class="
                text-fs13
                font-bold
                uppercase
                px-5
                py-2
                pr-3
                cursor-pointer
                flex
                items-center
                justify-center
                border-b-2 border-white
              "
              :class="{
                'text-darkgrey bg-white border-b-2 border-white': opendetailTab !== 1,
                'text-textblue bg-white border-b-2 border-tabactbor': opendetailTab === 1,
              }"
              @click="detailtoggleTabs(1)"
            >
              Accepted
              <span
                class="
                  bg-skyblue
                  text-bluetxt
                  w-6
                  h-6
                  flex
                  items-center
                  justify-center
                  rounded-radius100
                  ml-2
                "
                >{{ collList.length }}</span
              >
            </a>
          </li>
          <li>
            <a
              class="
                text-fs13
                font-bold
                uppercase
                px-5
                py-2
                pr-3
                cursor-pointer
                flex
                items-center
                justify-center
                border-b-2 border-white
              "
              :class="{
                'text-darkgrey bg-white border-b-2 border-white': opendetailTab !== 2,
                'text-textblue bg-white border-b-2 border-tabactbor': opendetailTab === 2,
              }"
              @click="gotoColabTab()"
            >
              Pending
              <!-- <span
                class="
                  bg-skyblue
                  text-bluetxt
                  w-6
                  h-6
                  flex
                  items-center
                  justify-center
                  rounded-radius100
                  ml-2
                "
                >4</span
              > -->
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words">
          <div class="">
            <div v-if="!loader" class="tab-content tab-space">
              <div
                :class="{
                  hidden: opendetailTab !== 1,
                  block: opendetailTab === 1,
                }"
              >
                <!-- table starts -->
                <div class="scroller scroll-table pr-3">
                  <div class="table-responsive">
                    <VTable :data="collList" class="w-full" :hide-sort-icons="true">
                      <template #head>
                        <tr>
                          <VTh sort-key="name" class="text-formlabel font-w-bold">
                            Collaborator
                          </VTh>
                          <VTh sort-key="id" class="whitespace-no-wrap text-formlabel font-w-bold">Engagement ID </VTh>
                          <VTh sort-key="topic" class="text-formlabel font-w-bold">Actual ID </VTh>
                          <VTh sort-key="Type" class="text-formlabel font-w-bold">City </VTh>
                          <VTh sort-key="owner" class="text-formlabel font-w-bold">State </VTh>
                          <VTh sort-key="Speaker" class="text-formlabel font-w-bold"
                            ><div class="w-48">Total Invitees Invited</div></VTh
                          >

                          <VTh sort-key="nosorting" class="text-formlabel font-w-bold">Total Invitees Confirmed </VTh>
                          <VTh sort-key="status" class="text-formlabel font-w-bold">Meeting Status </VTh>
                        </tr>
                      </template>
                      <template #body="{ rows }">
                        <tr v-for="row in rows" :key="row.id">
                          <td>
                            <div class="flex items-center">
                              <div class="flex-shrink-0 w-8 h-8">
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
                              </div>
                              <div class="ml-3">
                                <p class="whitespace-no-wrap">
                                  {{ bindData(row.full_name) }}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="flex">
                              <a class="text-fs16 whitespace-nowrap ">
                                {{ bindData(row.engagement_id) }}
                              </a>
                            </div>
                          </td>
                          <td>
                            <a
                              class="text-fs16 whitespace-nowrap text-bluetxt cursor-pointer"
                              @click="engdetailpage(row.actual_id)"
                            >
                              {{ bindData(row.actual_id) }}
                            </a>
                          </td>
                          <td>{{ bindData(row.city) }}</td>
                          <td>
                            {{ bindData(row.state) }}
                          </td>
                          <td>{{ bindData(row.no_of_invited) }}</td>
                          <td class="whitespace-nowrap">
                            {{ bindData(row.no_of_confirmed) }}
                          </td>
                          <td align="center">
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
                              bg-accpectbtn
                              text-accepttxt
                              p-1
                              px-2
                              rounded-radius6
                              cursor-default
                            "
                              >Joined</v-smallbutton
                            >
                          </td>
                        </tr>
                      </template>
                    </VTable>
                  </div>
                </div>
                <v-pagination
                  v-if="collList && collList.length != 0"
                  v-model="currentPage"
                  :pages="totalPages"
                  :range-size="1"
                  active-color="#DCEDFF"
                  :hide-first-button="false"
                  :hide-last-button="false"
                  @update:modelValue="
                    currentPage;
                    listCollabration();
                  "
                />

                <!-- table starts -->
              </div>
              <div
                :class="{
                  hidden: opendetailTab !== 2,
                  block: opendetailTab === 2,
                }"
              >
                <!-- table starts -->
                <div class="scroller scroll-table pr-3">
                  <a
                    class="
                      mt-4
                      block
                      text-sm text-red-600 text-center
                      font-semibold
                      cursor-pointer
                    "
                  >
                    Coming Soon
                  </a>
                </div>
                <!-- table starts -->
              </div>
            </div>
            <v-eng-loader v-if="loader"></v-eng-loader>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!isCollaboration || collList.length == 0"
      class="
      flex min-h-300px
      items-center
      justify-center
    "
    >
      <p
        class="
      text-red-500
      font-semibold
      text-fs14"
      >
        No Data Found
      </p>
    </div>
  </v-card-box>
</template>
<script lang="ts" src="./Collobaration.ts"></script>
