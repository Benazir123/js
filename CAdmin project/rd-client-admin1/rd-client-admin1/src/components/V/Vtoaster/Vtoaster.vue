<template>
  <div v-if="toasterInfo && toasterInfo.success" class="alert-toast fixed z-50 top-0 right-0 w-1/5">
    <div
      class="
        text-center
        cursor-pointer
        flex
        items-center
        w-full
        p-5
        bg-blue
        rounded
        shadow-lg
        text-white
      "
      title="close"
    >
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      </div>
      <div class="text-left">
        <span class="px-4 font-bold">Success</span>
        <p class="px-4">{{ toasterInfo.msg ? toasterInfo.msg : 'Success' }}</p>
      </div>
    </div>
  </div>

  <!-- ERROR -->
  <div v-if="toasterInfo.success == false" class="alert-toast fixed z-50 top-0 right-0 w-1/5">
    <div
      class="
        text-center
        cursor-pointer
        flex
        items-center
        w-full
        p-5
        bg-blue
        rounded
        bg-danger
        shadow-lg
        text-white
      "
      title="close"
    >
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="text-left">
        <span class="px-4 font-bold">Error</span>
        <p class="px-4">
          {{ toasterInfo.msg ? toasterInfo.msg : 'Someting Went wrong.' }}
        </p>
      </div>
    </div>
  </div>
  <div v-if="toasterInfo && toasterInfo.info" class="alert-toast fixed z-50 top-0 right-0 w-1/5">
    <div
      class="
        text-center
        cursor-pointer
        flex
        items-center
        w-full
        p-5
        bg-blue
        rounded
        shadow-lg
        text-white
      "
      title="close"
    >
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      </div>
      <div class="text-left">
        <span class="px-4 font-bold">Copied</span>
        <!-- <p class="px-4">{{toasterInfo.msg ? toasterInfo.msg : 'Success'}}</p> -->
      </div>
    </div>
  </div>
</template>
<script src="./Vtoaster.ts"></script>
