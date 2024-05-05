import { createApp } from 'vue'
import App from './App.vue'

const app=createApp(App);

app.directive('focus',{
    mounted:
        function(el){
            el.style.borderColor="blue";
        }
    
})

app.mount('#app');


