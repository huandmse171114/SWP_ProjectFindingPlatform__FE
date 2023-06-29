import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import List from '../List';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const cx = classNames.bind(styles);

function Sidebar() {
    return(
        <Grid2 container rowGap={2}>
            <div>
            <List label='Member ' type='checkbox' />
            <List label='Skill Set' type='checkbox' />
            <List label='Wage' type='slider'/>
            <List label='Major' type='checkbox' />
            <List label='Publish Date' type='date' />
            </div>
            
        </Grid2>
    );
}

export default Sidebar;