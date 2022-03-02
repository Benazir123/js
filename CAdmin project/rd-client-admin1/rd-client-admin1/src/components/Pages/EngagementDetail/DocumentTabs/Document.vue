<template>
  <v-card-box>
    <v-title menu="Document" class="mb-4"></v-title>
    <v-smallbutton
      class="absolute -mt-11 right-3  bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"
      @click="openAddForm()"
      ><img src="@/assets/addwhite.svg" class="mr-2" />Add Document</v-smallbutton
    >
    <div v-if="documentList && documentList.length != 0 && !loader" class="table-responsive englistdata">
      <VTable class="w-full" :data="documentList" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="docname">Document name</VTh>
            <VTh sort-key="doctype">Document type</VTh>
            <VTh sort-key="doc">Document</VTh>
            <VTh sort-key="docaction">Action</VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
              {{ bindData(row.document_name) }}
            </td>
            <td>
              {{ bindData(row.document_type_name) }}
            </td>
            <td>
              <!-- <img src="@/assets/pdf.svg"> -->
              <img class="cursor-pointer" src="@/assets/documenticon.svg" @click="download(row.document_file)" />
              <!-- <v-smallbutton
                @click="download(row.document_file)"
                v-if="row.document_file"
                class="
                  text-textblue
                  bg-white
                  border border-tabactbor
                  rounded-radius6
                  p-1
                  px-3
                "
                >.{{
                  row.document_file.substring(
                    row.document_file.lastIndexOf(".") + 1
                  )
                }}</v-smallbutton
              > -->
            </td>
            <td>
              <div class="flex items-center">
                <p
                  class="
              p-0
              mr-2
              rounded-radius6
              cursor-pointer
            "
                  @click="editForm(row)"
                >
                  <img src="@/assets/editblue.svg" />
                </p>
              </div>
            </td>
          </tr>
        </template>
      </VTable>
    </div>
    <v-pagination
      v-if="documentList && documentList.length != 0 && !loader"
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
    <v-no-data v-if="documentList.length == 0 && !loader"></v-no-data>
    <div class="prescriber">
      <add-form
        v-if="openForm"
        :is-open="openForm"
        :info="tabInfo"
        :form-data="initformData"
        @close-form="cloeForm($event)"
      ></add-form>
    </div>
    <!-- Loader Component -->
    <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
    <v-eng-loader v-if="loader"></v-eng-loader>
  </v-card-box>
</template>
<script lang="ts" src="./Document.ts"></script>
