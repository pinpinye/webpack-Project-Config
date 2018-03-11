<template>
  <div id="asset">
    我是asset的公共部分
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AssetPage'
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
