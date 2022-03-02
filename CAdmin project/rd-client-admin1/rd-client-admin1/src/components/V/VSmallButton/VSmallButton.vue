<template>
  <button
    class="
      items-center
      border-transparent
      text-fs12
      active:bg-gray-900
      focus:outline-none focus:ring-0
      transition
      ease-in-out
      duration-150
      px-2
      py-1
      rounded-radius8
      font-bold
    "
  >
    <slot />
  </button>
</template>

<script lang="ts" src="./VSmallButton.ts"></script>
