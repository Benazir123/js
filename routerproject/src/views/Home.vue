<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
-->

<!--
<template>
    <h1>Home</h1>
    <p>Welcome to my home page..!</p>
    <p>click below to login</p>
    <div class="forLogin">
       <a href="#" target="_blank">already have an account?</a>
       <button @click="loginFunction()" class="btn btn-outline-primary ms-2">Login</button>
    </div>
</template>

<script>
  import {useRouter} from "vue-router"
  export default {
  setup() {
    const router = useRouter();
    const loginFunction = () => {
      router.push({
        path: "/login",
      });
    }
    return {
      loginFunction
    }
  }
};
 
</script>

<style scoped>
h1,
p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.forLogin{
   display: flex;
  justify-content: center;
  align-items: center;
}
</style>
-->

<template>
<article>
  <!-- <div v-if="!show"> -->
    <div>
      <h1>
        EngagementDetails
        <button
          type="button"
          id="addUser"
          class="btn btn-info mt-3"
          @click="addUser()"
        >
          Add User
        </button>
      </h1>
      <!-- <label>Search by Name:</label> -->
      <!-- <input
        class="form-control w-50"
        v-model="filters.topic.value"
        placeholder="Search by Name"
      /> -->
    </div>

    <div class="container">
      <!-- <table class="table table-hover"> -->
      <!-- <thead> -->
      <VTable :data="listArray" class="table table-hover" :page-size="5">
        <template #head>
          <tr>
            <VTh sortKey="name">Meeting Id</VTh>
            <VTh sortKey="name">Topic</VTh>
            <VTh sortKey="name">Engagement Type</VTh>
            <VTh sortKey="name">EO Name</VTh>
            <VTh sortKey="name">Speaker Name</VTh>
            <VTh sortKey="name">Status</VTh>
            <VTh sortKey="name">Date and Time</VTh>
          </tr>
          <!-- </thead> -->
        </template>
        <!-- <tbody>  -->
        <template #body>
          <tr v-for="result in listArray" :key="result.id">
            <td>{{ result.meeting_id }}</td>
            <td>{{ result.topic }}</td>
            <td>{{ result.engagement_type }}</td>
            <td>{{  result.eo_firstName }}{{ result.eo_lastName }}</td>
            <td>{{ result.spk_firstName }}{{ result.spk_lastName }}
                  <div
                  v-if="result.spk_firstName.length > 1"
                  class="flex-shrink w-5 h-5 ml-2 cursor-pointer"
                  @click="openMoreSpk(row, result.spk_firstName)"
                >
                  <span
                    class="
                      w-full
                      h-full
                      text-fs9
                      inline-flex
                      items-center
                      text-white
                      justify-center
                      bg-black
                      rounded-full
                     "
                  >
                    +{{ result.spk_firstName.length - 1 }}
                  </span>
                </div>

            </td>
            <td>{{ result.status }}</td>
            <td>{{ dateFormat(result.createdAt) }}</td>
          </tr>

          <!-- </tbody> -->
          <!-- </table>  -->
        </template>
      </VTable>
      <!-- <VTPagination
        v-model:currentPage="currentPage"
        :total-pages="totalPages"
        :boundary-links="true"
        :maxPageLinks="5"
      /> -->
    </div>
   <div class="container pl-5">
    <Pagination
      v-model="page"
      :records="1379"
      :per-page="5"
      @paginate="pageChangeEvent($event)"
    />
  </div>
<!-- </div> -->
</article>

<aside>
  <div v-if="show">
 <Transition name="slide-fade">
   <!-- <div v-if="show"> -->
      <component :is="'addUser'" @backtohome="renderhome()"/>
       <!-- <AddUser @backtohome="renderhome()" /> -->
    <!-- </div> -->
  </Transition>
  </div>
</aside>
</template>

<script>
import { ref } from "@vue/reactivity";
import myService from "../services/myService";
import { onMounted } from "@vue/runtime-core";
import AddUser from "../views/AddUser.vue";
import moment from "moment";
import Pagination from "v-pagination-3";
export default {
  name: "Home",
  // name: "Pagination",
  components: {
   'addUser': AddUser,
    Pagination,
  },
  data(){
    return{
         keyword: "",
         hidespklist: false,

    }
  },
  // data: () => ({
  //   filters: {
  //     topic: { value: "", keys: ["topic"] },
  //   },
  // }),
  setup() {
      const openMoreSpk = (row, spkArray) => {
      //this.hidespklist = !this.hidespklist;
      row.hidespklist = !row.hidespklist;  
      this.moreSpeaker = spkArray;
      }
    const page = ref(1);
    const postValue = {
        page: page.value,
        limit: 5,
      },
      pageChangeEvent = (event) => {
        postValue.page = event;
        listusers(postValue);
        console.log("params", event);
      };
    // const currentPage = ref(1);
    // const totalPages = ref(1);
    // const postValue = {
    //     page: currentPage.value,
    //     limit: 5,
    //   },
    //  pageChangeEvent = (event) => {
    //     console.log("pageChangeEvent");
    //     postValue.page = event;
    //     listusers(postValue);

    //     console.log("params", event);
    //   };
    const dateFormat = (value) => {
      if (value) {
        return moment(String(value)).format("MMM DD,yyyy h:mm A");
      }
    };
    const addUser = () => {
      show.value = true;
      console.log("add", show.value);
    };
    const renderhome = () => {
      show.value = false;
      // console.log("postValue", postValue);
      listusers();
    };
    const show = ref(false);
    var list = new Array();
    const listArray = ref([]);
    async function listusers(postValue) {
      list = await myService.userlist(postValue);

      // if (list && list.result && list.result.length > 0) {
      //   list.result.forEach((element) => {
      //    var Name = element.eo_firstName + "123";
      //    element.eo_firstName = Name
      //   });
      //   console.log("Array")
      // }

      if(list && list.result && list.result.length > 0){
           list.result.filter((item) => {
             if(item.engagement_type == "Virtual In Office"){
                  var Name = item.eo_firstName + "123"
                  item.eo_firstName = Name
                    console.log("Name")
              }
          })
        }

      listArray.value = list.result;
      // totalPages.value = list.totalCount;
      console.log("Get Method=>", listArray.value);

      // var postusers = await myService.postlist()
      // console.log("Post Method=>",postusers)

      // var putuser = await myService.putlist()
      // console.log("Put Method=>", putuser)
    }
    onMounted(listusers);
    return {
      listusers,
      list,
      show,
      addUser,
      renderhome,
      listArray,
      dateFormat,
      pageChangeEvent,
      // currentPage,
      // totalPages,
      page,
    openMoreSpk, 
    };
  },
};
</script>

<style>
#addUser {
  float: right;
  width: 10%;
  border-radius: 8px;
  margin-right: 10px;
}

/* .v-enter-active,
  .v-leave-active{
      transition: opacity 5s ease;
  }

   .v-enter-from,
   .v-leave-to{
        opacity: 0;
  } */

  aside {
    width: 40%;
    padding-left: .5rem;
    margin-left: .5rem;
    float: right;
    box-shadow: inset 5px 0 5px -5px #29627e;
  }

  /* article {
      width: 50%;
      padding: 10px;
      float: left;
    } */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* aside > article {
    margin: .5rem;
} */


</style>


