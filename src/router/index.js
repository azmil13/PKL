import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Gedung1 from '../views/Gedung1.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import Data from '../views/Data.vue';
import ART from '../views/ART.vue';
import ATK from '../views/ATK.vue';
import DataG1L1 from '../views/DataG1L1.vue';
import Laboratorium from '../views/Laboratorium.vue';
import DataG1L2 from '../views/DataG1L2.vue';
import DataG1L3 from '../views/DataG1L3.vue';
import DataG1L4 from '../views/DataG1L4.vue';
import Gedung2 from '../views/Gedung2.vue';
import DataG2L1 from '../views/DataG2L1.vue';
import DataG2L2 from '../views/DataG2L2.vue';


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
      name : 'ART',
      component : ART
    },
    {
      path : '/atk',
      name : 'ATK',
      component : ATK
    },
    {
      path : '/datag1',
      name : 'DataG1L1',
      component : DataG1L1
    },
    {
      path : '/labo',
      name : 'Laboratorium',
      component : Laboratorium
    },
    {
      path : '/G1L2',
      name : 'DataG1L2',
      component : DataG1L2
    },
    {
      path : '/G1L3',
      name : 'DataG1L3',
      component : DataG1L3
    },
    {
      path : '/G1L4',
      name : 'DataG1L4',
      component : DataG1L4
    },
    {
      path: '/gedung2',
      name: 'gedung2',
      component: Gedung2
    },
    {
      path : '/G2L1',
      name : 'DataG2L1',
      component : DataG2L1
    },
    {
      path : '/G2L2',
      name : 'DataG2L2',
      component : DataG2L2
    },
  ]
})

export default router