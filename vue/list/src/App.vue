<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <SchoolName></SchoolName>
  </div>
</template>

<script>
import SchoolName from "./components/SchoolName.vue";

export default {
  name: "App",
  components: {
    SchoolName,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
