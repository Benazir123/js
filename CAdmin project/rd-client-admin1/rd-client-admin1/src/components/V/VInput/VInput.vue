<template>
  <input
    class="border h-11 text-logininputtext border-graymenu outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 pl-10 block w-full text-fs14 rounded-radius5 "
    :type="inputType"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts" src="./VInput.ts"></script>
