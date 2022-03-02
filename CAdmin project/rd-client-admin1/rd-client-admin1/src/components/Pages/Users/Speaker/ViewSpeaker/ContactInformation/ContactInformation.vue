<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Users"></v-breadcrumb>
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
              mb-1
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
            <left-menu></left-menu>
            <div class="w-spright">
              <v-title menu="Contact"></v-title>
              <div class="grid grid-cols-3 gap-6">
                <v-card-box class="border border-contrectbox shadow-profilemenubox">
                  <div class="flex justify-between items-center mb-2">
                    <label class="inline-flex items-center">
                      <v-checkbox checked class="form-checkbox h-4 w-4 rounded-radius5" />
                      <span class="ml-3 text-fs14 text-darkgrey font-bold">ID <span class="text-greytxt">7080</span></span>
                    </label>
                    <div class="flex items-center">
                      <img src="@/assets/edit.svg" class="mr-5" />
                      <img src="@/assets/delete.svg" />
                    </div>
                  </div>
                  <div>
                    <!-- FIRST -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Address Type<br />
                        <span class="text-greytxt text-fs14 font-normal">Office 2</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Address<br />
                        <span class="text-greytxt text-fs14 font-normal">2608 Washburn Street, Baton Rouge, LA 70816</span>
                      </p>
                    </div>
                    <!-- THIRD -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Phone<br />
                        <span class="text-greytxt text-fs14 font-normal">225-368-1700</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Email<br />
                        <span class="text-greytxt text-fs14 font-normal break-words">GaryDYoung@teleworm.us</span>
                      </p>
                    </div>
                  </div>
                </v-card-box>
                <v-card-box class="border border-contrectbox shadow-profilemenubox">
                  <div class="flex justify-between items-center mb-2">
                    <label class="inline-flex items-center">
                      <v-checkbox class="form-checkbox h-4 w-4 rounded-radius5" />
                      <span class="ml-3 text-fs14 text-darkgrey font-bold">ID <span class="text-greytxt">7081</span></span>
                    </label>
                    <div class="flex items-center">
                      <img src="@/assets/edit.svg" class="mr-5" />
                      <img src="@/assets/delete.svg" />
                    </div>
                  </div>
                  <div>
                    <!-- FIRST -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Address Type<br />
                        <span class="text-greytxt text-fs14 font-normal">Mailing</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Address<br />
                        <span class="text-greytxt text-fs14 font-normal"
                          >1310 San Bernardino Road Suite 103, Upland, CA 91786
                        </span>
                      </p>
                    </div>
                    <!-- THIRD -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Phone<br />
                        <span class="text-greytxt text-fs14 font-normal">-</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Email<br />
                        <span class="text-greytxt text-fs14 font-normal break-words">uplandgastro@yahoo.com</span>
                      </p>
                    </div>
                  </div>
                </v-card-box>
                <v-card-box class="border border-contrectbox shadow-profilemenubox">
                  <div class="flex justify-between items-center mb-2">
                    <label class="inline-flex items-center">
                      <v-checkbox class="form-checkbox h-4 w-4 rounded-radius5" />
                      <span class="ml-3 text-fs14 text-darkgrey font-bold">ID <span class="text-greytxt">7082</span></span>
                    </label>
                    <div class="flex items-center">
                      <img src="@/assets/edit.svg" class="mr-5" />
                      <img src="@/assets/delete.svg" />
                    </div>
                  </div>
                  <div>
                    <!-- FIRST -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Address Type<br />
                        <span class="text-greytxt text-fs14 font-normal">Send Check</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Address<br />
                        <span class="text-greytxt text-fs14 font-normal">993 Lowes Alley Thornville, OH 43076</span>
                      </p>
                    </div>
                    <!-- THIRD -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Phone<br />
                        <span class="text-greytxt text-fs14 font-normal">740-246-5739</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div class="pt-3">
                      <p class="text-darkgrey font-semibold text-fs12">
                        Email<br />
                        <span class="text-greytxt text-fs14 font-normal break-words">DavidEAbraham@jourrapide.com</span>
                      </p>
                    </div>
                  </div>
                </v-card-box>
              </div>
            </div>
          </div>

          <!--  -->
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./ContactInformation.ts"></script>
