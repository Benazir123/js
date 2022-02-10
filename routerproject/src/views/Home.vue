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
  <div v-if="!show">
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
      <input
        class="form-control w-50"
        v-model="filters.topic.value"
        placeholder="Search by Name"
      />
    </div>

    <div class="container">
      <!-- <table class="table table-hover"> -->
      <!-- <thead> -->
      <VTable
        :data="listArray"
        class="table table-hover"
        :page-size="5"
       
      >
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
            <td>{{ result.eo_firstName }}{{ result.eo_lastName }}</td>
            <td>{{ result.spk_firstName }}{{ result.spk_lastName }}</td>
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
  </div>
  <div class="container pl-5">
      <Pagination v-model="page"  :records="1379" :per-page="5"    @paginate="pageChangeEvent($event)"/>
  </div>
  <div v-if="show">
    <AddUser @backtohome="renderhome()" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import myService from "../services/myService";
import { onMounted } from "@vue/runtime-core";
import AddUser from "../views/AddUser.vue";
import moment from "moment";
import Pagination from 'v-pagination-3'
export default {
  name:"Home",
  // name: "Pagination",
  components: {
    AddUser,
    Pagination
  },
  data: () => ({
    filters: {
      topic: { value: "", keys: ["topic"] },
    },
    // totalPages:0,
    //  currentPage: 1,
  }),
  setup() {
     const page = ref(1)
      const postValue = {
        page: page.value,
        limit: 5
      },
        pageChangeEvent = (event) => {
            postValue.page = event
           listusers(postValue)
           console.log("params",event)
       }
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
    var list = new Array
    const listArray = ref([]);
    async function listusers(postValue) {
      list = await myService.userlist(postValue);
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
    };
  },
};
</script>

<style scoped>
#addUser {
  float: right;
  width: 10%;
  border-radius: 8px;
  margin-right: 10px;
}
</style>


