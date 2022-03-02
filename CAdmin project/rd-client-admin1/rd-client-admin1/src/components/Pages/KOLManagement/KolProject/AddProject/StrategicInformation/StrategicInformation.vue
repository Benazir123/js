<template>
  <div class="flex bg-lite-blue-bg commonform">
    <div class="flex w-full h-full justify-between">
      <div class="w-full">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb breadcrumb="KOL Management" subbreadcrumb="Project"></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="flex justify-between items-center border-b border-searchbox -m-4 p-4 mb-1 commtitle">
            <v-title menu="Create Form" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="backproject()"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between mt-8">
            <project-left-menu></project-left-menu>
            <div class="w-spright">
              <h6 class="text-ffstitle my-2 text-fs16">Assessment Details <span class="text-darkgrey text-fs14">(Xifaxan0HE-2021-001)</span></h6>
              <div class="flex w-full">
                <div class="rounded-radius8 mt-3 w-full border border-innerbox shadow-innerbox mb-4">
                  <div class="text-greytxt bg-innerboxtitlebg px-4 py-2 rounded-t-radius8 flex items-center">
                    <h3 class="text-greytxt bg-innerboxtitlebg font-bold font-fs16">Strategic Information</h3>
                  </div>
                  <div class="mb-4 p-4">
                    <div class="border-b border-filtercheckbox">
                      <div class="grid grid-cols-2 gap-4 py-4">
                        <div class="relative">
                          <p class="mb-2 text-fs14 text-greytxt"> Add More</p>
                          <v-textarea v-model="name" height="h-76" paddingright="pr-28" :placeholder="'Type your comments here'" inputType="text" readonly="" name="name" value="Xifaxan0HE-2021-001" />
                          <v-smallbutton
                            class="flex items-center bg-blue text-white px-8 py-2 absolute top-12 right-6
                          text-fs13 font-w-normal whitespace-nowrap">
                            Add 
                          </v-smallbutton>
                        </div>
                      </div>
                    </div>
                    <p class="text-fs14 text-greytxt mt-6 mb-4">What are the Brand/Business Unit (BU) Strategic Imperative(s): Please list and provide details below</p>
                    <p class="text-fs14 text-greytxt mt-4 mb-4">Strategy</p>
                    <label class="inline-flex items-center border-b border-filtercheckbox w-full py-4">
                      <v-checkbox isChecked class="form-checkbox h-4 w-4 rounded-radius5" />
                      <span class="ml-3 text-fs13 text-greytxt">Establish the 1A1 guideline rating as the standard of case for HE patients across all sites of care</span>
                    </label>
                    <label class="inline-flex items-center border-b border-filtercheckbox w-full py-4">
                      <v-checkbox checked class="form-checkbox h-4 w-4 rounded-radius5" />
                      <span class="ml-3 text-fs13 text-greytxt">Create a sense of urgency around the CLD/HE burden of illness across all stakeholders (including patient/caregiver & advocacy)</span>
                    </label>
                    <label class="inline-flex items-center border-b border-filtercheckbox w-full py-4">
                      <v-checkbox checked class="form-checkbox h-4 w-4 rounded-radius5" />
                      <span class="ml-3 text-fs13 text-greytxt">Communicate the Xifaxan is the only proven treatment that reduces HE hospital recurrence to patients, caregivers and HCPs</span>
                    </label>
                    <label class="inline-flex items-center  w-full py-4">
                      <v-checkbox checked class="form-checkbox h-4 w-4 rounded-radius5" />
                      <span class="ml-3 text-fs13 text-greytxt">Disrupt the HE Clinical workflow through implementing EHR resources to improve the patient journey (identification, management & TOC)</span>
                    </label>
                  </div>
                  <!--  -->
                </div>
                <!--  -->
              </div>
            </div>
          </div>
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./StrategicInformation.ts"></script>
