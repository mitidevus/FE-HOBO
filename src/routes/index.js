// Pages
import HomePage from '~/pages/HomePage';
import SearchPage from '~/pages/SearchPage';
import HotelPage from '~/pages/HotelPage';
import AboutPage from '~/pages/AboutPage';
import ContactPage from '~/pages/ContactPage';

// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/hotel', component: HotelPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
