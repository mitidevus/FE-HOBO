import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '~/features/userSlice';
import styles from './SignUpPage.module.scss';

const cx = classNames.bind(styles);

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [userType, setUserType] = useState('Tourist');
    const [lisenceNumber, setlisenceNumber] = useState(null);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !firstname || !lastname || !email || !phoneNumber || !password || !passwordConfirm) {
            return alert('Please fill all fields!');
        }
        if (password !== passwordConfirm) {
            return alert('Confirm password is not correct!');
        }
        if (userType === 'Tourist') {
            setlisenceNumber(null);
        }
        const userAccount = {
            username,
            firstname,
            lastname,
            email,
            phoneNumber,
            password,
            passwordConfirm,
            userType,
            lisenceNumber,
        };

        // Send userAccount to server
        // ...
        console.log(userAccount);

        // Set state: user is logged in
        dispatch(signup(username, password, firstname, lastname, email, phoneNumber, userType, lisenceNumber));

        // Redirect to home page
        navigate('/');
    };

    return (
        <div className={cx('wrapper')}>
            <form form className={cx('form')}>
                <h3>Sign Up</h3>
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

                <div className="row align-items-center mb-3">
                    <div className="col-5 ms-3">
                        <div className="mb-1 form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="tourist"
                                value="Tourist"
                                checked={userType === 'Tourist'}
                                onChange={(e) => setUserType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="tourist">
                                Tourist
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="userType"
                                id="hotelOwner"
                                value="Hotel Owner"
                                checked={userType === 'Hotel Owner'}
                                onChange={(e) => setUserType(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="hotelOwner">
                                Hotel Owner
                            </label>
                        </div>
                    </div>

                    {userType === 'Hotel Owner' && (
                        <div className="col">
                            <input
                                id="attachFile"
                                type="text"
                                className="form-control"
                                placeholder="Lisence number"
                                onChange={(e) => setlisenceNumber(e.target.value)}
                            />
                        </div>
                    )}
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
                    <button type="submit" className={cx('submit-btn')} onClick={onSubmit} disabled={!agreeTerms}>
                        Sign Up
                    </button>
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
