import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App';
import FeedBack from "./components/FeedBack";
import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/elegant-icons.css'
import './assets/css/magnific-popup.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/responsive.css'
import './assets/css/style.css'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', render: h => h(App) },
    { path: '/feedback', name: 'FeedBack', render: h => h(FeedBack) },
  ]
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: h => h(router),
  render: h => h(App),
  template: '<App/>'
});
