import 'bootstrap/dist/css/bootstrap.min.css';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { selectUser } from '~/features/userSlice';
import { adminRoutes, hotelOwnerRoutes, privateRoutes, publicRoutes } from '~/routes';
import Navbar from './component/Navbar/Navbar';

const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function App() {
    const user = useSelector(selectUser);

    return (
        <Router>
            <ScrollToTop>
                <div className="App">
                    <Navbar></Navbar>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}

                        {user &&
                            privateRoutes.map((route, index) => {
                                const Page = route.component;

                                return <Route key={index} path={route.path} element={<Page />} />;
                            })}

                        {user &&
                            user.userType === '1' &&
                            hotelOwnerRoutes.map((route, index) => {
                                const Page = route.component;

                                return <Route key={index} path={route.path} element={<Page />} />;
                            })}

                        {user &&
                            user.userType === '2' &&
                            adminRoutes.map((route, index) => {
                                const Page = route.component;

                                return <Route key={index} path={route.path} element={<Page />} />;
                            })}

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
