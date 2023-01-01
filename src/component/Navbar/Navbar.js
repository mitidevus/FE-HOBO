import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '~/features/userSlice';
import Button from '../Button';
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
                    <NavLink to="/" activestyle="true">
                        Home
                    </NavLink>
                    <NavLink to="/about" activestyle="true">
                        About
                    </NavLink>
                    <NavLink to="/contact" activestyle="true">
                        Contact
                    </NavLink>

                    {user && user.userType === 2 && user.hotelId === null && (
                        <NavLink to="/post" activestyle="true">
                            Create my first hotel
                        </NavLink>
                    )}

                    {user && user.userType === 2 && user.hotelId && (
                        <NavLink to={`/hotel/${user.hotelId}`} activestyle="true">
                            My Hotel
                        </NavLink>
                    )}

                    {user && user.userType === 0 && (
                        <NavLink to="/approve" activestyle="true">
                            Approve
                        </NavLink>
                    )}
                </NavMenu>
                <NavMenu>
                    {user ? (
                        <>
                            <NavLink to="/account">
                                <img
                                    src={
                                        user.avatar
                                            ? user.avatar
                                            : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                                    }
                                    className="avatar"
                                    alt="Avatar"
                                />
                            </NavLink>
                            <NavLink to="/">
                                <Button secondary onClick={handleLogout}>
                                    Logout
                                </Button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" activestyle="true">
                                Login
                            </NavLink>
                            <NavLink to="/signup" activestyle="true">
                                <Button primary>Sign Up</Button>
                            </NavLink>
                        </>
                    )}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
