<template>
  <!--content-->
  <div
    class="border-0 border-companyinputbox rounded-radius40 shadow-lg relative flex flex-col w-2/5 bg-white outline-none focus:outline-none"
  >
    <!--Header-->
    <div v-if="header == true" class="px-4 py-3 text-center bg-blue rounded-t-radius40 flex items-center justify-between">
      <slot name="header"></slot>
    </div>
    <!-- Body -->
    <div class="relative p-7 flex-auto border-b border-filtertitle">
      <slot name="description"></slot>
    </div>
    <!--Footer-->
    <div class="p-2 text-center mx-6 my-2">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script src="./VConfirmationModal.ts"></script>
