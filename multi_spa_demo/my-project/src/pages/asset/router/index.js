import Vue from 'vue'
import Router from 'vue-router'
import Foot from '@/pages/asset/components/footer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Foot',
      component: Foot
    }
  ]
})
