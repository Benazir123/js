<template>
  <v-card-box>
    <v-title menu="Content" class="mb-4"></v-title>
    <div v-if="content && content.length != 0 && !loader" class="table-responsive englistdata">
      <VTable class="w-full" :data="content" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="contentimg" class="w-20">Content image</VTh>
            <VTh sort-key="contentname">Content name</VTh>
            <VTh sort-key="action" class="w-56">Action</VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
              <component
                :is="'v-profile'"
                :key="imgError"
                :small-profile="true"
                :side-menu="true"
                :user-info="{
                  letter_name: 'C',
                  full_name: row.fullName,
                  errorImg: row.errorImg ? row.errorImg : false,
                  img: row.content_img,
                  id: '',
                }"
                @errorImg="errorImg(row)"
              ></component>
            </td>
            <td>{{ bindData(row.content_name) }}</td>
            <td>
              <v-smallbutton
                class="
                  bg-skyblue
                  text-bluetxt
                  p-1
                  px-2
                  mr-3
                  rounded-radius6
                  cursor-pointer
                "
                @click="download(row.content_preview_url)"
                >Preview</v-smallbutton
              >
              <v-smallbutton
                class="
                  bg-accpectbtn
                  text-accepttxt
                  p-1
                  px-2
                  rounded-radius6
                  cursor-pointer
                "
                @click="download(row.content_download_url)"
                >Download</v-smallbutton
              >
            </td>
          </tr>
        </template>
      </VTable>
    </div>
    <v-pagination
      v-if="content && content.length != 0 && !loader"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        listContent(currentPage);
      "
    />
    <v-no-data v-if="content.length == 0 && !loader"></v-no-data>
    <!-- Loader Component -->
    <v-eng-loader v-if="loader"></v-eng-loader>
  </v-card-box>
</template>
<script lang="ts" src="./Content.ts"></script>
