import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import ChooseType from '../views/ChooseType.vue'
import SearchPerson from '../views/SearchPerson.vue'
import Person from '../views/Person.vue'
import SearchCompany from '../views/SearchCompany.vue'
import Company from '../views/Company.vue'
import Steven from '../views/Steven.vue'
import Auto from '../views/Auto.vue'
import Voorkeuren from '../views/Voorkeuren.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/ChooseType',
    name: 'ChooseType',
    component: ChooseType
  },  
  {
  path: '/SearchPerson',
  name: 'SearchPerson',
  component: SearchPerson
},   
{
  path: '/person',
  name: 'Person',
  component: Person
}, 
{
  path: '/searchcompany',
  name: 'SearchCompany',
  component: SearchCompany
},
{
  path: '/company',
  name: 'Company',
  component: Company
},
{
  path: '/steven',
  name: 'steven',
  component: Steven
}, 
{
  path: '/auto',
  name: 'auto',
  component: Auto
},
{
  path: '/voorkeuren',
  name: 'voorkeuren',
  component: Voorkeuren
}, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
