<template>
  <div id="app">
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
import Student from './components/MyStudent.vue'
import School from './components/MySchool.vue'

export default {
  name: 'App',
  components: {
    Student,
    School,
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
