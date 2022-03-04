<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <team-table/>
      </div>
    </div>
  </div>
</template>

<script>
import TeamTable from './components/TeamTable.vue';
export default {
  name: "tableteam",
  components: {
   TeamTable
  },
};
</script>
