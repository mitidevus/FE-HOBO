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
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/post" activeStyle>
                        Post
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>

                    {/* Xong thì xóa */}
                    <NavLink to="/hotels/123" activeStyle>
                        Hotel
                    </NavLink>

                    <NavLink to="hotels/123/rooms/123" activeStyle>
                        Room
                    </NavLink>

                    {user && user.userType === '1' && (
                        <NavLink to={`/hotels/${user.hotelId}`} activeStyle>
                            My Hotel
                        </NavLink>
                    )}

                    {user && user.userType === '2' && (
                        <NavLink to="/approve" activeStyle>
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
                            <NavLink to="/login" activeStyle>
                                Login
                            </NavLink>
                            <NavLink to="/signup" activeStyle>
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
