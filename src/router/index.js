import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Lantai from '../views/Lantai.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import Data from '../views/Data.vue'
import DataART from '../views/DataART.vue'
import DataATK from '../views/DataATK.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lantai',
      name: 'lantai',
      component: Lantai
    },
    {
      path :'/login',
      name : 'login',
      component : LoginView
    },
    {
      path : '/register',
      name : 'register',
      component : RegisterView
    },
    {
      path : '/data',
      name : 'data',
      component : Data
    },
    {
      path : '/art',
      name : 'DataART',
      component : DataART
    },
    {
      path : '/atk',
      name : 'DataATK',
      component : DataATK
    },
  ]
})

export default router