<template>
  <aside
    class="right-drawer ease-in-out transform transition-all duration-700 z-40"
    :style="{
      right: openForm ? '0' : '-35%',
    }"
  >
    <div
      class="
        flex
        justify-between
        items-center
        text-base``
        font-bold
        px-3
        py-2
        bg-blue
        text-white
      "
    >
      <p class="text-base text-parenttheme-white font-bold">{{ info.title }}</p>
      <!-- @click="openForm = false" -->
      <div class="cursor-pointer" @click="closeForm()">
        <img src="@/assets/close-white.svg" />
      </div>
    </div>

    <div
      v-if="isAddForm && isFormEnable"
      class="px-4 pt-2 text-textblue text-fs16 flex items-center cursor-pointer"
      @click="backtoList"
    >
      <img src="@/assets/office/leftarrowblue.svg" class="mr-2" />Back
    </div>
    <!-- Collab meeeting Section -->
    <div v-if="openForm" class="relative pb-54 pr-1 addform">
      <div v-if="isAddForm && !showInnerForm" class="scroller scroll-pop p-4 pr-2">
        <div v-for="row in data" :key="row.id">
          <!-- INPUT WITH SEARCH -->
          <div v-if="row.type == 'datepicker' && !row.hidden" class="mb-5 w-full">
            <v-label :value="row.label" :required="required(row.required)" />
            <div class="w-full my-2" :class="[row.disable == true ? ' pointer-events-none opacity-30' : '']">
              <!-- <v-date-picker class="w-full" :id="row.label" :is-single-date="true" @apply-date-filter="applyDateFilter($event)"></v-date-picker> -->
              <litepie-datepicker
                ref="myRef"
                v-model="row.value"
                as-single
                :disable-date="row.param == 'start_date' ? dDate : setEndDate"
                :trigger="row.disable == false ? row.label : ''"
                :formatter="formatter"
                :auto-apply="true"
                :disabled="true"
              >
              </litepie-datepicker>
            </div>
            <div
              v-if="row.value == '' && submitted && row.required"
              class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
            >
              {{ row.errorMsg ? row.errorMsg : 'Something went wrong' }}
            </div>
          </div>

          <!-- INPUT -->
          <div v-if="row.type == 'text' && !row.hidden" class="mb-5 w-full">
            <v-label :value="row.label" :required="required(row.required)" />
            <div class="w-full my-2 relative">
              <v-inputall
                :id="row.param"
                v-model="row.value"
                :is-disabled="row.disable"
                @input="checkValidation(row)"
                @blur="blurEvent($event, row)"
                @keypress="
                  isNumber($event, row);
                  checkValidation(row);
                "
              />
              <img
                v-if="(row.param == 'zipcode' || row.param == 'zip') && zipLoader"
                src="@/assets/button-bar-blackloader.svg"
                class="ml-2 w-6 absolute right-3 top-2"
              />
              <img
                v-if="row.param == fuzzyType && fuzzyLoader"
                src="@/assets/button-bar-blackloader.svg"
                class="ml-2 w-6 absolute right-3 top-2"
              />
            </div>
            <div
              v-if="!row.value && submitted && row.required"
              class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
            >
              {{ row.errorMsg }}
            </div>
            <div v-if="row.param == 'email' && isValidEmail" class="invalid-feedback text-red-600 mt-3 text-left text-xsm">
              Email must be a valid email address
            </div>
            <div
              v-if="(row.label == 'Telephone' || row.label == 'Phone') && validPhone"
              class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
            >
              Phone Number is invalid
            </div>
            <div v-if="row.label == 'NPI Number' && validNpi" class="invalid-feedback text-red-600 mt-3 text-left text-xsm">
              NPI is invalid
            </div>
            <div v-if="row.label == 'Zipcode' && validZip" class="invalid-feedback text-red-600 mt-3 text-left text-xsm">
              Zip is invalid
            </div>
          </div>

          <!-- TEXTAREA -->
          <div v-if="row.type == 'textarea' && !row.hidden" class="mb-5 w-full">
            <v-label :value="row.label" :required="required(row.required)" />
            <div class="w-full my-2">
              <v-textarea v-model="row.value" type="text" :is-disabled="row.disable" />
              <div
                v-if="row.value == '' && submitted && row.required"
                class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
              >
                {{ row.errorMsg }}
              </div>
            </div>
          </div>

          <!-- SELECT -->
          <div v-if="row.type == 'dropdown' && !row.hidden" class="mb-5 w-full">
            <v-label :value="row.label" :required="required(row.required)" />
            <div class="w-full my-2">
              <v-select
                v-model="row.value"
                :is-disabled="row.disable"
                :select-value="row.value"
                @change="onChangeValue(row)"
              >
                <option selected disabled="disabled" value=""> Choose {{ row.label }} </option>
                <option
                  v-for="value in row.dropdownvalue"
                  :key="value.label"
                  :value="row.ischooseValue && row.ischooseValue == 'label' ? value.label : value.id"
                >
                  {{ value.label }}
                </option>
              </v-select>
              <div
                v-if="row.value == '' && submitted && row.required"
                class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
              >
                {{ row.errorMsg }}
              </div>
            </div>
          </div>

          <!-- CHECKBOX -->
          <div v-if="row.type == 'checkbox' && !row.hidden" class="mb-5 w-full">
            <label class="inline-flex items-center" :value="row.label">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-none" @change="onChangeValue(row)" />
              <span class="ml-3 text-fs14 text-menuselectionlabel">Check Box</span>
            </label>
            <div class="invalid-feedback text-red-600 mt-3 text-left text-xsm">
              {{ row.errorMsg }}
            </div>
          </div>
          <div v-if="row.type == 'fileupload' && row.file && row.file != ''" class="mb-5 w-full flex items-center">
            <v-label value="Document" />
            <img class="cursor-pointer" src="@/assets/documenticon.svg" @click="openClick(row.file)" />
          </div>
          <div v-if="row.type == 'fileupload' && !row.hidden" class="mb-5 w-full">
            <v-label :value="row.label" :required="required(row.required)" />
            <div
              class="
                w-full
                my-2
                relative
                border border-dashed border-uploadarea
                h-36
              "
            >
              <div class="absolute bottom-8 left-0 w-full">
                <v-file-upload
                  v-model="row.value"
                  :is-disabled="row.disable"
                  @selected-file="uploadFile($event, row)"
                ></v-file-upload>

                <p class="text-fs14 text-greytxt text-center">
                  <span v-if="row.value == ''" class="text-textblue">Select a file </span
                  ><span v-if="row.value != ''" class="text-textblue">{{ fileName }} </span>
                </p>
              </div>
            </div>
            <div
              v-if="row.value == '' && submitted && row.required"
              class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
            >
              {{ row.errorMsg }}
            </div>
          </div>

          <!-- file upload -->
        </div>
        <!-- new spk -->

        <!-- new spk -->
      </div>

      <div v-if="!isAddForm" class="pr-2">
        <div v-if="!listPageLoader">
          <div class="pl-3 py-4 pt-4 border-b border-uploadarea">
            <!-- Search starts -->
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
                v-if="isAddButton"
                class="
                  bg-join
                  flex
                  rounded-radius6
                  px-3
                  py-3
                  ml-4
                  text-fs14 text-white
                  items-center
                  tracking-normal
                "
                @click="gotoForm"
              >
                <img src="@/assets/plus.svg" />
              </v-smallbutton>
            </div>
            <!-- toggle swtich -->
            <!-- Toggle A -->

            <!-- Toggle B -->
            <div v-if="info.from == 'emp' || info.from == 'hcp'" class="flex items-center justify-start w-full mt-3">
              <label for="toggleB" class="flex items-center cursor-pointer">
                <!-- toggle -->
                <div class="relative">
                  <!-- input -->
                  <input
                    id="toggleB"
                    type="checkbox"
                    class="sr-only"
                    :checked="masterList == 1"
                    @change="changeToggle($event.target.checked)"
                  />
                  <!-- line -->
                  <div
                    class="
                      block
                      bg-white
                      w-10
                      h-5
                      rounded-full
                      border-2 border-toggleborder
                    "
                  ></div>
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
                <div>
                  <span class="text-swtichclr text-fs11 ml-2">Select {{ masterListParam }} from the Master list</span>
                </div>
              </label>
            </div>

            <!-- switch -->
          </div>

          <!-- Seatch ends -->
          <p
            v-if="closesuccess == false && catererFormMsg != ''"
            class="
              text-fs13 text-green
              p-4
              text-center
              bg-white
              flex
              justify-center
            "
          >
            {{ catererFormMsg }}
            <img src="@/assets/closegreen.svg" class="ml-4 cursor-pointer" @click="closesuccess = true" />
          </p>
          <div v-if="list.length != 0" class="scroller scroll-forms relative" @scroll="handleScroll">
            <div
              v-for="data in list"
              :key="data.id"
              class="
                p-4
                flex
                justify-between
                items-center
                border-b border-uploadarea
              "
            >
              <component
                :is="'v-profile'"
                v-if="info.from == 'caterer'"
                :key="imgError"
                width="w-12"
                height="h-12"
                :small-profile="true"
                :is-showprofile="false"
                :user-info="{
                  letter_name: 'JA',
                  full_name: data.caterer_name,
                  phone: data.phone,
                  email: data.email,
                  address: data.address,
                  address2: data.address2,
                  city: data.city,
                  state: data.state,
                }"
                @errorImg="errorImg(data)"
              ></component>

              <component
                :is="'v-profile'"
                v-if="info.from != 'caterer'"
                :key="imgError"
                width="w-12"
                height="h-12"
                :small-profile="true"
                :is-showprofile="true"
                :user-info="{
                  id: data.id,
                  letter_name: data.short_name,
                  full_name: data.full_name,
                  degree: data.degree,
                  city: data.city,
                  state: data.state,
                  photo: data.photo,
                  speciality: data.speciality,
                  from: info.from,
                  isprescriper: data.prescriber,
                  hcpdata: {
                    email: data.email,
                    isRemote: isRemote,
                  },
                }"
                @errorImg="errorImg(data)"
              ></component>
              <img
                v-if="data.engagement_access && data.engagement_access == 'No' && !data.showInfo"
                class="cursor-pointer"
                src="@/assets/info.svg"
                @click="showInfo(data)"
              />
              <div
                v-if="data.showInfo && data.showInfo == true"
                class="
                  flex
                  justify-start
                  items-center
                  bg-innerboxtitlebg
                  w-56
                  px-4
                  py-4
                  rounded-radius15
                  relative
                "
              >
                <img
                  src="@/assets/closeblack.svg"
                  class="absolute top-2 right-2 cursor-pointer"
                  @click="closeInfoPopup(data)"
                />
                <img src="@/assets/info.svg" />
                <p class="text-fs10 text-greytxt ml-2 w-3/4">
                  {{ data.pop_msg ? data.pop_msg : '' }}
                </p>
              </div>
              <!--   -->
              <label
                v-if="!data.engagement_access || data.engagement_access != 'No'"
                class="inline-flex items-center mr-1.5"
              >
                <v-checkbox
                  :id="data.id"
                  :is-checked="checkedData && checkedData.length > 0 && checkedData.indexOf(data.id) > -1"
                  class="form-checkbox h-4 w-4 rounded-none"
                  @change="getCheckedData(data, $event.target.checked, $event)"
                />
              </label>
            </div>
            <img v-if="bottomLoader" src="@/assets/button-bar-loaderblue.svg" class="m-auto w-6" />
          </div>
          <!-- List with checkbox ends-->
        </div>
        <div v-if="list.length == 0 && !listPageLoader" class="scroller scroll-forms">
          <div class="w-full h-full flex items-center justify-center">
            <v-no-data></v-no-data>
          </div>
        </div>
        <!-- Loader Component -->
        <div v-if="listPageLoader" class="scroll-loader">
          <v-eng-loader></v-eng-loader>
        </div>
      </div>
      <div
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
        "
      >
        <v-smallbutton
          class="
            bg-blue
            flex
            rounded-radius6
            px-6
            py-2
            text-fs14 text-white
            items-center
            tracking-normal
            justify-content-end
          "
          @click="submitForm"
          >Submit
          <img v-if="loader" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
        </v-smallbutton>
      </div>
    </div>
  </aside>
  <div
    :class="[
      'drawer-mask ease-in-out transform transition-all right-0 left-0',
      openForm ? 'z-40 opacity-100 flex' : ' opacity-0 hidden z-0',
    ]"
    :style="{
      transition: openForm ? '.7s' : '0 delay-700',
    }"
  ></div>
  <!--     @click="
      closeForm();
      openForm = false;
    " -->

  <div
    v-if="showError"
    class="
      drawer-mask
      fixed
      top-0
      bottom-0
      left-0
      right-0
      w-full
      h-full
      justify-center
      items-center
      flex
      z-300
    "
  >
    <v-confirmation-modal :header="true">
      <template #header>
        <h4 class="text-fs20 text-white font-bold">Message</h4>
        <span v-if="!isFromcost" @click="showError = false">
          <img src="@/assets/login/loginclose.svg" class="cursor-pointer" />
        </span>
        <span v-if="isFromcost" @click="closeForm()">
          <img src="@/assets/login/loginclose.svg" class="cursor-pointer" />
        </span>
      </template>
      <template #description>
        <p class="text-center text-black font-semibold text-fs20 pl-2">
          {{ errorMsg }}
        </p>
        <!-- {{errorMsg}} -->
      </template>
      <template #footer>
        <div class="flex justify-center">
          <v-smallbutton
            v-if="!isFromcost"
            type="submit"
            class="
              font-w-normal
              text-fs14
              mr-3
              py-2
              px-12
              float-right
              text-white
              bg-blue
              rounded-radius6
            "
            @click="
              bindFuzzyData('clearform');
              showError = false;
            "
            >Ok
          </v-smallbutton>
          <v-smallbutton
            v-if="isFromcost"
            type="submit"
            class="
              font-w-normal
              text-fs14
              mr-3
              py-2
              px-12
              float-right
              text-white
              bg-blue
              rounded-radius6
            "
            @click="closeForm()"
            >Ok
          </v-smallbutton>
          <!-- <v-smallbutton
              type="submit"
              @click="showdelete = false"
              class="font-w-normal text-fs14  py-2 px-12 float-right text-greytxt  bg-clrbtn  rounded-radius6"
              >No
            </v-smallbutton> -->
        </div>
      </template>
    </v-confirmation-modal>
  </div>

  <!-- Clone Emp User Msg -->
  <div
    v-if="isCloneEmp"
    class="
      drawer-mask
      fixed
      top-0
      bottom-0
      left-0
      right-0
      w-full
      h-full
      justify-center
      items-center
      flex
      z-300
    "
  >
    <v-confirmation-modal :header="true">
      <template #header>
        <h4 class="text-fs20 text-white font-bold">Clone Employee</h4>
        <img src="@/assets/close-white.svg" class="cursor-pointer" @click="closeEmp" />
      </template>
      <template #description>
        <p class="text-center text-black font-semibold text-fs20 pl-2">
          Are you sure want to clone '{{ isCloneFullName }}' as employee?
        </p>
        <!-- {{errorMsg}} -->
      </template>
      <template #footer>
        <div class="flex justify-end">
          <v-smallbutton
            type="submit"
            class="
              flex
              font-w-normal
              text-fs12
              mr-3
              py-2
              px-10
              float-right
              text-greytxt
              bg-clrbtn
              rounded-radius6
            "
            @click="closeEmp"
            >No
          </v-smallbutton>
          <v-smallbutton
            type="submit"
            class="
              flex
              font-w-normal
              text-fs12
              py-2
              px-10
              float-right
              text-white
              bg-blue
              rounded-radius6
            "
            @click="closeEmp('yes')"
            >Yes
            <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
          </v-smallbutton>
        </div>
      </template>
    </v-confirmation-modal>
  </div>

  <!-- Fuzzy Match -->
  <div
    v-if="fuzzyRequired"
    class="
      drawer-mask
      fixed
      top-0
      bottom-0
      left-0
      right-0
      w-full
      h-full
      justify-center
      items-center
      flex
      z-300
    "
  >
    <v-confirmation-modal :header="true">
      <template #header>
        <h4 class="text-fs20 text-white font-bold center">Alert</h4>
      </template>
      <template #description>
        <p class="text-center text-black font-semibold text-fs20 pl-2" v-html="fuzzyMsg"></p>
      </template>
      <template #footer>
        <div class="flex justify-end">
          <v-smallbutton
            type="submit"
            class="
              flex
              font-w-normal
              text-fs12
              mr-3
              py-2
              px-10
              float-right
              text-greytxt
              bg-clrbtn
              rounded-radius6
            "
            @click="bindFuzzyData(false)"
            >Go Back
          </v-smallbutton>
          <v-smallbutton
            type="submit"
            class="
              flex
              font-w-normal
              text-fs12
              py-2
              px-10
              float-right
              text-white
              bg-blue
              rounded-radius6
            "
            @click="bindFuzzyData(true)"
            >Continue
            <img v-if="submitted" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
          </v-smallbutton>
        </div>
      </template>
    </v-confirmation-modal>
  </div>
  <!--  @close-email-form="closeEmailForm($event)" -->
  <inner-form
    v-if="showInnerForm"
    :info="info"
    :form-data="innerFormData"
    :is-open="showInnerForm"
    :update-hcp-email-id="updateHcpEmailId"
    @close-email-form="closeEmailForm($event)"
    @close-inner-form="closeEmailForm($event)"
  ></inner-form>
</template>
<script lang="ts" src="./AddForm.ts"></script>
