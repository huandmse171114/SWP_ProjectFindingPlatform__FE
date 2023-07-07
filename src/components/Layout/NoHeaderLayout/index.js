import Footer from '../component/Footer';
import styles from './NoHeaderLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NoHeaderLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default NoHeaderLayout;
