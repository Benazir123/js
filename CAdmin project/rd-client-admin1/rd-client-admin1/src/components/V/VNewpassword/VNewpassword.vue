<template>
  <div class="mt-4 relative flex w-full flex-wrap items-stretch mb-3">
    <input
      class="
        border border-graymenu
        outline-none
        focus:border-graymenu
        focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0
        rounded-md
        shadow-none
        text-sm
        py-2
        block
        w-full
        text-fs14
        rounded-radius5
        h-11
        text-logininputtext
      "
      :type="PasswordType"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="absolute right-0 top-0 m-3 opacity-40 cursor-pointer"
      >
      <img @click="switchVisibility" src="@/assets/newpass.svg" alt="" />
    </span>
  </div>
</template>

<script lang="ts" src="./VNewpassword.ts"></script>
