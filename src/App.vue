<template>
  <div>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'app'
    };
</script>

<style>
body {
  margin:0;
}
header {
  font-size: 30px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
