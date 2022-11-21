import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '../views/IntroductionView.vue';
import KanjiView from '../views/KanjiView.vue';
import Drill from '../components/Drill.vue';
// import About from '../components/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'introduction',
      component: IntroductionView
    },
    {
      path: '/kanji',
      name: 'kanji',
      component: KanjiView
    },
    {
      path: '/drill',
      name: 'drill',
      component: Drill
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
