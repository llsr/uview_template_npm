import Vue from 'vue'
import App from './App'
import store from '@/store';
import uView from "uview-ui";
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);
Vue.config.productionTip = false;
Vue.use(uView);

App.mpType = 'app'

//#ifdef H5
Vue.prototype.$baseUrl = '/common';
//#endif

const app = new Vue({
    store,
    ...App
})
app.$mount()
