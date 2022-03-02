<template>
  <select
    :value="modelValue"
    :disabled="isDisabled"
    class="border border-graymenu w-full outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 block w-auto leading-normal text-dashselect text-fs14 rounded-radius5 "
    @input="
      $emit('update:modelValue', $event.target.value);
      change($event.target.value);
    "
  >
    <slot />
  </select>
</template>

<script lang="ts" src="./VSelect.ts"></script>
