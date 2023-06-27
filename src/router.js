import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Contacts from './components/pages/Contacts.vue';
import AllProjects from './components/pages/AllProjects.vue';

const router = createRouter({
    history : createWebHistory(),

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
        }
    ]

})

export {router}
