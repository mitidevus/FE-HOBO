import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from '~/api/auth';
import Button from '~/component/Button';
import { signup } from '~/features/userSlice';
import styles from './SignUpPage.module.scss';

const cx = classNames.bind(styles);
const REGISTER_URL = '/api/user/signup';

function SignUpPage() {
    // Basic information
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [userType, setUserType] = useState(1); // 0: Admin, 1: Customer, 2: Hotel Owner
    const [phoneNumber, setPhoneNumber] = useState('');
    const avatar = 'https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png';

    // Hotel information
    const hotelId = null;
    const [licenseNumber, setLicenseNumber] = useState('');
    const [hotelName, setHotelName] = useState(null);
    const [hotelAddress, setHotelAddress] = useState(null);
    const [hotelPhoneNumber, setHotelPhoneNumber] = useState(null);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !username ||
            !firstname ||
            !lastname ||
            !email ||
            !phoneNumber ||
            !password ||
            !passwordConfirm ||
            !agreeTerms
        ) {
            return alert('Please fill all fields!');
        }
        if (password !== passwordConfirm) {
            return alert('Confirm password is not correct!');
        }
        if (userType === 2 && !licenseNumber && !hotelPhoneNumber && !hotelName && !hotelAddress) {
            return alert('Please fill license number!');
        }
        const userAccount = {
            username,
            email,
            password,
            firstname,
            lastname,
            userType,
            phoneNumber,
            avatar,
            hotelId,
            licenseNumber,
            hotelName,
            hotelAddress,
            hotelPhoneNumber,
        };

        // Send userAccount to server
        // ...
        try {
            const response = await axios.post(REGISTER_URL, userAccount);
            console.log(response);
            if (response.status === 200) {
                alert('Sign up successfully!');
                dispatch(signup(userAccount));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            setError(error.response.data);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form form className={cx('form')}>
                <h3>Sign Up</h3>
                {error && <p className={cx('error')}>{error}</p>}
                <div className="my-3">
                    <input
                        id="username"
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="row my-3">
                    <div className="col-6">
                        <input
                            id="firstname"
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="col-6">
                        <input
                            id="lastname"
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-6">
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-6">
                        <input
                            id="phonenumber"
                            type="email"
                            className="form-control"
                            placeholder="Phone number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        id="password_confirmation"
                        type="password"
                        className="form-control"
                        placeholder="Password confirmation"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </div>

                <div className="row ms-1 mb-3">
                    <label className="col">Type</label>
                    <div className="col-4 form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userType"
                            id="tourist"
                            value="0"
                            checked={userType === 1}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="tourist">
                            Tourist
                        </label>
                    </div>
                    <div className="col-4 form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userType"
                            id="hotelOwner"
                            value="1"
                            checked={userType === 2}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="hotelOwner">
                            Hotel Owner
                        </label>
                    </div>
                </div>

                <div className="">
                    <div className="mb-3">
                        <input
                            id="hotelName"
                            type="text"
                            className="form-control"
                            placeholder="Hotel name"
                            onChange={(e) => setHotelName(e.target.value)}
                            disabled={userType !== 2}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            id="hotelLisenceNumber"
                            type="text"
                            className="form-control"
                            placeholder="Hotel lisence number"
                            onChange={(e) => setLicenseNumber(e.target.value)}
                            disabled={userType !== 2}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            id="hotelPhoneNumber"
                            type="text"
                            className="form-control"
                            placeholder="Hotel phone number"
                            onChange={(e) => setHotelPhoneNumber(e.target.value)}
                            disabled={userType !== 2}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            id="hotelAddress"
                            type="text"
                            className="form-control"
                            placeholder="Hotel address"
                            onChange={(e) => setHotelAddress(e.target.value)}
                            disabled={userType !== 2}
                        />
                    </div>
                </div>

                <div className="my-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="agreeTerms"
                        onChange={() => setAgreeTerms(!agreeTerms)}
                    />
                    <label className="form-check-label" htmlFor="agreeTerms">
                        I Agree
                        <Link to="/signup" className="ms-1">
                            Terms and conditions
                        </Link>
                    </label>
                </div>

                <div className="d-grid mb-3">
                    <Button primary type="submit" onClick={handleSubmit} disabled={!agreeTerms}>
                        Sign Up
                    </Button>
                </div>

                <p className="mt-5 register">
                    Already subscribe to Hobo?
                    <Link to="/login" className="ms-1">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default SignUpPage;
