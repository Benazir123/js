<template>
  <!-- table starts -->
  <div class="relative pb-54 pr-1 addform">
    <div class="px-4 pt-2 text-textblue text-fs16 flex items-center cursor-pointer">
      <img src="@/assets/office/leftarrowblue.svg" class="mr-2" />Back
    </div>
    <div>
      <div class="pl-3 py-4 pt-4 border-b border-uploadarea">
        <div class="w-full">
          <div class="flex items-center pr-2 pl-1">
            <!-- Search starts -->
            <div class="w-full">
              <v-input-search
                v-model="searchByText"
                input-type="text"
                label="Search..."
                name="meetingsearch"
                paddingy="py-2"
                @clearSearch="clearSearch()"
              ></v-input-search>
            </div>
            <!-- Search ends -->
            <!-- Export starts -->
            <!-- <div
              class="
                bg-white
                cursor-pointer
                flex
                rounded-radius4
                px-4
                py-2
                items-center
                ml-2
                border-eportbtn border
              "
            >
              <img src="@/assets/export.svg" class="mr-1" />
              <span class="text-greytxt text-fs13 font-normal">Export</span>
            </div> -->
            <!-- Export ends -->
            <!-- Plus starts -->

            <v-smallbutton
              class="
                bg-join
                flex
                rounded-radius6
                px-3
                py-3
                mx-2
                text-fs14 text-white
                items-center
                tracking-normal
              "
            >
              <img src="@/assets/plus.svg" class="w-6" />
            </v-smallbutton>
            <!-- Plus starts -->
            <!-- Upload File  starts -->
            <div
              class="
                w-56
                px-3
                py-2
                rounded-radius6
                border border-uploadarea
                relative
              "
            >
              <div>
                <input
                  type="file"
                  class="
                    absolute
                    bottom-0
                    top-0
                    right-0
                    opacity-0
                    left-0
                    w-full
                  "
                />

                <p class="text-fs14 text-greytxt text-center flex items-center">
                  <img src="@/assets/uploadfiles.svg" class="mr-2" />

                  <span class="text-greytxt">Upload File </span>
                </p>
              </div>
            </div>
            <!-- Add Speaker -->
          </div>
        </div>
        <!-- Upload File  starts -->
        <!-- <v-smallbutton
          class="
            mt-3
            bg-blue
            px-3
            rounded-radius6
            text-white
            flex
            text-fs14
            items-center
          "
          ><img src="@/assets/addwhite.svg" class="mr-2" />Add
          Speaker</v-smallbutton
        > -->
      </div>

      <div class="scroller scroll-align relative">
        <div
          class="
            p-4
            flex
            justify-between
            items-center
            border-b border-uploadarea
          "
        >
          <div class="flex flex-col">
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8">
                <component
                  :is="'v-profile'"
                  :key="imgError"
                  :small-profile="true"
                  :side-menu="true"
                  :user-info="{
                    letter_name: 'ds',
                    full_name: 'sd',
                    errorImg: 'df' ? 'dfs' : false,
                    degree: 'hygyr',
                    id: 'fgg' ? 'ts' : '',
                  }"
                  @errorImg="errorImg('')"
                ></component>
              </div>
              <div class="ml-3 flex">
                <p class="whitespace-no-wrap">ghreughu</p>
              </div>
            </div>
            <p class="text-green text-fs12 mt-2">Active From: 10/28/2021</p>
          </div>

          <!--   -->
          <label class="inline-flex items-center mr-1.5">
            <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
          </label>
        </div>
        <!--  -->
        <div
          class="
            p-4
            flex
            justify-between
            items-center
            border-b border-uploadarea
            bg-diablebg
          "
        >
          <div class="flex flex-col">
            <div class="flex">
              <div class="flex-shrink-0 w-8 h-8">
                <component
                  :is="'v-profile'"
                  :key="imgError"
                  :small-profile="true"
                  :side-menu="true"
                  :user-info="{
                    letter_name: 'ds',
                    full_name: 'sd',
                    errorImg: 'df' ? 'dfs' : false,
                    degree: 'hygyr',
                    id: 'fgg' ? 'ts' : '',
                  }"
                  @errorImg="errorImg('')"
                ></component>
              </div>
              <div class="ml-3 flex">
                <p class="whitespace-no-wrap">ghreughu</p>
              </div>
            </div>
            <p class="text-red-400 text-fs12 mt-2">InActive From: 10/28/2021</p>
          </div>

          <!--   -->
          <label class="inline-flex items-center mr-1.5">
            <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
          </label>
        </div>
      </div>
      <div
        class="
          p-2
          px-2
          ml-0
          mr-2
          border-t
          text-fs18
          block
          border-opacity-25 border-filtertitle
          absolute
          right-0
          bottom-0
          left-0
          flex
          justify-end
        "
      >
        <v-smallbutton
          class="
            bg-clrbtn
            flex
            rounded-radius6
            text-clrtxt
            px-6
            py-2
            mr-2
            text-fs14
            items-center
            mr-4
            tracking-normal
          "
          >Cancel</v-smallbutton
        >
        <v-smallbutton
          class="
            bg-blue
            flex
            rounded-radius6
            px-6
            py-2
            text-fs14 text-white
            items-center
            tracking-normal
            justify-content-end
          "
          >Add
          <img v-if="loader" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
        </v-smallbutton>
      </div>
    </div>
  </div>
  <!-- table starts -->
</template>
<script lang="ts" src="./SpeakerAlign.ts"></script>
