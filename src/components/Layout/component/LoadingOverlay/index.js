import styles from './loadingOverlay.module.scss'
import classNames from 'classnames/bind';
import { CircularProgress } from '@mui/material';

const cx = classNames.bind(styles);

function LoadingOverlay() {
    return ( 
        <div className={cx('loading-wrapper')}>
            <div className={cx('loading-overlay')}></div>
            <CircularProgress className={cx('progress-icon')} />
        </div>
     );
}

export default LoadingOverlay;