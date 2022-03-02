<template>
  <v-card-box>
    <v-title v-if="isPrimaryTab" menu="Task" class="mb-4"></v-title>
    <v-smallbutton
      class="absolute -mt-11 right-3  bg-blue px-3 rounded-radius6 text-white flex text-fs14 items-center"
      @click="openForm()"
      ><img src="@/assets/addwhite.svg" class="mr-2" />Add Task</v-smallbutton
    >
    <div v-if="task && task.length != 0 && !loader" class="table-responsive englistdata">
      <VTable class="w-full" :data="task" :hide-sort-icons="true">
        <template #head>
          <tr>
            <VTh sort-key="task">Task</VTh>
            <VTh sort-key="duedate">Due Date</VTh>
            <VTh sort-key="assigned">Assigned</VTh>
            <VTh sort-key="completeddate">Completed date</VTh>
            <VTh sort-key="status">Status</VTh>
            <VTh sort-key="action">Action</VTh>
          </tr>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row.id">
            <td>
              {{ bindData(row.task_description) }}
            </td>
            <td>
              {{ dateFormat(row.due_date) }}
            </td>
            <td>{{ bindData(row.to_assinee.full_name) }}</td>
            <td>{{ dateFormat(row.completed_date) }}</td>
            <td>
              <v-smallbutton
                v-if="row.status"
                class="
                bg-accpectbtn
                text-accepttxt
                p-1
                px-2
                rounded-radius6
                cursor-default
              "
                >{{ row.status.name }}</v-smallbutton
              >
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
      v-if="task && task.length != 0 && !loader"
      v-model="currentPage"
      :pages="totalPages"
      :range-size="1"
      active-color="#DCEDFF"
      :hide-first-button="false"
      :hide-last-button="false"
      @update:modelValue="
        currentPage;
        listTask(currentPage);
      "
    />
    <v-eng-loader v-if="loader"></v-eng-loader>
    <!-- Add Form -->
    <div class="prescriber addtaskform">
      <add-form
        v-if="openAddForm"
        :key="taskFromId"
        :is-open="openAddForm"
        :info="tabInfo"
        :form-data="formData"
        @close-form="closeForm($event)"
      ></add-form>
    </div>
    <v-no-data v-if="task.length == 0 && !loader"></v-no-data>
    <v-toaster v-if="isToaster" :toaster-info="toasterInfo"></v-toaster>
  </v-card-box>
</template>
<script lang="ts" src="./Task.ts"></script>
