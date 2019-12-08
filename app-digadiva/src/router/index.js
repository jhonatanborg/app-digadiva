import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('../views/Register.vue')
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/complaint-details/:id",
    name: "Complaint-Details",
    component: () => import('../views/Complaint-Details.vue')
  },
  {
    path: "/register-2",
    name: "Register-2",
    component: () => import('../views/Register-2.vue')
  },
  {
    path: "/register-3",
    name: "Register-3",
    component: () => import('../views/Register-3.vue')
  },
  {
    path: "/register-4",
    name: "Register-4",
    component: () => import('../views/Register-4.vue')
  },
  {
    path: "/new-complaint",
    name: "New-Complaint",
    component: () => import('../views/New-Complaint.vue')
  },
  {
    path: "/company-profile",
    name: "Company",
    component: () => import('../views/Company.vue')
  },
  {
    path: "/local",
    name: "Local-Complaint",
    component: () => import('../views/Local-Complaint.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;