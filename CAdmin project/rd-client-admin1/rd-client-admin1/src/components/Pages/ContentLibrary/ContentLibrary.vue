<template>
  <div>
    <v-breadcrumb breadcrumb="Dashboard " subbreadcrumb="Content Library"></v-breadcrumb>
    <v-title menu="Content Library"></v-title>
    <v-card-box>
      <div class="flex relative items-center justify-end">
        <!-- Search two -->
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
            v-if="filterCount && filterCount.length != 0"
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
            >{{ filterCount && filterCount.length }}</span
          >
        </div>
        <component
          :is="'v-filter'"
          v-if="hidefilter"
          :key="filterKey"
          :eng-filter="filterArray"
          @apply-filter="applyFilter($event)"
        ></component>

        <!-- filter END -->
        <!-- export starts -->
      </div>
      <!--  -->
      <div class="flex flex-wrap -mt-5">
        <div class="w-full">
          <div class="flex items-end justify-between border-b border-searchbox">
            <ul class="flex mb-0 list-none flex-wrap flex-row">
              <li class="text-center cursor-pointer inline-block mr-8">
                <a
                  class="
                    text-fs16
                    font-normal
                    inline-block
                    pb-2
                    cursor-pointer
                    relative
                    text-darkgrey
                  "
                  :class="{
                    'text-darkgrey': opencontentTab !== 1,
                    'text-textblue': opencontentTab === 1,
                  }"
                  @click="togglecontentTabs(1)"
                >
                  Active
                  <span
                    class="w-12 h-0.5 inline-block absolute left-0 bottom-0"
                    :class="{
                      'bg-white ': opencontentTab !== 1,
                      'bg-blue': opencontentTab === 1,
                    }"
                  ></span>
                </a>
              </li>
              <li class="text-center cursor-pointer inline-block mr-8">
                <a
                  class="
                    text-fs16
                    font-normal
                    inline-block
                    pb-2
                    cursor-pointer
                    relative
                    text-darkgrey
                  "
                  :class="{
                    'text-darkgrey': opencontentTab !== 2,
                    'text-textblue': opencontentTab === 2,
                  }"
                  @click="togglecontentTabs(2)"
                >
                  History
                  <span
                    class="w-12 h-0.5 inline-block absolute left-0 bottom-0"
                    :class="{
                      'bg-white ': opencontentTab !== 2,
                      'bg-blue': opencontentTab === 2,
                    }"
                  ></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content tab-space mt-8">
            <div
              :class="{
                hidden: opencontentTab !== 1,
                block: opencontentTab === 1,
              }"
            >
              <!-- table starts -->
              <div v-if="contentList && contentList.length != 0 && !loader" class="table-responsive eng-det contenttable">
                <VTable :data="contentList" class="w-full" :filters="filters" :hide-sort-icons="true">
                  <template #head>
                    <tr>
                      <VTh sort-key="name">Content ID </VTh>
                      <VTh sort-key="owner">Content Name</VTh>
                      <VTh sort-key="Speaker"> Product</VTh>
                      <VTh sort-key="confirmed">Content Preview </VTh>
                    </tr>
                  </template>
                  <template #body="{ rows }">
                    <tr v-for="row in rows" :key="row.id">
                      <td class="w-10">
                        <a class="cursor-pointer" @click="engdetailpage">
                          <b class="text-fs16 whitespace-nowrap">{{ row.id }}</b></a
                        >
                      </td>
                      <td class="w-80 white-space-nowrap">
                        {{ row.content_name }}
                      </td>
                      <td class="w-36" v-html="row.product"></td>
                      <td align="center" class="w-8">
                        <div class="flex items-center ">
                          <v-small-button @click="download(row.content_preview_url)"
                            ><img src="@/assets/views.svg" class="mr-4 cursor-pointer"
                          /></v-small-button>
                          <v-small-button @click="download(row.file_name)"
                            ><img src="@/assets/downloadblue.svg" class="mr-2 cursor-pointer"
                          /></v-small-button>
                        </div>
                      </td>
                    </tr>
                  </template>
                </VTable>
              </div>
              <!-- <v-pagination /> -->
              <v-pagination
                v-if="contentList && contentList.length != 0 && !loader"
                v-model="currentPage"
                :pages="totalPages"
                :range-size="1"
                active-color="#DCEDFF"
                :hide-first-button="false"
                :hide-last-button="false"
                @update:modelValue="
                  currentPage;
                  listContentLibrary(currentPage);
                "
              />
              <v-no-data v-if="contentList.length == 0 && !loader"></v-no-data>
            </div>
          </div>

          <div
            :class="{
              hidden: opencontentTab !== 2,
              block: opencontentTab === 2,
            }"
          >
            <!-- table starts -->
            <div v-if="contentList && contentList.length != 0 && !loader" class="table-responsive eng-det contenttable">
              <VTable :data="contentList" class="w-full" :filters="filters" :hide-sort-icons="true">
                <template #head>
                  <tr>
                    <VTh sort-key="name">Content ID </VTh>
                    <VTh sort-key="owner">Content Name</VTh>
                    <VTh sort-key="Speaker">Product</VTh>
                    <VTh sort-key="confirmed">Content Preview </VTh>
                    <!--
                    <VTh sortKey="status"
                      >Status
                      <span
                        class="nosort"
                        :class="{
                          nosort: sortOrder === 0,
                          ascendingorder: sortOrder === 1,
                          ascendingorder: sortOrder === -1,
                        }"
                    /></VTh> -->
                  </tr>
                </template>
                <template #body="{ rows }">
                  <tr v-for="row in rows" :key="row.id">
                    <td class="w-10">
                      <a class="cursor-pointer" @click="engdetailpage">
                        <b class="text-fs16 whitespace-nowrap">{{ row.id }}</b></a
                      >
                    </td>
                    <td class="w-80 white-space-nowrap">
                      {{ row.content_name }}
                    </td>
                    <td class="w-28" v-html="row.product"></td>
                    <td align="center" class="w-8">
                      <div class="flex items-center ">
                        <v-small-button @click="download(row.content_preview_url)"
                          ><img src="@/assets/views.svg" class="mr-4 cursor-pointer"
                        /></v-small-button>
                        <v-small-button @click="download(row.file_name)"
                          ><img src="@/assets/downloadblue.svg" class="mr-2 cursor-pointer"
                        /></v-small-button>
                      </div>
                    </td>
                  </tr>
                </template>
              </VTable>
            </div>
            <!-- <v-pagination /> -->
            <v-pagination
              v-if="contentList && contentList.length != 0 && !loader"
              v-model="currentPage"
              :pages="totalPages"
              :range-size="1"
              active-color="#DCEDFF"
              :hide-first-button="false"
              :hide-last-button="false"
              @update:modelValue="
                currentPage;
                listContentLibrary(currentPage);
              "
            />
            <v-no-data v-if="contentList.length == 0 && !loader"></v-no-data>
          </div>

          <!--  -->
        </div>
      </div>
      <!--  -->

      <!-- table starts -->
    </v-card-box>

    <v-loader v-if="loader"></v-loader>
    <!-- <p @click="opendrawercontent()">speaker aligned</p> -->
    <!-- collabators -->
    <div class="prescriber">
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
          right: isOpencontentdrawer ? '0' : '-85%',
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
          <div class="flex">
            <img src="@/assets/speakeralign.svg" class="mr-2" />

            <p class="text-base text-parenttheme-white font-semibold">
           Speaker Aligned
            </p>
          </div>
          <div class="cursor-pointer" @click="isOpencontentdrawer = false">
            <img src="@/assets/close-white.svg" />
          </div>
        </div>
        <!-- Collab meeeting Section -->
        <speaker-align v-if="isOpencontentdrawer"> </speaker-align>
      </aside>

      <div
        :class="[
          'drawer-mask ease-in-out transform transition-all right-0 left-0',
          isOpencontentdrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
        ]"
        :style="{
          transition: isOpencontentdrawer ? '.7s' : '0 delay-700',
        }"
        @click="isOpencontentdrawer = false"
      ></div>
    </div>
  </div>
  <!-- </layout> -->
</template>
<script lang="ts" src="./ContentLibrary.ts"></script>
