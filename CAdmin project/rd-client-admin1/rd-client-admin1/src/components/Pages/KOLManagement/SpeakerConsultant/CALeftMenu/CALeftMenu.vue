<template>
  <div class="bg-speconbg rounded-radius8 py-4 w-200px">
    <ul class="text-darkgrey">
      <li>
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakersummary',
          }"
          @click="speakersummary"
          >Summary</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakerprofile',
          }"
          @click="speakerprofile"
          >Profile & Preferences</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakermedicalinfo',
          }"
          @click="speakermedicalinfo"
          >Medical Information</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakercontactpreferences',
          }"
          @click="speakercontactpreferences"
          >Contact</a
        >
      </li>
      <li>
        <!-- @click="speakerengagements" @click="speakertraining" @click="speakerutilization"  -->
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakerengagements',
          }"
          @click="speakerengagements"
          >Engagements</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakercontractlog',
          }"
          @click="speakercontractlog"
          >Contract</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakertraining',
          }"
          @click="speakertraining"
          >Training</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakerutilization',
          }"
          @click="speakerutilization"
          >Utilization</a
        >
      </li>
      <li>
        <!-- @click="speakercalendar" @click="speakerpayment" @click="speakercontent"-->
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakercalendar',
          }"
          >Calendar</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakerpayment',
          }"
          @click="speakerpayment"
          >Payments</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakercontent',
          }"
          >Content</a
        >
      </li>
      <li>
        <!-- @click="speakerdocuments" @click="speakeruserdetails" @click="speakercomments" @click="speakerhistory"  -->
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakerdocuments',
          }"
          >Documents</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakeruserdetails',
          }"
          >User Details</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakercomments',
          }"
          >Comments</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakerhistory',
          }"
          >History</a
        >
      </li>
    </ul>
  </div>
</template>

<script
  lang="ts"
  src="./CALeftMenu.ts"
  :class="{
    'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakersummary',
  }"
></script>
