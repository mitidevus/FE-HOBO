import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { selectUser } from '~/features/userSlice';
import { privateRoutes, publicRoutes } from '~/routes';
import Navbar from './component/Navbar/Navbar';
import { Navigate } from 'react-router-dom';

function App() {
    const user = useSelector(selectUser);

    return (
        <Router>
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

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
