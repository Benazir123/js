<template>
  <!-- <layout> -->
  <v-breadcrumb breadcrumb="Reports" :subbreadcrumb="listReportTitle"></v-breadcrumb>

  <div class="flex justify-between items-center">
    <v-title :menu="listReportTitle"></v-title>
  </div>

  <v-card-box
    v-if="
      (listReport.isGenerate && listReport.isGenerate == true) ||
        (listReport.isNormalFilters && listReport.isNormalFilters == true) ||
        (listReport.isExport && listReport.isExport == true) ||
        (listReport.isDateFilters && listReport.isDateFilters) == true
    "
  >
    <div class="flex justify-between relative">
      <div class="flex">
        <!-- <div class="w-64 mr-3">
          <v-input-search
            v-model="searchById"
            inputType="number"
            label="Search by Meeting ID"
            name="meetingsearch"
          ></v-input-search>
        </div> -->
        <div class="mr-8">
          <div v-if="listReport.isDropdownFilter && listReport.isDropdownFilter == true" class="my-1">
            <v-select
              v-model="dropdownSelectValue"
              :select-value="dropdownSelectValue"
              @change="onChangeValue(dropdownSelectValue)"
            >
              <!-- <option selected :value="dropdownData.id[0]">
                  {{ dropdownData.label[0] }}
                </option> -->
              <option v-for="dropdownData in DropdownFilters" :key="dropdownData.id" :value="dropdownData.id">
                {{ dropdownData.label }}
              </option>
            </v-select>
          </div>
        </div>
      </div>
      <div class="flex relative items-center">
        <!-- export starts -->
        <div
          v-if="listReport.isGenerate && listReport.isGenerate == true"
          class="
            bg-white
            border border-reportbtn
            cursor-pointer
            flex
            rounded-radius8
            px-4
            py-2.5
            items-center
            mr-4
          "
          @click="generateFunction()"
        >
          <img src="@/assets/generate.svg" class="mr-2" />
          <span class="ml-1 mr-2 text-greytxt text-fs13">Generate</span>
        </div>
        <!-- export starts -->

        <!-- filter starts -->
        <div
          v-if="listReport.isNormalFilters && listReport.isNormalFilters == true"
          class="
            bg-white
            border border-reportbtn
            cursor-pointer
            flex
            rounded-radius8
            px-4
            py-2.5
            items-center
            mr-4
          "
          @click="showfilter"
        >
          <img src="@/assets/filter.svg" class="w-4 mr-2" />
          <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
          <span
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
            >1</span
          >
        </div>

        <!-- filter starts -->
        <!-- export starts -->
        <div
          v-if="listReport.isExport && listReport.isExport == true"
          class="
            bg-white
            border border-reportbtn
            cursor-pointer
            flex
            rounded-radius8
            px-4
            py-2.5
            items-center
            mr-4
          "
          @click="exportFunction()"
        >
          <img src="@/assets/export.svg" class="mr-2" />
          <span class="ml-1 mr-2 text-greytxt text-fs13">Export</span>
        </div>
        <!-- export starts -->
        <!-- datepicker starts -->
        <!-- <v-date-picker
          @apply-date-filter="applyDateFilter($event)"
        ></v-date-picker> -->
        <div v-if="listReport.isDateFilters && listReport.isDateFilters == true" class="whitedatepicker-wrp">
          <component :is="'v-date-picker'" :auto-apply="autoApply" @apply-date-filter="applyDateFilter($event)"></component>
        </div>
        <!-- datepicker ends -->
      </div>
      <div v-if="hidefilter" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="showfilter"></div>
      <component
        :is="'v-filter'"
        v-if="hidefilter"
        :key="filterKey"
        :eng-filter="reportNormalFilter"
        @apply-filter="applyFilter($event)"
      ></component>
    </div>
  </v-card-box>

  <!-- table starts -->

  <div
    v-if="listReport && listReport.rows && listReport.rows.length != 0 && !loader"
    class="table-responsive eng-det report-design"
  >
    <table class="table table-hover custom-table w-full">
      <thead>
        <tr>
          <!-- <th>ID</th> -->
          <th v-for="(column, i) in listReport.columns" :key="i">
            {{ column.label }}
          </th>
          <!-- <th>Action</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in listReport.rows" :key="i">
          <!-- <td>{{ itemperpage * (currentPage - 1) + i + 1 }}</td> -->
          <td v-for="(column, j) in listReport.columns" :key="j">
            <span v-html="dateFormate(row[column.param], column.param)"></span>
          </td>
          <!-- <td>
            <a class="btn btn-info" (click)="openAttReport(attinfo, 10)"
              ><i class="fa fa-eye"></i
            ></a>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
  <!-- table starts -->
  <!-- pagination starts -->
  <v-pagination
    v-if="listReport && listReport.rows && listReport.rows.length != 0 && !loader"
    v-model="currentPage"
    :pages="totalPages"
    :range-size="1"
    active-color="#DCEDFF"
    :hide-first-button="false"
    :hide-last-button="false"
    @update:modelValue="
      currentPage;
      listReports(currentPage);
    "
  />
  <!-- V-No-Data -->
  <v-no-data v-if="listReport && listReport.rows && listReport.rows.length == 0 && !loader"></v-no-data>
  <!-- Loader component -->
  <component :is="'v-loader'" v-if="loader"></component>

  <div class="">
    <aside
      class="
        right-drawer
        ease-in-out
        transform
        transition-all
        duration-700
        z-50
      "
      :style="{
        right: openForm ? '0' : '-80vw',
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
        <p class="text-parenttheme-white font-semibold">
          Meeting: 2 ( Veronica Lerma )
        </p>
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
        <div class="flex items-center justify-between p-4">
          <img src="@/assets/salixlogowithname.png" class="w-28" />
          <label class="inline-flex items-center">
            <v-checkbox checked class="form-checkbox h-4 w-4 rounded-radius5" />
            <span class="ml-3 text-fs12 text-greytxt">Expand all</span>
          </label>
        </div>
        <div class="scroller scroll-meetingwrp">
          <vue-collapsible-panel-group accordion>
            <vue-collapsible-panel :expanded="false">
              <template #title>
                <label class="flex items-start cursor-pointer">
                  <p class="text-greytxt text-fs14">User Info</p>
                </label>
              </template>
              <template #content>
                <h5 class="text-fs13 font-semibold text-greytxt mb-3">
                  Veronica Lerma, FNP
                </h5>
                <div class="flex flex-row divide-x divide-userinfo">
                  <div class="w-6/12">
                    <ul class="text-greytxt text-fs13">
                      <li class="flex flex-row mb-3">
                        <label class="w-36 text-fs13 font-semibold text-greytxt">RD ID</label>
                        <p class="w-80 text-additionalinfo">1251060</p>
                      </li>
                      <li class="flex flex-row mb-3">
                        <label class="w-36 text-fs13 font-semibold text-greytxt">Prescriber No</label>
                        <p class="w-80 text-additionalinfo">No</p>
                      </li>
                      <li class="flex flex-row mb-3">
                        <label class="w-36 text-fs13 font-semibold text-greytxt">Meeting ID</label>
                        <p class="w-80 text-additionalinfo">rsanders</p>
                      </li>
                    </ul>
                  </div>
                  <div class="px-3 pl-10">
                    <ul class="text-greytxt text-fs13">
                      <li class="flex flex-row mb-3">
                        <label class="w-36 text-fs13 font-semibold text-greytxt">Program Status</label>
                        <p class="w-80 text-additionalinfo">1251060</p>
                      </li>
                      <li class="flex flex-row mb-3">
                        <label class="w-36 text-fs13 font-semibold text-greytxt">Program Date</label>
                        <p class="w-80 text-additionalinfo">No</p>
                      </li>
                      <li class="flex flex-row mb-3">
                        <label class="w-36 text-fs13 font-semibold text-greytxt">Specialty</label>
                        <p class="w-80 text-additionalinfo">Family Medicine</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </vue-collapsible-panel>

            <vue-collapsible-panel :expanded="false">
              <template #title>
                <label class="flex items-start cursor-pointer">
                  <p class="text-greytxt text-fs14">Topic</p>
                </label>
              </template>
              <template #content>
                <p class="text-additionalinfo text-fs13">
                  Understanding the Burden of Irritable Bowel Syndrome With Constipation (IBS-C) and Chronic Idiopathic
                  Constipation (CIC) (TRU.0032.USA.20)
                </p>
              </template>
            </vue-collapsible-panel>

            <vue-collapsible-panel :expanded="false">
              <template #title>
                <label class="flex items-start cursor-pointer">
                  <p class="text-greytxt text-fs14">Office Info</p>
                </label>
              </template>
              <template #content>
                <div class="flex flex-row divide-x divide-userinfo">
                  <div class="w-6/12">
                    <h5 class="text-fs13 font-semibold text-greytxt mb-3">
                      Office Address 1
                    </h5>
                    <ul class="text-greytxt text-fs13">
                      <li class="flex flex-row mb-3">
                        <p class="w-80 text-additionalinfo">
                          6828 Springfield Ave, Laredo, TX, 78041
                        </p>
                      </li>
                      <li class="flex flex-row mb-3">
                        <p class="w-80 text-additionalinfo">489-849-8787</p>
                      </li>
                      <li class="flex flex-row mb-3">
                        <p class="w-80 text-additionalinfo">
                          veroflowers@v3qayahoo.com
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="px-3 pl-10">
                    <h5 class="text-fs13 font-semibold text-greytxt mb-3">
                      Office Address 2
                    </h5>
                    <ul class="text-greytxt text-fs13">
                      <li class="flex flex-row mb-3">
                        <p class="w-80 text-additionalinfo">----</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </vue-collapsible-panel>

            <vue-collapsible-panel :expanded="false">
              <template #title>
                <label class="flex items-start cursor-pointer">
                  <p class="text-greytxt text-fs14">Venue Info</p>
                </label>
              </template>
              <template #content>
                <div class="flex flex-row divide-x divide-userinfo">
                  <div class="w-6/12">
                    <h5 class="text-fs13 font-semibold text-greytxt mb-3">
                      Venue Address 1
                    </h5>
                    <ul class="text-greytxt text-fs13">
                      <li class="flex flex-row mb-3">
                        <p class="w-80 text-additionalinfo">
                          131 Main, 9886 Rea Roadd. Charlotte, NC
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="px-3 pl-10">
                    <h5 class="text-fs13 font-semibold text-greytxt mb-3">
                      Venue Address 2
                    </h5>
                    <ul class="text-greytxt text-fs13">
                      <li class="flex flex-row mb-3">
                        <p class="w-80 text-additionalinfo">----</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </template>
            </vue-collapsible-panel>

            <vue-collapsible-panel :expanded="false">
              <template #title>
                <label class="flex items-start cursor-pointer">
                  <p class="text-greytxt text-fs14">Other Info</p>
                </label>
              </template>
              <template #content>
                <div class="bg-white -m-8">
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                      "
                    >
                      <div class="w-6/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Sales Rep
                        </h5>
                        <ol class="text-greytxt text-fs13">
                          <li class="flex flex-row mb-2">
                            <p class="text-additionalinfo">1. Iliana Taylor</p>
                          </li>
                          <li class="flex flex-row mb-2">
                            <p class="text-additionalinfo">2. Willow</p>
                          </li>
                        </ol>
                      </div>
                      <div class="px-3 pl-10">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Product Type
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Trulance
                        </p>
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Occupation
                        </h5>
                        <p class="text-fs13 text-additionalinfo">Other</p>
                      </div>
                    </div>
                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                      "
                    >
                      <div class="w-6/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Speaker Full Name
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Ronen Arai
                        </p>
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Territory
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          2-10101G1-MA, Boston
                        </p>
                      </div>
                      <div class="px-3 pl-10">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-2">
                          Attendee Type
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Attendee
                        </p>
                      </div>
                    </div>

                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                        col-span-2
                      "
                    >
                      <div class="w-3/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Registration Status
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Awaiting
                        </p>
                      </div>
                      <div class="w-3/12 px-3 pl-10">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Signed In Status
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Pending
                        </p>
                      </div>
                      <div class="w-3/12 px-3 pl-10">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-2">
                          Reconciled
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Customer Master
                        </p>
                      </div>
                      <div class="w-3/12 px-3 pl-10">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-2">
                          ConsumedMeal
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">----</p>
                      </div>
                    </div>

                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                      "
                    >
                      <div class="w-6/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Attendee Licence State
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Awaiting
                        </p>
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Attendee State Licence Number
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          Ap127710
                        </p>
                      </div>
                    </div>

                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                      "
                    >
                      <div class="w-6/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Npi
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          1720442023
                        </p>
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Licensed In Mn
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">---</p>
                      </div>
                    </div>

                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                      "
                    >
                      <div class="w-6/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Goverment Employee
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">----</p>
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Attendee Unique Id
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          1251060
                        </p>
                      </div>
                    </div>

                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                      "
                    >
                      <div class="w-6/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Meeting Grand Total
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">----</p>
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Registration Time Stamp
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">---</p>
                      </div>
                    </div>

                    <div
                      class="
                        flex flex-row
                        divide-x divide-userinfo
                        bg-tabactiveblue
                        rounded-radius8
                        p-8
                      "
                    >
                      <div class="w-6/12">
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Last Updated
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">
                          08/27/2021
                        </p>
                        <h5 class="text-fs13 font-semibold text-greytxt mb-1">
                          Eternal ID
                        </h5>
                        <p class="text-fs13 text-additionalinfo mb-3">---</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </vue-collapsible-panel>
          </vue-collapsible-panel-group>
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

    <aside
      class="
        right-drawer
        ease-in-out
        transform
        transition-all
        duration-700
        z-50
      "
      :style="{
        right: openPreview ? '0' : '-80vw',
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
        <p class="text-parenttheme-white font-semibold">Preview</p>
        <!-- @click="openPreview = false" -->
        <div class="cursor-pointer" @click="getPreview()">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8L8 24" stroke="#fff" stroke-width="3" />
            <path d="M8 8L24 24" stroke="#fff" stroke-width="3" />
          </svg>
        </div>
      </div>
      <!-- Collab meeeting Section -->
      <!-- <div>
        <div class="scroller scroll-previewwrp">
          <engagement-detail-page v-if="openPreview"></engagement-detail-page>
        </div>
      </div> -->
    </aside>

    <div
      :class="[
        'drawer-mask ease-in-out transform transition-all right-0 left-0',
        openPreview ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
      ]"
      :style="{
        transition: openPreview ? '.7s' : '0 delay-700',
      }"
      @click="openPreview = false"
    ></div>
  </div>
  <!-- Toaster -->
  <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
</template>
<script lang="ts" src="./Reports.ts"></script>
