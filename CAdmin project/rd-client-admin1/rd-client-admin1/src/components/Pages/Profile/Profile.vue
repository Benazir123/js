<template>
  <!-- <layout> -->
  <div class="userprofile">
    <aside
      class="right-drawer ease-in-out transform transition-all duration-700 z-50 w-40"
      :style="{
        right: isshowProfile ? '0' : '-85%',
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
        px-4
        py-3
        bg-blue
      "
      >
        <p class="text-base text-white text-fs20 font-semibold">
          User Profile
        </p>
        <div class="cursor-pointer" @click="closeProfile()">
          <img src="@/assets/close.svg" class="cursor-pointer" />
        </div>
      </div>
      <div v-if="!loader && result" class="bg-white">
        <div class="flex items-center justify-center flex-col">
          <div class="bg-profilebg w-full px-3 py-8">
            <component
              :is="'v-profile'"
              :key="imgErrorSpk"
              :small-profile="false"
              :side-menu="true"
              :user-info="{
                letter_name:
                  result.user_information.short_name && result.user_information.short_name != ''
                    ? result.user_information.short_name
                    : '',
                full_name:
                  result.user_information.full_name && result.user_information.full_name != ''
                    ? result.user_information.full_name
                    : '',
                degree:
                  result.user_information.degree && result.user_information.degree != ''
                    ? result.user_information.degree
                    : '',
                speciality:
                  result.user_information.speciality && result.user_information.speciality != ''
                    ? result.user_information.speciality
                    : '',
                img: result.user_information.photo,
                errorImg: result.user_information.errorImg ? result.user_information.errorImg : false,
                id: '',
              }"
              @errorImg="errorImg(result.user_information)"
            ></component>
            <!-- <p class="text-greytxt text-fs18 text-center -mt-3 font-semibold">
              {{
                result.user_information.full_name &&
                result.user_information.full_name != ""
                  ? result.user_information.full_name
                  : ""
              }}
            </p> -->
          </div>
          <div class="px-4 py-2 w-full scroller scrollheight">
            <div v-for="res in result.profile_information" :key="res.id">
              <div
                class="flex items-center justify-between border-b border-companyinputbox py-3 cursor-pointer"
                @click="userHierarchy(res)"
              >
                <div class="text-fs18 font-inter font-semibold text-accgrey">
                  {{ res.sectiontitle }}
                </div>
                <div>
                  <img v-if="res.istoggle" :src="res.rightarrow" class="cursor-pointer" />
                  <img v-if="!res.istoggle" :src="res.uparrow" class="cursor-pointer" />
                </div>
              </div>
              <div v-if="!res.istoggle" class="py-1">
                <div v-for="fieldres in res.fields" :key="fieldres.id" class="flex items-center py-3">
                  <p class="w-2/4 text-fs13 text-darkgrey">
                    {{ fieldres.label }}
                  </p>
                  <p class="w-64 text-fs13 text-greytxt font-semibold whitespace-pre-wrap " v-html="fieldres.value"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-eng-loader v-if="loader"></v-eng-loader>
      <div
        class="h-full flex
        justify-center
        items-center"
      >
        <v-no-data v-if="!result && !loader"></v-no-data>
      </div>
    </aside>
  </div>
  <div
    :class="[
      'drawer-mask ease-in-out transform transition-all right-0 left-0',
      isshowProfile ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
    ]"
    :style="{
      transition: isshowProfile ? '.7s' : '0 delay-700',
    }"
  ></div>
  <!--  @click="isshowProfile = false" -->
  <!-- ---- -->
</template>
<script lang="ts" src="./Profile.ts"></script>
