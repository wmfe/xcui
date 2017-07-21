/**
 * @file router.js
 * Router configuration
 */

import VueRouter from 'vue-router';
import Home from './Home';
import Homecontent from './components/homeContent';

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home,
        children: [
            {
                path: '/home',
                component: Homecontent
            }
        ]
    }]
});

router.afterEach(route => {
    window.scrollTo(0, 0);
});

export default router;
