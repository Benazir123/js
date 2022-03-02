<template>
  <div class="rounded-radius8 border border-innerbox shadow-innerbox mb-4">
    <div class="text-greytxt bg-innerboxtitlebg px-4 py-2 rounded-t-radius8 flex items-center">
      <img :src="titleicon" class="mr-3"/>
      <h3 class="text-greytxt bg-innerboxtitlebg  font-bold font-fs16">
        {{ title }}
      </h3>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" src="./VCardInnerBox.ts"></script>
