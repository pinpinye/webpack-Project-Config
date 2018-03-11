// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './login.vue'
import Foot from '@/pages/login/components/footer.vue'
import Router from 'vue-router'

Vue.use(Router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router: new Router({
		routes: [
		{
			path: '/',
			name: 'Foot',
			component: Foot
		}
		]
	}),
	components: { App },
	template: '<App/>'
})
