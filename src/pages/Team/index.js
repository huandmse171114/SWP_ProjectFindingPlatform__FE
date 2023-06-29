import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import styles from './TeamPage.module.scss';
import classNames from 'classnames/bind';
import Banner from './component/Banner'
import Sidebar from './component/Sidebar';
import TeamList from './component/TeamList';
import { Pagination } from 'react-bootstrap';
import { Paper } from '@mui/material';
const cx = classNames.bind(styles);

function index() {
  return (
    <div className={cx('wrapper')}>
            <Grid2 container direction={"column"} >
                <Banner/>            
            </Grid2>
        <Grid2  justifyContent='space-between' className={cx('project-content')} container>
                  <Grid2 className={cx('project-sidebar')} container lg={2}>
                    <Sidebar />
                </Grid2>
                    <Grid2 className={cx('project-list')} rowGap={12} container lg={9}>
                        <TeamList/>
                        <Paper className={cx('project-list-paging')}>
                        <Pagination count={10} variant="outlined" />
                    </Paper>
                    </Grid2>

            
            </Grid2>    
           






            








    </div>
  )
}

export default index