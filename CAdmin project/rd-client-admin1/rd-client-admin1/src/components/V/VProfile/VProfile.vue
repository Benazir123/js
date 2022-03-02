<template>
  <div v-if="!smallProfile" class="flex items-center flex-col text-center">
    <div class="flex-shrink-0 w-32 h-32 mb-3 cursor-pointer relative">
      <img
        v-if="userInfo.img && !userInfo.errorImg"
        :src="userInfo.img"
        class="w-full h-full rounded-full"
        alt=""
        @error="setAltImg(userInfo)"
        @click="profile(userInfo)"
      />

      <div
        v-else
        class="
          w-full
          h-full
          rounded-full
          bg-profilegrey
          text-3xl
          tracking-normal
          flex
          items-center
          justify-center
          text-white
          cursor-pointer
        "
        @click="profile(userInfo)"
      >
        {{ userInfo.letter_name }}
      </div>
    </div>
    <div class="ml-3">
      <div class="whitespace-no-wrap text-fx13">
        <!-- <slot /> -->
        <div class="flex-col flex mb-2">
          <h4 v-if="userInfo.full_name" class="text-fs14 text-greytxt font-bold mb-1 flex items-center">
            {{ userInfo.full_name }}
            <!--  -->
            <p v-if="userInfo.degree" class="text-darkgrey text-fs12 ml-2">
              {{ userInfo.degree }}
            </p>
            <img
              v-if="
                userInfo.from == 'hcp' &&
                  (userInfo.hcpdata.email == '' || userInfo.hcpdata.email == null) &&
                  userInfo.hcpdata.isRemote == 1
              "
              src="@/assets/flag.svg"
              alt=""
              class="w-4 h-4 ml-2"
            />
          </h4>
          <!-- <p class="text-darkgrey text-fs12" v-if="userInfo.degree">
            {{ userInfo.degree }}
          </p> -->
          <p v-if="userInfo.speciality" class="text-darkgrey text-fs12">
            {{ userInfo.speciality }}
          </p>

          <p v-if="userInfo.phone" class="text-darkgrey text-fs12">
            {{ userInfo.phone }}
          </p>
          <p v-if="userInfo.email" class="text-darkgrey text-fs12">
            {{ userInfo.email }}
          </p>
          <p v-if="userInfo.address || userInfo.address2 || userInfo.city || userInfo.state" class="text-darkgrey text-fs12">
            {{ userInfo.address }}<span v-if="userInfo.address2 && userInfo.address2 != ''">,</span>{{ userInfo.address2 }}
            {{ userInfo.city }}<span v-if="userInfo.state && userInfo.state != ''">,</span>
            {{ userInfo.state }}
          </p>
          <!-- <p
            class="text-darkgrey text-fs12"
            v-if="userInfo.city || userInfo.state"
          >
            {{ userInfo.city }}, {{ userInfo.state }}
          </p> -->
        </div>
      </div>
    </div>
  </div>
  <div v-if="smallProfile" class="flex items-center">
    <div v-if="isShowprofile" :class="['flex-shrink-0 w-8 h-8 cursor-pointer relative', width, height]">
      <img
        v-if="userInfo.img && !userInfo.errorImg"
        :src="userInfo.img"
        class="w-full h-full rounded-full"
        alt=""
        @click="profile(userInfo)"
        @error="setAltImg(userInfo)"
      />

      <div
        v-else
        class="
          w-full
          h-full
          rounded-full
          bg-profilegrey
          text-fs12
          flex
          items-center
          justify-center
          text-white
          cursor-pointer
          tracking-normal
        "
        @click="profile(userInfo)"
      >
        {{ userInfo.letter_name }}
      </div>
      <div
        v-if="userInfo.from == 'hcp' && userInfo.isprescriper == 1"
        class="
          absolute
          text-white
          flex
          rounded-full
          items-center
          justify-center
          bg-precribe
          w-4
          h-4
          font-bold
          right-0
          top-auto
          bottom-0
          text-fs8
        "
      >
        P
      </div>
    </div>

    <div v-if="!sideMenu" class="ml-3 text-fx13 whitespace-no-wrap">
      <!-- <slot /> -->
      <div class="flex-col flex">
        <h4 v-if="userInfo.full_name" class="text-fs14 text-greytxt font-bold mb-1 flex items-center">
          {{ userInfo.full_name }}
          <!--  -->
          <p v-if="userInfo.degree" class="text-darkgrey text-fs12 ml-2">
            {{ userInfo.degree }}
          </p>
          <img
            v-if="
              userInfo.from == 'hcp' &&
                (userInfo.hcpdata.email == '' || userInfo.hcpdata.email == null) &&
                userInfo.hcpdata.isRemote == 1
            "
            src="@/assets/flag.svg"
            alt=""
            class="w-4 h-4 ml-2"
          />
        </h4>
        <!-- <p class="text-darkgrey text-fs12" v-if="userInfo.degree && userInfo.from != 'hcp'">
          {{ userInfo.degree }}
        </p> -->
        <p v-if="userInfo.speciality" class="text-darkgrey text-fs12">
          {{ userInfo.speciality }}
        </p>

        <p v-if="userInfo.phone" class="text-darkgrey text-fs12">
          {{ userInfo.phone }}
        </p>
        <p v-if="userInfo.email" class="text-darkgrey text-fs12">
          {{ userInfo.email }}
        </p>
        <p v-if="userInfo.address || userInfo.address2 || userInfo.city || userInfo.state" class="text-darkgrey text-fs12">
          {{ userInfo.address }}
          <span v-if="userInfo.address2 && userInfo.address2 != ''">,</span>{{ userInfo.address2 }} {{ userInfo.city
          }}<span v-if="userInfo.state && userInfo.state != ''">,</span>{{ userInfo.state }}
        </p>
        <!-- <p
          class="text-darkgrey text-fs12"
          v-if="userInfo.city || userInfo.state"
        >
          {{ userInfo.city }}, {{ userInfo.state }}
        </p> -->
      </div>
    </div>
    <div v-if="sideMenu" class="ml-3 text-fx13 whitespace-no-wrap">
      <slot />
    </div>
  </div>
  <!-- uer profile -->
  <profile v-if="showProfile" :show-profile="showProfile" :user-id="userId" @close-profile="showProfile = false"></profile>
  <!-- user profile -->
</template>

<script lang="ts" src="./VProfile.ts"></script>
