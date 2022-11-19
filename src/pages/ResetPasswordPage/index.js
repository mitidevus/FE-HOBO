import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ResetPasswordPage.module.scss';

const cx = classNames.bind(styles);

function ResetPasswordPage() {
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return alert('Please fill all fields!');
        }
        const userAccount = {
            email,
        };
        console.log(userAccount);
    };

    return (
        <div className={cx('wrapper')}>
            <form form className={cx('form')}>
                <div className="text-center">
                    <h3>Forgot Password ?</h3>
                    <p>Enter your email to reset your password.</p>
                </div>
                <div className="my-3">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="row justify-content-evenly mb-3">
                    <div className="col-5">
                        <button type="submit" className={cx('submit-btn')} onClick={onSubmit}>
                            Submit
                        </button>
                    </div>
                    <div className="col-5">
                        <Link to="/login" className={cx('btn btn-secondary', 'cancel-btn')}>
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ResetPasswordPage;
