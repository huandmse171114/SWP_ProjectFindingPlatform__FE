import styles from './MemberPage.module.scss';
import classNames from 'classnames/bind';
import demoData from '../../components/Layout/component/DemoData';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import {Button,TextField,Paper,Pagination,IconButton,Tooltip} from '@mui/material';
import Sidebar from './component/Sidebar';
import {Link} from 'react-router-dom';
import ProjectList from '../Project/component/ProjectList';
import MemberList from '../MemberPage/component/MemberList';
const cx = classNames.bind(styles);

function index() {
    const user = demoData.members;
  return (
    // Header
    <div className={cx('wrapper')}>
            <div className={cx('project-banner')}>
                <h1 className={cx('project-heading')}>Finding Member</h1>
                <Paper elevation={6} className={cx('project-search')}>
                    <TextField className={cx('search-input')} label='Search member' ></TextField>
                    {/* <BasicSelect className={cx('search-select')} label='Select location' options={selectOptions} /> */}
                    <Button className={cx('search-btn')} variant="contained" color='primary' endIcon={<SendIcon/>}>
                        Find
                    </Button>
                </Paper>
            </div>
            <Grid2 justifyContent='space-between' className={cx('project-content')} container>
                <Grid2 className={cx('project-sidebar')} container lg={2}>
                    <Sidebar />
                </Grid2>
                <Grid2 direction="column" className={cx('project-list')} rowGap={12} container lg={9}>
                    
                    <MemberList />
                    <Paper className={cx('project-list-paging')}>
                        <Pagination count={10} shape="rounded" color='primary' className={cx('paging-list')}/>
                    </Paper>
                </Grid2>
            </Grid2>
            </div>
  )
}

export default index
