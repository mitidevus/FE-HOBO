import classNames from 'classnames/bind';
import { FaStar } from 'react-icons/fa';
import styles from './Star.module.scss';

const cx = classNames.bind(styles);

function Star({ starNumber, className }) {
    const result = [];
    for (let i = 0; i < starNumber; i++) {
        result.push(<FaStar className={cx('star-number')} key={i}></FaStar>);
    }
    return <div className={className}>{result}</div>;
}

export default Star;
