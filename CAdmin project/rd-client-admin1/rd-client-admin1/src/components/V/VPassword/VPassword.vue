<template>
  <div class="mt-4 relative flex w-full flex-wrap items-stretch mb-3">
    <span
      class="
        z-10
        top-3
        leading-snug
        font-normal
        absolute
        text-center text-gray-400
        bg-transparent
        rounded
        text-base
        items-center
        justify-center
        w-8
        pl-3
        flex
      "
    >
      <svg width="20" height="20" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.5 9.5H15V6.5C15 4.9087 14.3679 3.38258 13.2426 2.25736C12.1174 1.13214 10.5913 0.5 9 0.5C7.4087 0.5 5.88258 1.13214 4.75736 2.25736C3.63214 3.38258 3 4.9087 3 6.5V9.5H1.5L0 11V20L1.5 21.5H16.5L18 20V11L16.5 9.5ZM4.5 6.5C4.5 5.30653 4.97411 4.16193 5.81802 3.31802C6.66193 2.47411 7.80653 2 9 2C10.1935 2 11.3381 2.47411 12.182 3.31802C13.0259 4.16193 13.5 5.30653 13.5 6.5V9.5H4.5V6.5ZM16.5 20H1.5V11H16.5V20Z"
          fill="#393939"
        />
      </svg>
    </span>
    <input
      class="
        border border-graymenu
        outline-none
        focus:border-graymenu
        focus:ring-0
        focus:ring-indigo-200
        focus:ring-opacity-0
        rounded-md
        shadow-none
        text-sm
        py-2
        pl-10
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
      ><img :src="PasswordIcon" alt="" @click="switchVisibility" />
    </span>
  </div>
</template>

<script lang="ts" src="./VPassword.ts"></script>
