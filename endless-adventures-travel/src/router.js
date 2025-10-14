import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Destinations from './views/Destinations.vue';
import Contact from './views/Contact.vue';
import Testimonials from './views/Testimonials.vue';
import About from './views/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/destinations', name: 'Destinations', component: Destinations },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/testimonials', name: 'Testimonials', component: Testimonials },
    { path: '/about', name: 'About', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
