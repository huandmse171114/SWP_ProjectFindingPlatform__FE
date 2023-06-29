import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import styles from './ProfileProject.module.scss';
import classNames from 'classnames/bind';
import Sidebar from './component/Sidebar'
 import { Pagination } from 'react-bootstrap';
 import ProjectList from './component/ProjectList';
 import { Paper } from '@mui/material';
const cx = classNames.bind(styles);

function index() {
  return (
    <div className= {cx('wrapper')}>
        <Grid2  justifyContent='space-between' className={cx('project-content')} container
          >
               <Grid2  className={cx('project-sidebar')} container lg={2}      >

                <Sidebar/>

               </Grid2>

               {/* Part 2 */}
               <Grid2  className={cx('project-list')} rowGap={12} container lg={9}
           >
               <Paper className={cx('Paper2')} >

                <div className='textCurrent'>
                    <h2>Current Project</h2>
                </div>

               <ProjectList />
                
                <div className={cx('project-list-paging')}>
                    
                </div>
               </Paper>
                 
                
                
               
                </Grid2> 
        </Grid2>
        
    </div>
  )
}

export default index