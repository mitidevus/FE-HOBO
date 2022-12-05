import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '~/features/userSlice';
import { Nav, NavLink, NavMenu } from './NavbarElements';

import './style.css';

const Navbar = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch(logout());
        try {
            //   await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1 id="HOBO">HOBO</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/post" activeStyle>
                        Post
                    </NavLink>
                    <NavLink to="/hotel" activeStyle>
                        Hotel
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    {user ? (
                        <>
                            <NavLink to="/account">Account</NavLink>
                            <NavLink to="/">
                                <button onClick={handleLogout} className="btn btn-lg btn-secondary">
                                    Logout
                                </button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" activeStyle>
                                {/* <button className="px-4 btn btn-lg btn-primary">Login</button> */}
                                Login
                            </NavLink>
                            <NavLink to="/signup" activeStyle>
                                <button className="px-3 btn btn-lg btn-primary">Sign Up</button>
                            </NavLink>
                        </>
                    )}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
