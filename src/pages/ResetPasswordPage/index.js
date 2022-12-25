import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/component/Button';
import styles from './ResetPasswordPage.module.scss';

const cx = classNames.bind(styles);

function ResetPasswordPage() {
    const [checkClickSubmit,setCheck]=useState(false);
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return alert('Please fill all fields!');
        }
        const userAccount = {
            email,
            
        };

        if(userAccount) setCheck(true)
        console.log(userAccount);
    };

    return (
        <div className={cx('wrapper')}>
            <form form className={cx('form')}>
                <div className="text-center">
                    <h3 className='title-forgot' style={{color: 'black'}}>Forgot Password ?</h3>
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

                {
                    checkClickSubmit && (
                        <div>
                            <input type="text" className='form-control form-control-lg' placeholder='PIN'/>
                        </div>
                    )
                }
                
                 

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
