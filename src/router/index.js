import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Products from '../views/Products.vue'
import Categories from '../views/Categories.vue'
import Pages from '../views/Pages.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },

  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   component: () => import('../views/Blog.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
