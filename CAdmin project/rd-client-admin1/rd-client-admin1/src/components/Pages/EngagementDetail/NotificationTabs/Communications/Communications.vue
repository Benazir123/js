<template>
  <div v-if="Communication && Communication.length != 0 && !loader" class="table-responsive colbtable englistdata">
    <VTable class="w-full" :data="Communication" :hide-sort-icons="true">
      <template #head>
        <tr>
          <VTh sort-key="document" class="">Document name</VTh>
          <VTh sort-key="type" class="w-80">Type </VTh>
          <VTh sort-key="action" class="w-28">Actions </VTh>
          <VTh sort-key="version" class="">Version</VTh>
        </tr>
      </template>
      <template #body="{ rows }">
        <tr v-for="row in rows" :key="row.id">
          <td v-if="row">
            {{ bindData(row.name) }}
          </td>
          <td v-if="row">{{ bindData(row.type) }}</td>
          <td>
            <div class="flex items-center">
              <v-smallbutton
                class=" bg-skyblue
                  text-bluetxt
                  p-1
                  px-2
                  mr-3
                  rounded-radius6
                  cursor-pointer "
              >
                Preview
              </v-smallbutton>

              <v-smallbutton
                class="bg-await   p-1
                px-3 text-approvebtn  text-fs13 rounded-radius6 "
                @click="mergefield"
              >
                Merge
              </v-smallbutton>
            </div>
          </td>
          <td class="w-28 version">
            <v-select class="">
              <option>{{ bindData(row.version) }}</option></v-select
            >
          </td>
        </tr>
      </template>
    </VTable>
  </div>
  <v-pagination
    v-if="Communication && Communication.lenght != 0 && !loader"
    v-model="currentPage"
    :pages="totalPages"
    :range-size="1"
    active-color="#DCEDFF"
    :hide-first-button="false"
    :hide-last-button="false"
    @update:modelValue="
      currentPage;
      listCommunication(currentPage);
    "
  />
  <v-no-data v-if="Communication.length == 0 && !loader"></v-no-data>
  <!-- Loader Component -->
  <v-eng-loader v-if="loader"></v-eng-loader>
  <aside
    class="right-drawer ease-in-out transform transition-all duration-700 z-50"
    :style="{
      right: isOpenmerge ? '0' : '-85%',
    }"
  >
    <div
      class="
        flex
        justify-between
        items-center
        text-base
        font-bold
        rounded-t-lg
        mb-2
        px-3
        py-2
        bg-blue
        text-white
      "
    >
      <p class="text-base text-parenttheme-white font-semibold">
        Merge
      </p>
      <div class="cursor-pointer" @click="isOpenmerge = false">
        <img src="@/assets/close-white.svg" />
      </div>
    </div>
    <!-- Collab meeeting Section -->
    <drawer-merge></drawer-merge>
  </aside>

  <div
    :class="[
      'drawer-mask ease-in-out transform transition-all right-0 left-0',
      isOpenmerge ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
    ]"
    :style="{
      transition: isOpenmerge ? '.7s' : '0 delay-700',
    }"
    @click="isOpenmerge = false"
  ></div>
</template>
<script lang="ts" src="./Communications.ts"></script>
