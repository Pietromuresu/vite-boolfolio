import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Contacts from './components/pages/Contacts.vue';
import AllProjects from './components/pages/AllProjects.vue';
import ProjectDetails from './components/pages/ProjectDetails.vue';
import Error404 from './components/pages/Error404.vue';

const router = createRouter({
    history : createWebHistory(),
    linkExactActiveClass : 'active',

    routes : [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
        {
            path: '/all-projects',
            name: 'AllProjects',
            component: AllProjects
        },
        {
            path: '/project-details/:slug',
            name: 'ProjectDetails',
            component: ProjectDetails
        },
        {
            path: '/:pathMatch(.*)*',
            component: Error404
        }
    ]

})

export {router}
