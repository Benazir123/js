<template>
  <div
    class="
      relative
      text-logininputtext
      outline-none
      focus:border-graymenu
      focus:ring-0
      focus:ring-indigo-200
      focus:ring-opacity-0
      rounded-md
      shadow-none
      text-sm
      py-2
      block
      w-full
      text-fs14
      rounded-radius5
    "
  >
    <div class="w-full mx-auto justify-center flex flex-col items-center py-3">
      <img src="@/assets/gallarey.svg" class="my-3" />
      <!-- <span
        class="text-md leading-normal  font-semibold flex items-center pb-4 flex flex-col"
      >
        Upload Your Files
      </span> -->
    </div>
    <input
      ref="file"
      :disabled="isDisabled"
      accept="image/*,.xlsx, .xls, .pdf"
      type="file"
      :value="modelValue"
      class="
        cursor-pointer
        absolute
        top-0
        bottom-0
        left-0
        right-0
        h-36
        my-2
        opacity-0
        w-full
      "
      @input="$emit('update:modelValue', $event.target.value)"
      @change="selectFile($event.target.files)"
    />
  </div>
</template>

<script lang="ts" src="./VFileUpload.ts"></script>
