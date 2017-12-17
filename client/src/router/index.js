import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FavoriteShops from '@/components/FavoriteShops'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/favorite-shops',
      name: 'FavoriteShops',
      component: FavoriteShops
    }
  ]
})
