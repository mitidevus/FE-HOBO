import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { publicRoutes } from '~/routes';
import Navbar from './component/Navbar/Navbar';
import CardView from './component/Card';

function App() {
    return (
        <Router>
            
                               
            <div className="App">
                <Navbar></Navbar>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
