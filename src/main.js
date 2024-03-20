import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router';
import MyMenu from './components/MyMenu'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: App },
  { path: '/MyMenu', component: MyMenu }
];

const router = new VueRouter ({
  routes
});

export default router;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
