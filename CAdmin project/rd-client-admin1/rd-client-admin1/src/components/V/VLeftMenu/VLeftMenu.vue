<template>
  <sidebar-menu
    :menu="appMenu"
    :collapsed="true"
    :show-child="false"
    :width="'250px'"
    :show-one-child="true"
    :width-collapsed="'64px'"
    @update:collapsed="onToggleCollapse"
    @item-click="onItemClick"
  >
    <!-- TOGGLE SECTION STARTS HERE -->
    <template #toggle-icon>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6667 8H3.33337" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M8.00004 12.6666L3.33337 7.99998L8.00004 3.33331"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
    <!-- TOGGLE SECTION ENDS HERE -->

    <!-- HEADER SECTION STARTS HERE -->
    <template #header>
      <div class="header-wrp">
        <!-- src="@/assets/tgt-logo.png" -->
        <img :src="companyLogo" class="" />
      </div>
    </template>
    <!-- HEADER SECTION ENDS HERE -->

    <!-- FOOTER SECTION STARTS HERE -->
    <template #footer>
      <div v-if="profileMenu" class="fixed top-0 bottom-0 left-0 z-20 right-0" @click="profileMenu = false"></div>
      <div v-if="profileMenu" class="footer-profile">
        <ul class="list-none border border-profilemenu shadow-profilemenubox rounded-tl rounded-tr">
          <li class="flex items-center py-3 pb-2 px-5 text-darkgrey text-fs13 cursor-pointer">
            <img src="@/assets/user.svg" /><span class="ml-5">Profile</span>
          </li>
          <li class="flex items-center py-3 px-5 text-darkgrey text-fs13 cursor-pointer">
            <img src="@/assets/settings.svg" /><span class="ml-5">Account Settings</span>
          </li>
          <li
            class="flex items-center py-3 px-5 text-darkgrey text-fs13 border-t border-profilemenu cursor-pointer"
            @click="logedout()"
          >
            <img src="@/assets/signout.svg" /><span class="ml-5"> Sign Out</span>
          </li>
        </ul>
      </div>
      <div class="footer-wrp flex items-center cursor-pointer" @click="showProfileMenu()">
        <!-- <img src="@/assets/profile.svg" class="" /> -->

        <v-profile
          :small-profile="true"
          :user-info="{
            letter_name: loggedInUser.firstName && loggedInUser.firstName.charAt(0) + ' ' + loggedInUser.lastName.charAt(0),
            full_name: loggedInUser.fullName,
            img: loggedInUser.userImagePath,
            id: '',
          }"
          :side-menu="true"
        ></v-profile>
        <div class="rightprodiv flex justify-between w-full pr-8">
          <span class="ml-4">{{ loggedInUser.fullName ? loggedInUser.fullName : '' }}</span>
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.00003 2.83L8.17003 6L9.58003 4.59L5.00003 0L0.410034 4.59L1.83003 6L5.00003 2.83ZM5.00003 15.17L1.83003 12L0.420034 13.41L5.00003 18L9.59003 13.41L8.17003 12L5.00003 15.17Z"
              fill="#595959"
            />
          </svg>
        </div>
      </div>
    </template>
    <!-- FOOTER SECTION ENDS HERE -->

    <!-- COLLAPSE AND EXPAND ICON SECTION STARTS HERE -->
    <template #dropdown-icon="{ isOpen }">
      <span v-if="!isOpen">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.8904 0.390026L13.6104 1.11003L7.36035 7.36003L7.00035 7.70303L6.64035 7.35953L0.390352 1.10953L1.11035 0.389526L7.00035 6.28203L12.8904 0.390026Z"
            fill="#7C8AB5"
          />
        </svg>
      </span>
      <span v-else>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.11014 7.60997L0.390137 6.88997L6.64014 0.639973L7.00014 0.296972L7.36014 0.640472L13.6101 6.89047L12.8901 7.61047L7.00014 1.71797L1.11014 7.60997Z"
            fill="white"
          />
        </svg>
      </span>
    </template>
    <!-- COLLAPSE AND EXPAND ICON SECTION ENDS HERE -->
  </sidebar-menu>
</template>
<script lang="ts" src="./VLeftMenu.ts"></script>
