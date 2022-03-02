<template>
   <tr class="">
    <td colspan="11" class="p-3">
        <div class="p-4">
           <div class=" eng-det  hcpbord loginnertab">
                        <VTable :data="logdetailinnertab" class="w-full" :filters="filters" :hideSortIcons="true">
                          <template #head>
                            <tr>
                              <VTh sortKey="nosorting" #default="{}"> <div class="">KOL Name</div> </VTh>

                              <VTh sortKey="nosorting"> KOL Degree</VTh>
                              <VTh sortKey="nosorting"> KOL Specialty </VTh>
                              <VTh sortKey="nosorting"># of Hours</VTh>

                              <VTh sortKey="nosorting">Amount</VTh>
                              <VTh sortKey="nosorting">Payment type </VTh>
                              <VTh sortKey="nosorting"
                                >Invoice #
                              </VTh>
                              <VTh sortKey="nosorting">Version </VTh>
                              <VTh sortKey="nosorting">Status </VTh>
                              <VTh sortKey="nosorting">Action</VTh>
                              <VTh sortKey="arrow"></VTh>
                            </tr>
                          </template>
                         <template #body="{ rows }">
                            <tr v-for="row in rows" :key="row.id">
                              <td>
                                <div class="flex items-center w-40">
                                  <div class="flex-shrink-0 w-8 h-8">
                                    <component
                                      :is="'v-profile'"
                                      :key="imgErrorSpk"
                                      :small-profile="true"
                                      :side-menu="true"
                                      :user-info="{
                                        letter_name: 'TA',
                                        full_name: 'Tala Ayyad',
                                        img: '',
                                        errorImg: '',
                                        id: '',
                                      }"
                                      @errorImg="errorImg(row.engagement_owner.user)"
                                    ></component>
                                  </div>
                                  <div class="ml-3">
                                    <p class="whitespace-no-wrap">
                                      {{ row.owner }}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="">{{ row.degree }}</div>
                              </td>
                              <td>
                                {{ row.specality }}
                              </td>
                              <td>
                                <div class="w-10">{{ row.hours }}</div>
                              </td>
                              <td>
                                {{ row.amount }}
                              </td>
                              <td >
                                {{ row.paymenttype }}
                              </td>

                              <td>{{ row.invoice }}</td>

                          
                              <td>
                                <div class="my-1">
                                  <select
                                    class="
                                      border border-graymenu
                                      outline-none
                                      focus:border-graymenu focus:ring-0 focus:ring-indigo-200 focus:ring-opacity-0
                                      rounded-md
                                      shadow-none
                                      text-sm
                                      py-2
                                      block
                                      w-auto
                                      leading-normal
                                      text-dashselect text-fs14
                                      rounded-radius5
                                    "
                                  >
                                    <option selected="selected">1</option>
                                    <option>1</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </td>
                               <td>   <span :class="'btn ' + engStatusColor(row.status)"> {{ row.status }}</span></td>
                              <td>
                                <div class="flex">
                                  <img src="@/assets/views.svg" class="cursor-pointer" @click="openLogdrawer()" />
                                  <img src="@/assets/editblue.svg" class="ml-2 cursor-pointer" @click="openaddLogdrawer()" />
                                </div>
                              </td>
                            </tr>
                          </template>
                        </VTable>
                      </div>
        </div>
                         </td>
      </tr>
</template>
<script lang="ts" src="./LogisticsInnerRow.ts"></script>
