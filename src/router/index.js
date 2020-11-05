import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
<<<<<<< HEAD
import CapstonesNew from "../views/CapstoneNew.vue";
import StudentsShow from "../views/StudentsShow.vue";
=======
import Logout from "../views/Logout.vue";
import CapstoneNew from "../views/CapstoneNew.vue";
>>>>>>> f521b9538956e93d43b1e68636b27de72ad347bf

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/login", name: "login", component: Login },
<<<<<<< HEAD
  { path: "/capstones/new", name: "CapstonesNew", component: CapstonesNew },
  { path: "/students/:id", name: "students-show", component: StudentsShow },
=======
  { path: "/capstonenew", name: "CapstoneNew", component: CapstoneNew },
  { path: "/logout", name: "logout", component: Logout },
>>>>>>> f521b9538956e93d43b1e68636b27de72ad347bf
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
