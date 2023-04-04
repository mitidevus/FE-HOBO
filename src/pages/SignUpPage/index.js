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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState(1); // 0: Admin, 1: Customer, 2: Hotel Owner
    const [phoneNumber, setPhoneNumber] = useState('');
    const avatar = 'https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png';

    // Hotel information
    const hotelId = null;
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !username ||
            !firstName ||
            !lastName ||
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
        const userAccount = {
            username,
            email,
            password,
            firstName,
            lastName,
            userType: Number(userType),
            phoneNumber,
            avatar,
            hotelId,
        };

        // Send userAccount to server
        // ...
        try {
            const response = await axios.post(REGISTER_URL, userAccount);
            if (response.status === 200) {
                alert('Sign up successfully!');
                dispatch(signup(response.data));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
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
                        autoComplete="off"
                    />
                </div>
                <div className="row my-3">
                    <div className="col-6">
                        <input
                            id="firstname"
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-6">
                        <input
                            id="lastname"
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                            autoComplete="off"
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
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-6">
                        <input
                            id="phonenumber"
                            type="email"
                            className="form-control"
                            placeholder="Phone number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            autoComplete="off"
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
                        autoComplete="off"
                    />
                </div>
                <div className="mb-3">
                    <input
                        id="password_confirmation"
                        type="password"
                        className="form-control"
                        placeholder="Password confirmation"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        autoComplete="off"
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
                            value="1"
                            checked={Number(userType) === 1}
                            onChange={(e) => setUserType(e.target.value)}
                            autoComplete="off"
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
                            value="2"
                            checked={Number(userType) === 2}
                            onChange={(e) => setUserType(e.target.value)}
                            autoComplete="off"
                        />
                        <label className="form-check-label" htmlFor="hotelOwner">
                            Hotel Owner
                        </label>
                    </div>
                </div>

                <div className="my-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="agreeTerms"
                        onChange={() => setAgreeTerms(!agreeTerms)}
                        autoComplete="off"
                    />
                    <label className="form-check-label" htmlFor="agreeTerms">
                        I Agree
                        <Link to="/signup" className="ms-1">
                            Terms and conditions
                        </Link>
                    </label>
                </div>

                <div className="d-grid mb-3">
                    <Button primary type="button" onClick={handleSubmit} disabled={!agreeTerms}>
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
