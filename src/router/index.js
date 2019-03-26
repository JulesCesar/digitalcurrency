import Vue from 'vue'
import Router from 'vue-router'
import btcindex from '@/components/btcindex'

import app from '../App.vue'

import bar1 from '../components/bar1.vue';
import bar2 from '../components/bar2.vue';
import bar3 from '../components/bar3.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    }, {
        path: '/bar1',
        name: 'bar1',
        component: bar1
    },{
        path: '/bar2',
        name: 'bar2',
        component: bar2
    },{
        path: '/bar3',
        name: 'bar3',
        component: bar3
    }
  ]
})
