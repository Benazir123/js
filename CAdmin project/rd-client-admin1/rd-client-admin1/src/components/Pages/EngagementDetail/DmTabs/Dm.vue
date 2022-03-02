<template>
  <v-card-box>
    <v-title menu="DM" class="mb-4"></v-title>
    <div v-if="dmList.length != 0 && !loader" class="table-responsive englistdata">
      <VTable class="w-full" :data="dmList" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="dmname">User</VTh>
            <VTh sort-key="dnreqstatus">Request Status</VTh>
            <VTh sort-key="dmstatus">Status</VTh>
            <VTh sort-key="dmapproved">Approved By</VTh>
            <VTh sort-key="dmapprovedtime">Approved Time</VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
              <div class="flex items-center">
                <div v-if="dmList && dmList.length != 0" class="flex-shrink-0 w-8 h-8">
                  <component
                    :is="'v-profile'"
                    :key="imgError"
                    :small-profile="true"
                    :side-menu="true"
                    :user-info="{
                      letter_name: row.short_name,
                      full_name: row.fullName,
                      errorImg: row.errorImg ? row.errorImg : false,
                      img: row.photo,
                      id: row.id ? row.id : '',
                    }"
                    @errorImg="errorImg(row)"
                  ></component>
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">
                    {{ row.fullName }}
                  </p>
                </div>
              </div>
            </td>
            <td v-if="row.request_status">
              <v-smallbutton
                :style="{
                  color: row.request_status.text_color,
                  background: row.request_status.bg_color,
                }"
                class="
                bg-skyblue
                text-bluetxt
                p-1
                px-3
                rounded-radius6
                cursor-default
              "
                >{{ row.request_status.name }}</v-smallbutton
              >
            </td>
            <td v-if="row.status">
              <v-smallbutton
                :style="{
                  color: row.status.text_color,
                  background: row.status.bg_color,
                }"
                :class="[row.status.name == 'Approve' ? ' cursor-pointer' : '']"
                class="
                p-1
                px-2
                rounded-radius6
                cursor-default
              "
                @click="isApprove(row)"
                >{{ row.status.name }}</v-smallbutton
              >
            </td>
            <td v-if="row.approved_by">{{ row.approved_by.fullName }}</td>
            <td v-if="row.approved_by">
              {{ dateFormate(row.approved_by.approved_date) }}
            </td>
          </tr>
        </template>
      </VTable>
    </div>

    <v-no-data v-if="dmList.length == 0 && !loader"></v-no-data>
    <!-- Loader Component -->
    <v-eng-loader v-if="loader"></v-eng-loader>
  </v-card-box>
  <div class="deletepopup">
    <div v-if="isDmApprove" class="drawer-mask justify-center items-center flex z-50">
      <v-confirmation-modal :header="true">
        <template #header>
          <h4 class="text-fs20 text-white font-bold">Approve the Engagement</h4>
          <img src="@/assets/close-white.svg" class="cursor-pointer" @click="isDmApprove = false" />
        </template>
        <template #description>
          <!-- <div
              class="absolute right-5 top-4 cursor-pointer"
              @click="isDmApprove = false"
            >
              <img src="@/assets/login/loginclose.svg" class="cursor-pointer" />
            </div> -->
          <p class="text-center text-greytxt  font-semibold text-fs16 pl-2">
            Do you want to approve the engagement on behalf of the DM?
          </p>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <v-smallbutton
              type="submit"
              class="font-w-semibold text-fs14 mr-3  py-2 px-12 float-right text-white bg-blue rounded-radius6"
              @click="dmApprove()"
              >Yes
              <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
            </v-smallbutton>
            <v-smallbutton
              type="submit"
              class="font-w-semibold text-fs14  py-2 px-12 float-right text-greytxt  bg-clrbtn  rounded-radius6"
              @click="isDmApprove = false"
              >No
            </v-smallbutton>
          </div>
        </template>
      </v-confirmation-modal>
    </div>
  </div>
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
</template>
<script lang="ts" src="./Dm.ts"></script>
