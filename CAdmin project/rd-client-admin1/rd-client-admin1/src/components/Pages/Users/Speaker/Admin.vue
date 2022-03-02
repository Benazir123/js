<template>
  <div>
    <v-breadcrumb breadcrumb="Users" :subbreadcrumb="listTitle"></v-breadcrumb>
    <v-title :menu="listTitle"></v-title>

    <v-card-box class="flex justify-between items-center relative">
      <div class="flex justify-between relative">
        <!-- Search starts-->
        <div class="flex">
          <div class="w-64 mr-3">
            <v-input-search
              v-model="searchByName"
              label="Search"
              input-type="text"
              name="namesearch"
              paddingy="py-2"
              @clearSearch="clearSearch()"
            ></v-input-search>
          </div>
        </div>
        <!-- Search ends-->
      </div>
      <!-- export starts -->
      <div
        class="
            bg-graymenu
            cursor-pointer
            flex
            rounded-radius4
            px-4
            py-2
            items-center
            shadow-filtershadow
            mr-4
            h-10
          "
        @click="exportFunction()"
      >
        <img src="@/assets/export.svg" class="mr-2" />
        <span class="ml-1 text-greytxt text-fs13 font-normal">Export</span>
      </div>
      <!-- export End -->
    </v-card-box>
    <!-- table starts -->
    <div v-if="adminList && adminList.length != 0 && !loader" class="table-responsive  spklistdata">
      <VTable class="w-full" :data="adminList" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="contractname">
              <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
              <span class="w-150px inline-block">Name</span></VTh
            >
            <VTh sort-key="contproduct">
              <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
              User Name
            </VTh>
            <VTh sort-key="contstartdate">
              <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
              Speciality
            </VTh>
            <VTh sort-key="contenddate">
              <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
              Company & Products</VTh
            >
            <VTh sort-key="contamount">
              <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
              Degree</VTh
            >
            <VTh sort-key="contsoftcapamount"><span class="w-100px inline-block whitespace-normal">Status</span></VTh>
            <!-- <VTh sortKey="contsoftcap">Action</VTh> -->
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td class="w-8 whitespace-normal">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-8 h-8 mr-2">
                  <component
                    :is="'v-profile'"
                    :key="imgErrorSpk"
                    :small-profile="true"
                    :side-menu="true"
                    :user-info="{
                      letter_name: row.shortName,
                      full_name: row.full_name,
                      img: row.photo,
                      errorImg: row.photo ? row.photo : false,
                      id: row.id ? row.id : '',
                    }"
                    @errorImg="errorImg(row)"
                  ></component>
                </div>
                <p>{{ row.full_name }}</p>
              </div>
              <span class="ml-10 font-bold flex items-start">{{ row.degree }}</span>
            </td>

            <td class="w-10 whitespace-normal">
              {{ bindData(row.email) }}
            </td>
            <td class="w-36 whitespace-normal">
              {{ bindData(row.speciality) }}
            </td>
            <td v-if="row.brand_name && row.product" class="w-16 whitespace-normal">
              <p>{{ row.brand_name }} > <span v-html="row.product"></span></p>
            </td>
            <td v-else class="w-16 whitespace-normal">---</td>
            <td class="w-36 whitespace-normal">
              {{ bindData(row.degree) }}
            </td>
            <td class="w-10 whitespace-normal">
              <span
                :style="{
                  color: row.activeStatus.text_color,
                  background: row.activeStatus.bg_color,
                }"
                class="btn cussize"
              >
                {{ row.activeStatus.name }}</span
              >
            </td>

            <!-- <td class="w-5 whitespace-normal"><img src="@/assets/views.svg" class="cursor-pointer"></td> -->
          </tr>
        </template>
      </VTable>
    </div>
    <!-- v-pagination  -->
    <v-pagination
      v-if="adminList && adminList.length != 0 && !loader"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        listClientAdmin(currentPage);
      "
    />
    <!-- v-no-data component -->
    <v-no-data v-if="adminList.length == 0 && !loader"></v-no-data>
  </div>
  <!-- loader component -->
  <component :is="'v-loader'" v-if="loader"></component>
</template>
<script lang="ts" src="./Admin.ts"></script>
