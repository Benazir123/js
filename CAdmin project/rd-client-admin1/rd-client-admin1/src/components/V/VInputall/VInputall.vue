<template>
  <input
    :id="id"
    class="
      border
      text-logininputtext
      border-graymenu
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
    :type="inputType"
    autocomplete="off"
    :name="id"
    :placeholder="label"
    :value="modelValue"
    :disabled="isDisabled"
    @keypress="keypress($event)"
    @blur="blur"
    @input="
      $emit('update:modelValue', $event.target.value);
      input($event.target.value);
    "
  />
</template>

<script lang="ts" src="./VInputall.ts"></script>
