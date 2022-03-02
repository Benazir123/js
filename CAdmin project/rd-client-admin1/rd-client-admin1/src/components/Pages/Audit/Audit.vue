<template>
  <div>
    <v-title menu="Audit"></v-title>
    <v-card-box>
      <div class="flex justify-between relative">
        <div class="flex">
          <div class="w-64 mr-3">
            <v-input-search
              v-model="searchById"
              inputType="number"
              label="Search by Meeting ID"
              name="meetingsearch"
            ></v-input-search>
          </div>
          <!-- Search one -->
          <!-- Search two -->
          <div class="w-64 mr-3">
            <v-input-search
              label="Search by Name"
              v-model="searchByName"
              inputType="text"
              name="namesearch"
            ></v-input-search>
          </div>
          <!-- Search two -->
        </div>
        <div class="flex relative items-center">
          <!-- filter starts -->
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
              >2</span
            >
          </div>
        </div>
      </div>
      <div v-if="hidefilter" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="showfilter"></div>
      <component
        :is="'v-filter'"
        v-if="hidefilter"
        :key="filterKey"
        :eng-filter="engFilter"
        @apply-filter="applyFilter($event)"
      ></component>
    </v-card-box>
    <div class="table-responsive eng-det">
      <VTable :data="audit" class="w-full" :filters="filters" :hideSortIcons="true">
        <template #head>
          <tr>
            <VTh sortKey="name" #default="{ sortOrder }"
              >Engagement Details
              <span
                class="nosort"
                :class="{
                  nosort: sortOrder === 0,
                  ascendingorder: sortOrder === 1,
                  ascendingorder: sortOrder === -1,
                }"
              />
            </VTh>

            <VTh sortKey="Topic">
              Topic
              <span
                class="nosort"
                :class="{
                  nosort: sortOrder === 0,
                  ascendingorder: sortOrder === 1,
                  ascendingorder: sortOrder === -1,
                }"
            /></VTh>
            <VTh sortKey="Type">
              Engagement Type
              <span
                class="nosort"
                :class="{
                  nosort: sortOrder === 0,
                  ascendingorder: sortOrder === 1,
                  ascendingorder: sortOrder === -1,
                }"
            /></VTh>
            <VTh sortKey="owner"
              ><div class="w-48">
                Engagement Owner
                <span
                  class="nosort"
                  :class="{
                    nosort: sortOrder === 0,
                    ascendingorder: sortOrder === 1,
                    ascendingorder: sortOrder === -1,
                  }"
                /></div
            ></VTh>

            <VTh sortKey="speaker"
              >Speaker
              <span
                class="nosort"
                :class="{
                  nosort: sortOrder === 0,
                  ascendingorder: sortOrder === 1,
                  ascendingorder: sortOrder === -1,
                }"
            /></VTh>
            <VTh sortKey="nosorting">Attendees </VTh>
            <VTh sortKey="nosorting">Actions </VTh>
            <VTh sortKey="arrow"></VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
              <div class="flex flex-col">
                <div class="flex items-center">
                  <a @click="engdetailpage" class="cursor-pointer">
                    <b class="text-fs16 whitespace-nowrap">{{ row.name }},</b></a
                  >
                  <div
                    class="bg-lightblue cursor-pointer w-6 h-6 rounded-full flex items-center justify-center ml-1"
                    @click="VirtualForm"
                  >
                    <img :src="row.collaborateicon" />
                  </div>
                  <div class="bg-lightyellow w-6 h-6 rounded-full flex items-center justify-center ml-1">
                    <img :src="row.foodicon" />
                  </div>
                </div>
                <span class="text-darkgrey text-fs12">{{ row.date }}</span>
              </div>
            </td>
            <td>{{ row.topic }}</td>
            <td>
              {{ row.Type }}
            </td>
            <td>
              <div class="flex items-center">
                <div class="flex-shrink-0 w-8 h-8" @click="showUserProfile()">
                  <component
                    :is="'v-profile'"
                    :key="imgErrorSpk"
                    :small-profile="true"
                    :side-menu="true"
                    :user-info="{
                      letter_name: 'TA',
                      full_name: 'Tala Ayyad',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                    @errorImg="errorImg(row.engagement_owner.user)"
                  ></component>
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">
                    {{ row.owner }}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <div class="flex items-center">
                <div class="flex-shrink-0 w-8 h-8" @click="showUserProfile()">
                  <component
                    :is="'v-profile'"
                    :key="imgErrorSpk"
                    :small-profile="true"
                    :side-menu="true"
                    :user-info="{
                      letter_name: 'DB',
                      full_name: 'Darren Brenner',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                    @errorImg="errorImg(row.engagement_owner.user)"
                  ></component>
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">
                    {{ row.owner }}
                  </p>
                </div>
              </div>
            </td>
            <td align="center ">
              <div class="relative">
                <ul class="flex align-center cursor-pointer">
                  <li class="w-8 h-8 -ml-4 cursor-pointer">
                    <component
                      :is="'v-profile'"
                      :key="imgErrorSpk"
                      class="flex flex-row items-center py-2"
                      :small-profile="true"
                      :side-menu="true"
                      :user-info="{
                        letter_name: 'P',
                        full_name: 'R',
                        img: '',
                        errorImg: '',
                        id: '',
                      }"
                      @errorImg="errorImg(attendee)"
                    ></component>
                  </li>
                  <li class="w-8 h-8 -ml-4 cursor-pointer">
                    <component
                      :is="'v-profile'"
                      :key="imgErrorSpk"
                      class="flex flex-row items-center py-2"
                      :small-profile="true"
                      :side-menu="true"
                      :user-info="{
                        letter_name: 'P',
                        full_name: 'R',
                        img:
                          'https://rdsalix.s3.us-east-1.amazonaws.com/qa/images/profileimage/77e454f6-34a6-4f44-abf0-3d197fc92dad.jpeg',
                        errorImg: '',
                        id: '',
                      }"
                      @errorImg="errorImg(attendee)"
                    ></component>
                  </li>
                  <li class="w-8 h-8 -ml-4 cursor-pointer">
                    <component
                      :is="'v-profile'"
                      :key="imgErrorSpk"
                      class="flex flex-row items-center py-2"
                      :small-profile="true"
                      :side-menu="true"
                      :user-info="{
                        letter_name: 'P',
                        full_name: 'R',
                        img: '',
                        errorImg: '',
                        id: '',
                      }"
                      @errorImg="errorImg(attendee)"
                    ></component>
                  </li>
                  <li class="w-8 h-8 -ml-4 cursor-pointer ">
                    <span
                      class="
                        w-full
                        h-full
                        inline-flex
                        items-center
                        text-white
                        justify-center
                        bg-attcount
                        rounded-full
                      "
                    >
                      +3
                    </span>
                  </li>
                </ul>
              </div>
            </td>

            <td>
              <v-smallbutton
                @click="showvirtualform()"
                class="bg-profilegrey text-xsm text-white ml-2 px-6 radius4 font-normal"
              >
                Audit
              </v-smallbutton>
            </td>

            <td class="arrowtd">
              <!-- <img src="@/assets/downarrow.svg" @click="hideEngDetails = true;" class="cursor-pointer"/> -->
              <img :src="changeArrow" @click="showEngDetails" class="cursor-pointer" />
            </td>
          </tr>
          <engagement-inner-row v-if="innerrow"></engagement-inner-row>
        </template>
      </VTable>
    </div>
    <VTPagination :boundary-links="true" />
    <aside
      class="right-drawer ease-in-out transform transition-all duration-700 z-50"
      :style="{
        right: isOpenform1 ? '0' : '-85%',
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
          Virtual Form
        </p>
        <div @click="isOpenform1 = false" class="cursor-pointer">
          <img src="@/assets/close-white.svg" />
        </div>
      </div>
      <!-- Collab meeeting Section -->
      <div><virtual-form></virtual-form></div>
    </aside>

    <div
      :class="[
        'drawer-mask ease-in-out transform transition-all right-0 left-0',
        isOpenform1 ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
      ]"
      :style="{
        transition: isOpenform1 ? '.7s' : '0 delay-700',
      }"
      @click="isOpenform1 = false"
    ></div>
  </div>
</template>
<script lang="ts" src="./Audit.ts"></script>
