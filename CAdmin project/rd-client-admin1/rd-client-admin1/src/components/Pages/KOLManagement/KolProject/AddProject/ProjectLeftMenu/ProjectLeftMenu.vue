<template>
 <div class="bg-speconbg rounded-radius8 py-4 w-200px">
    <ul class="text-darkgrey">
      <li>
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/general',
          }"        @click="generaldata"
          >General</a
        >
      </li>
   <li>
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/strategicinformation',
          }"        @click="strategic"
          >Strategic Information</a
        >
      </li>
       <li>
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/HcpDetails',
          }"        @click="hcpdetails"
          >Hcp Details</a
        >
      </li>
      <li class="group relative">
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/',
          }"
          >Travel </a
        >
                  <b
                    class=" z-50 w-28 text-center
                      absolute
                      top-3 text-fs12
                      left-full
                      bg-secgrey
                      text-white
                      p-2
                      px-3 font-normal
                      rounded-radius4
                      -mt-1
                      ml-2
                      hidden
                      group-hover:block rounded-radius10
                    "
                    >Coming Soon</b
                  >
      </li>
       <li class="group relative">
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/documentProject',
          }" @click="documentprojectdetails"
          >Documents </a
        >
      </li>
       <li>
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/logistics',
          }"   @click="logisticsdetails"
          >Logistics </a
        >
      </li>
         <li class="group relative">
        <a
          class="text-fs14 font-thin font-sans border-transparent px-4 py-3 block cursor-pointer border-r-4px hover:bg-speconatagbg hover:text-themegreen hover:font-bold hover:border-speconribo"
          :class="{
            'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/notes',
          }" @click="notessdetails"
          >Notes </a
        >
      </li>
    </ul>
  </div>
</template>

<script
  lang="ts"
  src="./ProjectLeftMenu.ts"
    :class="{
    'bg-speconatagbg text-themegreen font-bold border-speconribo': currentRoute == '/HcpDetails',
  }"
></script>
