<template>
  <div>
    <v-breadcrumb breadcrumb="Users" :subbreadcrumb="listTitle"></v-breadcrumb>
    <v-title :menu="listTitle"></v-title>

    <v-card-box class="flex justify-between items-center relative">
      <!-- DropDown Start -->
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
        <!-- <div class="flex">
        <div class="mr-8">
          <v-label value="Product" class="text-formlabel text-fs14 font-bold" />
          <div class="my-1 kolconsultantdrop">
            <v-select>
              <option>All</option>
              <option>Speaker</option>
              <option>Speaker</option>
              <option>Speaker</option>
              <option>Speaker</option>
            </v-select>
          </div>
        </div>
        <div class="mr-8">
          <v-label value="Year" class="text-formlabel text-fs14 font-bold" />
          <div class="my-1 kolconsultantdrop">
            <v-select>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </v-select>
          </div>
        </div>
          <div class="mr-8">
          <v-label value="Status" class="text-formlabel text-fs14 font-bold" />
          <div class="my-1 kolconsultantdropstatus">
            <v-select>
              <option>All</option>
              <option>Speaker</option>
              <option>Speaker</option>
              <option>Speaker</option>
              <option>Speaker</option>
            </v-select>
          </div>
        </div>
      </div> -->
      </div>
      <!-- DropDown End -->
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
    <div v-if="spkList && spkList.length != 0 && !loader" class="table-responsive  spklistdata">
      <VTable class="w-full" :data="spkList" :hide-sort-icons="true">
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
              <span class="w-250px inline-block">Company & Products</span></VTh
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
            <VTh sort-key="contsoftcap">Action</VTh>
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
                      full_name: row.firstName,
                      img: row.photo,
                      errorImg: row.photo ? row.photo : false,
                      id: row.id ? row.id : '',
                    }"
                    @errorImg="errorImg(row)"
                  ></component>
                </div>
                <p>{{ row.full_name }}</p>
              </div>
              <span v-if="userType == 2" class="ml-10 font-bold">{{ row.degree }}</span>
            </td>

            <td class="w-10 whitespace-normal">
              {{ bindData(row.email) }}
            </td>
            <td class="w-36 whitespace-normal">{{ row.speciality }}</td>
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

            <td class="w-5 whitespace-normal">
              <img src="@/assets/views.svg" class="cursor-pointer" @click="viewpage()" />
            </td>
          </tr>
        </template>
      </VTable>
    </div>
    <!-- v-pagination  -->
    <v-pagination
      v-if="spkList && spkList.length != 0 && !loader"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        listSpeaker(currentPage);
      "
    />
    <!-- v-no-data component -->
    <v-no-data v-if="spkList.length == 0 && !loader"></v-no-data>
  </div>
  <!-- loader component -->
  <component :is="'v-loader'" v-if="loader"></component>
</template>
<script lang="ts" src="./Users.ts"></script>
