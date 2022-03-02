<template>
  <div class="flex items-center mb-3">
    <ul class="flex items-center text-fs13 vbreadcrumb">
      <li class="text-secgrey">
        <a class="cursor-pointer" @click="engagement">{{ breadcrumb }}</a>
      </li>
      <li><img src="@/assets/rightarrow.svg" class="mx-3" /></li>
      <li class="text-secsemigrey">
        <a class="cursor-pointer">{{ subbreadcrumb }}</a>
      </li>
      <li v-if="speakerbreadcrumb ? true : false" class="removearrow">
        <img src="@/assets/rightarrow.svg" class="mx-3" />
      </li>
      <li class="text-secsemigrey">
        <a class="cursor-pointer">{{ speakerbreadcrumb }}</a>
      </li>
    </ul>
  </div>
</template>
<script src="./VBreadcrumb.ts"></script>
