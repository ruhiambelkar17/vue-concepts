<template>
    <div>
        <h1>Child Component</h1>
        <hr />
        <h3>Prop from parent comp:  {{ arrData }}</h3>
        <hr />
        <h3>Emit Events from child to prop.</h3>
        <button @click="hitEvent">Hit Emit</button>
    </div>
</template>

<script>
export default {
    props:{
        arrData:[Array,String], //multiple types of props
    } ,// props validation
    data(){
        return {
            parameterName:"Ruhi"
        }
    },
    methods:{
        hitEvent(){
            this.$emit("eventName",this.parameterName);
        }
    }
}
</script>