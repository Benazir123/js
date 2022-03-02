import { defineComponent, ref, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'AccountSetting',

  data() {
    return {
      opencontentTab: 1,
      openaccessTab: 1,
      openallTab: 1
    }
  },
  methods: {
    togglecontentTabs: function(tabNumber: number) {
      this.opencontentTab = tabNumber;
    },
    toggleaccessTabs: function(tabNumber: number) {
      this.openaccessTab = tabNumber;
    },
    toggleaallTabs: function(tabNumber: number) {
      this.openallTab = tabNumber;
    },
  }
})