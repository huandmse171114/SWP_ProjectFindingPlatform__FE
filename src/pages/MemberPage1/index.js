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
import SearchIcon from '@mui/icons-material/Search';

const cx = classNames.bind(styles);

function index() {
    const user = demoData.members;
  return (
    // Header
    <div className={cx('wrapper')}>
            <div className={cx('project-banner')}>
                <h1 className={cx('project-heading')}>Finding Member</h1>
                
            </div>
            {/* <Grid2 className={cx('project-sidebar')} container lg={2}>
                    <Sidebar />
                </Grid2> */}
            <Grid2 justifyContent='space-between' className={cx('project-content')} container>
                <Grid2 className={cx('project-sidebar')} container lg={2}>
                    <Sidebar />
                </Grid2>
                <Grid2   className={cx('project-list')} rowGap={12} container lg={9}>
                   <div className={cx('mempaper')}>
                              <div className={cx('searchpaper')}>
                              <TextField className={cx('advanceSearch')} label='Search member' ></TextField>
                              <Button  className={cx('iconSearch')}  variant="contained" color='primary'>
                                     <SearchIcon  className={cx('glass')}    />
                                     
                            </Button>
                            
                             
                             </div>
                    
                              <MemberList />
                             
                              <Pagination count={10} shape="rounded" color='primary' className={cx('paging-list')}/>
                             

                    </div>             
                    
                </Grid2>
            </Grid2>
            </div>
  )
}

export default index
