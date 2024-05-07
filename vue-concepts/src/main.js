import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Store from './store/index'
import createPinia from './piniaStore/index'

const app=createApp(App);
const pinia=createPinia();

app.directive('focus',{
    mounted:
        function(el){
            el.style.borderColor="blue";
        }
    
})

app.use(router);
app.use(Store);
app.use(pinia)

app.mount('#app');


