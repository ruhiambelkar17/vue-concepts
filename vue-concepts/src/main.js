import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Store from './store/index'

const app=createApp(App);

app.directive('focus',{
    mounted:
        function(el){
            el.style.borderColor="blue";
        }
    
})

app.use(router);
app.use(Store)

app.mount('#app');


