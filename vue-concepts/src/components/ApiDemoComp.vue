<template>
  <div>
    <h3>Axios</h3>
    <hr />
    <h3>Get Data with axios</h3>
    <button @click="getAxiosData">Get Data</button>
    <p>{{ axiosApiData.data }}</p>
    <h3>Post data with axios</h3>
    <button @click="postAxiosData">Post Data</button>
    <h3>Update data with axios</h3>
    <input type="text" v-model="id">
    <button @click="updateAxiosData(id)">Update Data</button>
    <input type="text" v-model="id">
    <button @click="deleteAxiosData(id)">Delete Data</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      axiosApiData: {},
      id:""
    };
  },
  methods: {
    async getAxiosData() {
      this.axiosApiData = await axios.get(
        "http://localhost:1337/api/html-questions"
      );
      console.log("Axios data**", this.axiosApiData.data.data);
    },
    async postAxiosData() {
      await axios.post("http://localhost:1337/api/html-questions", {
        data: {
          question: "What is Canvas?",
          level: "1",
          options: {
            a: "</doctype html>",
            b: "<doctype html>",
            c: "<doctype html!>",
            d: "<!doctype html>",
          },
        },
      });
    },
    async updateAxiosData(apiId){
        await axios.put(`http://localhost:1337/api/html-questions/${apiId}`,
        {
            data:{
                level:"3"
            }
        })
    },
    async deleteAxiosData(apiId){
        await axios.delete(`http://localhost:1337/api/html-questions/${apiId}`)
    }

  },
};
</script>
