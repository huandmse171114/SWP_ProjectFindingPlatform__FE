
import { Paper } from '@mui/material';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import List from '../../../MemberHistory/component/List';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


const cx = classNames.bind(styles);

function Sidebar() {
    return(
        <Paper elevation={0} className={cx('wrapper')}>
            <Grid2 container rowGap={2}>
                <List label='Detail Information' type='text' />
                
            </Grid2>
        </Paper>
    );
}

export default Sidebar;