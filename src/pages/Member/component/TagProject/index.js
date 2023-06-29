import styles from './TagProject.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Tag({ value, size }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('tag-content', size)}>{value}</p>
        </div>
    );
}

export default Tag;