import Vue from 'vue'
import Details from './components/Details'
import Home from './components/Home'
import addToCart from './components/addToCart'
import success from './components/success'
import myOrder from './components/myOrder'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
  {path: '/details', name: 'details',component:Details},
  {path: '/', name: 'Home', component: Home},
  {path: '/addcart', name: 'addToCart',component:addToCart},
  {path: '/success', name: 'success', component: success},
  {path: '/order', name: 'myOrder', component: myOrder}
]

const router = new VueRouter({
    mode: "history",
    routes
  })
export default router