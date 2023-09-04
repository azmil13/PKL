import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Gedung1 from '../views/Gedung1.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import Data from '../views/Data.vue';
import DataART from '../views/DataART.vue';
import DataATK from '../views/DataATK.vue';
import Data1 from '../views/Data1.vue';
import DataLaboratorium from '../views/DataLaboratorium.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gedung1',
      name: 'gedung1',
      component: Gedung1
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
    {
      path : '/data1',
      name : 'Data1',
      component : Data1
    },
    {
      path : '/Laboratorium',
      name : 'DataLaboratorium',
      component : DataLaboratorium
    },
  ]
})

export default router