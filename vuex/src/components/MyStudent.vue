<template>
  <div>
    <h1>数字：{{ sum }}</h1>
    <h1>大数字：{{ big }}</h1>
    <h2>队列数：{{ perleng }}</h2>
    <button @click="ADD(a)">+1</button>
    <button @click="deleted(a)">-1</button>
    <button @click="addsettime(a)">延迟加1</button>
    <button @click="once(a)">奇数加1</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      a: 1,
    }
  },
  methods: {
    /*   add() {
      this.$store.commit('add', this.a)
    },
    deleted() {
      this.$store.dispatch('delete', this.a)
    },
    addsettime() {
      this.$store.dispatch('addsettime', this.a)
    },
    once() {
      this.$store.dispatch('once', this.a)
    }, */
    ...mapMutations('sumber', ['ADD']),
    // ...mapActions('sumber',['deleted','addsettime','once'])
    ...mapActions('sumber', {
      deleted: 'deleted',
      addsettime: 'addsettime',
      once: 'once',
    }),
  },
  computed: {
    ...mapState('sumber', ['sum']),
    ...mapGetters('sumber', ['big']),
    ...mapGetters('Person', ['perleng']),
  },
}
</script>

<style></style>
