import { createRouter, createWebHistory } from 'vue-router'
import news from '../views/news.vue'
import fix from '../views/fix.vue'
import gaming from '../views/news.vue'
import howto from '../views/howto.vue'
import vpn from '../views/vpn.vue'
import windows10 from '../views/windows10.vue'
import windows11 from '../views/windows11.vue'


const routes = [
    {
        path: '/news',
        name: 'news',
        component: news
    },
    {
        path: '/fix',
        name: 'fix',
        component: fix 
    },
    {
        path: '/gaming',
        name: 'gaming',
        component: gaming
    },
    {
        path: '/how to',
        name: 'howto',
        component: howto
    },
    {
        path: '/vpn',
        name: 'vpn',
        component: vpn
    },
    {
        path: '/windows 10',
        name: 'windows10',
        component: windows10
    },
    {
        path: '/windows 11',
        name: 'windows11',
        component: windows11    
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  