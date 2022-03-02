<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center">
    <div class="w-full overflow-hidden flex items-center justify-between relative">
      <div class="w-screen h-screen">
        <div
          class="
            min-h-screen
            flex flex-col
            sm:justify-center
            items-center
            pt-6
            sm:pt-0
            bg-gray-100
            grid grid-cols-2
            gap-0
          "
        >
          <!-- Left img -->
          <!-- src="@/assets/login-left-bg.svg"-->
          <div class="h-screen overflow-hidden" >
            <div class="flex items-center justify-center h-full bg-loginbg">
              <img src="@/assets/login/login-leftbg.svg" class="w-10/12 " @error="setAltImg" />
            </div>
          </div>
          <!-- Left img -->
          <!-- right side starts here -->
          <div
            class="
              w-full
              h-screen
              bg-white
              flex
              items-center
              justify-center
              flex-col
            "
          >
            <div class="w-6/12">
              <div>
                <div class="flex items-center justify-center mb-10">
                  <img v-if="companyLogo" :src="companyLogo" @error="setAltImg" />
                </div>

                <form id="app" @submit.prevent="LoginSubmit">
                  <div class="">
                    <div class="mb-5">
                      <v-label value="Email" />
                      <div
                        class="
                          mt-4
                          relative
                          flex
                          w-full
                          flex-wrap
                          items-stretch
                          mb-3
                        "
                      >
                        <span
                          class="
                            z-10
                            top-3
                            leading-snug
                            font-normal
                            absolute
                            text-center text-gray-400
                            bg-transparent
                            rounded
                            text-base
                            items-center
                            justify-center
                            w-8
                            pl-3
                            flex
                          "
                        >
                          <svg width="20" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M21 2.7684C21 1.6684 20.1 0.768402 19 0.768402H3C1.9 0.768402 1 1.6684 1 2.7684M21 2.7684V14.7684C21 15.8684 20.1 16.7684 19 16.7684H3C1.9 16.7684 1 15.8684 1 14.7684V2.7684M21 2.7684L11 9.7684L1 2.7684"
                              stroke="#393939"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <v-input
                          v-model="username"
                          input-type="text"
                          name="username"
                          class="h-11"
                          :class="{ 'is-invalid': submitted && !username }"
                        />
                        <div
                          v-show="submitted && !username"
                          class="
                            invalid-feedback
                            text-red-600
                            mt-3
                            text-left text-xsm
                          "
                        >
                          Email is required
                        </div>
                        <div
                          v-show="!reg.test(username) && username"
                          class="
                            invalid-feedback
                            text-red-600
                            mt-3
                            text-left text-xsm
                          "
                        >
                          Please Enter Valid Email
                        </div>
                        <!-- <label>Password : </label> -->
                      </div>
                    </div>
                    <div class="mb-8" x-data="{ show: true }">
                      <v-label value="Password" />
                      <v-password
                        v-model="password"
                        name="password"
                        class="form-control"
                        :class="{ 'is-invalid': submitted && !password }"
                      />
                      <div
                        v-show="submitted && !password"
                        class="
                          invalid-feedback
                          text-left text-red-600
                          mt-3
                          text-xsm
                        "
                      >
                        Password is required
                      </div>
                    </div>
                    <!--  Remember me starts here-->
                    <!-- <div class="flex items-center justify-between my-5">
                      <label class="inline-flex items-center">
                        <v-checkbox
                          class="form-checkbox h-4 w-4 rounded-none"
                        />
                        <span class="ml-3 text-fs14 text-menuselectionlabel"
                          >Remember me</span
                        >
                      </label>
                    </div> -->
                    <!--  Remember me ends here-->
                    <!--  Login button starts here-->
                    <div class="my-3 relative">
                      <v-button type="submit" class="bg-blue font-w-normal"
                        >Login
                        <img v-if="loader" src="@/assets/button-bar-loader.svg" class="ml-2 w-6" />
                      </v-button>
                    </div>
                    <!--  Login button ends here-->
                    <a
                      class="
                        mt-4
                        block
                        text-sm text-textblue text-center
                        font-semibold
                        cursor-pointer
                      "
                      @click="forgotPage"
                    >
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>

              <!-- forgot password -->

              <!-- forgot password -->
            </div>
            <!-- right side ends here -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Confirmation Modal -->
  <div v-if="showError" class="drawer-mask justify-center items-center flex z-50">
    <v-confirmation-modal>
      <template #description>
        <div class="absolute right-5 top-4 cursor-pointer" @click="showError = false">
          <img src="@/assets/login/loginclose.svg" class="cursor-pointer" @error="setAltImg" />
        </div>
        <div class="flex items-center justify-center h-full my-6">
          <img src="@/assets/login/supportteam.svg" class="w-80" @error="setAltImg" />
        </div>
        <p class="text-center text-confirtext font-normal text-fs16 pl-2">
          {{ errorMsg }}
        </p>
      </template>
      <template #footer>
        <v-smallbutton
          type="submit"
          class="font-w-normal text-fs14 bg-white py-2 px-12 float-right text-white bg-blue rounded-radius6"
          @click="showError = false"
          >Ok
        </v-smallbutton>
      </template>
    </v-confirmation-modal>
  </div>
  <!-- Confirmation Modal -->
</template>
<script lang="ts" src="./LoginPage.ts"></script>
