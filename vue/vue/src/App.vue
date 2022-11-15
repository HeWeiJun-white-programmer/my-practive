<template>
  <div id="app">
    <School />

    <Student />
  </div>
</template>

<script>
import School from './components/SchoolName.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  data() {
    return {
      name: 0,
    }
  },
  components: {
    School,
    Student,
  },
  methods: {},
}
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
