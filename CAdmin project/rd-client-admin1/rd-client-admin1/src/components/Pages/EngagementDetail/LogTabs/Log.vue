<template>
  <v-card-box>
    <div class="flex justify-between items-center mb-4">
      <v-title menu="Log" class="-mb-1"></v-title>
      <div class="flex justify-end items-center w-full relative">
        <div class="w-60 logsearch">
          <v-input-search
            v-model="searchByName"
            input-type="text"
            label="Search"
            name="meetingsearch"
            @clearSearch="clearSearch()"
          ></v-input-search>
        </div>
        <!-- filter strats -->
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
          @click="logshowfilter"
        >
          <img src="@/assets/filter.svg" class="w-4 mr-2" />
          <span class="ml-1 text-greytxt text-fs12">Filters</span>
        </div>
        <div v-if="loghidefilter" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="logshowfilter"></div>
        <component
          :is="'v-filter'"
          v-if="loghidefilter"
          :key="filterKey"
          :eng-filter="engFilter"
          @apply-filter="applyFilter($event)"
        ></component>
        <!-- Filter ends  -->
      </div>
    </div>
    <!--  -->
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="table-responsive tablebordercommon spkengagementtable">
          <VTable class="w-full" :data="logTable" :hide-sort-icons="true" :page-size="pagePerRow">
            <template #head>
              <tr>
                <VTh sort-key="id"> Engagement ID <span class="nosort"/></VTh>
                <VTh sort-key="firstname">First Name <span class="nosort"/></VTh>
                <VTh sort-key="lastname"
                  >Last<br />
                  name <span class="nosort"
                /></VTh>
                <VTh sort-key="datetime">Date and <br />Time <span class="nosort"/></VTh>
                <VTh sort-key="eoname"
                  >EO<br />
                  Name <span class="nosort"
                /></VTh>
                <VTh sort-key="spkname"
                  >Speaker<br />
                  Name <span class="nosort"
                /></VTh>
                <VTh sort-key="type"
                  >Engagement<br />
                  Type <span class="nosort"
                /></VTh>
                <VTh sort-key="status"
                  >Engagement<br />
                  Status <span class="nosort"
                /></VTh>
                <VTh sort-key="attemptdate"
                  >Attempt<br />
                  Date <span class="nosort"
                /></VTh>
                <VTh sort-key="attempttime"
                  >Attempt<br />
                  Time <span class="nosort"
                /></VTh>
                <VTh sort-key="message">Message <span class="nosort"/></VTh>
                <VTh sort-key="reason"
                  >Failure<br />
                  Reason <span class="nosort"
                /></VTh>
              </tr>
            </template>
            <template #body="{ rows }">
              <tr v-for="row in rows" :key="row.id">
                <td>{{ row.id }}</td>
                <td>{{ row.firstname }}</td>
                <td>{{ row.lastname }}</td>
                <td>{{ row.datetime }}</td>
                <td>{{ row.eoname }}</td>
                <td>{{ row.spkname }}</td>
                <td>{{ row.type }}</td>
                <td>{{ row.status }}</td>
                <td>{{ row.attemptdate }}</td>
                <td>{{ row.attempttime }}</td>
                <td>{{ row.message }}</td>
                <td>{{ row.reason }}</td>
              </tr>
            </template>
          </VTable>
        </div>
        <v-pagination
          v-if="logTable"
          v-model="currentPage"
          :pages="1"
          :range-size="1"
          active-color="#DCEDFF"
          :hide-first-button="false"
          :hide-last-button="false"
        />
        <!-- <v-no-data></v-no-data> -->
      </div>
    </div>
    <!--  -->
  </v-card-box>
</template>
<script lang="ts" src="./Log.ts"></script>
