<template>
    <div>
        <h1>Parent Component</h1>
        <hr />
        <h3>Calling Child Component</h3>
        <child-comp :arrData="arr" @eventName="getChildData"></child-comp>
        <hr />
        <h3>Emitted data from child: {{ newName }}</h3>
    </div>
</template>

<script>
import ChildComp from "./ChildComp.vue";

export default ({
    components:{
        ChildComp
    },
   data(){
    return {
        arr:"HEllo",
        newName:""
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
