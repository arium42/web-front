// const Vue = (window as any).Vue;
import Vue from "vue";

import App from './App.vue';
(window as any).app = App;

(window as any).inst = Vue.createApp(App);

(window as any).inst.mount('#app');
