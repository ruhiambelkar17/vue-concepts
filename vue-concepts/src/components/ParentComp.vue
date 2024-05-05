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
        cmpNm:"ChildComp"
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
   }
   }
})
</script>
