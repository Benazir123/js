<template>
  <div class="scroller scroll-team py-2">
    <!-- table starts -->
    <div class="min-h-300px mb-5">
      <div class="flex items-center justify-end">
        <div
          class="
                  bg-smfil
                  cursor-pointer
                  inline-flex
                  rounded-radius7
                  px-2
                  py-2
                  items-center
                  shadow-filtershadow mr-5
                "
        >
          <img src="@/assets/filter.svg" class="w-4" />
        </div>
      </div>
      <apexchart type="pie" width="450" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div class="px-5">
      <div class="flex relative pt-2 pb-4">
        <div class="w-64 ">
          <v-input-search
            v-model="searchById"
            input-type="text"
            label="Search by Name"
            class="search"
            name="meetingsearch"
          ></v-input-search>
        </div>
        <!-- Search one -->
        <!-- filter starts -->
        <div
          class="
            bg-graymenu
            cursor-pointer
            flex
            rounded-radius8
            px-4
            py-1
            items-center
            shadow-filtershadow
            mx-4
          "
          @click="showfilter"
        >
          <img src="@/assets/filter.svg" class="w-4 mr-2" />
          <span class="mr-2 text-filterdash font-normal text-fs13">Filters</span>
          <span
            v-if="filterCount && filterCount.length != 0"
            class="
              bg-blue
              w-5
              h-5
              rounded-radius100
              text-white
              flex
              justify-center
              items-center
              text-fs11
            "
            >{{ filterCount && filterCount.length }}</span
          >

          <!-- filter starts -->
          <!-- export starts -->
        </div>
        <v-smallbutton
          class="
            bg-graymenu
            flex
            rounded-radius8
            items-center
            shadow-filtershadow
            mr-2
            ml-0
            px-4
          "
        >
          <img src="@/assets/dashboard/download.svg" class="mr-2" />
          <span class="mr-2 text-dashselect text-fs13 font-normal">Download</span>
        </v-smallbutton>
      </div>
      <div class="dashboardtable">
        <div class="table-responsive ">
          <VTable
            v-model:currentPage="currentPage"
            :data="speaker"
            class="w-full"
            :filters="filters"
            :hide-sort-icons="true"
            @totalPagesChanged="totalPages = $event"
          >
            <!--  -->
            <template #head>
              <tr>
                <VTh sort-key="nosorting" class="text-formlabel text-fs13">Meeting ID </VTh>
                <VTh sort-key="nosorting" class="whitespace-no-wrap text-formlabel text-fs13">Actual ID </VTh>
                <VTh sort-key="nosorting" class="text-formlabel text-fs13">Engagement Type </VTh>
                <VTh sort-key="nosorting" class="text-formlabel text-fs13">Speaker Name </VTh>
                <VTh sort-key="nosorting" class="text-formlabel text-fs13">Speaker Degree </VTh>
                <VTh sort-key="nosorting" class="text-formlabel text-fs13"><div class="w-48">Speaker Specialty</div></VTh>

                <VTh sort-key="nosorting" class="text-formlabel text-fs13">Rep Name </VTh>
                <VTh sort-key="nosorting" class="text-formlabel text-fs13">Date & Time </VTh>

                <VTh sort-key="nosorting">Location</VTh>
                <VTh sort-key="nosorting">Product</VTh>
                <VTh sort-key="nosorting">Status</VTh>
              </tr>
            </template>
            <template #body="{ rows }">
              <tr v-for="row in rows" :key="row.id" class="text-formlabel">
                <td class="text-formlabel font-normal">
                  <a> {{ row.Meetingid }}</a>
                </td>
                <td class="text-formlabel font-normal">{{ row.ActualiD }}</td>
                <td class="text-formlabel font-normal">{{ row.Type }}</td>
                <td class="text-formlabel font-normal">
                  {{ row.Speaker }}
                </td>
                <td class="text-formlabel font-normal">
                  {{ row.Speakerdegree }}
                </td>
                <td class="text-formlabel font-normal">
                  {{ row.Speakerspecialty }}
                </td>
                <td class="text-formlabel font-normal">
                  {{ row.Repname }}
                </td>
                <td class="text-formlabel font-normal">
                  {{ row.Datetime }}
                </td>
                <td class="text-formlabel font-normal">
                  {{ row.Location }}
                </td>
                <td class="text-formlabel font-normal">
                  {{ row.product }}
                </td>

                <td>
                  <div class="flex items-center p-2">
                    <img :src="row.statusmark" class="mr-2" />
                    <span :class="engStatusColor(row.status)"> {{ row.status }}</span>
                  </div>
                </td>
              </tr>
            </template>
          </VTable>
        </div>
      </div>
      <!-- <VTPagination
      v-model:currentPage="currentPage"
      :total-pages="totalPages"
      :boundary-links="true"
    /> -->
    </div>
  </div>
  <!-- table starts -->
</template>
<script lang="ts" src="./DrawerTable.ts"></script>
