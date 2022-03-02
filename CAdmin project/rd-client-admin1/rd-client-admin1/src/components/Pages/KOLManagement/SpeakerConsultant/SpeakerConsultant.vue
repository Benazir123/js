<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="w-full">
          <div>
            <!-- <v-breadcrumb>
              <template #mainmenu>Dashboard </template>
              <template #currentmenu>Engagement Dashboard</template>
            </v-breadcrumb> -->
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Speaker Consultant"></v-breadcrumb>
            <div class="flex items-center justify-between">
              <v-title menu="Speaker / Consultant"></v-title>
              <!-- <div class="flex items-center">
                <a @click="summary" class="flex items-center text-fs13 cursor-pointer text-bluetxt ml-8">Next <img src="@/assets/backarrowblue.svg" class="ml-2 transform rotate-180" /></a>
              </div> -->
            </div>
          </div>
        </div>
        <!--  -->
        <v-card-box>
          <div class="flex justify-between relative">
            <div class="flex">
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
                <v-label value="Nomination" class="text-formlabel text-fs14 font-bold" />
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
            </div>
            <div class="flex relative items-center">
              <v-smallbutton
                class="flex items-center bg-blue text-white px-4
            py-3 mr-3 text-fs13 font-w-normal whitespace-nowrap"
              >
                <img src="@/assets/nominatespk.svg" class="mr-2" />
                Add / Nominate Speaker
              </v-smallbutton>
              <div
                class="
            bg-graymenu
            cursor-pointer
            flex
            rounded-radius4
            px-4
            py-3
            items-center
            shadow-filtershadow
            mr-4
            rounded-radius8
          "
                @click="exportFunction()"
              >
                <img src="@/assets/export.svg" class="mr-2" />
                <span class="ml-1 text-greytxt text-fs13 font-normal">Export</span>
              </div>
            </div>
          </div>
        </v-card-box>
        <!--   -->
        <div class="table-responsive spk-consultant">
          <VTable class="w-full" :data="kolConsultant" :hide-sort-icons="true" :page-size="pagePerRow">
            <template #head>
              <tr>
                <VTh sort-key="name"
                  >Name
                  <span class="nosort" />
                </VTh>
                <VTh sort-key="degree">Degree <span class="nosort"/></VTh>
                <VTh sort-key="tier">Tier <span class="nosort"/></VTh>
                <VTh sort-key="speciality">Speciality <span class="nosort"/></VTh>
                <VTh sort-key="affiliation">Affiliation <span class="nosort"/></VTh>
                <VTh sort-key="products">Products <span class="nosort"/></VTh>
                <VTh sort-key="country">Country <span class="nosort"/></VTh>
                <VTh sort-key="contracttype">Contract Type <span class="nosort"/></VTh>
                <VTh sort-key="capamount">Cap Amount <span class="nosort"/></VTh>
                <VTh sort-key="ytd">YTD <span class="nosort"/></VTh>
                <VTh sort-key="remaining">Remaining <span class="nosort"/></VTh>
              </tr>
            </template>
            <template #body="{ rows }">
              <tr v-for="row in rows" :key="row.id">
                <td class="cursor-pointer" @click="speakersummary">
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :side-menu="false"
                    :user-info="{
                      letter_name: 'AA',
                      full_name: row.name,
                      img: '',
                      id: row.id ? row.id : '',
                    }"
                  ></component>
                </td>
                <td>{{ row.degree }}</td>
                <td>{{ row.tier }}</td>
                <td>{{ row.speciality }}</td>
                <td>{{ row.affiliation }}</td>
                <td>{{ row.products }}</td>
                <td>{{ row.country }}</td>
                <td>{{ row.contracttype }}</td>
                <td>{{ row.capamount }}</td>
                <td>{{ row.ytd }}</td>
                <td>
                  <span class="p-2 rounded-radius6" :class="consultantcolor(row.remaining)">{{ row.remaining }}</span>
                </td>
              </tr>
            </template>
          </VTable>
        </div>
        <!-- <v-pagination
    v-if="kolConsultant.length != 0"
    v-model="currentPage"
    :pages="totalPages"
    :range-size="1"
    active-color="#DCEDFF"
    @update:modelValue="
      currentPage;
      listEngagement(currentPage);
    "
    :hideFirstButton="false"
    :hideLastButton="false"
  /> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./SpeakerConsultant.ts"></script>
