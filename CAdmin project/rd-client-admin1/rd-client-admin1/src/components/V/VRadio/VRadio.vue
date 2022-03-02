<template>
  <div>
    <div class="flex justify-center items-center relative w-4 h-4 border border-companyinputbox rounded-radius10 ">
      <input
        :checked="isChecked"
        type="radio"
        class="
        shadow-none w-1 h-1
        border-none
        focus:ring 
        focus:ring-indigo-200 
        focus:ring-opacity-0 
        ring-offset-2	
        inline-block 
        rounded-radius10 
        outline-none focus:bg-blue bg-transparent"
        name="radio"
        value="2"
      />
      <label for="radio5" class="flex items-center cursor-pointer"> </label>
    </div>
  </div>
</template>
<script lang="ts" src="./VRadio.ts"></script>
<style>
[type='radio']:checked + label {
  width: 16px;
  height: 16px;
  border: 1px solid #185ddc;
  border-radius: 20px;
  position: absolute;
}
[type='radio']:checked {
  background-image: none;
}
</style>
