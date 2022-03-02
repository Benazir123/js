<template>
  <div class="scroller scroll-pop virtual-form">
    <div class="flex mx-5 my-4">
      <div class="w-2/5">
        <p class="text-greytxt text-fs16 mb-2">Read Only</p>
        <div class="bg-tabactiveblue p-4 rounded-xl mb-3">
          <div class="mb-3 virtual-input">
            <v-label value="No.of Prescribing HCPs present:" class="mb-2 text-greytxt" />
            <v-input inputType="number" />
          </div>
          <div class="mb-3 virtual-input">
            <v-label value="No. of non-prescribing present (not including speaker)" class="mb-2 text-greytxt" />
            <v-input inputType="number" />
          </div>
          <div class="virtual-input">
            <v-label value="No. of “others” present (e.g. Company or Vendor employees)" class="mb-2 text-greytxt" />
            <v-input inputType="number" />
          </div>
        </div>
        <div class="bg-tabactiveblue p-4 rounded-xl mb-3">
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-3 virtual-input">
              <v-label value="Speaker Name" class="mb-2 text-greytxt" />
              <v-input inputType="type" />
            </div>
            <div class="mb-3 virtual-input">
              <v-label value="Program Title" class="mb-2 text-greytxt" />
              <v-input inputType="type" />
            </div>
          </div>
        </div>
        <div class="bg-tabactiveblue p-4 rounded-xl">
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-3 virtual-input">
              <v-label value="Product" class="mb-2 text-greytxt" />
              <v-input inputType="type" />
            </div>
            <div class="mb-3 virtual-input">
              <v-label value="Venue Name" class="mb-2 text-greytxt" />
              <v-input inputType="type" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-3 virtual-input">
              <v-label value="City and State" class="mb-2 text-greytxt" />
              <v-input inputType="type" />
            </div>
            <div class="mb-3">
              <v-label value="Scheduled Program Date" class="mb-2 text-greytxt" />
              <litepie-datepicker as-single v-model="dateValue" :formatter="formatter"></litepie-datepicker>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-3 virtual-datepic">
              <v-label value="Program Start Date" class="mb-2 text-greytxt" />
              <litepie-datepicker as-single v-model="dateValue" :formatter="formatter"></litepie-datepicker>
            </div>
            <div class="mb-3">
              <v-label value="Program End Date" class="mb-2 text-greytxt" />
              <litepie-datepicker as-single v-model="dateValue" :formatter="formatter"></litepie-datepicker>
            </div>
          </div>
          <p class="text-fs11 text-greytxt mt-2">*Refers to the start/end time of the actual presentation and Q&A session</p>
        </div>
      </div>
      <div class="w-3/5 ml-5">
        <p class="text-greytxt text-fs16 mb-2">Edit</p>
        <div class="bg-tabactiveblue p-4 rounded-xl mb-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="mb-3 virtual-input">
              <v-label value="Date of Review" class="mb-2 text-greytxt" />
              <v-input inputType="number" />
            </div>
            <div class="mb-3 virtual-input">
              <v-label value="Name of Reviewer" class="mb-2 text-greytxt" />
              <v-input inputType="number" />
            </div>
            <div class="mb-3 virtual-input">
              <v-label value="Representative Name" class="mb-2 text-greytxt" />
              <v-input inputType="number" />
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="mb-3 virtual-input">
              <v-label value="Representative Name" class="mb-2 text-greytxt" />
              <v-input inputType="number" />
            </div>
          </div>
          <div class="mb-3">
            <v-label value="Names of other Bausch Employees present" class="mb-2 text-greytxt" />
            <v-textarea type="text" />
          </div>
        </div>
        <div class="bg-tabactiveblue p-4 rounded-xl mb-3">
          <v-label value="Location" class="mb-2 text-greytxt" />
          <div class="mb-3">
            <label class="inline-flex items-center mr-1.5">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">Restaurant</p>
            </label>
            <label class="inline-flex items-center mr-1.5">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">In-Office/In-Hospital</p>
            </label>
            <label class="inline-flex items-center mr-1.5">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">Other (e.g. convention, etc)</p>
            </label>
          </div>
          <v-label value="Program Type" class="mb-2 text-greytxt" />
          <div>
            <label class="inline-flex items-center mr-1.5">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">In-Person</p>
            </label>
            <label class="inline-flex items-center mr-1.5">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">WebEx/Webcast</p>
            </label>
            <label class="inline-flex items-center mr-1.5">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">Telecom</p>
            </label>
          </div>
        </div>
        <v-label value="Program Overview" class="mb-2 text-greytxt" />
        <ol class="list-decimal ml-5">
          <li class="mb-2 text-greytxt text-fs13">
            Was the program held at an appropriate location conducive to scientific discussions (i.e.private room)
          </li>
          <div class="pt-2 pb-2 mb-3 border-b border-searchbox">
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">Yes</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">No</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">N/A</p>
            </label>
          </div>
          <li class="mb-2 text-greytxt text-fs13">
            If a meal was provided, did it appear to be modest in nature and consistent with company policies (N/A if no meal
            was provided)
          </li>
          <div class="pt-2 pb-2 mb-3 border-b border-searchbox">
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">Yes</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">No</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">N/A</p>
            </label>
          </div>
          <li class="mb-2 text-greytxt text-fs13">
            Were the PRC-approved slides presented without any modifications or omissions
          </li>
          <div class="pt-2 pb-2 mb-3 border-b border-searchbox">
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">Yes</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">No</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">N/A</p>
            </label>
          </div>
          <li class="mb-2 text-greytxt text-fs13">
            Was the minimum requirement for sales representative attendance met (i.e. 1 rep per 6 HCPs)
          </li>
          <div class="pt-2 pb-2 mb-3 border-b border-searchbox">
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">Yes</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">No</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">N/A</p>
            </label>
          </div>
          <li class="mb-2 text-greytxt text-fs13">
            If a meal/snack was provided ancillary to the Speaker Program, was a sign-in sheet completed by all attendees
            (N/A if no meals or snacks were provided)
          </li>
          <div class="pt-2 pb-2 mb-3 border-b border-searchbox">
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">Yes</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">No</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">N/A</p>
            </label>
          </div>
          <li class="mb-2 text-greytxt text-fs13">
            Were all other observations during the review in compliance with company policy
          </li>
          <div class="pt-2 pb-2 mb-3 border-b border-searchbox">
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" isChecked />
              <p class="ml-2 text-xsm text-greytxt">Yes</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">No</p>
            </label>
            <label class="inline-flex items-center mr-10">
              <v-checkbox class="form-checkbox h-4 w-4 rounded-xl" />
              <p class="ml-2 text-xsm text-greytxt">N/A</p>
            </label>
          </div>
          <li class="mb-2 text-greytxt text-fs13">
            Based on HCP comments, questions or discussion, how many adverse events reports were received by the
            Representative
          </li>
          <div class="pt-2 pb-2 mb-3 border-b border-searchbox">
            <div class="w-60  virtual-input">
              <v-input inputType="number" />
            </div>
          </div>
          <div class="bg-tabactiveblue p-4 rounded-xl mb-3">
            <div class="mb-3">
              <v-label value="Comments (Only required for any “No” responses)" class="mb-2 text-greytxt" />
              <v-textarea type="text" />
            </div>
          </div>
          <div class="bg-tabactiveblue p-4 rounded-xl">
            <div class="mb-3">
              <v-label value="Results / Next Steps (For completion by A&M Associate only)" class="mb-2 text-greytxt" />
              <label class="inline-flex items-center mr-10">
                <v-radio isChecked />
                <p class="ml-2 text-xsm text-greytxt">No violation of company policy observed</p>
              </label>
              <label class="inline-flex items-center mr-10">
                <v-radio />
                <p class="ml-2 text-xsm text-greytxt">
                  Issues noted and discussed with the following employee/employee’s manager/vendor for further coaching
                </p>
              </label>
              <label class="inline-flex items-center mr-10">
                <v-radio />
                <p class="ml-2 text-xsm text-greytxt">Issues noted and escalated to Compliance Management</p>
              </label>
            </div>
          </div>
        </ol>
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
        type="submit"
        class="font-w-normal text-fs12 py-2 px-12 float-right text-greytxt bg-clrbtn rounded-radius6 mr-4"
        >No
      </v-smallbutton>
      <v-smallbutton
        class="
            bg-blue
            flex
            rounded-radius6
            px-6
            py-2
            text-fs12 text-white
            items-center
            tracking-normal
            justify-content-end
            font-w-normal
          "
        >Submit
        <!-- <img src="@/assets/button-bar-loader.svg" class="ml-2 w-6" /> -->
      </v-smallbutton>
    </div>
  </div>
</template>
<script lang="ts" src="./VirtualForm.ts"></script>
