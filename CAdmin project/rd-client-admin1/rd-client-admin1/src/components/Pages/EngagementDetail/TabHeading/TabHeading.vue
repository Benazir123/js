<template>
  <h4 class="block text-left text-fs20 block text-greytxt leading-loginlabellineheight font-semibold mb-4 ">
    {{ tabCode }}
  </h4>

  <ul class="flex mb-0 list-none flex-wrap flex-row border-b border-searchbox">
    <li v-for="list in tabList" :key="list">
      <a
        class="text-fs16
        font-semibold
        px-4
        py-2
        block
        leading-normal
        flex cursor-pointer
        border border-white
        border-b-0
        rounded-tl-radius8
        rounded-tr-radius8
        rounded-bl-none
        rounded-br-none"
        :class="{
          'text-darkgrey bg-white text-secsemigrey ': activeTab !== list.id,
          'text-white bg-tabactiveblue border border-tabactbor text-textblue': activeTab === list.id,
        }"
        @click="tabSetChange(list.id)"
      >
        <span class="w-10 absolute"></span>
        {{ list.tabTittle }}
      </a>
    </li>
  </ul>
</template>
<script lang="ts" src="./TabHeading.ts"></script>
