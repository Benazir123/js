<template>
  <div>
    <v-breadcrumb breadcrumb="Dashboard " subbreadcrumb="My Profile" speakerbreadcrumb="View My Profile"></v-breadcrumb>
    <v-title menu="Account Settings"></v-title>
    <v-card-box>
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="flex items-end justify-between border-b border-searchbox">
            <ul class="flex mb-0 list-none flex-wrap flex-row">
              <li class="text-center cursor-pointer inline-block mr-8">
                <a
                  class="text-fs16 font-normal inline-block pb-2 cursor-pointer relative text-darkgrey"
                  v-on:click="togglecontentTabs(1)"
                  v-bind:class="{
                    'text-darkgrey': opencontentTab !== 1,
                    'text-textblue': opencontentTab === 1,
                  }"
                >
                  Profile
                  <span
                    class="w-12 h-0.5 inline-block absolute left-0 bottom-0"
                    v-bind:class="{
                      'bg-white ': opencontentTab !== 1,
                      'bg-blue': opencontentTab === 1,
                    }"
                  ></span>
                </a>
              </li>
              <li class="text-center cursor-pointer inline-block mr-8">
                <a
                  class="text-fs16 font-normal inline-block pb-2 cursor-pointer relative text-darkgrey"
                  v-on:click="togglecontentTabs(2)"
                  v-bind:class="{
                    'text-darkgrey': opencontentTab !== 2,
                    'text-textblue': opencontentTab === 2,
                  }"
                >
                  Change Password
                  <span
                    class="w-12 h-0.5 inline-block absolute left-0 bottom-0"
                    v-bind:class="{
                      'bg-white ': opencontentTab !== 2,
                      'bg-blue': opencontentTab === 2,
                    }"
                  ></span>
                </a>
              </li>
              <li class="text-center cursor-pointer inline-block mr-8">
                <a
                  class="text-fs16 font-normal inline-block pb-2 cursor-pointer relative text-darkgrey"
                  v-on:click="togglecontentTabs(3)"
                  v-bind:class="{
                    'text-darkgrey': opencontentTab !== 3,
                    'text-textblue': opencontentTab === 3,
                  }"
                >
                  Role and Permission
                  <span
                    class="w-12 h-0.5 inline-block absolute left-0 bottom-0"
                    v-bind:class="{
                      'bg-white ': opencontentTab !== 3,
                      'bg-blue': opencontentTab === 3,
                    }"
                  ></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content tab-space mt-8 w-full">
            <div>
              <div
                class="bg-speconbg rounded-radius8 p-8 shadow-myprofileshadow w-9/12"
                v-bind:class="{
                  hidden: opencontentTab !== 1,
                  block: opencontentTab === 1,
                }"
              >
                <v-title menu="My Profile"></v-title>

                <div class="flex justify-center items-center">
                  <div class="relative inline-block">
                    <!-- <component
                      :is="'v-profile'"
                      width="w-24"
                      height="h-24"
                      :small-profile="true"
                    ></component> -->
                    <span
                      class="
                        bg-blue
                        w-8
                        h-8
                        rounded-radius100
                        text-white
                        flex
                        absolute
                        bottom-0
                        right-2
                        justify-center
                        items-center
                        text-fs11
                        p-2
                      "
                    >
                      <img src="@/assets/editwhite.svg" class="cursor-pointer" />
                    </span>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-8 py-8">
                  <div class="w-full">
                    <v-label value="Name" class="mb-2" />
                    <v-inputall v-model="name" inputType="text" name="name" />
                  </div>

                  <div class="w-full">
                    <v-label value="Last name" class="mb-2" />
                    <v-inputall v-model="lastname" inputType="text" name="lastname" />
                  </div>

                  <div class="w-full">
                    <v-label value="Title" class="mb-2" />
                    <v-inputall v-model="title" inputType="text" name="title" />
                  </div>

                  <div class="w-full">
                    <v-label value="Department" class="mb-2" />
                    <v-inputall v-model="department" inputType="text" name="department" />
                  </div>

                  <div class="w-full">
                    <v-label value="Phone" class="mb-2" />
                    <v-inputall v-model="phone" inputType="text" name="phone" />
                  </div>

                  <div class="w-full">
                    <v-label value="Email" class="mb-2" />
                    <v-inputall v-model="email" inputType="text" name="email" />
                  </div>

                  <div class="w-full">
                    <v-label value="City" class="mb-2" />
                    <v-inputall v-model="city" inputType="text" name="city" />
                  </div>

                  <div class="w-full">
                    <v-label value="State" class="mb-2" />
                    <v-inputall v-model="state" inputType="text" name="state" />
                  </div>

                  <div class="w-full">
                    <v-label value="Reports to" class="mb-2" />
                    <v-inputall v-model="reportsto" inputType="text" name="reportsto" />
                  </div>
                </div>

                <div class="flex">
                  <v-smallbutton
                    class="
                      bg-clrbtn
                      flex
                      rounded-radius4
                      px-6
                      py-2
                      text-fs12 text-utilihr
                      items-center
                      font-normal
                      mr-4
                      justify-content-end
                    "
                    >Cancel
                  </v-smallbutton>

                  <v-smallbutton
                    class="
                      bg-blue
                      flex
                      rounded-radius4
                      px-6
                      py-2
                      text-fs12 text-white
                      items-center
                      font-normal
                      justify-content-end
                    "
                    >Save
                  </v-smallbutton>
                </div>
              </div>

              <div
                class="bg-speconbg rounded-radius8 p-8 shadow-myprofileshadow w-9/12"
                v-bind:class="{
                  hidden: opencontentTab !== 2,
                  block: opencontentTab === 2,
                }"
              >
                <v-title menu="Change Password"></v-title>
                <div class="grid grid-rows-3 gap-2 w-5/12">
                  <div class="w-full">
                    <v-label value="Old Password" class="mb-2" />
                    <v-newpassword v-model="oldpassword" name="oldpassword" class="form-control" />
                  </div>

                  <div class="w-full">
                    <v-label value="New Password" class="mb-2" />
                    <v-newpassword v-model="newpassword" name="newpassword" class="form-control" />
                  </div>

                  <div class="w-full">
                    <v-label value="Confirm Password" class="mb-2" />
                    <v-newpassword v-model="confirmpassword" name="confirmpassword" class="form-control" />
                  </div>
                </div>

                <div class="flex">
                  <v-smallbutton
                    class="
                      bg-clrbtn
                      flex
                      rounded-radius4
                      px-6
                      py-2
                      text-fs12 text-utilihr
                      items-center
                      font-normal
                      mr-4
                      justify-content-end
                    "
                    >Cancel
                  </v-smallbutton>

                  <v-smallbutton
                    class="
                      bg-blue
                      flex
                      rounded-radius4
                      px-6
                      py-2
                      text-fs12 text-white
                      items-center
                      font-normal
                      justify-content-end
                    "
                    >Save
                  </v-smallbutton>
                </div>
              </div>
              <!--  -->
              <div
                v-bind:class="{
                  hidden: opencontentTab !== 3,
                  block: opencontentTab === 3,
                }"
              >
                <div class="grid grid-cols-4 gap-3 border-b border-searchbox pb-3">
                  <div class="">
                    <v-label value="Role Name" class="mb-2" />
                    <v-inputall v-model="oldpassword" name="oldpassword" class="form-control" />
                  </div>

                  <div class="">
                    <v-label value="Role ID" class="mb-2" />
                    <v-inputall v-model="newpassword" name="newpassword" class="form-control" />
                  </div>
                </div>
                <!--  -->
                <div class="flex justify-between">
                  <div class="bg-white border-r border-searchbox w-300px">
                    <p class="p-2">Give access to</p>
                    <ul class="text-darkgrey">
                      <li>
                        <a
                          class="
                            text-fs14
                            font-thin font-sans
                            border-transparent
                            px-2
                            py-3
                            block
                            cursor-pointer
                            border-r-4px
                            hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                          "
                          v-on:click="toggleaccessTabs(1)"
                          v-bind:class="{
                            'bg-white text-secsemigrey': openaccessTab !== 1,
                            'bg-speconatagbg text-themegreen font-bold border-speconribo': openaccessTab === 1,
                          }"
                          ><v-checkbox /> <span class="ml-1">RDMS</span></a
                        >
                      </li>
                      <li>
                        <a
                          class="
                            text-fs14
                            font-thin font-sans
                            border-transparent
                            px-2
                            py-3
                            block
                            cursor-pointer
                            border-r-4px
                            hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                          "
                          v-on:click="toggleaccessTabs(2)"
                          v-bind:class="{
                            'bg-white text-secsemigrey': openaccessTab !== 2,
                            'bg-speconatagbg text-themegreen font-bold border-speconribo': openaccessTab === 2,
                          }"
                          ><v-checkbox /> <span class="ml-1">Admin</span></a
                        >
                      </li>
                      <li>
                        <a
                          class="
                            text-fs14
                            font-thin font-sans
                            border-transparent
                            px-2
                            py-3
                            block
                            cursor-pointer
                            border-r-4px
                            hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                          "
                          v-on:click="toggleaccessTabs(3)"
                          v-bind:class="{
                            'bg-white': openaccessTab !== 3,
                            'bg-speconatagbg text-themegreen font-bold border-speconribo': openaccessTab === 3,
                          }"
                          ><v-checkbox /> <span class="ml-1">Cadmin</span></a
                        >
                      </li>
                      <li>
                        <a
                          class="
                            text-fs14
                            font-thin font-sans
                            border-transparent
                            px-2
                            py-3
                            block
                            cursor-pointer
                            border-r-4px
                            hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                          "
                          v-on:click="toggleaccessTabs(4)"
                          v-bind:class="{
                            'bg-white': openaccessTab !== 4,
                            'bg-speconatagbg text-themegreen font-bold border-speconribo': openaccessTab === 4,
                          }"
                          ><v-checkbox /> <span class="ml-1">Mobile client app</span></a
                        >
                      </li>
                      <li>
                        <a
                          class="
                            text-fs14
                            font-thin font-sans
                            border-transparent
                            px-2
                            py-3
                            block
                            cursor-pointer
                            border-r-4px
                            hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                          "
                          v-on:click="toggleaccessTabs(5)"
                          v-bind:class="{
                            'bg-white': openaccessTab !== 5,
                            'bg-speconatagbg text-themegreen font-bold border-speconribo': openaccessTab === 5,
                          }"
                          ><v-checkbox /><span class="ml-1"> Mobile common app</span></a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="tab-content tab-space mt-2 mx-2 w-full">
                    <div
                      class=""
                      v-bind:class="{
                        hidden: openaccessTab !== 2,
                        block: openaccessTab === 2,
                      }"
                    >
                      <!--  -->
                      <div
                        class="mb-2 flex items-center text-greytxt bg-innerboxtitlebg rounded-t-lg font-bold p-3 font-fs16"
                      >
                        <h3 class="">Menu Selection</h3>
                        <div class="w-300px ml-2">
                          <v-select><option>Mobile App</option></v-select>
                        </div>
                      </div>
                      <p class="px-3 pb-3"><v-checkbox /><span class="ml-2 text-greytxt">Select All</span></p>
                      <div class="flex justify-between">
                        <div class="bg-white border-r border-searchbox w-300px">
                          <ul class="text-darkgrey">
                            <li>
                              <a
                                class="
                                  text-fs14
                                  font-thin font-sans
                                  border-transparent
                                  px-3
                                  py-3
                                  block
                                  cursor-pointer
                                  border-r-4px
                                  hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                                "
                                v-on:click="toggleaallTabs(1)"
                                v-bind:class="{
                                  'bg-white': openallTab !== 1,
                                  'bg-speconatagbg text-themegreen font-bold border-speconribo': openallTab === 1,
                                }"
                                ><v-checkbox /> <span class="ml-1">Home</span></a
                              >
                            </li>
                            <li>
                              <a
                                class="
                                  text-fs14
                                  font-thin font-sans
                                  border-transparent
                                  px-3
                                  py-3
                                  block
                                  cursor-pointer
                                  border-r-4px
                                  hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                                "
                                v-on:click="toggleaallTabs(2)"
                                v-bind:class="{
                                  'bg-white': openallTab !== 2,
                                  'bg-speconatagbg text-themegreen font-bold border-speconribo': openallTab === 2,
                                }"
                                ><v-checkbox /> <span class="ml-1">Engagement </span></a
                              >
                            </li>
                            <li>
                              <a
                                class="
                                  text-fs14
                                  font-thin font-sans
                                  border-transparent
                                  px-3
                                  py-3
                                  block
                                  cursor-pointer
                                  border-r-4px
                                  hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                                "
                                v-on:click="toggleaallTabs(3)"
                                v-bind:class="{
                                  'bg-white': openallTab !== 3,
                                  'bg-speconatagbg text-themegreen font-bold border-speconribo': openallTab === 3,
                                }"
                                ><v-checkbox /> <span class="ml-1">My Profile</span></a
                              >
                            </li>
                            <li>
                              <a
                                class="
                                  text-fs14
                                  font-thin font-sans
                                  border-transparent
                                  px-3
                                  py-3
                                  block
                                  cursor-pointer
                                  border-r-4px
                                  hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                                "
                                v-on:click="toggleaallTabs(4)"
                                v-bind:class="{
                                  'bg-white': openallTab !== 4,
                                  'bg-speconatagbg text-themegreen font-bold border-speconribo': openallTab === 4,
                                }"
                                ><v-checkbox /> <span class="ml-1">Create Engagement</span></a
                              >
                            </li>
                            <li>
                              <a
                                class="
                                  text-fs14
                                  font-thin font-sans
                                  border-transparent
                                  px-3
                                  py-3
                                  block
                                  cursor-pointer
                                  border-r-4px
                                  hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                                "
                                v-on:click="toggleaallTabs(5)"
                                v-bind:class="{
                                  'bg-white': openallTab !== 5,
                                  'bg-speconatagbg text-themegreen font-bold border-speconribo': openallTab === 5,
                                }"
                                ><v-checkbox /><span class="ml-1"> Speaker List </span></a
                              >
                            </li>
                            <li>
                              <a
                                class="
                                  text-fs14
                                  font-thin font-sans
                                  border-transparent
                                  px-3
                                  py-3
                                  block
                                  cursor-pointer
                                  border-r-4px
                                  hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo
                                "
                                v-on:click="toggleaallTabs(6)"
                                v-bind:class="{
                                  'bg-white': openallTab !== 6,
                                  'bg-speconatagbg text-themegreen font-bold border-speconribo': openallTab === 6,
                                }"
                                ><v-checkbox /><span class="ml-1"> Content </span></a
                              >
                            </li>
                          </ul>
                        </div>
                        <div class="tab-content tab-space w-full">
                          <div
                            class=""
                            v-bind:class="{
                              hidden: openallTab !== 1,
                              block: openallTab === 1,
                            }"
                          >
                            <div class="px-3">
                              <div class="border border-companyinputbox rounded-radius8 p-3 grid grid-cols-4 gap-3 mb-2">
                                <label for="toggleB" class="flex items-center cursor-pointer opacity-30 pointer-events-none">
                                  <!-- toggle -->
                                  <div>
                                    <span class="text-swtichclr text-fs14 mr-2">Individual </span>
                                  </div>
                                  <div class="relative">
                                    <!-- input -->
                                    <input id="toggleB" type="checkbox" class="sr-only" checked />
                                    <!-- line -->
                                    <div class="block bg-white w-10 h-5 rounded-full border-2 border-toggleborder"></div>
                                    <!-- dot -->
                                    <div
                                      class="
                                        dot
                                        absolute
                                        left-1px
                                        top-0
                                        bg-white
                                        w-5
                                        h-5
                                        border-2 border-toggleborder
                                        rounded-full
                                        transition
                                      "
                                    ></div>
                                  </div>
                                </label>
                                <label for="toggleA" class="flex items-center cursor-pointer">
                                  <!-- toggle -->
                                  <div>
                                    <span class="text-swtichclr text-fs14 mr-2">Individual </span>
                                  </div>
                                  <div class="relative">
                                    <!-- input -->
                                    <input id="toggleA" type="checkbox" class="sr-only" />
                                    <!-- line -->
                                    <div class="block bg-white w-10 h-5 rounded-full border-2 border-toggleborder"></div>
                                    <!-- dot -->
                                    <div
                                      class="
                                        dot
                                        absolute
                                        left-1px
                                        top-0
                                        bg-white
                                        w-5
                                        h-5
                                        border-2 border-toggleborder
                                        rounded-full
                                        transition
                                      "
                                    ></div>
                                  </div>
                                </label>
                              </div>
                              <ul class="p-2 text-greytxt grid grid-rows-1 gap-3 w-6/12">
                                <li class="flex justify-between items-center pb-3 text-fs13 border-b border-companyinputbox">
                                  <p class="flex items-center"><img src="@/assets/view.svg" class="mr-2" />Read</p>
                                  <v-checkbox />
                                </li>
                                <li class="flex justify-between items-center pb-3 text-fs13 border-b border-companyinputbox">
                                  <p class="flex items-center"><img src="@/assets/read.svg" class="mr-2" />Read</p>
                                  <v-checkbox />
                                </li>
                                <li class="flex justify-between items-center pb-3 text-fs13 border-b border-companyinputbox">
                                  <p class="flex items-center"><img src="@/assets/refresh.svg" class="mr-2" />Update</p>
                                  <v-checkbox />
                                </li>
                                <li class="flex justify-between items-center pb-3 text-fs13 border-b border-companyinputbox">
                                  <p class="flex items-center"><img src="@/assets/delete.svg" class="mr-2" />Delete</p>
                                  <v-checkbox />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--  -->
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </v-card-box>
  </div>
</template>
<script lang="ts" src='./AccountSetting.ts'></script>
