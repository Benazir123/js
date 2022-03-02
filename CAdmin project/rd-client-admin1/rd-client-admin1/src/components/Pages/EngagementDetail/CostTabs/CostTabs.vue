<template>
  <v-card-box>
    <!-- <v-title menu="Speaker" class="px-3 mb-0"></v-title> -->
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
        <div class="relative flex flex-col min-w-0 break-words">
          <div class="">
            <div class="tab-content tab-space mt-6">
              <v-smallbutton
                v-if="activeTab != 1"
                class="absolute -top-11 right-3 z-1 bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"
                @click="openAddForm()"
                ><img src="@/assets/addwhite.svg" class="mr-2" />{{ addForm }}</v-smallbutton
              >
              <p class="mb-5">
                Total Engagement Cost:
                <span class="text-greytxt font-bold">{{ dollorFormat(estimatedCost) }}</span>
              </p>
              <div
                :class="{
                  hidden: activeTab !== 1,
                  block: activeTab === 1,
                }"
              >
                <estimated-cost
                  v-if="activeTab == 1"
                  :key="reLoadList"
                  :meeting-id="meetingId"
                  :tab-code="tabCode"
                  :meeting-date="meetingDate"
                  @estimatedCost="estimatedCostFun($event)"
                  @editForm="editForm($event)"
                  @openClick="openClick($event)"
                  @delete-cost="deleteCost($event)"
                ></estimated-cost>
              </div>
              <!-- notes -->
              <div
                class="speakernotes"
                :class="{
                  hidden: activeTab !== 2,
                  block: activeTab === 2,
                }"
              >
                <planned-cost
                  v-if="activeTab == 2"
                  :key="reLoadList"
                  :meeting-id="meetingId"
                  :tab-code="tabCode"
                  :meeting-date="meetingDate"
                  @estimatedCost="estimatedCostFun($event)"
                  @editForm="editForm($event)"
                  @openClick="openClick($event)"
                  @delete-cost="deleteCost($event)"
                ></planned-cost>
              </div>
              <!-- notes -->
              <!-- notes -->
              <div
                :class="{
                  hidden: activeTab !== 3,
                  block: activeTab === 3,
                }"
              >
                <actual-cost
                  v-if="activeTab == 3"
                  :key="reLoadList"
                  :meeting-id="meetingId"
                  :tab-code="tabCode"
                  :meeting-date="meetingDate"
                  @estimatedCost="estimatedCostFun($event)"
                  @editForm="editForm($event)"
                  @openClick="openClick($event)"
                  @delete-cost="deleteCost($event)"
                ></actual-cost>
              </div>
              <!-- notes -->
            </div>
          </div>
          <div class="prescriber">
            <add-form
              v-if="openForm"
              :is-open="openForm"
              :info="tabInfo"
              :form-data="initformData"
              @close-form="cloeForm($event)"
              @delete-cost="deleteCost($event)"
            ></add-form>
          </div>
        </div>
      </div>
    </div>
  </v-card-box>
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
  <div class="deletepopup">
    <div v-if="showdelete" class="drawer-mask justify-center items-center flex z-50">
      <v-confirmation-modal :header="true">
        <template #header>
          <h4 class="text-fs20 text-white font-bold">Delete</h4>
          <img src="@/assets/close-white.svg" class="cursor-pointer" @click="showdelete = false" />
        </template>
        <template #description>
          <p class="text-center text-greytxt font-semibold text-fs16 py-4">
            Are you sure you want to delete this {{ deleteCostText }}
          </p>
        </template>
        <template #footer>
          <div class="flex justify-end">
            <v-smallbutton
              type="submit"
              class="flex font-w-normal text-fs12 mr-3 py-2 px-10 float-right text-greytxt  bg-clrbtn  rounded-radius6"
              @click="showdelete = false"
              >No
            </v-smallbutton>
            <v-smallbutton
              type="submit"
              class="flex font-w-normal text-fs12 py-2 px-10 float-right text-white bg-blue rounded-radius6"
              @click="cost"
              >Yes
              <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
            </v-smallbutton>
          </div>
        </template>
      </v-confirmation-modal>
    </div>
  </div>
</template>
<script lang="ts" src="./CostTabs.ts"></script>
