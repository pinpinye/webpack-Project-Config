<template>
  <div>
    我是login的公共部分
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
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
