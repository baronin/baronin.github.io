import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/pages/index.vue";
import Projects from "@/pages/projects.vue";
import Osbb from "@/pages/osbb.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/osbb', name: 'osbb', component: Osbb },
  ]
});

export default router;
