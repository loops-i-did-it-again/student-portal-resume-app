import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import CapstonesNew from "../views/CapstoneNew.vue";
import StudentsShow from "../views/StudentsShow.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/login", name: "login", component: Login },
  { path: "/capstones/new", name: "CapstonesNew", component: CapstonesNew },
  { path: "/students/:id", name: "students-show", component: StudentsShow },
  { path: "/logout", name: "logout", component: Logout },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
