<template>
  <textarea
    :value="modelValue"
    :autocomplete="false"
    :disabled="isDisabled"
    :class="['border resize-none text-logininputtext border-graymenu outline-none focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 rounded-md shadow-none text-sm py-2 block w-full text-fs14 rounded-radius5', height, paddingright]"
    rows="4"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
  ></textarea>
</template>

<script lang="ts" src="./VTextarea.ts"></script>
