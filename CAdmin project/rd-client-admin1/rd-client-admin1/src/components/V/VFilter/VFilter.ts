import ServiceEngagement from '@/service/ServiceEngagement/ServiceEngagement';
import { defineComponent, ref } from 'vue';
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
export default defineComponent({
  name: 'VFilter',
  inheritAttrs: false,
  emits: ['apply-filter', 'clear-filter'],
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  },
  props: {
    engFilter: {
      type: Array,
      defalut: [],
    },
  },
  data() {
    return {
      hidefilter: false,
    };
  },

  setup(props) {
    const filterData = ref([]) as any;
    const loader = ref(false) as any;
    filterData.value = props.engFilter;
    console.log('filterData', filterData);
    // Check Filter Object and Call API
    filterData.value.forEach(async (filterlist: any) => {
      loader.value = true;
      if (filterlist['filter-name'] === 'product-list') {
        const parms = 'attributes=product_name,id';
        const res = await ServiceEngagement.productList(parms);
        if (res.is_success) {
          filterlist.filterLabel = res.result;
        }
      }
      if (filterlist['filter-name'] === 'topic-list') {
        const parms = 'attributes=topic_title,id';
        const res = await ServiceEngagement.topicList(parms);
        if (res.is_success) {
          filterlist.filterLabel = res.result;
        }
      }
      if (filterlist['filter-name'] === 'meeting-type-list') {
        const parms = 'attributes=topic_title,id';
        const res = await ServiceEngagement.engTypeList(parms);
        if (res.is_success) {
          filterlist.filterLabel = res.result;
        }
      }
      if (filterlist['filter-name'] === 'status-list') {
        const parms = 'attributes=status,id';
        const res = await ServiceEngagement.engStatusList(parms);
        if (res.is_success) {
          filterlist.filterLabel = res.result;
        }
      }
      if (filterlist['filter-name'] === 'engagement-type-list') {
        const parms = 'attributes=type,id';
        const res = await ServiceEngagement.engMeetingTypeList(parms);
        if (res.is_success) {
          filterlist.filterLabel = res.result;
        }
      }
      loader.value = false;
    });
    console.log('filterData', filterData);
    return {
      filterData,
      loader,
    };
  },

  methods: {
    getFilterValue(checkvalue: any, filterrow: any, isChecked: any) {
      this.filterData.forEach((list: any) => {
        console.log('list', list);
        console.log('filterrow.id', list);
        if (filterrow.id === list.id) {
          list.filterLabel.forEach((ans: any, i: any) => {
            if (ans.id === checkvalue.id && isChecked) {
              if (list.isRadio) {
                list.chooseNames = [];
                list.chooseId = [];
              }
              ans.choosevalue = true;
              list.chooseNames.push(checkvalue.label);
              list.chooseId.push(checkvalue.id);
            } else if (ans.id === checkvalue.id && isChecked === false) {
              ans.choosevalue = false;
              list.chooseNames.splice(list.chooseNames.indexOf(checkvalue.label), 1);
              list.chooseId.splice(list.chooseId.indexOf(checkvalue.id), 1);
            }
          });
        }
      });
      console.log('this.filterData', this.filterData);
    },
    // Apply Filter
    applyFilter() {
      console.log('applyFilter', this.filterData);
      this.$emit('apply-filter', { array: this.filterData, type: 'apply' });
    },
    // Clear Filter
    clearAllFilter() {
      console.log('clearfilter', this.filterData);
      this.filterData.forEach((list: any) => {
        list.filterLabel.forEach((ans: any, i: any) => {
          list.chooseNames = [];
          list.chooseId = [];
        });
      });
      this.$emit('apply-filter', { array: [], type: 'clear' });
    },
    // Clear Filter
    clearFilter(id: any) {
      console.log('clearfilter', id);
      console.log('clearfilter', this.filterData);
      this.filterData.forEach((list: any) => {
        if (list.id === id) {
          list.filterLabel.forEach((ans: any, i: any) => {
            list.chooseNames = [];
            list.chooseId = [];
          });
        }
      });
      // this.$emit('apply-filter', { array: this.filterData, type: 'apply' })
    },

    // checkFiltertype
    checkFilterType(data: any) {
      console.log('checkFilterType', data);
      // if(data == '')
    },
  },
});
