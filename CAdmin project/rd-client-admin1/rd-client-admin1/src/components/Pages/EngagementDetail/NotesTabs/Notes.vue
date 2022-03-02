<template>
  <!-- @click="opennotdrawer()" -->
  <v-card-box>
    <v-title menu="Notes" class="mb-4"></v-title>

    <v-smallbutton
      class="absolute -mt-11 right-3 bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"
      @click="openForm()"
      ><img src="@/assets/addwhite.svg" class="mr-2" />Add Notes</v-smallbutton
    >
    <div v-if="notes.length != 0 && !loader" class="table-responsive englistdata">
      <VTable class="w-full" :data="notes" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="notes">Notes</VTh>
            <VTh sort-key="datetime">Date/Time</VTh>
            <VTh sort-key="addedeby">Added By</VTh>
            <VTh sort-key="action">Actions</VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
              {{ bindData(row.notes_description) }}
            </td>
            <td>
              {{ dateFormat(row.date) }}
            </td>
            <td>{{ bindData(row.added_by.full_name) }}</td>
            <td>
              <div class="flex items-center">
                <p
                  class="
              p-0
              mr-2
              rounded-radius6
              cursor-pointer
            "
                  @click="openEditNotes(row)"
                >
                  <img src="@/assets/editblue.svg" />
                </p>
              </div>
              <!-- <v-smallbutton
                class="
                bg-skyblue
                text-bluetxt
                p-1
                px-2
                rounded-radius6
                cursor-pointer
              "
                >Edit</v-smallbutton
              > -->
            </td>
          </tr>
        </template>
      </VTable>
    </div>
    <v-pagination
      v-if="notes && notes.length != 0 && !loader"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        listNotes(currentPage);
      "
    />
    <!-- collabators -->
    <div class="prescriber">
      <add-form
        v-if="openAddNotes"
        :is-open="openAddNotes"
        :info="tabInfo"
        :form-data="initNotes"
        @close-form="cloeAddNotes($event)"
      ></add-form>
    </div>
    <v-no-data v-if="notes.length == 0 && !loader"></v-no-data>
    <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
    <!-- Loader Component -->
    <v-eng-loader v-if="loader"></v-eng-loader>
  </v-card-box>
</template>
<script lang="ts" src="./Notes.ts"></script>
