import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '~/features/userSlice';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            return alert('Please fill all fields!');
        }
        const userAccount = {
            username,
            password,
        };

        // Send userAccount to server and back to home page
        // ...
        console.log(userAccount);

        // Set state: user is logged in
        dispatch(login(username, password));

        // Redirect to home page
        navigate('/');
    };

    return (
        <div className={cx('wrapper')}>
            {/* <div className={cx('background')}> */}
            <form form className={cx('form')}>
                <h3>Login</h3>
                <div className="my-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="ms-1 custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>

                    <span className="forgot-password">
                        Forgot
                        <Link to="/resetpassword"> password?</Link>
                    </span>
                </div>
                <div className="d-grid mb-3">
                    <button type="submit" className={cx('submit-btn')} onClick={handleSubmit}>
                        Login
                    </button>
                </div>
                <p className="mt-5 register">
                    New to Hobo?
                    <Link to="/signup" className="ms-1">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
