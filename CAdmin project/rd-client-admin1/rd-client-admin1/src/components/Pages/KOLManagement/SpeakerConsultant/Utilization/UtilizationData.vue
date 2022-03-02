<template>
  <div class="row">
    <div class="cell cursor-pointer" :style="{ 'flex-grow': getWidth('open_button') }" @click="toggle">
      <div v-if="!isOpen" class="closed">
        <img src="@/assets/uticlose.svg" />
      </div>
      <div v-if="isOpen" class="open">
        <img src="@/assets/utiopen.svg" />
      </div>
    </div>
    <div v-for="key in order" :key="key" class="cell" :style="{ 'flex-grow': getWidth(key) }">
      <div v-if="rowData[key] == 'Active'" class="input">button</div>
      <div v-else>{{ rowData[key] }}</div>
    </div>
    <div class="cell" :style="{ 'flex-grow': getWidth('actions') }">
      <div class="action green" @click="addNodeAndOpen()">✚</div>
      <div class="action red" @click="deleteNode(rowData.uuid)">✖</div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'UtilizationData',
  props: {
    rowData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    defaultOrder: {
      type: Array,
      default: () => {
        return [];
      },
    },
    isKeyEditable: {
      type: Function,
      default: () => {},
    },
    keysToCalculate: {
      type: Array,
      default: () => {
        return [];
      },
    },
    onOpen: {
      type: Function,
      default: () => {},
    },
    onToggle: {
      type: Function,
      default: () => {},
    },
    deleteNode: {
      type: Function,
      default: () => {},
    },
    addNode: {
      type: Function,
      default: () => {},
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data: function() {
    return {
      isOpen: false,
    };
  },
  computed: {
    order: function() {
      return this.defaultOrder.slice(1, 9);
    },
  },
  watch: {
    'rowData.children': {
      deep: true,
      handler() {
        this.calculateValuesFromChildren();
      },
    },
  },
  methods: {
    calculateValuesFromChildren() {
      this.keysToCalculate.forEach(key => {
        this.rowData[key] = this.rowData.children.reduce((acc, child) => acc + child[key], 0);
      });
    },
    addNodeAndOpen() {
      this.addNode(this.rowData.children);
      this.open();
    },
    open() {
      this.isOpen = true;
      this.onOpen();
    },
    toggle() {
      this.isOpen = !this.isOpen;
      this.onToggle();
    },
    getWidth(columnId) {
      //return this.columns.find((col) => col.id == columnId ).width
      //return 10;
    },
  },
});
</script>
<style scoped>
input {
  border: none;
  width: 100%;
  margin: 0;
  padding: 0;
}
.open-button {
  float: left;
  display: inline;
  margin-right: 10px;
}
.action {
  display: inline-block;
  margin: 0.125rem;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
