import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Travel from './views/Travel.vue';
import Contact from './views/Contact.vue';
import Testimonials from './views/Testimonials.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/travel', name: 'Travel', component: Travel },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/testimonials', name: 'Testimonials', component: Testimonials },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
