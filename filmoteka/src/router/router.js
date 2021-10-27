import Vue from 'vue'
import Router from 'vue-router'
import Wrapper from "../components/Wrapper";
import Library from "../components/Library";


Vue.use(Router);


let router = new Router({
    routes: [
        {
      path: '/',
      name: 'Wrapper',
      component: Wrapper
    },
      {
        path: '/library',
        name: 'library',
        component: Library
      }]
})

export default router;
