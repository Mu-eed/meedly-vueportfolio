import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/About.vue';
import ProjectsView from '../views/Projects.vue';
import TestimonialsView from '../views/Testimonials.vue';
import ContactView from '../views/Contact.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
  path:'/about',
  name:'about',
  component: AboutView
  },
  {
    path:'/projects',
    name:'projects',
    component: ProjectsView
  },
  {
    path:'/testimonials',
    name:'testimonials',
    component: TestimonialsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
