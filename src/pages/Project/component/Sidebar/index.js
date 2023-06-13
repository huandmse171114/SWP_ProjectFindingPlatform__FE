import { Paper } from '@mui/material';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return(
        <Paper elevation={2} className={cx('wrapper')}>
            Sidebar
        </Paper>
    );
}

export default Sidebar;