export default {
  namespaced: true,
  actions: {
    deleted(context, val) {
      if (context.state.sum > 0) {
        context.commit('Deleted', val)
      }
    },
    once(context, val) {
      if (context.state.sum % 2) {
        context.commit('ADD', val)
      }
    },
    addsettime(context, val) {
      setTimeout(() => {
        context.commit('ADD', val)
      }, 500)
    },
  },
  mutations: {
    ADD(state, val) {
      state.sum += val
    },
    Deleted(state, val) {
      state.sum -= val
    },
  },
  state: { sum: 0, hi: '海燕' },
  getters: {
    big(state) {
      return state.sum * 10
    },
  },
}
