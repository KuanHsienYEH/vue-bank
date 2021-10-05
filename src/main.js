import Vue from 'vue'
import Vuex from 'vuex'
import Bank from './Bank.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    threads: ['annie', 'jack', 'bernie', 'erica'],
    task: []
  },
  getters: {
    moveOn: state => state.count + 1
  },
  mutations: {
    increment(state) {
      state.count++;
      state.task.push(state.count);
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    // incrementAsync ({ commit }) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       commit('increment')
    //       resolve()
    //     }, 0.5 + Math.random())
    //   })
    // }
  }
})

new Vue({
  store,
  render: h => h(Bank),
}).$mount('#app')
