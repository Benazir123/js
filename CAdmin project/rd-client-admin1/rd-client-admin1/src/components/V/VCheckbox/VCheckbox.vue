<template>
  <input
    :id="id"
    type="checkbox"
    :disabled="disabled"
    :value="modelValue"
    :checked="isChecked"
    class="
      form-checkbox
      cursor-pointer
      border-graymenu
      text-tabactbor
      rounded-radius5
      focus:border-none
      focus:ring-offset-0
      focus:ring-0 focus:ring-opacity-0
      shadow-none
      focus:shadow-none
    "
    @change="$emit('change', $event)"
  />
</template>

<script lang="ts" src="./VCheckbox.ts"></script>
