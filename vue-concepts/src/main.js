import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app=createApp(App);

app.directive('focus',{
    mounted:
        function(el){
            el.style.borderColor="blue";
        }
    
})

app.use(router);

app.mount('#app');


