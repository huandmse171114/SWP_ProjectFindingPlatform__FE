import { Paper } from '@mui/material';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import CustomList from '../CustomList';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const cx = classNames.bind(styles);

function Sidebar() {
    return(
        <Paper elevation={0} className={cx('wrapper')}>
            <Grid2 container rowGap={2}>
                <CustomList label='Category' type='checkbox' />
                <CustomList label='Skill Set' type='checkbox' />
                <CustomList label='Wage' type='slider'/>
                <CustomList label='Major' type='checkbox' />
                <CustomList label='Publish Date' type='date' />
            </Grid2>
        </Paper>
    );
}

export default Sidebar;