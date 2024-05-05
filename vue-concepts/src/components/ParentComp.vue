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
        <h3>Fetch</h3>
        <button @click="getDatawithFetch">Fetch Data</button>
        <p>{{ apiDataWithPage }}</p>
    </div>

</template>

<script>
import ChildComp from "./ChildComp.vue";
//import {defineAsyncComponent} from "vue";
//import LoaderComp from "./LoaderComp.vue"
// const focus={
//     mounted: function (el){
//         el.style.borderColor="red";
//     }

// }

export default ({
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
    components:{
        ChildComp
    },
   data(){
    return {
        arr:"HEllo",
        newName:"",
        msg:"Welcome to vue!",
        cmpNm:"ChildComp",
        name:"Ruhi",
        surName:"A",
        fullName1:"",
        apiDataWithPage:[]
    }
   },
   computed:{
    fullName(){
        return this.name + this.surName;
    }
   },
   watch:{
    name(){
        this.fullName1= this.name+this.surName;        
    }
   },
   provide(){
    return {
        newMsg:this.msg,
    }
   },
   methods: 
   {
     getChildData (parameterName) {
    this.newName=parameterName;
   },
   async getDatawithFetch(){
    let resp=await fetch("http://localhost:1337/api/html-questions");
    this.apiDataWithPage=await resp.json();
    console.log("api data****",this.apiDataWithPage)
   }
   }
})
</script>
