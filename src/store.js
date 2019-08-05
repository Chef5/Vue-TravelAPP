import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '成都'
try {
  if(localStorage.city) defaultCity = localStorage.city
}catch (e) {

}

export default new Vuex.Store({
  state: {
    // city: localStorage.city || '成都'
    city: defaultCity
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      }catch (e) {

      }
    }
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  }
})
