// Pages
import AboutPage from '~/pages/AboutPage';
import AccountPage from '~/pages/AccountPage';
import ContactPage from '~/pages/ContactPage';
import HomePage from '~/pages/HomePage';
import HotelPage from '~/pages/HotelPage';
import LoginPage from '~/pages/LoginPage';
import ResetPasswordPage from '~/pages/ResetPasswordPage';
import SearchPage from '~/pages/PostPage';
import SignUpPage from '~/pages/SignUpPage';

// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/post', component: SearchPage },
    { path: '/hotel', component: HotelPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage },
    { path: '/resetpassword', component: ResetPasswordPage },
];

const privateRoutes = [{ path: '/account', component: AccountPage }];

export { publicRoutes, privateRoutes };
