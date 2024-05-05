<template>
    <div>
        <h1>Child Component</h1>
        <hr />
        <h3>Prop from parent comp:  {{ arrData }}</h3>
        <hr />
        <!-- <h3>Emit Events from child to prop.</h3>
        <button @click="hitEvent">Hit Emit</button> -->
        <!-- <h3>Provide-Inject</h3>
        <p>Injected data from parent:{{ newMsg }}</p> -->
        <!-- <h3>Mixinx</h3>
        <button @click="increment">
            the value is {{ count }}
        </button> -->
        <!-- <h3>Class and style binding:</h3>
        <p :class="{cssClass:isClass}">Vue class binding</p>
        <p :class="[arrClass1,arrClass2]">Vue array class binding</p>
        <p :class="[isClass? 'display':'textStyle']">Vue array conditional class binding</p>
        <p :style="{color:'red'}">Vue style binding</p>
        <p :style="{color:colorKey}">Vue style binding by passimng color dynamically</p>
        <p :style="styleObj">Vue style binding by passing obj</p> -->

        <h3>two way data binding</h3>
        <input type="text" v-model="name" />
        <p>{{ name }}</p>
    </div>
</template>

<script>
//import Counter from '@/mixins/Counter';
export default {
    props:{
        arrData:[Array,String], //multiple types of props
    } ,// props validation
    //mixins:[Counter],
    data(){
        return {
            parameterName:"Ruhi", count:100,
            isClass:false,
            arrClass1:'display',
            arrClass2:'textStyle',
            colorKey:'pink',
            styleObj:{'color':'green', 'background-color':'yellow'},
            name:"ruhi"
        }
    },
    inject:['newMsg'],
    methods:{
        hitEvent(){
            this.$emit("eventName",this.parameterName);
        }
    }
}
</script>

<style scoped>
.cssClass {
    background-color: yellow;
}

.display {
    color:green;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.textStyle {
    border: 2px solid pink;
}
</style>