<template>
  <h4 class="block text-left text-fs20 block text-greytxt leading-loginlabellineheight font-semibold mb-4 ">
    {{ tabCode }}
  </h4>

  <ul class="flex mb-0 list-none flex-wrap flex-row border-b border-searchbox">
    <li v-for="list in innertabList" :key="list">
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
          'text-darkgrey bg-white text-secsemigrey ': inneractiveTab !== list.id,
          'text-white bg-tabactiveblue border border-tabactbor text-textblue': inneractiveTab === list.id,
        }"
        @click="innertabSetChange(list.id)"
      >
        <span class="w-10 absolute"></span>
        {{ list.innertabTittle }}
      </a>
    </li>
  </ul>
</template>
<script lang="ts" src="./InnerTabHeading.ts"></script>
