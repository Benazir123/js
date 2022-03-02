<template>
  <div>
    <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Tickets"></v-breadcrumb>
    <v-title menu="Tickets"></v-title>
    <v-card-box>
      <div class="flex justify-between relative">
        <div class="flex">
          <div class="w-64 mr-3">
            <v-input-search
              v-model="searchByText"
              input-type="text"
              label="Search..."
              name="meetingsearch"
              paddingy="py-2"
              @clearSearch="clearSearch()"
            ></v-input-search>
          </div>
          <!-- Search one -->
        </div>
      </div>
    </v-card-box>
    <v-card-box>
      <div>
        <ul class="flex mb-0 list-none pt-3 border-b-2 border-searchbox">
          <li v-for="data in ticketHeadingName" :key="data.id" class="text-center -mb-0.5">
            <a
              class="
                text-fs16
                font-normal
                px-4
                py-2
                block
                leading-normal
                cursor-pointer
              "
              :class="{
                'text-darkgrey': openTicketTab !== data.id,
                'border-b-2 border-tabactbor text-textblue': openTicketTab === data.id,
              }"
              @click="toggletickettab(data.id)"
            >
              {{ data.title }}
            </a>
          </li>
        </ul>
        <div class="py-5 flex-auto">
          <div class="tab-content tab-space">
            <div
              :class="{
                hidden: openTicketTab !== openTicketTab,
                block: openTicketTab === openTicketTab,
              }"
            >
              <!-- table starts -->
              <div v-if="listTicketData.length != 0 && !loader" class="table-responsive spklistdata">
                <VTable class="w-full" :data="listTicketData" :hide-sort-icons="true">
                  <template #head>
                    <tr>
                      <VTh sort-key="contractname">
                        <span class="inline-block">ID</span>
                      </VTh>
                      <VTh sort-key="contproduct">
                        Name
                      </VTh>
                      <VTh sort-key="contstartdate">
                        Date
                      </VTh>
                      <VTh sort-key="contenddate">
                        Subject
                      </VTh>
                      <VTh sort-key="contamount">
                        Meeting ID
                      </VTh>
                      <VTh sort-key="contsoftcapamount">
                        <span class="w-100px inline-block whitespace-normal">Actual ID </span>
                      </VTh>
                      <VTh sort-key="contsoftcap">Action</VTh>
                    </tr>
                  </template>
                  <template #body="{ rows }">
                    <tr v-for="row in rows" :key="row.id">
                      <td class="w-5">{{ bindData(row.ticketNo) }}</td>
                      <td class="w-36 whitespace-normal">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-8 h-8 mr-2">
                            <component
                              :is="'v-profile'"
                              :key="imgError"
                              :small-profile="true"
                              :side-menu="true"
                              :user-info="{
                                letter_name: row.short_name,
                                full_name: row.full_name,
                                errorImg: row.errorImg ? row.errorImg : false,
                                img: row.photo,
                                id: row.id ? row.id : '',
                              }"
                              @errorImg="errorImg(row)"
                            ></component>
                          </div>
                          {{ bindData(row.full_name) }}
                        </div>
                      </td>

                      <td class="w-36 whitespace-normal">
                        {{ dateFormate(row.createdAt) }}
                      </td>
                      <td class="w-16 whitespace-normal">
                        {{ bindData(row.subject) }}
                      </td>
                      <td class="w-36 whitespace-normal">
                        {{ bindData(row.meeting_id) }}
                      </td>
                      <td class="w-10 whitespace-normal">
                        {{ bindData(row.ActualId) }}
                      </td>

                      <td class="w-5 whitespace-normal">
                        <div class="flex items-center">
                          <img src="@/assets/views.svg" class="cursor-pointer mr-2" @click="openticket(row)" />
                          <img
                            v-if="openTicketTab == 0 || openTicketTab == 1"
                            src="@/assets/blueticket.svg"
                            class="cursor-pointer mr-2"
                            @click="ticketClose(row)"
                          />
                          <img src="@/assets/delete.svg" class="cursor-pointer mr-2" @click="ticketDelete(row)" />
                          <img
                            v-if="openTicketTab == 2"
                            src="@/assets/reopen.svg"
                            class="cursor-pointer mr-2"
                            @click="ticketReopen(row)"
                          />
                        </div>
                      </td>
                    </tr>
                  </template>
                </VTable>
              </div>
              <!-- <v-pagination /> -->
              <v-pagination
                v-if="listTicketData && listTicketData.length != 0 && !loader"
                v-model="currentPage"
                :pages="totalPages"
                :range-size="1"
                active-color="#DCEDFF"
                :hide-first-button="false"
                :hide-last-button="false"
                @update:modelValue="
                  currentPage;
                  listTickets(currentPage);
                "
              />
              <v-no-data v-if="listTicketData && listTicketData.length == 0 && !loader"></v-no-data>
            </div>
          </div>
        </div>
      </div>
    </v-card-box>

    <!--  @click="isshowProfile = false" -->
    <!-- ---- -->
    <!-- collabators -->
    <!-- <p @click="openticket()">livechat</p> -->
    <div class="prescriber tickets">
      <aside
        class="right-drawer ease-in-out transform transition-all duration-700 z-50"
        :style="{
          right: isOpenticketdrawer ? '0' : '-85%',
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
            TK-048681
          </p>
          <div class="cursor-pointer" @click="isOpenticketdrawer = false">
            <img src="@/assets/close-white.svg" />
          </div>
        </div>
        <!-- Collab meeeting Section -->
        <live-chat v-if="isOpenticketdrawer" class="p-4"></live-chat>
      </aside>

      <div
        :class="[
          'drawer-mask ease-in-out transform transition-all right-0 left-0',
          isOpenticketdrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
        ]"
        :style="{
          transition: isOpenticketdrawer ? '.7s' : '0 delay-700',
        }"
        @click="isOpenticketdrawer = false"
      ></div>
    </div>

    <v-loader v-if="loader"></v-loader>

    <!-- Tickets popup -->
    <div class="deletepopup">
      <div v-if="showTicketPopup" class="drawer-mask justify-center items-center flex z-50">
        <v-confirmation-modal :header="true">
          <template #header>
            <h4 class="text-fs20 text-white font-bold">Tickets</h4>
            <img src="@/assets/close-white.svg" class="cursor-pointer" @click="showTicketPopup = false" />
          </template>
          <template #description>
            <p class="text-center text-greytxt font-semibold text-fs16 py-4">
              Do you want to {{ ticketPopupText }} the ticket?
            </p>
          </template>
          <template #footer>
            <div class="flex justify-end">
              <v-smallbutton
                type="submit"
                class="flex font-w-normal text-fs12 mr-3 py-2 px-10 float-right text-greytxt  bg-clrbtn  rounded-radius6"
                @click="showTicketPopup = false"
                >No
              </v-smallbutton>
              <v-smallbutton
                type="submit"
                class="flex font-w-normal text-fs12 py-2 px-10 float-right text-white bg-blue rounded-radius6"
                @click="ticketPopupFunction"
                >Yes
                <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
              </v-smallbutton>
            </div>
          </template>
        </v-confirmation-modal>
      </div>
    </div>
  </div>
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
</template>
<script lang="ts" src="./Tickets.ts"></script>
