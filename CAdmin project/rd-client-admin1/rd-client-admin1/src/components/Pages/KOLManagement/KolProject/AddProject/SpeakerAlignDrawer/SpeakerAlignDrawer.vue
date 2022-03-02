<template>
  <div class="hcpaligned pt-0">
    <div v-if="hideTopSection" class="p-4">
      <div class="flex items-center">
        <v-input-search
          v-model="searchByText"
          input-type="text"
          label="Search..."
          name="meetingsearch"
          paddingy="py-2"
          @clearSearch="clearSearch()"
        ></v-input-search>
        <v-smallbutton
          @click="addnewspeakerdrawer()"
          class="plusbtn bg-join flex rounded-radius6 px-3 py-3 ml-4 text-fs14 text-white items-center tracking-normal"
        >
          <img src="@/assets/plus.svg" class="w-6" />
        </v-smallbutton>
        <div
          class="
            filterspk
            relative
            cursor-pointer
            flex
            justify-center
            rounded-radius8
            px-4
            items-center
            border border-companyinputbox
            p-2
            ml-4
          "
        >
          <img src="@/assets/filter.svg" class="w-4 mx-2" />
          <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
        </div>
      </div>
      <div class="flex mt-3 w-full items-center justify-between">
        <!-- Toggle B -->
        <div class="flex items-center justify-start">
          <label for="toggleB" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative" @click="showToggleTable = !showToggleTable">
              <!-- input -->
              <input id="toggleB" type="checkbox" class="sr-only" :checked="masterList == 1" />
              <!-- line -->
              <div class="block bg-white rounded-full border-2 border-swtichbor toggleround"></div>
              <!-- dot -->
              <div
                class="dot togglerounddot absolute bg-white border-2 border-swtichbor rounded-full transition"
              ></div>
            </div>
            <div>
              <span class="text-swtichclr text-fs11 ml-2">Select HCP’s from Master List</span>
            </div>
          </label>
        </div>

        <!-- Toggle B -->
        <div class="text-right">
          <p class="text-xs">Total Consultants: 12</p>
        </div>
      </div>
    </div>
    <div v-if="hideaddedspk">
      <div class="flex items-center border-b border-uploadarea px-5 pb-2.5 pt-1.5" v-if="showBackSection">
        <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="backProceed()"
          ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
        >
      </div>
      <!-- accordian  -->
      <!-- scroller scroll-forms -->
      <div class="kolproject-spk pb-3 px-3 scroller scroll-align spkalignkol selectedkol" v-if="showAccodianList">
        <vue-collapsible-panel-group accordion>
          <vue-collapsible-panel :expanded="true">
            <template #title>
              <label class="flex items-start cursor-pointer">
                <div class="flex items-center">
                  <img src="@/assets/profile3.svg" class="cursor-pointer w-10 h-10 rounded-full" />
                  <img src="@/assets/profile2.svg" class="cursor-pointer w-10 h-10 rounded-full -ml-2" />
                  <div
                    class="
                      w-10
                      h-10
                      rounded-full
                      bg-join
                      text-fs14
                      flex
                      items-center
                      justify-center
                      text-white
                      cursor-pointer
                      -ml-2
                      mr-3
                      font-normal
                    "
                  >
                    +13
                  </div>
                  <span class="text-textdarkblue mr-2 text-fs12 font-w-bold">21 HCP’s</span
                  ><span class="text-black text-fs12 font-w-bold"> Selected </span>
                </div>
              </label>
            </template>
            <template #content>
              <div
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'JJ',
                      full_name: 'James Jensen, MD ',
                      speciality: 'Aesthetic Dermatology, Orange, AZ',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                   <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>Domestic</b></span>
                    
                  </div>
                  <div class="ml-11 mt-2 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-green
                        text-green
                        font-normal
                        text-fs11
                        actbtn
                        ml-3
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                    >
                      Active
                      <!-- <a
                        class="
                          bg-greendark
                          w-4
                          h-4
                          text-fs9
                          flex
                          justify-center
                          items-center
                          text-white
                          rounded-full
                          inline-block
                          ml-1
                        "
                        >2</a
                      > -->
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
              <div
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'EH',
                      full_name: 'Elrich Howard, MD ',
                      speciality: 'Gastroenterologist, New York, NY',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                   <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>International </b></span>
                  </div>
                  <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-lightyellow
                        text-fs11
                        font-normal
                        text-yellow
                        ml-2
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                      >Pending Esif
                      <!-- <a
                        class="
                          bg-yellow
                          w-4
                          h-4
                          text-fs9
                          flex
                          justify-center
                          items-center
                          text-white
                          rounded-full
                          inline-block
                          ml-1
                        "
                        >2</a
                      > -->
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
              <div
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'JJ',
                      full_name: 'Jennifer James, MD  ',
                      speciality: 'Oncology, Michigan, MI',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                   <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>Domestic</b></span>
                  </div>
                  <div class="ml-11 mt-2 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-lightyellow
                        text-fs11
                        font-normal
                        text-yellow
                        ml-2
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                      >Pending Review
                      <!-- <a
                        class="
                          bg-yellow
                          w-4
                          h-4
                          text-fs9
                          flex
                          justify-center
                          items-center
                          text-white
                          rounded-full
                          inline-block
                          ml-1
                        "
                        >2</a
                      > -->
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
              <div
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'JL',
                      full_name: 'Jeffrey Labbe, MD ',
                      speciality: 'Aesthetic Dermatology, Orange, AZ',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                       <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>Domestic</b></span>
                  </div>
                  <div class="ml-11 mt-2 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-green
                        text-green
                        font-normal
                        text-fs11
                        actbtn
                        ml-3
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                    >
                      Active
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
              <div
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'JA',
                      full_name: 'Jackson Antony, MD ',
                      speciality: 'Aesthetic Dermatology, Orange, AZ',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                    <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>International</b></span>
                    
                  </div>
                  <div class="ml-11 mt-2 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-lightyellow
                        text-fs11
                        font-normal
                        text-yellow
                        ml-2
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                      >Pending Esif
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
              <div v-if="showToggleTable"
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'JJ',
                      full_name: 'Jennifer James, MD  ',
                      speciality: 'Oncology, Michigan, MI',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                   <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>Domestic</b></span>
                  </div>
                  <div class="ml-11 mt-2 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-lightyellow
                        text-fs11
                        font-normal
                        text-yellow
                        ml-2
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                      >Pending Review
                      <!-- <a
                        class="
                          bg-yellow
                          w-4
                          h-4
                          text-fs9
                          flex
                          justify-center
                          items-center
                          text-white
                          rounded-full
                          inline-block
                          ml-1
                        "
                        >2</a
                      > -->
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
              <div v-if="showToggleTable"
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'JL',
                      full_name: 'Jeffrey Labbe, MD ',
                      speciality: 'Aesthetic Dermatology, Orange, AZ',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                       <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>Domestic</b></span>
                  </div>
                  <div class="ml-11 mt-2 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-green
                        text-green
                        font-normal
                        text-fs11
                        actbtn
                        ml-3
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                    >
                      Active
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
              <div v-if="showToggleTable"
                class="flex justify-between spkpf items-center p-3 border border-accodianborder rounded-radius10 mb-2 mt-2"
              >
                <div>
                  <component
                    :is="'v-profile'"
                    :small-profile="true"
                    :user-info="{
                      letter_name: 'JA',
                      full_name: 'Jackson Antony, MD ',
                      speciality: 'Aesthetic Dermatology, Orange, AZ',
                      img: '',
                      errorImg: '',
                      id: '',
                    }"
                  ></component>
                    <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>International</b></span>
                    
                  </div>
                  <div class="ml-11 mt-2 flex items-center">
                    <span class="text-graydark text-fs12">Status</span>
                    <v-smallbutton
                      class="
                        flex
                        items-center
                        bg-lightyellow
                        text-fs11
                        font-normal
                        text-yellow
                        ml-2
                        px-1
                        py-2
                        rounded-radius8
                        cursor-default
                      "
                      >Pending Esif
                    </v-smallbutton>
                  </div>
                </div>
                <v-checkbox class="form-checkbox h-4 w-4 rounded-none" />
              </div>
            </template>
          </vue-collapsible-panel>
        </vue-collapsible-panel-group>
        <!-- accodian with table -->
      </div>
      <div class="kolproject-spk py-3 px-3 scroller scroll-ffsalign spkalignkol contractaccdion pb-0" v-if="showAccodianTable">
        <vue-collapsible-panel-group accordion class="accodiantable">
          <vue-collapsible-panel :expanded="false">
            <template #title>
              <div class="mb-2 mt-2 pl-2 spkpf">
                <component
                  :is="'v-profile'"
                  :small-profile="true"
                  :user-info="{
                    letter_name: 'JJ',
                    full_name: 'James Jensen, MD ',
                    speciality: 'Aesthetic Dermatology, Orange, AZ',
                    img: '',
                    errorImg: '',
                    id: '',
                  }"
                ></component>
                  <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>International </b></span>
                  </div>
                <div class="ml-11 mt-2 flex items-center">
                  <span class="text-graydark text-fs12">Status</span>
                 <v-smallbutton
                    class="
                      flex
                      items-center
                      bg-green
                      text-green
                      font-normal
                      text-fs11
                      actbtn
                      ml-3
                      px-1
                      py-2
                      rounded-radius8
                      cursor-default
                    "
                  >
                    Active
                  </v-smallbutton>
                </div>
              </div>
            </template>
            <template #content>
              <div class="p-3 bg-white shadow-accodiantableshadow border border-accodiantable rounded-radius10 mb-2">
                <div class="table-responsive hcpbord">
                  <div class="rounded-xl tablebor">
                    <table class="w-full text-left contracttable firstcontract">
                      <thead class="bg-drakgblue">
                        <tr>
                          <th class="text-xsm px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></th>
                          <th class="text-xsm px-3 py-2"><div class="w-32">Contract Name</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-36">Status</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Start Date</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">End Date</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Contract Hours</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Remaining Hours</div></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2021-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-green
                                  text-green
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Active
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2022-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-lightyellow
                                  text-yellow
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Pending Esif
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2022-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-lightyellow
                                  text-yellow
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Pending Review
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2021-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-green
                                  text-green
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Active
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="py-4 border-t text-fs18 block border-opacity-25 border-filtertitle flex justify-end pb-1">
                  <v-smallbutton
                    class="
                      bg-clrbtn
                      flex
                      rounded-radius6
                      text-clrtxt
                      px-4
                      py-1
                      mr-2
                      text-fs13
                      items-center
                      mr-4
                      tracking-normal
                      font-bold
                    "
                    >Cancel</v-smallbutton
                  >
                  <v-smallbutton
                    class="
                      bg-join
                      flex
                      rounded-radius6
                      text-white
                      px-4
                      py-1
                      mr-2
                      text-fs13
                      items-center
                      mr-4
                      tracking-normal
                      font-bold
                    "
                    >Add Contract</v-smallbutton
                  >
                  <v-smallbutton
                    class="
                      bg-blue
                      flex
                      rounded-radius6
                      px-4
                      py-1
                      text-fs13 text-white
                      items-center
                      font-bold
                      tracking-normal
                    "
                    >Done</v-smallbutton
                  >
                </div>
              </div>
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>
              <div class="mb-2 mt-2 spkpf pl-2">
                <component
                  :is="'v-profile'"
                  :small-profile="true"
                  :user-info="{
                    letter_name: 'EH',
                    full_name: 'Elrich Howard, MD ',
                    speciality: 'Gastroenterologist, New York, NY',
                    img: '',
                    errorImg: '',
                    id: '',
                  }"
                ></component>
                  <div class="ml-11 mt-1 flex items-center">
                    <span class="text-graydark text-fs12">Designation: <b>Domestic </b></span>
                  </div>
                <div class="ml-11 mt-2 flex items-center">
                  <span class="text-graydark text-fs12">Status</span>
                  <v-smallbutton
                    class="
                      flex
                      items-center
                      bg-lightyellow
                      text-fs11
                      font-normal
                      text-yellow
                      ml-2
                      px-1
                      py-2
                      rounded-radius8
                      cursor-default
                    "
                    >Pending Esif
                  </v-smallbutton>
                </div>
              </div>
            </template>
            <template #content>
              <div class="p-3 bg-white shadow-accodiantableshadow border border-accodiantable rounded-radius10 mb-2">
                <div class="table-responsive hcpbord">
                  <div class="rounded-xl tablebor">
                    <table class="w-full text-left contracttable scndcontract">
                      <thead class="bg-drakgblue">
                        <tr>
                          <th class="text-xsm px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></th>
                          <th class="text-xsm px-3 py-2"><div class="w-32">Contract Name</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-36">Status</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Start Date</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">End Date</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Contract Hours</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Remaining Hours</div></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2021-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-green
                                  text-green
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Active
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2022-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-lightyellow
                                  text-yellow
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Pending Esif
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2022-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-lightyellow
                                  text-yellow
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Pending Review
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2021-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-green
                                  text-green
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Active
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="py-4 border-t text-fs18 block border-opacity-25 border-filtertitle flex justify-end pb-1">
                  <v-smallbutton
                    class="
                      bg-clrbtn
                      flex
                      rounded-radius6
                      text-clrtxt
                      px-4
                      py-1
                      mr-2
                      text-fs13
                      items-center
                      mr-4
                      tracking-normal
                      font-bold
                    "
                    >Cancel</v-smallbutton
                  >
 <v-smallbutton
                    class="
                      bg-join
                      flex
                      rounded-radius6
                      text-white
                      px-4
                      py-1
                      mr-2
                      text-fs13
                      items-center
                      mr-4
                      tracking-normal
                      font-bold
                    "
                    >Add Contract</v-smallbutton
                  >
                  <v-smallbutton
                    class="
                      bg-blue
                      flex
                      rounded-radius6
                      px-4
                      py-1
                      text-fs13 text-white
                      items-center
                      font-bold
                      tracking-normal
                    "
                    >Done</v-smallbutton
                  >
                </div>
              </div>
            </template>
          </vue-collapsible-panel>
          <vue-collapsible-panel :expanded="false">
            <template #title>
              <div class="mb-2 mt-2 pl-2 spkpf">
                <component
                  :is="'v-profile'"
                  :small-profile="true"
                  :user-info="{
                    letter_name: 'JJ',
                    full_name: 'Jennifer James, MD ',
                    speciality: 'Oncology, Michigan, MI',
                    img: '',
                    errorImg: '',
                    id: '',
                  }"
                ></component>
                <div class="ml-11 mt-2 flex items-center">
                  <span class="text-graydark text-fs12">Status</span>
                 
                  <v-smallbutton
                    class="
                      flex
                      items-center
                      bg-lightyellow
                      text-fs11
                      font-normal
                      text-yellow
                      ml-2
                      px-1
                      py-2
                      rounded-radius8
                      cursor-default
                    "
                    >Pending Review
                  </v-smallbutton>
                </div>
              </div>
            </template>
            <template #content>
              <div class="p-3 bg-white shadow-accodiantableshadow border border-accodiantable rounded-radius10">
                <div class="table-responsive hcpbord">
                  <div class="rounded-xl tablebor">
                    <table class="w-full text-left contracttable thirdcontract" >
                      <thead class="bg-drakgblue">
                        <tr>
                          <th class="text-xsm px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></th>
                          <th class="text-xsm px-3 py-2"><div class="w-32">Contract Name</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-36">Status</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Start Date</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">End Date</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Contract Hours</div></th>
                          <th class="text-xsm px-3 py-2"><div class="w-30">Remaining Hours</div></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2021-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-green
                                  text-green
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Active
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2022-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-lightyellow
                                  text-yellow
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Pending Esif
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2022-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-lightyellow
                                  text-yellow
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Pending Review
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                        <tr>
                          <td class="px-3 py-2"><v-checkbox class="form-checkbox h-4 rounded-none" /></td>
                          <td class="px-3 py-2"><div class="w-32">2021-Contract</div></td>
                          <td class="px-3 py-2">
                            <div class="w-36">
                              <v-smallbutton
                                class="
                                  flex
                                  items-center
                                  bg-green
                                  text-green
                                  font-normal
                                  text-fs11
                                  actbtn
                                  ml-1
                                  px-3
                                  py-2
                                  rounded-radius8
                                  cursor-default
                                "
                              >
                                Active
                              </v-smallbutton>
                            </div>
                          </td>
                          <td class="px-3 py-2"><div class="w-30">02/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">12/01/2022</div></td>
                          <td class="px-3 py-2"><div class="w-30">180</div></td>
                          <td class="px-3 py-2 w-8">80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="py-4 border-t text-fs18 block border-opacity-25 border-filtertitle flex justify-end pb-1">
                  <v-smallbutton
                    class="
                      bg-clrbtn
                      flex
                      rounded-radius6
                      text-clrtxt
                      px-4
                      py-1
                      mr-2
                      text-fs13
                      items-center
                      mr-4
                      tracking-normal
                      font-bold
                    "
                    >Cancel</v-smallbutton
                  >
