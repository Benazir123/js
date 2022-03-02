<template>
  <div v-if="costList.length != 0 && !loader" class="table-responsive englistdata">
    <VTable
      class="w-full min-w-full divide-y divide-gray-200 bg-white costatable
"
      :data="costList"
      :hide-sort-icons="true"
    >
      <template #head>
        <tr>
          <VTh sort-key="category">Category</VTh>
          <VTh sort-key="estimated"
            >Estimated<br />
            Cost</VTh
          >
          <VTh sort-key="planeed">Planned<br />Cost</VTh>
          <VTh sort-key="actual">Actual<br />Cost</VTh>
          <VTh sort-key="expense">Expense<br />Towards</VTh>
          <VTh sort-key="payee">Payee<br />Name</VTh>
          <VTh sort-key="activity"
            >Activity<br />
            Date</VTh
          >
          <VTh sort-key="requested"
            >Requested<br />
            Date</VTh
          >
          <VTh sort-key="creted"
            >Created/Edited<br />
            Date</VTh
          >
          <VTh sort-key="comment">Comment</VTh>
          <VTh sort-key="check"
            >Check<br />
            Number</VTh
          >
          <VTh sort-key="files">File</VTh>
          <VTh sort-key="action">Action</VTh>
        </tr>
      </template>
      <template #body="{ rows }">
        <tr v-for="row in rows" :key="row.id">
          <td v-if="row.expense_type_cost">
            {{ bindData(row.expense_type_cost.label_name) }}
          </td>
          <td>{{ dollorFormat(row.estimated_cost) }}</td>
          <td>
            {{ dollorFormat(row.planned_cost) }}
          </td>
          <td>
            {{ dollorFormat(row.actual_cost) }}
          </td>
          <td>
            {{ bindData(row.type_for) }}
          </td>
          <td>
            {{ bindData(row.payee) }}
          </td>
          <td>
            {{ activitydateFormat(row.activity_date) }}
          </td>
          <td>
            {{ dateFormat(row.requested_date) }}
          </td>
          <td>
            {{ dateFormat(row.payment_date) }}
          </td>
          <td>
            {{ bindData(row.comment) }}
          </td>
          <td>
            {{ bindData(row.check_number) }}
          </td>
          <td>
            <img
              v-if="row.cost_receipt.file"
              class="cursor-pointer"
              src="@/assets/documenticon.svg"
              @click="download(row.cost_receipt.file)"
            /><span v-if="!row.cost_receipt.file"> -- </span>
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

              <p
                class="
              p-0
              rounded-radius6
              cursor-pointer
            "
                @click="deletForm(row)"
              >
                <img src="@/assets/deletered.svg" />
              </p>
            </div>
          </td>
        </tr>
      </template>
    </VTable>
  </div>
  <v-pagination
    v-if="costList && costList.length != 0 && !loader"
    v-model="currentPage"
    :pages="totalPages"
    :range-size="1"
    active-color="#DCEDFF"
    :hide-first-button="false"
    :hide-last-button="false"
    @update:modelValue="
      currentPage;
      listEstimatedCost(currentPage);
    "
  />
  <v-no-data v-if="costList.length == 0 && !loader"></v-no-data>
  <!-- Loader Component -->
  <v-eng-loader v-if="loader"></v-eng-loader>
</template>
<script lang="ts" src="./EstimatedCost.ts"></script>
