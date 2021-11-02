import Vue from 'vue'
import Router from 'vue-router'
import Library from "../components/Library";
import Content from "../components/Content";
import LibraryWatched from "../components/LibraryWatched";
import LibraryQueve from "../components/LibraryQueve";


Vue.use(Router);


let router = new Router({
    routes: [
        {
      path: '/',
      name: 'Content',
      component: Content,
            props: true

    },
      {
        path: '/library',
        name: 'library',
        component: Library,
          props: true
      },
        {
            path: '/watched',
            name: 'LibraryWatched',
            component: LibraryWatched,
            props: true

        },
        {
            path: '/queve',
            name: 'LibraryQueve',
            component: LibraryQueve,
            props: true

        },
    ]
})

export default router;
