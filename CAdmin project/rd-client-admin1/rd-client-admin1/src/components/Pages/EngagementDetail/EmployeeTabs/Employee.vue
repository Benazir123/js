<template>
  <!-- Employee table -->
  <v-card-box>
    <v-title menu="Employee" class="mb-4"></v-title>
    <v-smallbutton
      v-if="addBtnEnable"
      class="absolute -mt-11 right-3  bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"
      @click="openAddForm()"
      ><img src="@/assets/addwhite.svg" class="mr-2" />Add Employee</v-smallbutton
    >
    <div v-if="employee && employee.length != 0 && !loader" class="table-responsive englistdata">
      <VTable :data="employee" class="w-full" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="User"> User </VTh>
            <VTh sort-key="Title" class="whitespace-no-wrap">Title </VTh>
            <VTh sort-key="City">City </VTh>
            <VTh sort-key="State">State </VTh>
            <VTh sort-key="Status">Status </VTh>
            <VTh sort-key="Links">Links </VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
              <div class="flex items-center relative">
                <div class="flex-shrink-0 w-8 h-8">
                  <component
                    :is="'v-profile'"
                    :key="imgError"
                    :small-profile="true"
                    :side-menu="true"
                    :user-info="{
                      letter_name: row.short_name,
                      full_name: row.fullName,
                      errorImg: row.errorImg ? row.errorImg : false,
                      img: row.photo,
                      id: row.id ? row.id : '',
                    }"
                    @errorImg="errorImg(row)"
                  ></component>
                </div>

                <div class="ml-3">
                  <p class="whitespace-no-wrap">
                    {{ bindData(row.full_name) }}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <div class="flex">
                {{ bindData(row.Title) }}
              </div>
            </td>

            <td>{{ bindData(row.city) }}</td>
            <td>
              {{ bindData(row.state) }}
            </td>

            <td v-if="row.status">
              <v-smallbutton
                :style="{
                  color: row.status.text_color,
                  background: row.status.bg_color,
                }"
                class="bg-accpectbtn text-accepttxt p-1 px-2 rounded-radius6 cursor-default"
                >{{ row.status.name }}</v-smallbutton
              >
            </td>

            <td>
              <!-- <v-smallbutton
                class="text-textblue bg-white border border-tabactbor rounded-radius6 p-1 px-3"
              >
                Link
              </v-smallbutton> -->
              <img src="@/assets/links.svg" class="cursor-pointer" @click="copyLink(row.join_link)" />
            </td>
          </tr>
        </template>
      </VTable>
    </div>
    <v-pagination
      v-if="employee && employee.length != 0 && !loader"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        listDocument(currentPage);
      "
    />
    <div class="prescriber">
      <add-form
        v-if="openForm"
        :is-open="openForm"
        :info="tabInfo"
        :form-data="initformData"
        :is-add-form="isAddForm"
        @close-form="cloeForm($event)"
      ></add-form>
    </div>
    <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
    <v-no-data v-if="employee.length == 0 && !loader"></v-no-data>
    <!-- Loader Component -->
    <v-eng-loader v-if="loader"></v-eng-loader>
  </v-card-box>
  <!-- Employee table -->
</template>
<script lang="ts" src="./Employee.ts"></script>
