<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
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
              <!--  -->
              <v-title menu="Medical Info" class=""></v-title>
              <div class="relative">
                <div class="absolute top-2 right-2 z-10">
                  <a
                    class="rounded-radius6
        inline-flex
        items-center cursor-pointer
        justify-center bg-blue w-6 h-6 mr-1"
                  >
                    <img src="@/assets/plus.svg" />
                  </a>
                  <a
                    class="rounded-radius6
        inline-flex
        items-center cursor-pointer
        justify-center bg-red-400 w-6 h-6"
                  >
                    <img src="@/assets/deletewhite.svg" />
                  </a>
                  <!-- @click="isOpennotes = false" -->
                </div>
                <v-card-inner-box
                  class="relative"
                  title="Office Information"
                  :titleicon="require('@/assets/officeinfo.svg')"
                >
                  <div class="grid grid-cols-4 gap-4 mb-5">
                    <!-- FIRST -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Affiliation<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Department<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>

                    <!-- THIRD -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Address 1<br />
                        <span class="text-additionalinfo font-normal">1310 San Bernardino Road</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Address 2<br />
                        <span class="text-additionalinfo font-normal">Suite 103</span>
                      </p>
                    </div>
                  </div>
                  <!-- FISRT ROW ENDS HERE -->
                  <div class="grid grid-cols-4 gap-4 mb-5">
                    <!-- FIRST -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Address 3<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office City<br />
                        <span class="text-additionalinfo font-normal">Upland</span>
                      </p>
                    </div>

                    <!-- THIRD -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office State<br />
                        <span class="text-additionalinfo font-normal">California</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Zip<br />
                        <span class="text-additionalinfo font-normal">91876</span>
                      </p>
                    </div>
                  </div>
                  <!-- SECOND ROW ENDS HERE -->
                  <div class="grid grid-cols-4 gap-4 mb-5">
                    <!-- FIRST -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Phone<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Fax<br />
                        <span class="text-additionalinfo font-normal">California</span>
                      </p>
                    </div>

                    <!-- THIRD -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Email<br />
                        <span class="text-additionalinfo font-normal">uplandgastro@yahoo.com</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Office Phone<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                  </div>
                  <!-- THIRD ROW ENDS HERE -->
                </v-card-inner-box>
              </div>
              <!--  -->
              <div class="relative">
                <div class="absolute top-2 right-2 z-10">
                  <a
                    class="rounded-radius6
        inline-flex
        items-center cursor-pointer
        justify-center bg-blue w-6 h-6 mr-1"
                  >
                    <img src="@/assets/plus.svg" />
                  </a>
                  <a
                    class="rounded-radius6
        inline-flex
        items-center cursor-pointer
        justify-center bg-red-400 w-6 h-6"
                  >
                    <img src="@/assets/deletewhite.svg" />
                  </a>
                  <!-- @click="isOpennotes = false" -->
                </div>
                <v-card-inner-box title="NPI Information" :titleicon="require('@/assets/npiinfo.svg')">
                  <div class="grid grid-cols-4 gap-4 mb-5">
                    <!-- FIRST -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Address 1<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Address 2<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>

                    <!-- THIRD -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        City<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        State<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                  </div>
                  <!-- FISRT ROW ENDS HERE -->
                  <div class="grid grid-cols-4 gap-4 mb-5">
                    <!-- FIRST -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        Zip<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                    <!-- SECOND -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        State License<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>

                    <!-- THIRD -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        State License #<br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                    <!-- FOUR -->
                    <div>
                      <p class="text-greytxt font-semibold text-fs13 leading-loose">
                        License State <br />
                        <span class="text-additionalinfo font-normal">-</span>
                      </p>
                    </div>
                  </div>
                  <!-- SECOND ROW ENDS HERE -->
                </v-card-inner-box>
              </div>
            </div>
          </div>

          <!--  -->
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./MedicalInfo.ts"></script>
