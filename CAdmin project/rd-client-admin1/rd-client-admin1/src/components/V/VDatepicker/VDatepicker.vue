<template>
  <div class="daterangepicker relative">
    <litepie-datepicker
      v-if="!isSingleDate"
      ref="myRef"
      v-model="dDate"
      trigger="open-datepicker"
      :formatter="formatter"
      :auto-apply="autoApply"
      :shortcuts="customShortcuts"
      @select="selectedDate()"
    >
    </litepie-datepicker>
    <litepie-datepicker
      v-if="isSingleDate"
      ref="myRef"
      v-model="startDate"
      as-single
      :trigger="id"
      :formatter="formatter"
      :auto-apply="false"
      @select="selectedDate()"
    >
    </litepie-datepicker>
    <button
      v-if="!isSingleDate"
      id="open-datepicker"
      type="button"
      class="absolute top-0 right-0 left-0 bottom-0 w-full h-full cursor-pointer"
    ></button>

    <button
      v-if="isSingleDate"
      :id="id"
      type="button"
      class="absolute top-0 right-0 left-0 bottom-0 w-full h-full cursor-pointer"
    ></button>

    <!--:trigger="selectedDate()"-->
  </div>
</template>

<script lang="ts" src="./VDatepicker.ts"></script>
