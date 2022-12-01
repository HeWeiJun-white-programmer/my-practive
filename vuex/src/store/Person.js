export default {
  namespaced: true,
  actions: {
    personhe(context, value) {
      console.log(value)
      if (value.name.indexOf('何') === 0) {
        context.commit('UNshift', value)
      } else {
        alert('1')
      }
    },
  },
  mutations: {
    UNshift(state, value) {
      state.personal.unshift(value)
    },
  },
  state: {
    personal: [{ id: '', name: '' }],
  },
  getters: {
    perleng(state) {
      return state.personal.length
    },
    firstname(state) {
      return state.personal[0].name
    },
  },
}
