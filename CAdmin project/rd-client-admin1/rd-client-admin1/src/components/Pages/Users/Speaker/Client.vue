<template>
  <div>
    <v-breadcrumb breadcrumb="Users" :subbreadcrumb="listTitle"></v-breadcrumb>
    <v-card-box>
      <div class="flex justify-between items-center border-b border-searchbox -m-4 p-4 mb-4">
        <v-title :menu="listTitle" class="-mb-0"></v-title>
      </div>
      <p class="text-fs13 flex items-center mb-5"><img src="@/assets/info.svg" class="w-5 mr-2" /> {{ description }}</p>
      <!-- table starts -->
      <div v-if="clientList && clientList.length != 0 && !loader" class="table-responsive spklistdata">
        <VTable class="w-full" :data="clientList" :hide-sort-icons="true">
          <template #head>
            <tr>
              <VTh sort-key="contractname">
                <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
                <span class=" inline-block">Company</span></VTh
              >
              <VTh sort-key="contproduct">
                <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
                Product
              </VTh>
              <VTh sort-key="contstartdate">
                <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
                Sales Team(s)
              </VTh>
              <VTh sort-key="contenddate">
                <!-- <span
              class="nosort"
              :class="{
                nosort: sortOrder === 0,
                ascendingorder: sortOrder === 1,
                ascendingorder: sortOrder === -1,
              }"
            /> -->
                Active users</VTh
              >
              <VTh sort-key="contsoftcap">Action</VTh>
            </tr>
          </template>
          <template #body="{ rows }">
            <tr v-for="row in rows" :key="row.id">
              <td class="w-20 whitespace-normal">
                {{ bindData(row.sales_force_name) }}
              </td>
              <td class="w-56 whitespace-normal">
                <span v-html="row.product"></span>
              </td>
              <td class="w-72 whitespace-normal">{{ bindData(row.level1) }}</td>
              <td class="w-44 whitespace-normal">
                {{ bindData(row.usersCount) }}
              </td>
              <td class="w-8 whitespace-normal">
                <img src="@/assets/views.svg" class="cursor-pointer" @click="viewclient()" />
              </td>
              <!-- @click="viewDetailPage(row)" -->
            </tr>
          </template>
        </VTable>
      </div>
      <!-- v-pagination  -->
      <v-pagination
        v-if="clientList && clientList.length != 0 && !loader"
        v-model="currentPage"
        :pages="totalPages"
        :range-size="1"
        active-color="#DCEDFF"
        :hide-first-button="false"
        :hide-last-button="false"
        @update:modelValue="
          currentPage;
          listClientAdmin(currentPage);
        "
      />
      <!-- v-no-data component -->
      <v-no-data v-if="clientList.length == 0 && !loader"></v-no-data>
    </v-card-box>
  </div>

  <!-- Client Details -->
  <aside
    class="right-drawer ease-in-out transform transition-all duration-700 z-50"
    :style="{
      right: isOpenclientdrawer ? '0' : '-85%',
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
        User Details
      </p>
      <div class="cursor-pointer" @click="isOpenclientdrawer = false">
        <img src="@/assets/close-white.svg" />
      </div>
    </div>
    <!-- Collab meeeting Section -->
    <!-- <drawer v-if="isOpenclientdrawer" :sales-force-id="salesForceId" class="p-4"></drawer> -->
  <clientdetails-drawer v-if="isOpenclientdrawer"></clientdetails-drawer>
  </aside>
  <div
        :class="[
          'drawer-mask ease-in-out transform transition-all right-0 left-0',
          isOpenclientdrawer ? 'z-50 opacity-100 flex' : ' opacity-0 hidden z-0',
        ]"
        :style="{
          transition: isOpenclientdrawer ? '.7s' : '0 delay-700',
        }"
        @click="isOpenclientdrawer = false"
      ></div>
  <!-- loader component -->
  <component :is="'v-loader'" v-if="loader"></component>
</template>
<script lang="ts" src="./Client.ts"></script>
