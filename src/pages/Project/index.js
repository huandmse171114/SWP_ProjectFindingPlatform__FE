import styles from './Project.module.scss'
import classNames from 'classnames/bind';
import ProjectDetail from './component/ProjectDetail';
import ProjectList from './component/ProjectList';
import { Button, Container, Grid, MenuItem, Paper, TextField } from '@mui/material';
import BasicSelect from '../../components/Layout/component/BasicSelect';
import SendIcon from '@mui/icons-material/Send';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Sidebar from './component/Sidebar';

const cx = classNames.bind(styles);
const selectOptions = [
    {value: 1, name: 'TP.Ho Chi Minh'},
    {value: 2, name: 'TP.Da Lat'},
    {value: 3, name: 'TP.Da Nang'},
    {value: 4, name: 'TP.Ha Noi'},
]

function Project() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('project-banner')}>
                <h1 className={cx('project-heading')}>More than 50 different Projects at FindHub</h1>
                <Paper elevation={4} className={cx('project-search')}>
                    <TextField className={cx('search-input')} label='Search for project' ></TextField>
                    <BasicSelect className={cx('search-select')} label='Select location' options={selectOptions} />
                    <Button className={cx('search-btn')} variant="contained" color='primary' endIcon={<SendIcon/>}>
                        Find
                    </Button>
                </Paper>
            </div>
            <Container>
                <Grid2 justifyContent='space-between' className={cx('project-content')} container>
                    <Grid2 className={cx('project-sidebar')} container lg={3}>
                        <Sidebar />
                    </Grid2>
                    <Grid2 className={cx('project-list')} container lg={8}>
                        <ProjectList />
                    </Grid2>
                </Grid2>
            </Container>
        </div>
    );
}

export default Project;