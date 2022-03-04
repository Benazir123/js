<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <system-info-table/>
      </div>
    </div>
  </div>
</template>

<script>
import SystemInfoTable from './components/SystemInfoTable.vue';
export default {
  name: "tablesysteminfo",
  components: {
    SystemInfoTable,
  },
};
</script>
