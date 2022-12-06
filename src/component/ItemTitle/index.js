import classNames from 'classnames/bind';
import styles from './ItemTitle.module.scss';

const cx = classNames.bind(styles);

function ItemTitle({ header, description }) {
    return (
        <div className={cx('item-title')}>
            <span className={cx('item-title-header')}>{header}</span>
            <span className={cx('item-title-description')}> | {description}</span>
        </div>
    );
}

export default ItemTitle;
