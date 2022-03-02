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
      <p class="text-base text-parenttheme-white font-bold">{{ tittle }}</p>
      <!-- @click="openForm = false" -->
      <div class="cursor-pointer" @click="closeForm">
        <img src="@/assets/close-white.svg" />
      </div>
    </div>
    <div class="relative pb-54 pr-1 addform">
      <div
        v-if="!showMoreSpk"
        class="
          px-4
          pt-2
          text-textblue text-fs16
          flex
          items-center
          cursor-pointer
        "
        @click="closeForm"
      >
        <img src="@/assets/office/leftarrowblue.svg" class="mr-2" />Back
      </div>
      <div v-if="!showMoreSpk" class="scroller scroll-pop">
        <div class="p-4 pr-1">
          <div v-for="row in data" :key="row.id">
            <!-- INPUT WITH SEARCH -->
            <div class="mb-5 w-full" v-if="row.type == 'datepicker' && !row.hidden">
              <v-label :value="row.label" :required="required(row.required)" />
              <div class="w-full my-2" :class="[row.disable == true ? ' pointer-events-none opacity-30' : '']">
                <!-- <v-date-picker class="w-full" :id="row.label" :is-single-date="true" @apply-date-filter="applyDateFilter($event)"></v-date-picker> -->
                <litepie-datepicker
                  as-single
                  v-model="row.value"
                  :disable-date="row.param == 'start_date' ? dDate : setEndDate"
                  :trigger="row.disable == false ? row.label : ''"
                  ref="myRef"
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
            <div class="mb-5 w-full" v-if="row.type == 'text' && !row.hidden">
              <v-label :value="row.label" :required="required(row.required)" />
              <div class="w-full my-2 relative">
                <v-inputall
                  :id="row.param"
                  @input="checkValidation(row)"
                  @keypress="
                    isNumber($event, row);
                    checkValidation(row);
                  "
                  :isDisabled="row.disable"
                  v-model="row.value"
                />
                <img
                  v-if="(row.param == 'zipcode' || row.param == 'zip') && zipLoader"
                  src="@/assets/button-bar-blackloader.svg"
                  class="ml-2 w-6 absolute right-3 top-2"
                />
                <img
                  v-if="row.param == 'fuzzyType' && fuzzyLoader"
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
            </div>

            <!-- TEXTAREA -->
            <div class="mb-5 w-full" v-if="row.type == 'textarea' && !row.hidden">
              <v-label :value="row.label" :required="required(row.required)" />
              <div class="w-full my-2">
                <v-textarea type="text" v-model="row.value" :isDisabled="row.disable" />
                <div
                  v-if="row.value == '' && submitted && row.required"
                  class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
                >
                  {{ row.errorMsg }}
                </div>
              </div>
            </div>

            <!-- SELECT -->
            <div class="mb-5 w-full" v-if="row.type == 'dropdown' && !row.hidden">
              <v-label :value="row.label" :required="required(row.required)" />
              <div class="w-full my-2">
                <v-select
                  :isDisabled="row.disable"
                  v-model="row.value"
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

            <div class="mb-5 w-full flex items-center" v-if="row.type == 'fileupload' && row.file && row.file != ''">
              <v-label value="Document" />
              <img @click="openClick(row.file)" class="cursor-pointer" src="@/assets/documenticon.svg" />
            </div>
            <div class="mb-5 w-full" v-if="row.type == 'fileupload' && !row.hidden">
              <v-label :value="row.label" :required="required(row.required)" />
              <div
                class="
                  w-full
                  my-2
                  relative
                  border border-dashed border-uploadarea
                  h-36
                "
              ></div>
              <div
                v-if="row.value == '' && submitted && row.required"
                class="invalid-feedback text-red-600 mt-3 text-left text-xsm"
              >
                {{ row.errorMsg }}
              </div>
            </div>

            <!-- file upload -->
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
              @click="submitFormData"
              >Submit
              <img v-if="loader" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
            </v-smallbutton>
          </div>
        </div>
      </div>
      <div v-if="showMoreSpk" class="scroller scroll-pop">
        <div class="p-4 flex items-center border-b border-uploadarea" v-for="(data, index) in moreSpeaker" :key="index">
          <div class="flex items-center">
            <component
              v-if="index != 0"
              :is="'v-profile'"
              :small-profile="true"
              :side-menu="true"
              :key="imgError"
              @errorImg="errorImg(data)"
              :user-info="{
                letter_name: data.short_name,
                full_name: data.full_name,
                errorImg: data.errorImg ? data.errorImg : false,
                img: data.photo,
                id: '',
              }"
            ></component>
            <div class="flex" v-if="index != 0">
              <p class="whitespace-no-wrap">
                {{ data.full_name }}
              </p>
              <span class="group relative">
                <img :src="spkStatusIcon(data.status)" class="ml-2 cursor-pointer" />
                <b
                  class="
                      absolute
                      top-0
                      left-full
                      bg-secgrey
                      text-white
                      p-1
                      px-3
                      rounded-radius4
                      -mt-1
                      ml-2
                      hidden
                      group-hover:block
                    "
                  ><i class=""></i> {{ data.status }}</b
                >
              </span>
            </div>
          </div>
        </div>
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
</template>
<script lang="ts">
import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'AddInnerForm',
  inheritAttrs: false,
  emit: ['close-form'],
  props: {
    isOpen: {
      type: Boolean,
      defalut: false,
    },
    formData: {
      type: Array,
      default: [],
    },
    info: {
      type: Object,
      default: {},
    },
    updateHcpEmailId: {
      default: '',
    },
    showMoreSpk: {
      default: false,
    },
    moreSpeaker: {
      default: [],
    },
  },
  setup(props) {
    const openForm = ref(props.isOpen) as any;
    const data = ref(props.formData) as any;
    const isValidEmail = ref(false) as any;
    const validPhone = ref(false) as any;
    const submitted = ref(false) as any;
    const loader = ref(false) as any;
    const validationRes = ref({}) as any;
    const info = ref(props.info) as any;
    const updateHcpEmailId = ref(props.updateHcpEmailId) as any;
    const showMoreSpk = ref(props.showMoreSpk);
    const moreSpeaker = ref(props.moreSpeaker) as any;
    const imgError = ref(1) as any;
    const tittle = ref('Add Attendee') as any;

    // On Before mount Function
    onBeforeMount(async () => {
      console.log('showMoreSpk', showMoreSpk.value);
      if (showMoreSpk.value === true) {
        tittle.value = 'Speaker';
      } else {
        tittle.value = 'Add Attendee';
      }
    });

    return {
      openForm,
      data,
      isValidEmail,
      validPhone,
      submitted,
      loader,
      validationRes,
      info,
      updateHcpEmailId,
      showMoreSpk,
      moreSpeaker,
      imgError,
      tittle,
    };
  },

  methods: {
    closeForm() {
      this.openForm = false;
      this.$emit('close-inner-form');
    },

    required(required: boolean) {
      if (required) {
        return '*';
      } else {
        return '';
      }
    },

    // Add Validation for zip and email
    checkValidation(currentRow: any) {
      if (currentRow.label === 'State License Number') {
        document.getElementsByName(currentRow.param)[0].setAttribute('maxLength', '15');
      }
      if (currentRow.label === 'Phone' || currentRow.label === 'Telephone') {
        document.getElementsByName(currentRow.param)[0].setAttribute('maxLength', '12');
        var phone = document.getElementById(currentRow.param) as any;
        var scope = this;
        phone.addEventListener('input', function(e: any) {
          var x = e.target.value.replace(/\D/g, '');
          x = x.match(/(\d{3})(\d{3})(\d{4})/);
          if (x && e.target.value.length <= 12) {
            e.target.value = x[1] + '-' + +x[2] + '-' + x[3];
          }
          if (e.target.value.length === 12) {
            scope.validPhone = false;
          } else {
            scope.validPhone = true;
          }
        });
      }
      if (currentRow.param === 'email') {
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(currentRow.value);
        if (!regexMatch) {
          this.isValidEmail = true;
        } else {
          this.isValidEmail = false;
        }
      }
      if (currentRow.delteEstimated) {
        delete currentRow.delteEstimated;
      }
    },

    // Function for number only
    isNumber(event: any, row: any) {
      if (row.inputtype === 'number') {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return event.preventDefault();
        }
      }
    },

    async submitFormData() {
      this.submitted = true;
      this.validationRes = [];
      const postFormData = new FormData();
      var headerRequest = '';
      // ADD param to Post Data
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        // handle FormData
        headerRequest = 'application/json';

        if (element.required === true) {
          this.validationRes[element.param] = element.value;
        }
      }

      // Filter Empty value for validation
      const validationResult = Object.values(this.validationRes).filter(o => o === '');

      // Check validation Function
      console.log(validationResult);
      console.log('this.validationRes', this.validationRes);
      console.log('formdata', this.data);

      if (validationResult.length != 0) {
        console.log('validatoion error');
      } else {
        //Check Email validation
        console.log('this.isValidEmail', this.isValidEmail);
        console.log('this.validPhone', this.validPhone);
        if (this.isValidEmail || this.validPhone) {
          return true;
        }
        this.loader = true;
        //Cost tabl section
        var res: any;
        //Update HCP EMAIL Form Condition
        var postData = {} as any;
        //postData[this.info.addParam] = this.checkedData;
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          console.log('element', element);
          if (element.param == 'telephone') {
            parseInt(element.value);
          }
          console.log('element', element);
          postData[element.param] = element.value;
        }
        postData['id'] = this.updateHcpEmailId;
        postData['force_update'] = 1;
        postData['profile_update'] = 1;
        this.info['endPoint'] = this.info.addEmailPageEndpoint;
        res = await ServiceEngagement.addForm(this.info, postData, headerRequest);
        this.submitted = false;
        console.log('res', res);
        this.$emit('close-email-form', res);
        //this.checkedData.push(res.data && res.data.id);
      }
    },
    //Alt Img Handling
    errorImg(data: any) {
      data['errorImg'] = true;
      this.imgError += 1;
    },

    spkStatusIcon(status: any) {
      if (status == 'Completed' || status == 'Accepted') {
        return require('@/assets/checkgreen.svg');
      } else if (status == 'Declined') {
        return require('@/assets/closered.svg');
      } else {
        return require('@/assets/exclamatorymark.svg');
      }
    },
  },
});
</script>
