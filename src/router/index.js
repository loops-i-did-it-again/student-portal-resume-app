import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import ExperiencesEdit from "../views/ExperiencesEdit"

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/login", name: "login", component: Login },
  { path: "/experiences/:id/edit", name: "experiences-edit", component: ExperiencesEdit}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
