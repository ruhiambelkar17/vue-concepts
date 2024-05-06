<template>
    <div> 
        <slot :slotprop="name"> </slot>
        <slot name="info" :age="age"></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:"Ruhi",
            age:28
        }
    }
}
</script>