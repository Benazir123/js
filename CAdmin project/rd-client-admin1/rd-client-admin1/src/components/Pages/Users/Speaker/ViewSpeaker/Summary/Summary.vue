<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb
              breadcrumb="KOL Management"
              subbreadcrumb="Speaker Consultant"
              speakerbreadcrumb="Abbas Jonathan"
            ></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div
            class="
              flex
              justify-between
              items-center
              border-b border-searchbox
              -m-4
              p-4
              mb-8
            "
          >
            <v-title menu="Speaker / Consultant" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="consultant"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between">
            <ca-left-menu></ca-left-menu>
            <div class="w-spright">
              <v-title menu="Summary" class="-mb-0 text-fs24 font-bold"></v-title>
              <div class="flex mb-5 mt-12">
                <component
                  :is="'v-profile'"
                  :small-profile="false"
                  :side-menu="true"
                  :user-info="{
                    letter_name: 'DD',
                    full_name: '',
                    img: '',
                  }"
                ></component>
                <div class="mt-2 ml-12">
                  <h5 class="font-semibold text-secgrey text-fs18 mb-1 flex item-center">
                    Abbas Jonathan
                    <img src="@/assets/profile-edit.svg" class="ml-2 cursor-pointer" />
                  </h5>

                  <p class="text-greytxt text-fs14  mb-1">
                    Director, Acute Leukemia and Blood Cancer Program
                  </p>
                  <p class="text-specili text-fs14">Hematology / Oncology</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <institution-info></institution-info>
                </div>
                <div class="border-lborder-opacity-70 pl-5">
                  <linked-engagements></linked-engagements>
                </div>
                <div class="border-l border-opacity-70 pl-5">
                  <radius-profile></radius-profile>
                </div>
              </div>
              <!-- DETAIL INFO START HERE -->
              <div class="grid grid-cols-2 gap-6">
                <assitant-info></assitant-info>
                <travel-preference></travel-preference>
                <associated-affiliations></associated-affiliations>
                <medical-information></medical-information>
              </div>

              <v-title menu="Utilization" class="-mb-0 text-greytxt font-semibold tracking-tight"></v-title>
              <div class="bg-utilihr w-54px h-2px block mt-3"></div>

              <div class="grid grid-cols-4 gap-4 mt-8">
                <div class="flex items-center justify-between border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      CAP AMOUNT
                    </h3>
                    <b class="text-fs20 font-bold text-textblue mt-2 block">$150,000</b>
                  </div>
                  <img src="@/assets/cap-amount.svg" />
                </div>
                <div class="flex items-center justify-between border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      UTILIZED
                    </h3>
                    <b class="text-fs20 font-bold text-greenclr mt-2 block">$50,000</b>
                  </div>
                  <img src="@/assets/utilized.svg" />
                </div>
                <div class="flex items-center justify-between border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      CANCELED
                    </h3>
                    <b class="text-fs20 font-bold text-darkpink mt-2 block">$0</b>
                  </div>
                  <img src="@/assets/canceled.svg" />
                </div>
                <div class="flex items-center justify-between border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <div>
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      REMAINING
                    </h3>
                    <b class="text-fs20 font-bold text-yellow mt-2 block">$1,00,000</b>
                  </div>
                  <img src="@/assets/remaining.svg" />
                </div>
              </div>

              <div class="grid grid-cols-4 gap-4 mt-8">
                <div class="flex items-center border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <span class="w-56px h-56px flex items-center justify-center bg-skyblue rounded-full">
                    <img src="@/assets/ch1.svg" />
                  </span>
                  <div class="ml-3">
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      THRESHOLD SET
                    </h3>
                    <b class="text-fs20 font-bold text-textblue block">90%</b>
                  </div>
                </div>
                <div class="flex items-center border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <span class="w-56px h-56px flex items-center justify-center bg-green rounded-full">
                    <img src="@/assets/ch2.svg" />
                  </span>
                  <div class="ml-3">
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      THRESHOLD AMOUNT
                    </h3>
                    <b class="text-fs20 font-bold text-greenclr block">$135,000</b>
                  </div>
                </div>
                <div class="flex items-center border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <span class="w-56px h-56px flex items-center justify-center bg-pink rounded-full">
                    <img src="@/assets/ch3.svg" />
                  </span>
                  <div class="ml-3">
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      THRESHOLD SPEND
                    </h3>
                    <b class="text-fs20 font-bold text-darkpink block">37%</b>
                  </div>
                </div>
                <div class="flex items-center border border-1.0263px rounded-radius40 p-4 border-searchbox">
                  <span class="w-56px h-56px flex items-center justify-center bg-lightyellow rounded-full">
                    <img src="@/assets/ch4.svg" />
                  </span>
                  <div class="ml-3">
                    <h3 class="text-fs13 font-semibold text-greytxt">
                      THRESHOLD REMAINING
                    </h3>
                    <b class="text-fs20 font-bold text-yellow block">$85,000</b>
                  </div>
                </div>
              </div>

              <div class="rounded-radius40 border border-1.0263px border-searchbox p-4 mt-8">
                <div class="flex items-center justify-between">
                  <v-title
                    class="cursor-pointer font-semibold tracking-tight font-18px"
                    menu="Times utilized this contract year overall utilization"
                  ></v-title>
                  <div class="flex items-center">
                    <div
                      class=" bg-smfil cursor-pointer inline-flex rounded-radius7 px-2 py-2 items-center shadow-filtershadow ml-8 "
                    >
                      <img src="@/assets/filter.svg" class="w-4" />
                    </div>
                  </div>
                </div>
                <span class="flex items-center text-accepttxt font-semibold text-base">
                  <img src="@/assets/greenper.svg" class="mr-2" />
                  75%
                </span>
                <apexchart
                  type="bar"
                  height="250"
                  :options="chartOptionsEngagementStatus"
                  :series="seriesEngagementStatus"
                ></apexchart>
              </div>
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Summary.ts"></script>
