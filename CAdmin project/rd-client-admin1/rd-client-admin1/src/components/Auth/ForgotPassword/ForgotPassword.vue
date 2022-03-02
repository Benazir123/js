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
          <div class="h-screen overflow-hidden">
            <div class="flex items-center justify-center h-full bg-loginbg">
              <img src="@/assets/login/login-leftbg.svg" class="w-10/12 " />
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
              <div class="flex items-center justify-center mb-10">
                <!-- <img src="@/assets/tgt-logo.png" /> -->
                <img v-if="companyLogo" :src="companyLogo.company_logo" @error="setAltImg" />
              </div>

              <form id="app" @submit.prevent="submit">
                <div class="">
                  <v-label
                    class="my-4"
                    value="Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "
                  />
                  <div class="mb-8">
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
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M21 2.7684C21 1.6684 20.1 0.768402 19 0.768402H3C1.9 0.768402 1 1.6684 1 2.7684M21 2.7684V14.7684C21 15.8684 20.1 16.7684 19 16.7684H3C1.9 16.7684 1 15.8684 1 14.7684V2.7684M21 2.7684L11 9.7684L1 2.7684"
                            stroke="#393939"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <v-input v-model="email" input-type="text" name="username" class="h-11" />
                      <div
                        v-show="submitted && !email"
                        class="
                          invalid-feedback
                          text-left text-red-600
                          mt-3
                          text-xsm
                        "
                      >
                        Email is required
                      </div>
                      <div
                        v-show="!reg.test(email) && email"
                        class="
                            invalid-feedback
                            text-red-600
                            mt-3
                            text-left text-xsm
                          "
                      >
                        Please Enter Valid Email
                      </div>
                    </div>
                  </div>
                  <div class="my-4">
                    <v-button type="submit" class="bg-blue font-w-normal">
                      Email Password Reset Link
                    </v-button>
                  </div>
                  <p
                    class="
                      mt-4
                      block
                      text-sm text-textblue text-center
                      font-semibold
                      cursor-pointer
                    "
                  >
                    <a @click="backtologin">Back to Login</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showDialog" class="drawer-mask justify-center items-center flex">
    <v-confirmation-modal>
      <template #description>
        <p class="text-center font-bold text-base15 pl-2">
          {{ showMessage }}
        </p>
      </template>
      <template #footer>
        <v-smallbutton type="submit" class="m-0 text-fs13 bg-white p-0 text-themegreen" @click="showDialog = false"
          >Ok
        </v-smallbutton>
      </template>
    </v-confirmation-modal>
  </div>
</template>
<script lang="ts" src="./ForgotPassword.ts"></script>
