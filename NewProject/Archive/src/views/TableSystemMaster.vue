<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <system-master-table/>
      </div>
    </div>
  </div>
</template>

<script>
import SystemMasterTable from './components/SystemMasterTable.vue';
export default {
  name: "tablesystemmaster",
  components: {
    SystemMasterTable,
  },
};
</script>
