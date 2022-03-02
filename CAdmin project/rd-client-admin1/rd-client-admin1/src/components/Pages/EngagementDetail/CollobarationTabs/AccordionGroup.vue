<template>
  <vue-collapsible-panel-group accordion>
    <vue-collapsible-panel :expanded="false" v-for="data in innerRow" :key="data.id">
      <template #title>
        <label class="inline-flex items-center">
          <v-checkbox
            class="form-checkbox h-4 w-4 rounded-none"
            :is-checked="data.selected == true"
            @change="selectHierachy(data, $event.target.checked)"
          />
          <span class="ml-3 text-fs14 text-menuselectionlabel">{{ data.field_name }}</span>
        </label>
        <span
          v-if="getCollabCount(data.field, data.field_name) != 0"
          class="
            bg-blue
            w-20px
            h-20px
            rounded-radius100
            text-white
            absolute
            right-12
            flex
            justify-center
            items-center
            text-fs11
            px-2
            py-2
          "
          >{{ getCollabCount(data.field, data.field_name) }}</span
        >
      </template>
      <template #content>
        <!-- -->
        <div class="pl-8" v-if="data.users && data.users.length != 0">
          <label
            v-for="(user, index) in data.users"
            :key="index"
            class="
              inline-flex
              items-center
              border-b border-probor
              w-full
              pb-2
              mb-2
            "
          >
            <v-checkbox
              class="form-checkbox h-4 w-4 rounded-none mr-2"
              :is-checked="data.selected == true"
              :id="index + '_user_id_' + user.user_id"
              :value="user.user_id"
              @change="selectHierachy(user, $event.target.checked)"
            />
            &nbsp; &nbsp;
            <v-profile
              :small-profile="true"
              :user-info="{
                letter_name: user.short_name,
                full_name: user.full_name,
                id: '',
              }"
              class="my-4"
            ></v-profile>
            <span class="text-fs14 text-secgrey"> {{ data.full_name }} </span>
          </label>
        </div>
        <div
          v-if="data.users && data.users.length == 0"
          class="
            flex
            items-center
            justify-center
            text-red-400
            my-2
            font-semibold
            text-fs15
          "
        >
          <p>No Data Found</p>
        </div>
        <div v-else-if="data.child && data.child.length != 0">
          <col-filter :bind-row="data.child" @user-data="getCheckedData($event)"></col-filter>
        </div>
      </template>
    </vue-collapsible-panel>
  </vue-collapsible-panel-group>
</template>
<script lang="ts">
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
import { defineAsyncComponent, defineComponent, onBeforeMount, ref } from 'vue';

const CollFilter = defineAsyncComponent(
  () => import('@/components/Pages/EngagementDetail/CollobarationTabs/AccordionGroup.vue') as any,
);
export default defineComponent({
  name: 'AccordionGroup',
  inheritAttrs: false,
  emit: ['user-data'],
  components: {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
    'col-filter': CollFilter,
  },

  props: {
    bindRow: {
      default: [],
    },
    countData: {
      default: [],
    },
  },

  setup(props) {
    // On Before mount Function
    const innerRow = ref([]) as any;
    const getCountData = ref(props.countData) as any;
    const filterUserData = ref([]) as any;
    const getCollabCount = (type: any = '', fieldname: any = '') => {
      fieldname = fieldname.replace(/[\. ,_/.:-]+/g, '');
      if (type === 'team') {
        var filterarea = [];
        return filterarea.length;
      } else if (type === 'region') {
        let filterarea = [];
        filterarea = getCountData.value.filter((a: any) => a.region.fieldname === fieldname);
        return filterarea.length;
      } else if (type === 'district') {
        let filterarea = [];
        filterarea = getCountData.value.filter((a: any) => a.district.fieldname === fieldname);
        return filterarea.length;
      } else if (type === 'territory') {
        let filterarea = [];
        filterarea = getCountData.value.filter((a: any) => a.territory.fieldname === fieldname);
        return filterarea.length;
      }
      return 0;
    };

    onBeforeMount(async () => {
      innerRow.value = props.bindRow;
      console.log('bindRow', props.bindRow);
    });

    return {
      innerRow,
      getCountData,
      getCollabCount,
      filterUserData,
    };
  },

  methods: {
    selectHierachy(data: any, event: any) {
      console.log('Acc data', data);
      data.selected = event;
      if (data.user_id != null) {
        // event true/false user push/splice
        if (event === true) {
          this.filterUserData.push(data.user_id);
        } else {
          this.filterUserData.splice(this.filterUserData.indexOf(data.user_id), 1);
        }
      } else if (data.users && data.users.length > 0) {
        data.users.forEach((value: any) => {
          if (value.user_id != null) {
            if (event === true) {
              this.filterUserData.push(value.user_id);
            } else {
              this.filterUserData.splice(this.filterUserData.indexOf(value.user_id), 1);
            }
          }
        });
      } else if (data.child && data.child.length > 0) {
        console.log('else if', data);
        data.child.forEach((value: any) => {
          value.selected = event;
          if (Array.isArray(value.users) && value.users.length > 0) {
            value.users.forEach((uservalue: any) => {
              if (event === true) {
                this.filterUserData.push(uservalue.user_id);
              } else {
                this.filterUserData.splice(this.filterUserData.indexOf(uservalue.user_id), 1);
              }
            });
          } else if (value.child && value.child.length > 0) {
            this.selectHierachy(value, event);
          }
        });
      }
      this.$emit('user-data', this.filterUserData);
      console.log('FINAL filterUserData', this.filterUserData);
    },
    is_user_id_exist(userId: any) {
      console.log('is_user_id_exist', userId);
      if (
        this.filterUserData &&
        this.filterUserData.length > 0 &&
        this.filterUserData.some((userrow: any) => userrow === userId)
      ) {
        console.log('Exist Checked', userId);
        return true;
      } else {
        return false;
      }
    },

    getCheckedData(event: any) {
      this.$emit('user-data', event);
    },
  },
});
</script>
