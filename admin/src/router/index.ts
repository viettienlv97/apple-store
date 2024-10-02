import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Dashboard from '../pages/Dashboard.vue'

const User = () => import('../pages/User.vue')
const Product = () => import('../pages/Product.vue')
const Order = () => import('../pages/Order.vue')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        { path: '/', name: 'Dashboard', component: Dashboard },
        {path: 'users', name: 'User', component: User},
        {path: 'products', name: 'Product', component: Product},
        {path: 'orders', name: 'Order', component: Order}
        // {path: 'new-product', name: 'Order', component: Order}
      ]
    }
  ]
})

export default router