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
                        <img className='rounded-circle' alt='Duy' src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/317538208_3295008804162769_2640186716007312976_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w_9-Toeyn-wAX9TaXkL&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCtNeGFJ5oHsg0M7A3m4wCClVqFTSgSxCUkOEPFFAdj5w&oe=639020DF"/>
                        <div className='container'>
                            <h3 className={cx('name')}>Phan Nguyen Thanh Duy</h3>
                            <p className={cx('title')}>Project Manager | Back-End Developer</p>
                            <p className={cx('mail')}>pntduy@hobo.com</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img className='rounded-circle' alt='Hien' src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/274227826_1891688474364487_5323631105491499869_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m8oTgevMiycAX_RcZ6O&tn=1kmxUkVvXINViIeF&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCVeSK57sOgeBpexpeArEpvcF4v0E3ntbWNO0HYtZa_5Q&oe=639082E6"/>    
                        <div className='container'>
                            <h3 className={cx('name')}>Truong Chi Hien</h3>
                            <p className={cx('title')}>Back-End Developer</p>
                            <p className={cx('mail')}>tchien@hobo.com</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        
                        <img className='rounded-circle' alt='Tri' src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/246732427_2636363843339013_8855424930266501283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=mc-ZBB-coYYAX94250v&tn=1kmxUkVvXINViIeF&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCPeGgCJVWfV28gD-m4lxOvhKR7Gw_OhyJPEOGSen-U0w&oe=6390BD99"/>
                        <div className='container'>
                            <h3 className={cx('name')}>Do Minh Tri</h3>
                            <p className={cx('title')}>Front-End Developer</p>
                            <p className={cx('mail')}>dmtri@hobo.com</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img className='rounded-circle' alt='Hai' src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/124977089_1006820339837093_6073785032238784337_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=I2BcR9lUd_kAX92JEvk&_nc_ht=scontent.fhan2-3.fna&oh=00_AfC1lisPsyhhb-qtmj3YNuHnfpwVykOihonD_01NiQAr5w&oe=63B39807"/>
                        <div className='container'>
                            <h3 className={cx('name')}>Dao Dai Hai</h3>
                            <p className={cx('title')}>Front-End Developer</p>
                            <p className={cx('mail')}>ddhai@hobo.com</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img className='rounded-circle' alt='Hoa' src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/274092792_3176602929286321_6179837477848821200_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rBjjTFxWyW4AX9t1Ffs&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDrPJQoT1-E2FNDEQfCzRKwMJNHJ-gnMtaCNfPH6tch9w&oe=638F8B96"/>
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