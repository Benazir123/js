<template>
  <div class="relative flex w-full flex-wrap items-stretch">
    <span
      class="
        top-0
        bottom-0
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
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6.36364" cy="6.36364" r="5.66364" stroke="#7C8AB5" stroke-width="1.4" />
        <line x1="13.0101" y1="14" x2="10.1818" y2="11.1718" stroke="#7C8AB5" stroke-width="1.4" stroke-linecap="round" />
      </svg>
    </span>
    <input
      :class="[
        'border border-companyinputbox outline-none focus:border-companyinputbox focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0 shadow-none pl-10 pr-8 block w-full text-fs12 rounded-radius8',
        paddingy,
      ]"
      :value="modelValue"
      :placeholder="label"
      :type="inputType"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
      v-if="modelValue"
      class="
        z-10
        top-4
        right-3
        leading-snug
        font-normal
        absolute
        text-center text-gray-400
        bg-transparent
        rounded
        text-base
        items-center
        justify-center
        w-4
        flex
      "
      @click="$emit('clearSearch')"
      ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-pointer" fill="red" viewBox="0 0 24 24" stroke="red">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </span>
  </div>
</template>

<script lang="ts" src="./VInputSearch.ts"></script>
