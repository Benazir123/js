<template>
  <div class="bg-white  border-r border-searchbox w-200px">
    <ul class="text-darkgrey">
      <li>
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/speakersummary',
          }"
          >Summary</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/userprofile',
          }"
          @click="usersprofile"
          >Profile & Preferences</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/ContractInfo',
          }"
          @click="contract"
          >Contract</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/training',
          }"
          @click="trainingInfo"
          >Training</a
        >
      </li>
      <li>
        <a   @click="capinfo"
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/cap',
          }"
          >Cap</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/ffs',
          }"
          @click="ffs"
          >FFS</a
        >
      </li>
      <li>
        <!-- @click="speakerdocuments" @click="speakeruserdetails" @click="speakercomments" @click="speakerhistory"  -->
        <a @click="document"
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/documents',
          }"
          >Documents</a
        >
      </li>
      <li>
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/aligment',
          }"
           @click="aligment"
          >Aligment</a
        >
      </li>
      <li>
        <a 
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/engagementinfo',
          }"
          @click="engagementinfo"
          >Engagement Info</a
        >
      </li>
      <li>
        <!-- @click="speakerdocuments" @click="speakeruserdetails" @click="speakercomments" @click="speakerhistory"  -->
        <a
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/comments',
          }"
          @click="comment"
          >Comments</a
        >
      </li>
      <li>
        <!-- @click="speakerdocuments" @click="speakeruserdetails" @click="speakercomments" @click="speakerhistory"  -->
        <a @click="biodetail"
          class="text-darkgrey text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/bio',
          }"
          >Bio</a
        >
      </li>
    </ul>
  </div>
</template>

<script
  lang="ts"
  src="./LeftMenu.ts"
  :class="{
    'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/ContractInfo',
  }"
></script>
