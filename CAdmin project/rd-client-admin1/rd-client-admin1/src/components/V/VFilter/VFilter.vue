<template>
  <div
    class="
      absolute
      top-full
      mt-2
      bg-white
      z-30
      rounded-radius10
      shadow-filtershadow
      w-6/12
      right-0
    "
  >
    <h3
      class="
        p-4
        px-8
        border-b border-opacity-25
        text-fs18
        block
        border-filtertitle
        font-bold
        text-black
      "
    >
      Filter
    </h3>

    <div class="scroller scrollheight mb-2">
      <vue-collapsible-panel-group accordion>
        <vue-collapsible-panel v-for="data in filterData" :key="data" :expanded="false">
          <template #title>
            {{ data.title }}
            <span
              v-if="data.chooseId && data.chooseId.length != 0"
              class="
                bg-blue
                w-5
                h-5
                ml-2
                rounded-radius100
                text-white
                flex
                justify-center
                items-center
                text-fs11
              "
            >
              {{ data.chooseId && data.chooseId.length }}</span
            >
          </template>

          <template #content>
            <div v-if="data.filterLabel && data.filterLabel.length != 0">
              <label
                v-for="filterlabel in data.filterLabel"
                :key="filterlabel"
                class="
                  flex
                  pb-3
                  mb-3
                  border-b border-filtercheckbox
                  cursor-pointer
                "
              >
                <v-checkbox
                  class="
                    form-checkbox
                    h-4
                    w-4
                    rounded-radius5
                    relative
                    outline-none
                    shadow-none
                    text-textblue
                    ring-0
                  "
                  :is-checked="data.chooseId && data.chooseId.length != 0 && data.chooseId.indexOf(filterlabel.id) > -1"
                  @change="getFilterValue(filterlabel, data, $event.target.checked)"
                />
                <!--  checked="checked" -->
                <!-- <span class="ml-3 text-fs14 text-menuselectionlabel"
                >(FULL PROMO DECK) A Novel Treatment Option For
                Relapsed/Refractory Marginal Zone and Follicular Lymphoma</span
              > -->
                <span class="ml-3 text-fs12 text-greytxt" v-html="filterlabel.label"> </span>
              </label>
            </div>

            <div
              v-if="data.filterLabel && data.filterLabel.length == 0"
              class="
                flex
                items-center
                justify-center
                text-red-400
                my-2
                font-semibold
                text-fs10
              "
            >
              <p>No Data Found</p>
            </div>
            <div v-if="data['filter-name'] != 'meeting-type-list'" class="flex justify-end">
              <v-smallbutton
                v-if="filterData.length > 1"
                class="
                  bg-blue
                  flex
                  rounded-radius6
                  px-3
                  py-2
                  text-fs14 text-white
                  items-center
                  mt-3
                "
                @click="clearFilter(data.id)"
                >Clear
              </v-smallbutton>
            </div>
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
    <div
      class="
        p-4
        px-2
        border-t
        text-fs18
        block
        border-opacity-25 border-filtertitle
        flex
        justify-end
      "
    >
      <v-smallbutton
        class="
          bg-clrbtn
          flex
          rounded-radius6
          text-clrtxt
          px-8
          py-2
          mr-2
          text-fs14
          items-center
          mr-4
          tracking-normal
        "
        @click="clearAllFilter"
        >Clear All</v-smallbutton
      >
      <v-smallbutton
        class="
          bg-blue
          flex
          rounded-radius6
          px-8
          py-2
          text-fs14 text-white
          items-center
          mr-7
          tracking-normal
        "
        @click="applyFilter"
        >Apply</v-smallbutton
      >
    </div>
  </div>
  <!-- Loader component -->
  <component :is="'v-loader'" v-if="loader"></component>
</template>
<script lang="ts" src="./VFilter.ts"></script>
