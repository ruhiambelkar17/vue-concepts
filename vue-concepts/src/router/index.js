import {createRouter, createWebHistory} from "vue-router";

const router=createRouter({
    history:createWebHistory(),
    routes: [
        {path:"/",
        name:'ParentComp',
        component:()=>import('../components/ParentComp.vue')   
    },
    {path:"/loader",
    name:'LoaderComp',
    component:()=>import('../components/LoaderComp.vue') 
}
    ]
})

export default router;