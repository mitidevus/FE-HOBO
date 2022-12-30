import { useEffect, useState } from 'react';
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
    console.log('userInfor', user);
    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch(logout());
        try {
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    const [userInfor, setUserInfor] = useState(null);
    useEffect(() => {
        setUserInfor(user);
    }, [user]);
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
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>

                    {/* Xong thì xóa */}
                    <NavLink to="/hotel/639700482e84ad02f4864a68" activeStyle>
                        Hotel
                    </NavLink>

                    <NavLink to="room/63970668d5f14557aced81bb" activeStyle>
                        Room
                    </NavLink>

                    {userInfor && userInfor.userType === 2 && userInfor.hotelId === null && (
                        <NavLink to="/post" activeStyle>
                            Create my first hotel
                        </NavLink>
                    )}

                    {userInfor && userInfor.userType === 2 && userInfor.hotelId && (
                        <NavLink to={`/hotel/${userInfor.hotelId}`} activeStyle>
                            My Hotel
                        </NavLink>
                    )}

                    {userInfor && userInfor.userType === 0 && (
                        <NavLink to="/approve" activeStyle>
                            Approve
                        </NavLink>
                    )}
                </NavMenu>
                <NavMenu>
                    {userInfor && userInfor !== {} ? (
                        <>
                            <NavLink to="/account">
                                <img
                                    src={
                                        userInfor.avatar
                                            ? userInfor.avatar
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
