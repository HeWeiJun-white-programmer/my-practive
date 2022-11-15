export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        add() {
          alert(this.name)
        },
      },
      mounted(){
          console.log(this);
        }
    })
  },
}
