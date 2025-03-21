import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: AboutView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router