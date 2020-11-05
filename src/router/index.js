import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EducationsNew from '../views/EducationsNew.vue'
import ExperiencesNew from '../views/ExperiencesNew.vue'
import SkillsNew from '../views/SkillsNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/educations/new',
    name: 'educations-new',
    component: EducationsNew,
  },
  {
    path: '/experiences/new',
    name: 'experiences-new',
    component: ExperiencesNew,
  },
  {
    path: '/skills/new',
    name: 'skills-new',
    component: SkillsNew,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
