<template>
  <div class="relative h-full livechat">
    <!-- first div start -->
    <div
      class="
        bg-tabactiveblue
        mb-5
        rounded-radius8
        text-greytxt
        p-4
        flex
        items-center
        justify-between
      "
    >
      <div class="">
        <h5 class="text-greytxt text-fs16 font-w-bold mb-1">Technical</h5>
        <p class="text-fs13 text-greytxt mb-1">ID : 648</p>
        <div class="flex items-center">
          <p class="text-greytxt text-fs13">Status</p>
          <v-small-button>In Progress</v-small-button>
        </div>
      </div>
      <div class="text-center flex flex-col items-center">
        <p class="text-fs11">Sep 22, 2021 , 6:37 PM</p>
        <v-smallbutton
          class="
            bg-blue
            flex
            rounded-radius6
            text-white
            px-4
            py-1
            text-fs12
            items-center
            mt-2
            tracking-normal
          "
          >Close Ticket</v-smallbutton
        >
      </div>
    </div>
    <!-- first div ends -->
    <div class="scroller scoll-forms">
      <!-- left chat start -->
      <div class="float-left mb-5">
        <div class="flex items-start">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-8 h-8">
              <component :is="'v-profile'" :key="imgErrorSpk" :small-profile="true" :side-menu="true"></component>
            </div>
          </div>
          <div>
            <div
              class="
                bg-tabactiveblue
                ml-2
                w-350
                rounded-t-lg rounded-br-lg
                text-greytxt
                p-4
                flex
                items-center
                justify-between
              "
            >
              <p class="text-fs14 mb-2">Technical Issue</p>
            </div>
            <p class="text-fs11 mt-2 text-greytxt ml-2">
              Sep 22, 2021 , 6:37 PM
            </p>
          </div>
        </div>
      </div>
      <!-- left chat ends -->
      <!-- Right chat start -->
      <div class="float-right mt-5">
        <div class="flex items-start">
          <div>
            <div
              class="
                bg-chatright
                mr-2
                w-350
                rounded-t-full rounded-bl-full
                text-greytxt
                p-4
                flex
                items-center
                justify-between
              "
            >
              <p class="text-fs14">Technical Issue</p>
            </div>
            <p class="text-fs11 mt-2 text-greytxt mr-2 text-right">
              Sep 22, 2021 , 6:37 PM
            </p>
          </div>

          <component :is="'v-profile'" :key="imgErrorSpk" :small-profile="true" :side-menu="true"></component>
        </div>
      </div>
      <!-- Right chat ends -->
      <!-- left chat img start -->
      <div class="float-left my-5">
        <div class="flex items-start">
          <div class="flex items-center flex-col">
            <div class="flex-shrink-0 w-8 h-8">
              <component :is="'v-profile'" :key="imgErrorSpk" :small-profile="true" :side-menu="true"></component>
            </div>
          </div>
          <div>
            <div class="ml-3">
              <p class="text-fs13">Abbas Jonathan</p>
              <p class="text-fs12 text-darkgrey mb-2">
                Find attached the files
              </p>
            </div>
            <div
              class="
                bg-tabactiveblue
                ml-2
                w-420
                rounded-radius8
                text-greytxt
                p-4
                flex
                items-center
                justify-between
              "
            >
              <div class="bg-white p-2 mr-2 flex items-center" @click="previewimg()">
                <img src="@/assets/imagechat.svg" class="mr-2" />
                <p class="text-fs13">Dashboard.jpg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- left chat img ends -->
    </div>
    <!-- bottom chat starts -->
    <div
      class="
        bg-chatbottom
        absolute
        bottom-16
        right-0
        left-0
        rounded-full
        text-greytxt
        m-4
        p-2
        flex
        items-center
        justify-between
      "
    >
      <textarea
        class="
          border-0
          outline-none outline-none
          focus:border-graymenu
          focus:ring-0
          focus:ring-indigo-200
          focus:ring-opacity-0
          bg-transparent
          resize-none
          text-fs14
        "
        rows="1"
        placeholder="Add your message"
      ></textarea>
      <div class="flex items-center">
        <img src="@/assets/attachement.svg" class="mx-3 cursor-pointer" />
        <v-smallbutton
          class="
            bg-blue
            flex
            rounded-full
            text-white
            px-2
            py-1
            text-fs12
            items-center
            mr-3
            tracking-normal
          "
          >Send <img src="@/assets/sent.svg" class="ml-2"
        /></v-smallbutton>
      </div>
    </div>
    <!-- bottom chat ends -->
    <!-- preview section -->
    <div v-if="isOpenpreview">
      <div class="drawerinnermask justify-center items-center flex z-150">
        <div class="bg-white w-80 p-6">
          <img src="@/assets/closeblack.svg" class="cursor-pointer w-7 mb-2 float-right" @click="isOpenpreview = false" />

          <img src="@/assets/previewticket.svg" />
        </div>
      </div>
      <!-- preview section -->
    </div>
  </div>
</template>
