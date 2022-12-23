// Pages
import AboutPage from '~/pages/AboutPage';
import AccountPage from '~/pages/AccountPage';
import ApprovePage from '~/pages/ApprovePage';
import ContactPage from '~/pages/ContactPage';
import HomePage from '~/pages/HomePage';
import HotelPage from '~/pages/HotelPage';
import LoginPage from '~/pages/LoginPage';
import ResetPasswordPage from '~/pages/ResetPasswordPage';
import RoomPage from '~/pages/RoomPage';
import PostPage from '~/pages/PostPage';
import SignUpPage from '~/pages/SignUpPage';

// Public Routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/post', component: PostPage },
    { path: '/about', component: AboutPage },
    { path: '/hotel/:hotelId', component: HotelPage },
    { path: '/room/:roomId', component: RoomPage },
    { path: '/contact', component: ContactPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage },
    { path: '/resetpassword', component: ResetPasswordPage },
];

const privateRoutes = [{ path: '/account', component: AccountPage }];

const hotelOwnerRoutes = [{ path: '/myhotel', component: HotelPage }];

const adminRoutes = [{ path: '/approve', component: ApprovePage }];

export { publicRoutes, privateRoutes, hotelOwnerRoutes, adminRoutes };
