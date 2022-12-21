import classNames from 'classnames/bind';
import styles from './AboutPage.module.scss';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <div className={cx('about')}>
            <div className={cx('about-section')}>
                <h1>ABOUT US PAGE</h1>
                <p>Some text about who we are and what we do.</p>
            </div>

            <h2 className={cx('team-header')}>HOBO TEAM</h2>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-4'>  
                        <img
                            className='rounded-circle'
                            alt='Duy'
                            src="https://drive.google.com/uc?export=view&id=1-u7_kaLCbGkMVWi1mMFxyzNVbh_3X-S8"
                        />
                        <div className='container'>
                            <h3 className={cx('name')}>Phan Nguyen Thanh Duy</h3>
                            <p className={cx('title')}>Project Manager | Back-End Developer</p>
                            <p className={cx('mail')}>pntduy@hobo.com</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img
                            className='rounded-circle'
                            alt='Hien'
                            src="https://drive.google.com/uc?export=view&id=1eIf825Veh2XyFmNt_zRbygSch0mU9vwY"
                        />
                        <div className='container'>
                            <h3 className={cx('name')}>Truong Chi Hien</h3>
                            <p className={cx('title')}>Back-End Developer</p>
                            <p className={cx('mail')}>tchien@hobo.com</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <img
                            className='rounded-circle'
                            alt='Tri'
                            src="https://drive.google.com/uc?export=view&id=1zJBAmGaJqig79qT_Er1QHkYbAeNishER"
                        />
                        <div className='container'>
                            <h3 className={cx('name')}>Do Minh Tri</h3>
                            <p className={cx('title')}>Front-End Developer</p>
                            <p className={cx('mail')}>dmtri@hobo.com</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img
                            className='rounded-circle'
                            alt='Hai'
                            src="https://drive.google.com/uc?export=view&id=1nhb2CS2NxD11RO8YoKSD5UgO76SOVhwY"
                        />
                        <div className='container'>
                            <h3 className={cx('name')}>Dao Dai Hai</h3>
                            <p className={cx('title')}>Front-End Developer</p>
                            <p className={cx('mail')}>ddhai@hobo.com</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img
                            className='rounded-circle'
                            alt='Hoa'
                            src="https://drive.google.com/uc?export=view&id=1qMRLwzKly6zDMeYMjzjEWKo1cjG_g9IP"
                        />
                        <div className='container'>
                            <h3 className={cx('name')}>Tran Thanh Hoa</h3>
                            <p className={cx('title')}>Front-End Developer</p>
                            <p className={cx('mail')}>tthoa@hobo.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About