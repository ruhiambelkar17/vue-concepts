import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    res: [],
    data: 0,
  },
  mutations: {
    incrementCounter(state, id) {
      console.log("id", id);
      state.counter += id;
    },
  },
  actions: {
     incrementCounter({commit}) {
      axios.get("http://localhost:1337/api/html-questions").then(response => commit('incrementCounter',response.data.data[1].id))
      
      
    },
  },
  getters:{
    squareCounter(state){
        return state.counter * state.counter;
    }
  }
});
