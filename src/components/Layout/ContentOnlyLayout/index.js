import classNames from 'classnames/bind';
import styles from './ContentOnlyLayout.module.scss';

const cx = classNames.bind(styles);

function ContentOnlyLayout({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default ContentOnlyLayout;
