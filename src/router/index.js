import Vue from 'vue'
import Router from 'vue-router'

// App Components
import Splash from '@/components/Splash.vue'
import Another from '@/components/Another.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: 'test',
    routes: [
        {
            path: '/',
            name: 'Splash',
            component: Splash
        },
        {
            path: '/another',
            name: 'Another',
            component: Another
        }
    ]
})
