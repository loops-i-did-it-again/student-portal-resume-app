import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
<<<<<<< HEAD
import ExperiencesEdit from "../views/ExperiencesEdit"
=======
import CapstonesNew from "../views/CapstoneNew.vue";
import StudentsShow from "../views/StudentsShow.vue";
import Logout from "../views/Logout.vue";
import EducationsNew from "../views/EducationsNew.vue"
import ExperiencesNew from "../views/ExperiencesNew.vue"
import SkillsNew from "../views/SkillsNew.vue"
>>>>>>> 5d63c866646dbcdcbd2d38ffabc9be122edc8d90

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/login", name: "login", component: Login },
<<<<<<< HEAD
  { path: "/experiences/:id/edit", name: "experiences-edit", component: ExperiencesEdit}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
=======
  { path: "/capstones/new", name: "CapstonesNew", component: CapstonesNew },
  { path: "/students/:id", name: "students-show", component: StudentsShow },
  { path: "/logout", name: "logout", component: Logout },
  { path: '/educations/new', name: 'educations-new', component: EducationsNew
  },
  { path: '/experiences/new', name: 'experiences-new', component: ExperiencesNew },
  { path: '/skills/new', name: 'skills-new', component: SkillsNew },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
>>>>>>> 5d63c866646dbcdcbd2d38ffabc9be122edc8d90
