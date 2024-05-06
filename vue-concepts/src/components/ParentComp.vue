<template>
  <div>
    <h1>Parent Component</h1>
    <hr />
    <h3>Calling Child Component</h3>
    <child-comp :arrData="arr" @eventName="getChildData"></child-comp>
    <hr />
    <!--<h3>Emitted data from child: {{ newName }}</h3>
        <hr />
        <h3>v-html vs v-text</h3>
        <p v-html="msg"></p> -->
    <!-- <h3>Custom Directive</h3>
        <input type="text" v-focus> -->
    <!-- <h3>Dynamic Component</h3>
            <button @click="cmpNm='LoaderComp'">Loader</button>
            <component :is="cmpNm" /> -->
    <!-- <h3>computed vs watcher</h3>
        <p>From computed:{{ fullName }}</p>
        <input type="text" v-model="name" onChange="watchName"/>
        <p>From watcher: {{ fullName1 }}</p> -->
    <!-- <h3>Fetch</h3>
    <button @click="getDatawithFetch">Fetch Data</button>
    <p>Get Request:{{ apiDataWithPage }}</p>
    <button @click="apiPostDataFetch">Post Data</button>
    <input type="text" placeholder="enter api id" v-model="id">
    <button @click="apiUpdateDataFetch(id)">Update Data</button>
    <button @click="apiDeleteDataFetch(id)">Delete Data</button> -->
    <hr />
    <!-- <ApiDemoComp></ApiDemoComp> -->
    <h1>Slots</h1>
        <hr />
    <!-- <ChildSlotComp >
        <template #default>
            <p :name="slotprop"> HEllo {{ name }}</p>            
        </template>
        <template #info="{age}">
            <p >Age {{age}}</p>
        </template>
    </ChildSlotComp> -->
   <router-link to="/loader"> <a>Loader</a></router-link>
   <hr />
   <h3>vuex</h3>
   <p>count: {{ $store.state.counter }} and  square: {{ $store.getters.squareCounter }}</p>
   <button @click="$store.commit('incrementCounter',2)">Inc</button>
   <button @click="$store.dispatch('incrementCounter')">Dispact action</button>

  </div>
</template>

<script>
import ChildComp from "./ChildComp.vue";
//import ApiDemoComp from "./ApiDemoComp.vue";
//import ChildSlotComp from "./ChildSlotComp.vue";
//import {defineAsyncComponent} from "vue";
//import LoaderComp from "./LoaderComp.vue"
// const focus={
//     mounted: function (el){
//         el.style.borderColor="red";
//     }

// }



export default {
  // directives:{
  //     focus
  // },
  // components:{
  //     ChildComp:defineAsyncComponent({
  //         loader:()=>{
  //         return new Promise((resolve)=>{
  //             setTimeout(()=>{
  //                 resolve(import('./ChildComp.vue'))
  //             },2000)
  //         })
  //     },
  //     loadingComponent:LoaderComp
  //     })
  // },
  components: {
    ChildComp,
  },
  name:'ParentComp',
  data() {
    return {
      arr: "HEllo",
      newName: "",
      msg: "Welcome to vue!",
      cmpNm: "ChildComp",
      name: "Ruhi",
      surName: "A",
      fullName1: "",
      apiDataWithPage: [],
      id:"",
    };
  },
  computed: {
    fullName() {
      return this.name + this.surName;
    },
  },
  watch: {
    name() {
      this.fullName1 = this.name + this.surName;
    },
  },
  provide() {
    return {
      newMsg: this.msg,
    };
  },
  methods: {
    getChildData(parameterName) {
      this.newName = parameterName;
    },
    // async getDatawithFetch() {
    //   let resp = await fetch("http://localhost:1337/api/html-questions");
    //   this.apiDataWithPage = await resp.json();
    //   console.log("api data****", this.apiDataWithPage);
    // },
    // async apiPostDataFetch() {
    //   await fetch("http://localhost:1337/api/html-questions", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       data: {
    //         question: "What is Span?",
    //         level: "1",
    //         options: {
    //           a: "</doctype html>",
    //           b: "<doctype html>",
    //           c: "<doctype html!>",
    //           d: "<!doctype html>",
    //         },
    //       },
    //     }),
    //   });
    // },
    // async apiUpdateDataFetch(apiId){
    //     await fetch(`http://localhost:1337/api/html-questions/${apiId}`,
    //     {
    //         method:"PUT",
    //         headers:{'Content-Type':'application/json'},
    //         body:JSON.stringify({
    //             data:{
    //                 level:"2"
    //             }
    //         })
    //     })
    // },
    // async apiDeleteDataFetch(apiId){
    //     await fetch (`http://localhost:1337/api/html-questions/${apiId}`,
    //     {
    //         method:"DELETE",
    //         headers:{"Content-Type":"application/json"}
    //     })
    // }
  },
};
</script>
