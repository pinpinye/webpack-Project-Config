<template>
  <div>
    我是Assetfoot
    <p> 我的名字叫{{ name }} </p>
  </div>
</template>

<script>
import Vue from 'vue'
import { service } from "../../../api/ajax";
import { apiUrl } from "../api/api.config";

export default {
  name: 'LoginPage',
  data() {
    return {
      name:"",
      age:""
    }
  },
  mounted() {
     service.post(apiUrl.login.query,{})
     .then(res => {
      this.name = res.data.name;
     })
     .catch(err => {
     })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
