<template>
  <div class="flex bg-lite-blue-bg viewspk alignspk">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="Dashboard" subbreadcrumb="Users"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="border-b-2 border-searchbox -m-4 p-4 mb-2">
            <v-title menu="Speaker Details" class="-mb-0"></v-title>
            <div class="flex items-center"></div>
          </div>
          <!--  -->
          <div class="flex justify-between">
            <left-menu></left-menu>
            <div class="w-spright relative">
              <v-title menu="Alignment" class="py-2"></v-title>
              <div class="mb-4 flex justify-items-center">
                <div class="w-1/5">
                  <!-- product class -->
                  <v-card-inner-box title="Product" class="shadowboxaligment " titleicon="">
                    <div class="w-full">
                      <div class="flex items justify-items-center">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">Arazlo™</p>
                      </div>
                      <div class="flex items justify-items-center my-2">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">Sliq</p>
                      </div>
                      <div class="flex items justify-items-center">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">Duobrii</p>
                      </div>
                      <div class="flex items justify-items-center my-2">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">Jublia</p>
                      </div>
                      <div class="flex items justify-items-center">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">Plus + Physician Dispense</p>
                      </div>
                      <div class="flex items justify-items-center mt-2">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">Targretin</p>
                      </div>
                    </div>
                  </v-card-inner-box>
                  <!-- product class -->
                </div>
                <div class="w-2/5 mx-5">
                  <!-- topic class -->
                  <v-card-inner-box title="Topic (Align only Trained Speakers)" class="shadowboxaligment">
                    <div class="w-full">
                      <div class="flex items justify-items-center">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">Arazlo: Tazarotene reformulated</p>
                      </div>
                      <div class="flex items justify-items-center my-2">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">
                          Arazlo: Tazarotene Lotion: Changing the Paradigm of Retinoid Therapy (ARZ.0038.USA.21 v3)
                        </p>
                      </div>
                      <div class="flex items justify-items-center">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">eNova</p>
                      </div>
                      <div class="flex items justify-items-center mt-2">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">
                          New Physician Dispense PLUS+ Program (ORD.0253.USA.20)
                        </p>
                      </div>
                    </div>
                  </v-card-inner-box>
                  <!-- topic class -->
                </div>
                <div class="w-2/5">
                  <!-- content class -->
                  <v-card-inner-box title="Content" class="shadowboxaligment">
                    <div class="w-full">
                      <div class="flex items justify-items-center">
                        <div>
                          <v-checkbox></v-checkbox>
                        </div>
                        <p class="text-greytxt text-fs13 ml-2 pt-1">
                          Live/Product Theater: Arazlo: Tazarotene reformulated (ARZ.0038.USA.21 V3.0)
                        </p>
                      </div>
                    </div>
                  </v-card-inner-box>
                  <!-- content class -->
                </div>
              </div>

              <!-- aligmrnt button class -->
                <div
      class="
        p-3
        px-2
        ml-0
        mr-7
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
          px-8
          py-2
          mr-2
          text-fs14
          items-center
          mr-4
          tracking-normal
        "
        >NO</v-smallbutton
      >
      <v-smallbutton
        class="
          bg-blue
          flex
          rounded-radius6
          px-8
          py-2
          text-fs14 text-white
          items-center
          tracking-normal
        "
        >Submit</v-smallbutton
      >
    </div>
              <!-- aligmrnt button class -->
            </div>
          </div>
          <!--  -->
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Aligment.ts"></script>