<v-smallbutton
                    class="
                      bg-join
                      flex
                      rounded-radius6
                      text-white
                      px-4
                      py-1
                      mr-2
                      text-fs13
                      items-center
                      mr-4
                      tracking-normal
                      font-bold
                    "
                    >Add Contract</v-smallbutton
                  >
                  <v-smallbutton
                    class="
                      bg-blue
                      flex
                      rounded-radius6
                      px-4
                      py-1
                      text-fs13 text-white
                      items-center
                      font-bold
                      tracking-normal
                    "
                    >Done</v-smallbutton
                  >
                </div>
              </div>
            </template>
          </vue-collapsible-panel>
        </vue-collapsible-panel-group>
      </div>
      <!-- accordian -->
      <div
        v-if="hideButtons"
        class="
          p-2
          px-2
          ml-0
          mr-2
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
          bg-white
        "
      >
        <v-smallbutton
          class="
            bg-clrbtn
            flex
            rounded-radius4
            px-4
            py-2
            text-fs13 text-utilihr
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
            px-4
            py-2
            text-fs13 text-white
            items-center
            tracking-normal
            justify-content-end
          "
          @click="showProceed()"
          >Proceed
        </v-smallbutton>
      </div>
    </div>
    <!-- add new spk -->
    <div v-if="openaddnewspks" class="">
      <!-- Collab meeeting Section -->
      <div class="flex items-center border-b border-uploadarea px-5 pb-2.5 pt-1.5">
        <a class="flex items-center cursor-pointer text-fs13 text-bluetxt" @click="backaddspkProceed()"
          ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
        >
      </div>
      <div class="p-4 mb-10 text-xs scroll-addAligned scroller">
        <div class="mb-3">
          <v-label value="First Name" class="mb-3" />
          <v-inputall v-model="name" inputType="text" readonly="" name="name" />
        </div>
        <div class="mb-3">
          <v-label value="Last Name" class="mb-3" />
          <v-inputall v-model="name" inputType="text" name="name" />
        </div>
        <div class="mb-3">
          <v-label value="Degree" class="mb-2" />
          <v-select name="Degree">
            <option disabled selected>Choose Degree</option>
            <option>PA</option>
            <option>DO</option>
            <option>APRN</option>
            <option>MD</option>
            <option>AHP</option>
            <option>PA-C</option>
            <option>NP</option>
          </v-select>
        </div>
        <div class="mb-3">
          <v-label value="Specialty" class="mb-2" />
          <v-select name="Specialty">
            <option disabled selected>Aesthetic Dermatology</option>
            <option>HOSPITALIST</option>
            <option>Pain Management & Anesthesiology</option>
            <option>Anesthesia, Pain Management</option>
            <option>Pain Medicine</option>
            <option>NEUROLOGY</option>
            <option>Internal Medicine</option>
            <option>COLON AND RECTAL SURGERY</option>
          </v-select>
        </div>
        <div class="mb-3">
          <v-label value="Institution" class="mb-3" />
          <v-inputall v-model="name" inputType="text" readonly="" name="name" />
        </div>
        <div class="mb-3">
          <v-label value="NPI Number" class="mb-3" />
          <v-inputall v-model="name" inputType="number" readonly="" name="name" />
        </div>
        <div class="mb-3">
          <v-label value="State License Number" class="mb-3" />
          <v-inputall v-model="name" inputType="number" readonly="" name="name" />
        </div>
        <div class="mb-3">
          <v-label value="Email" class="mb-3" />
          <v-inputall v-model="name" inputType="email" readonly="" name="name" />
        </div>
        <div class="mb-3">
          <v-label value="Telephone" class="mb-3" />
          <v-inputall v-model="name" inputType="number" readonly="" name="name" />
        </div>
        <div
          class="
            absolute
            bottom-0
            left-0
            right-0
            flex
            justify-end
            block
            p-2
            px-2
            ml-0
            mr-2
            bg-white
            border-t border-opacity-25
            text-fs18
            border-filtertitle
          "
        >
          <v-small-button
            class="
              bg-clrbtn
              flex
              rounded-radius4
              px-4
              py-1
              text-fs13 text-utilihr
              items-center
              font-normal
              mr-4
              justify-content-end
            "
            >Cancel</v-small-button
          ><v-small-button
            class="
              bg-blue
              flex
              rounded-radius6
              px-4
              py-2
              text-fs13 text-white
              items-center
              tracking-normal
              justify-content-end
            "
          >
            Add
          </v-small-button>
        </div>
        <!-- add new spk -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./SpeakerAlignDrawer.ts"></script>