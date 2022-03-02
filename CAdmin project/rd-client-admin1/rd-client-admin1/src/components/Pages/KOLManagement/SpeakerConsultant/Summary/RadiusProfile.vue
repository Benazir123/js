<template>
  <div class="w-full">
    <div class="w-full flex justify-between item-center">
      <h4 class="text-greytxt font-bold items-center	text-fs16 flex mb-2">
        <span>
          <img src="@/assets/radiusprofile.svg" class="mr-2 ml-3" />
        </span>
        Radius Profile
      </h4>
      <img src="@/assets/profile-edit.svg" class="mb-2 cursor-pointer" />
    </div>
    <div class="clear-both"></div>

    <div class="button-group mt-5">
      <div class="mb-6 ml-3">
        <span
          class="bg-lightgreen min-w-min max-w-min flex items-center opacity-90 text-greenclr font-semibold text-fs13 rounded-radius8 p-2 pr-5 pl-3	"
          >Active
          <em>
            <img src="@/assets/active-profile.svg" class="mr-2 ml-3 " />
          </em>
        </span>
      </div>

      <div class="mb-5 ml-3">
        <span
          class="bg-skyblue min-w-min max-w-min opacity-90 text-bluetxt font-semibold text-xsm rounded-radius8 p-2 pr-5 pl-3"
        >
          Global ID: 801
        </span>
      </div>
    </div>
  </div>
</template>
