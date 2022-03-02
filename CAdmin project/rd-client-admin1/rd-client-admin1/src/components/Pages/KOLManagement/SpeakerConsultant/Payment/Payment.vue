<template>
  <div class="flex bg-lite-blue-bg">
    <div class="flex w-full h-full justify-between">
      <div class="w-full text-semired">
        <!-- HEADER START -->
        <div class="flex justify-between">
          <div>
            <v-breadcrumb
              breadcrumb="KOL Management"
              subbreadcrumb="Speaker Consultant"
              speakerbreadcrumb="Payments"
            ></v-breadcrumb>
          </div>
        </div>
        <v-card-box>
          <div class="flex justify-between items-center border-b border-searchbox -m-4 p-4 mb-8">
            <v-title menu="Speaker / Consultant" class="-mb-0"></v-title>
            <div class="flex items-center">
              <a class="flex items-center text-fs13 cursor-pointer text-bluetxt" @click="consultant"
                ><img src="@/assets/backarrowblue.svg" class="mr-2" />Back</a
              >
            </div>
          </div>

          <div class="flex justify-between">
            <ca-left-menu></ca-left-menu>
            <div class="w-spright">
              <!--  -->
              <v-title menu="Payments" class=""></v-title>
              <div>
                <div class="flex mb-5">
                  <div class="w-2/4 mr-3">
                    <div
                      class="flex flex-col h-full items-stretch justify-start border border-1.0263px rounded-radius40 p-4 border-searchbox"
                    >
                      <h5 class="text-fs16 font-bold text-secgrey mb-3">
                        Payment Summary
                      </h5>
                      <div
                        class="bg-blue rounded-radius40 font-bold p-4 text-fs14 flex justify-between filter drop-shadow-5xl"
                      >
                        <div class="flex flex-col">
                          <p class="text-white">Total</p>
                          <span class="text-fs20 text-white">$12,335</span>
                        </div>
                        <div
                          style="
                            width: 70px !important;
                            display: flex;
                            align-items: center;
                            overflow: hidden;
                          "
                        >
                          <svg width="61" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1 8.2C1.70238 11.8 4.5 18.5 11 18C17.5 17.5 18.2786 1 29.6571 1C41.0357 1 41.0357 20.0286 60 3.57143"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <ul class="mt-3 text-greytxt text-fs14">
                        <li class="flex justify-between items-center py-2">
                          <p class="flex items-center">
                            <img src="@/assets/estimatedcost.svg" class="bg-pink p-2 mr-2 rounded-radius100" />RECEIVED
                          </p>
                          <span class="font-semibold text-base">$500</span>
                        </li>
                        <li class="flex justify-between items-center py-3">
                          <p class="flex items-center">
                            <img
                              src="@/assets/plannedcost.svg"
                              class="bg-lightgreen p-2 mr-2 rounded-radius100"
                            />OUTSTANDING
                          </p>
                          <span class="font-semibold text-base">$11,835</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!--second  -->
                  <div class="w-4/5 mr-3">
                    <v-card-inner-box
                      class="relative h-full"
                      title="Payment Info"
                      :titleicon="require('@/assets/screen/payment.svg')"
                    >
                      <div class="inline-flex items-center cursor-pointer justify-center absolute top-1.5 right-2 w-6 h-6">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.7291 3.69778L11.1764 1.07556C11.0077 0.904029 10.7794 0.807739 10.5414 0.807739C10.3035 0.807739 10.0752 0.904029 9.90651 1.07556L0.85671 10.3111L0.0304428 13.9556C0.00193929 14.0888 0.00291641 14.2268 0.0333026 14.3596C0.0636889 14.4924 0.122717 14.6166 0.206074 14.7231C0.289431 14.8296 0.395012 14.9157 0.515104 14.9751C0.635195 15.0346 0.766764 15.0658 0.900198 15.0667C0.962372 15.0731 1.02502 15.0731 1.0872 15.0667L4.69233 14.2222L13.7291 4.99556C13.8969 4.82316 13.9911 4.58986 13.9911 4.34667C13.9911 4.10347 13.8969 3.87018 13.7291 3.69778ZM4.25745 13.4222L0.878454 14.1467L1.64819 10.76L8.41923 3.86667L11.0285 6.53333L4.25745 13.4222ZM11.6112 5.88889L9.00197 3.22222L10.5153 1.68444L13.0811 4.35111L11.6112 5.88889Z"
                            fill="#9199A5"
                          />
                        </svg>

                        <!-- @click="isOpennotes = false" -->
                      </div>
                      <div class="grid grid-cols-4 gap-4 mb-5 pb-3 border-b border-grey">
                        <!-- FIRST -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Account Name<br />
                            <span class="text-additionalinfo font-normal">-</span>
                          </p>
                        </div>
                        <!-- SECOND -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Payment Address 1<br />
                            <span class="text-additionalinfo font-normal">1310 San Bernardino Road</span>
                          </p>
                        </div>

                        <!-- THIRD -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Payment Address 2 <br />
                            <span class="text-additionalinfo font-normal">-</span>
                          </p>
                        </div>
                        <!-- FOUR -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            City<br />
                            <span class="text-additionalinfo font-normal">Upland</span>
                          </p>
                        </div>
                      </div>
                      <!-- FISRT ROW ENDS HERE -->
                      <div class="grid grid-cols-4 gap-4 mb-5 pb-3 border-b border-grey">
                        <!-- FIRST -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            State<br />
                            <span class="text-additionalinfo font-normal">California</span>
                          </p>
                        </div>
                        <!-- SECOND -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Zip<br />
                            <span class="text-additionalinfo font-normal">91876</span>
                          </p>
                        </div>

                        <!-- THIRD -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Country<br />
                            <span class="text-additionalinfo font-normal">California</span>
                          </p>
                        </div>
                        <!-- FOUR -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Bankl Name <br />
                            <span class="text-additionalinfo font-normal">US Bank</span>
                          </p>
                        </div>
                      </div>
                      <div class="grid grid-cols-4 gap-4 mb-3">
                        <!-- FIRST -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            SWIFT Code<br />
                            <span class="text-additionalinfo font-normal items-center flex">****-***-5555</span>
                          </p>
                        </div>
                        <!-- SECOND -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Bank Account Number<br />
                            <span class="text-additionalinfo font-normal">****-****-****-5555</span>
                          </p>
                        </div>

                        <!-- THIRD -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Routing Number<br />
                            <span class="text-additionalinfo font-normal">4528975</span>
                          </p>
                        </div>
                        <!-- FOUR -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Bankl Name <br />
                            <span class="text-additionalinfo font-normal">US Bank</span>
                          </p>
                        </div>
                      </div>
                      <!-- SECOND ROW ENDS HERE -->
                    </v-card-inner-box>
                  </div>
                  <!--second  -->
                  <!-- third box -->
                  <div class="w-3/5">
                    <v-card-inner-box
                      class="relative h-full"
                      title="W9 Info"
                      :titleicon="require('@/assets/screen/w9form.svg')"
                    >
                      <div class="inline-flex items-center cursor-pointer justify-center absolute top-1.5 right-2 w-6 h-6">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.7291 3.69778L11.1764 1.07556C11.0077 0.904029 10.7794 0.807739 10.5414 0.807739C10.3035 0.807739 10.0752 0.904029 9.90651 1.07556L0.85671 10.3111L0.0304428 13.9556C0.00193929 14.0888 0.00291641 14.2268 0.0333026 14.3596C0.0636889 14.4924 0.122717 14.6166 0.206074 14.7231C0.289431 14.8296 0.395012 14.9157 0.515104 14.9751C0.635195 15.0346 0.766764 15.0658 0.900198 15.0667C0.962372 15.0731 1.02502 15.0731 1.0872 15.0667L4.69233 14.2222L13.7291 4.99556C13.8969 4.82316 13.9911 4.58986 13.9911 4.34667C13.9911 4.10347 13.8969 3.87018 13.7291 3.69778ZM4.25745 13.4222L0.878454 14.1467L1.64819 10.76L8.41923 3.86667L11.0285 6.53333L4.25745 13.4222ZM11.6112 5.88889L9.00197 3.22222L10.5153 1.68444L13.0811 4.35111L11.6112 5.88889Z"
                            fill="#9199A5"
                          />
                        </svg>

                        <!-- @click="isOpennotes = false" -->
                      </div>
                      <div class="grid grid-cols-2 gap-2 mb-5 pb-3 border-b border-grey">
                        <!-- FIRST -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Tax Classifaction<br />
                            <span class="text-additionalinfo font-normal">Individual / Sole proprietor</span>
                          </p>
                        </div>
                        <!-- SECOND -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Name (as shown on tax return)<br />
                            <span class="text-additionalinfo font-normal">Jaime Ackerman, MD</span>
                          </p>
                        </div>
                      </div>
                      <!-- FISRT ROW ENDS HERE -->
                      <div class="grid grid-cols-2 gap-2 mb-5 pb-3 border-b border-grey">
                        <!-- THIRD -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Business Name<br />
                            <span class="text-additionalinfo font-normal">rsanders </span>
                          </p>
                        </div>
                        <!-- FOUR -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            Employer Identification Number<br />
                            <span class="text-additionalinfo font-normal">345279</span>
                          </p>
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-2 mb-5">
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            SSN<br />
                            <span class="text-additionalinfo font-normal">***-**-5555 </span>
                          </p>
                        </div>
                        <!-- FOUR -->
                        <div>
                          <p class="text-greytxt font-semibold text-fs13 leading-loose">
                            W9 Form<br />
                            <span class="text-additionalinfo font-normal"
                              ><svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.4523 13.4625L12.4594 13.4297C12.5953 12.8695 12.7664 12.1711 12.6328 11.5383C12.5437 11.0391 12.1758 10.8445 11.8617 10.8305C11.4914 10.8141 11.1609 11.025 11.0789 11.332C10.9242 11.8945 11.0625 12.6633 11.3156 13.643C10.9969 14.4023 10.4883 15.5062 10.1156 16.1625C9.42188 16.5211 8.49141 17.0742 8.35312 17.7727C8.325 17.9016 8.35781 18.0656 8.43516 18.2133C8.52187 18.3773 8.66016 18.5039 8.82187 18.5648C8.89219 18.5906 8.97656 18.6117 9.075 18.6117C9.4875 18.6117 10.1555 18.2789 11.0461 16.7508C11.182 16.7063 11.3227 16.6594 11.4586 16.6125C12.0961 16.3969 12.757 16.1719 13.3547 16.0711C14.0156 16.425 14.768 16.6523 15.2789 16.6523C15.7852 16.6523 15.9844 16.3523 16.0594 16.1719C16.1906 15.8555 16.1273 15.457 15.9141 15.2438C15.6047 14.9391 14.8523 14.8594 13.6805 15.0047C13.1039 14.6531 12.7266 14.175 12.4523 13.4625ZM9.88125 17.0227C9.55547 17.4961 9.30937 17.7328 9.17578 17.8359C9.33281 17.5477 9.63984 17.243 9.88125 17.0227ZM11.9344 11.5031C12.0563 11.7117 12.0398 12.3422 11.9461 12.6609C11.8313 12.1945 11.8148 11.5336 11.8828 11.4562C11.9016 11.4586 11.918 11.4727 11.9344 11.5031ZM11.8969 14.3273C12.1477 14.7609 12.4641 15.1336 12.8133 15.4102C12.307 15.525 11.8453 15.7148 11.4328 15.8836C11.3344 15.9234 11.2383 15.9633 11.1445 16.0008C11.4563 15.4359 11.7164 14.7961 11.8969 14.3273ZM15.5438 15.8625C15.5461 15.8672 15.5484 15.8742 15.5344 15.8836H15.5297L15.525 15.8906C15.5063 15.9023 15.3141 16.0148 14.4867 15.6891C15.4383 15.6445 15.5414 15.8602 15.5438 15.8625ZM20.0297 6.76406L14.9859 1.72031C14.8453 1.57969 14.6555 1.5 14.4562 1.5H4.5C4.08516 1.5 3.75 1.83516 3.75 2.25V21.75C3.75 22.1648 4.08516 22.5 4.5 22.5H19.5C19.9148 22.5 20.25 22.1648 20.25 21.75V7.29609C20.25 7.09687 20.1703 6.90469 20.0297 6.76406ZM18.5203 7.64062H14.1094V3.22969L18.5203 7.64062ZM18.5625 20.8125H5.4375V3.1875H12.5156V8.25C12.5156 8.51107 12.6193 8.76145 12.8039 8.94606C12.9885 9.13066 13.2389 9.23438 13.5 9.23438H18.5625V20.8125Z"
                                  fill="#F92461"
                                />
                              </svg>
                            </span>
                          </p>
                        </div>
                      </div>
                      <!-- SECOND ROW ENDS HERE -->
                    </v-card-inner-box>
                  </div>
                  <!-- third box -->
                </div>
              </div>
              <!-- FILTER -->
              <div class="flex justify-between items-center">
                <h3
                  class="block text-left text-fs20 block text-greytxt leading-loginlabellineheight font-semibold mb-4 -mb-0 text-greytxt font-semibold tracking-tight"
                >
                  Payment Records
                </h3>
                <div
                  class="relative bg-graymenu cursor-pointer flex justify-center rounded-radius4 px-4 py-3 items-center shadow-filtershadow mr-4"
                  @click="showspkengfilter"
                >
                  <img src="@/assets/filter.svg" class="w-4 mr-2" />
                  <span class="ml-1 mr-2 text-greytxt text-fs13">Filters</span>
                  <span
                    v-if="filterCount && filterCount.length != 0"
                    class="bg-blue w-20px h-20px rounded-radius100 text-white flex justify-center items-center text-fs11 px-2 py-2"
                    >{{ filterCount && filterCount.length }}</span
                  >
                </div>
              </div>
              <!-- FILTER -->
              <div class="table-responsive mt-8 spkengagementtable">
                <!-- <tree-table class="table treetablewrp" :columns="columns" :table-data="tableData">
                  <template #nodeTemplate="nodeProps">
                    <utilization-data v-bind="nodeProps" :keys-to-calculate="keysToCalculate" :columns="columns"/>
                  </template>
                </tree-table> -->

                <VTable
                  class="w-full tabletreewrp text-spkfilter  text-fs14"
                  :data="payment"
                  :hide-sort-icons="true"
                  :page-size="pagePerRow"
                >
                  <template #head>
                    <tr>
                      <VTh sort-key="contractname"><span class="w-150px inline-block">Client</span></VTh>
                      <VTh sort-key="contproduct">Eng ID</VTh>
                      <VTh sort-key="contstartdate">Date & Time </VTh>
                      <VTh sort-key="contenddate">Amount</VTh>
                      <VTh sort-key="contamount">Engagement Type</VTh>
                      <VTh sort-key="contsoftcapamount"
                        ><span class="w-100px inline-block whitespace-normal">Payment type</span></VTh
                      >
                      <VTh sort-key="contsoftcap">Status</VTh>
                      <VTh sort-key="contutilization">Attachment</VTh>
                      <!-- <VTh sortKey="contremainingcap"
                        ><span class="w-100px inline-block whitespace-normal"
                          >Total Meeting</span
                        ></VTh
                      >
                      <VTh sortKey="contremainingsoftcap"
                        ><span class="w-100px inline-block whitespace-normal"
                          >Total Amount (at Salesforce level)</span
                        ></VTh
                      > -->
                    </tr>
                  </template>
                  <template #body="{ rows }">
                    <tr>
                      <td>
                        <div class="flex items-center">
                          <img src="@/assets/utiopen.svg" class="mr-3 cursor-pointer" />
                          US
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <!-- <td></td>
                      <td></td> -->
                    </tr>
                    <tr class="child1">
                      <td>
                        <div class="flex items-center">
                          <!-- <img src="@/assets/utiopen.svg" class="mr-3 cursor-pointer" /> -->
                        </div>
                      </td>
                      <td>230</td>
                      <td>July 20, 2021</td>
                      <td>$125</td>
                      <td>Immediate</td>
                      <td>Bank Transfer</td>
                      <td>
                        <v-smallbutton class="bg-pink text-lightpink py-2 px-3 rounded-radius6 cursor-default"
                          >Outstanding</v-smallbutton
                        >
                      </td>
                      <td align="center" class="text-center">
                        <div class="text-center flex items-center justify-center">
                          <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.26335 5.49646L2.1695 13.3108C1.75764 14.8479 1.97326 16.4856 2.7689 17.8637C3.56455 19.2418 4.87507 20.2474 6.41214 20.6593C7.94922 21.0711 9.58695 20.8555 10.9651 20.0599C12.3432 19.2642 13.3488 17.9537 13.7606 16.4166L16.3488 6.75737C16.6234 5.73266 16.4796 4.64083 15.9492 3.7221C15.4188 2.80336 14.5451 2.13297 13.5204 1.85839C12.4957 1.58382 11.4038 1.72756 10.4851 2.258C9.56636 2.78843 8.89597 3.6621 8.6214 4.68682L6.24492 13.556C6.17694 13.8096 6.1596 14.0742 6.19388 14.3346C6.22816 14.595 6.3134 14.8461 6.44472 15.0736C6.57604 15.301 6.75088 15.5004 6.95925 15.6603C7.16762 15.8202 7.40544 15.9375 7.65913 16.0054V16.0054C8.17149 16.1427 8.7174 16.0709 9.17677 15.8056C9.63614 15.5404 9.97134 15.1036 10.1086 14.5912L11.9675 7.65395"
                              stroke="#328DFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </td>
                      <!-- <td>658</td>
                      <td>$10,000</td> -->
                    </tr>

                    <tr class="child1">
                      <td>
                        <div class="flex items-center">
                          <!-- <img src="@/assets/utiopen.svg" class="mr-3 cursor-pointer" /> -->
                        </div>
                      </td>
                      <td>210</td>
                      <td>July 10, 2021</td>
                      <td>$350</td>
                      <td>Pre-Scheduled</td>
                      <td>Cheque</td>
                      <td>
                        <v-smallbutton class="bg-lightyellow text-yellow py-2 px-3 rounded-radius6 cursor-default"
                          >Pending
                        </v-smallbutton>
                      </td>
                      <td class="text-center">
                        <div class="text-center flex items-center justify-center">
                          <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4.26335 5.49646L2.1695 13.3108C1.75764 14.8479 1.97326 16.4856 2.7689 17.8637C3.56455 19.2418 4.87507 20.2474 6.41214 20.6593C7.94922 21.0711 9.58695 20.8555 10.9651 20.0599C12.3432 19.2642 13.3488 17.9537 13.7606 16.4166L16.3488 6.75737C16.6234 5.73266 16.4796 4.64083 15.9492 3.7221C15.4188 2.80336 14.5451 2.13297 13.5204 1.85839C12.4957 1.58382 11.4038 1.72756 10.4851 2.258C9.56636 2.78843 8.89597 3.6621 8.6214 4.68682L6.24492 13.556C6.17694 13.8096 6.1596 14.0742 6.19388 14.3346C6.22816 14.595 6.3134 14.8461 6.44472 15.0736C6.57604 15.301 6.75088 15.5004 6.95925 15.6603C7.16762 15.8202 7.40544 15.9375 7.65913 16.0054V16.0054C8.17149 16.1427 8.7174 16.0709 9.17677 15.8056C9.63614 15.5404 9.97134 15.1036 10.1086 14.5912L11.9675 7.65395"
                              stroke="#328DFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </td>
                      <!-- <td>658</td>
                      <td>$10,000</td> -->
                    </tr>
                    <tr>
                      <td>
                        <div class="flex items-center">
                          <img src="@/assets/uticlose.svg" class="mr-3 cursor-pointer" />
                          Ex US
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <!-- <td></td>
                      <td></td> -->
                    </tr>
                  </template>
                </VTable>
              </div>
            </div>
          </div>

          <!--  -->
        </v-card-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Payment.ts"></script>
