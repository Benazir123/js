<template>
  <div class="flex bg-lite-blue-bg generalspk commonform">
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
                    <h3 class="text-greytxt bg-innerboxtitlebg font-bold font-fs16">General</h3>
                  </div>
                  <div class="grid grid-cols-4 gap-4 p-4">
                    <div class="generalbod">
                      <v-label value="ID" class="mb-2" />
                      <v-inputall v-model="name" inputType="text" readonly="" name="name" label="Xifaxan0HE-2021-001"  />
                    </div>
                    <div class="generalbod">
                      <v-label value="Type of Engagement" class="mb-2"  />
                      <v-inputall v-model="name" inputType="text" name="name"  label="Xifaxan0HE-2021-001"/>
                    </div>

                    <div class="w-full generalbod">
                      <v-label value="Contact Person" class="mb-2"  />
                      <v-inputall v-model="name" inputType="text" name="name" label="Advisory Board"/>
                    </div>
                  </div>
                  <!--  -->
                  <div class="grid grid-cols-4 gap-4 p-4">
                    <div class="generalbod">
                      <v-label value="Estimated Timeframe" class="mb-2"   />
                      <v-inputall v-model="name" inputType="text" name="name" label="Bill Gaglandi" />
                    </div>
                    <div class="generalbod">
                      <v-label value="Estimated # of Engagements" class="mb-2" />
                      <v-inputall v-model="name" inputType="text" name="name" label="1 - Live" />
                    </div>

                    <div class="w-full generalbod estimategeneral">
                      <v-label value="Estimated Expenses" class="mb-2" />
                          <div
                        class="
                          relative
                          flex
                          w-full
                          flex-wrap
                          items-stretch
                        "
                      >
                        <span
                          class="
                            z-10
                            top-0 bottom-0
                            leading-snug
                            font-normal
                            absolute
                            text-center text-gray-400
                            bg-transparent
                            rounded
                            text-base
                            items-center
                            justify-center
                            w-8
                            p-3 border-r border-graymenu
                            flex
                          "
                        >
                         $
                        </span>
                      <v-inputall v-model="name" inputType="number" name="name" class="mt-0" label="75,000"   />
                          </div>
                    </div>
                       <div class="w-full generalbod">
                      <v-label value="Product" class="mb-2" />
                      <v-inputall  v-model="name" inputType="text" name="name" label="Salix  > Xifaxan HE" />
                    </div>
                  </div>
                  <div class="grid grid-cols gap-4 p-4">
                    <div class="mb-2 generalbod">
                      <v-label value="Reason for Engagement" class="mb-2" />
                      <v-textarea   type="text"  placeholder="The advanced practice providers are taking an increased role in the delivery of GI Healthcare. We plan to engage a contingent of diverse advisors who can assist in providing direct feedback regarding current and future brand initiatives aimed at improving patient care."/>
                    </div>
                  </div>

                <div class="flex mb-4 btnlist">
                  <v-smallbutton
                    class="
                      bg-white
                      border border-editbot
                      flex
                      rounded-radius4
                      px-6
                      py-2
                      text-fs13 text-bluetxt
                      items-center
                      font-normal
                      mx-4
                      justify-content-end
                    "
                    >
                    <img src="@/assets/editnewblue.svg" class="mr-2">
                     Edit
                  </v-smallbutton>
                  <v-smallbutton
                    class="
                      bg-clrbtn
                      flex
                      rounded-radius4
                      px-6
                      py-2
                      text-fs13 text-utilihr
                      items-center
                      font-normal
                      mr-4
                      justify-content-end
                    "
                    >Cancel
                  </v-smallbutton>
                </div>
                </div>
                <!--  -->
              </div>
                <div class="rounded-radius8 m-3 border border-innerbox shadow-innerbox mb-4">
                  <div class="text-greytxt bg-innerboxtitlebg px-4 py-2 rounded-t-radius8 flex items-center">
                    <h3 class="text-greytxt bg-innerboxtitlebg font-bold font-fs16">Approval Summary</h3>
                  </div>
                  <div class="grid grid-cols-4 gap-4 p-4 dateinput">
                    <div class="kol-project-submissiondate">
                      <v-label value="Submission Date" class="mb-2" />
                       <litepie-datepicker as-single  readonly="" :auto-apply="false" v-model="dateValue" :formatter="formatter"></litepie-datepicker>
                    </div>
                    <div class="kol-project-submissiondate">
                      <v-label value="Approval Date" class="mb-2" />
                       <litepie-datepicker as-single  readonly="" :auto-apply="false" v-model="dateValue" :formatter="formatter"></litepie-datepicker>
                    </div>

                    <div class="w-full ">
                      <v-label value="Submitted By" class="mb-2" />
                      <v-inputall v-model="name" inputType="text" name="name"  />
                    </div>
                    <div class="w-full ">
                      <v-label value="Approved By" class="mb-2" />
                      <v-inputall v-model="name" inputType="text" name="name" />
                    </div>
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
<script lang="ts" src="./General.ts"></script>
