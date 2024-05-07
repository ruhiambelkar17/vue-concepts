import {defineStore} from "pinia";

export const PiniaStore=defineStore({
    id:'counter',
    state:function (){
        return {
            count:0
        }
    },
    actions:{

    },getters:{

    }
})