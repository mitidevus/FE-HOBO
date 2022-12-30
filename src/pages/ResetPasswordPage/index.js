import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/component/Button';
import { confirmCodeReset, resetPassword, sendEmailCode } from '../../api/auth/auth.api';
import styles from './ResetPasswordPage.module.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [confirmCode, setConfirmCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    // Cờ type để check các trường hợp show ra input
    const [type, setType] = useState('');

    // - Type === "" -> Show ra 2 input username, email
    // - Type === "CONFIRM_CODE" => show 2 input username, passCode
    // - Type === "RESET_PASSWORD" => show 3 input username, passCode, newPassword

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            return alert('Please fill all fields!');
        }
        const userAccount = {
            toEmail: email,
            username: username,
        };

        if (type === 'CONFIRM_CODE') {
            const dataConfirm = {
                username,
                confirmCode,
            };
            confirmCodeReset(dataConfirm).then((res) => {
                if (res) {
                    toast.success('Verification code correct');
                    setType('RESET_PASSWORD');
                }
            });
        } else if (type === 'RESET_PASSWORD') {
            ///
            const dataReset = {
                resetpassword: newPassword,
                confirmCode,
                username
            };
            resetPassword(dataReset).then((res) => {
                if (res) {
                    toast.success('Reset success');
                    setType('');
                    navigate('/login');
                }
            });
        } else {
            sendEmailCode(userAccount).then((res) => {
                if (res) {
                    toast.success('Sent confirmation code to email');
                    setType('CONFIRM_CODE');
                    setEmail('');
                }
            });
        }
    };

    console.log(type);

    return (
        <div className={cx('wrapper')}>
            <form form className={cx('form')}>
                <div className="text-center">
                    <h3>Forgot Password ?</h3>
                    <p>Enter your email to reset your password.</p>
                </div>

                <div className="my-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {type === 'CONFIRM_CODE' || type === 'RESET_PASSWORD' ? (
                    <>
                        <div className="my-3">
                            <input
                                type="text"
                                value={confirmCode}
                                className="form-control form-control-lg"
                                placeholder="Confirm code"
                                onChange={(e) => setConfirmCode(e.target.value)}
                            />
                        </div>
                        {type === 'RESET_PASSWORD' && (
                            <div className="my-3">
                                <input
                                    type="text"
                                    value={newPassword}
                                    className="form-control form-control-lg"
                                    placeholder="New password"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <div className="my-3">
                        <input
                            type="email"
                            value={email}
                            className="form-control form-control-lg"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                )}
                <div className="d-flex justify-content-evenly mt-4">
                    <Button primary type="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                    <Button secondary to="/login">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ResetPasswordPage;
