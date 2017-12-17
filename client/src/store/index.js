import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shops: []
  },
  plugins: [
    createPersistedState()
  ],
  mutations: {
    SetShops (state, shops) {
      state.shops = shops
    },
    SetShopStatus (state, shop) {
      state.shops.map((s) => {
        if (s.id === shop.id) {
          s.status = shop.status
          if (shop.status === 'disliked') {
            s.expire = shop.expire
          }
        }
      })
    },
    RemoveLikedShop (state, shop) {
      state.shops.forEach((s) => {
        if (s.id === shop.id) {
          s.status = null
        }
      })
    }
  },
  actions: {
    SetShops ({commit}, shops) {
      commit('SetShops', shops)
    },
    SetShopStatus ({commit}, shop) {
      commit('SetShopStatus', shop)
    },
    RemoveLikedShop ({commit}, shop) {
      commit('RemoveLikedShop', shop)
    }
  }
})
