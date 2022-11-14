<template>
  <div id="app">
    <School/>
  
    <Student @adds='e' />  <h2 >{{name}}</h2>
  
  </div>
</template>

<script>
import School from './components/SchoolName.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  data(){
    return {
      name:0
    }
  },
  components: {
    School,
    Student
  },
  methods:{
    show(){
      console.log(this.$refs.n.name);
    },
    e(e){
      this.name=e
    }
  }
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
