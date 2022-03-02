<template>
  <div>
    <div class="p-5 text-xs tablelogdrawer scroller scroll-ffsalign">
      <v-smallbutton
        class="
          float-right -mt-2 btn yellowbtn
         text-bluetxt text-fs13 font-bold bg-skyblue
                                py-1.5
                                px-3
                                rounded-radius6
                                cursor-pointer
        "
        >Print</v-smallbutton
      >
      <p class="text-greytxt mb-5 text-fs14">Date: 04/26/2021</p>
      <!-- Profile info -->
      <div class="flex items-start gap-3 spkpf">
        <div class="p-3 w-1/2 h-48 leading-6 mr-3 rounded box">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-8 h-8">
              <component
                :is="'v-profile'"
                :key="imgErrorSpk"
                :small-profile="true"
                :side-menu="true"
                :user-info="{
                  letter_name: 'JJ',
                  full_name: 'Tala Ayyad',
                  img: '',
                  errorImg: '',
                  id: '',
                }"
              ></component>
            </div>
            <div class="ml-3">
              <p class="whitespace-no-wrap text-greytxt">
                <b>James Jensen, MD </b><br />
                Atrium Health, University of North Carolina, Charlotte
              </p>
            </div>
          </div>

          <p class="text-maptooltipcon">1025 Morehead Medical Dr</p>
          <div class="flex text-maptooltipcon">
            <img src="@/assets/phonecall.svg" />
            <p class="ml-2">Phone: 352-745-6767</p>
          </div>
          <div class="flex text-maptooltipcon">
            <img src="@/assets/emailcall.svg" />
            <p class="ml-2 color">jamesjensen@atriumhealth.org</p>
          </div>
        </div>
        <div class="borlog"></div>
        <div class="p-3 w-1/2 h-48 leading-6 ml-3 rounded box">
          <p class="text-greytxt font-semibold">To</p>
          <p class="text-greytxt font-semibold">Salix Pharmaceuticals</p>
          <p class="text-maptooltipcon">400 Somerset Corporate Boulevard</p>
          <p class="text-maptooltipcon">Bridgewater, NJ 08807 USA</p>
        </div>
      </div>

      <!-- table starts -->
      <div class="rounded-2xl overflow-hidden mt-3">
          <table class="w-full">
            <thead>
              <tr>
                <th class="p-2">Description</th>
                <th class="p-2 text-center"><div class="w-28 text-center">Hours</div></th>
                <th class="p-2 text-center"><div class="w-28 text-center">Rate</div></th>
                <th class="p-2 text-center"><div class="w-28 text-center">Amount</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">
                  Present Xifaxan IBS-D Slide Deck to Initial Sales Traiining class virtually. Also take Q&A
                </td>
                <td class="p-2 text-right">2.00</td>
                <td class="p-2 text-right">$650.00</td>
                <td class="p-2 text-right">$1,300.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td class="text-center">Total</td>
                <td class="text-right">$1,300.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
    </div>
    <div
      class="
        p-2
        px-2
        ml-0
        mr-2
        border-t
        text-fs18
        block
        border-opacity-25 border-filtertitle
        absolute
        right-0
        bottom-0
        left-0
        flex
        justify-end
      "
    >
      <v-smallbutton
        class=" btn bluebtn
          bg-clrbtn
          flex
          rounded-radius4
          px-4
          py-2
          text-fs13 text-utilihr
          items-center
          font-normal
          mr-4
          justify-content-end
        "
        >Save
      </v-smallbutton>
      <v-smallbutton class="bg-blue py-2 px-4 rounded-radius6 font-normal text-white flex text-fs13 items-center"
        >Save and Send to KOL</v-smallbutton
      >
    </div>
  </div>

  <!-- table starts -->
</template>
<script lang="ts" src="./DrawerLogistics.ts"></script>
