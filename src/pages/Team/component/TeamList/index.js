import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import TeamCard from '../TeamCard';
import styles from './TeamList.module.scss'
import classNames from 'classnames/bind';
import demoData from '../../../../components/Layout/component/DemoData';
import { Pagination } from 'react-bootstrap';
const cx = classNames.bind(styles);

function TeamList(props) {

    const projects = props.projects === undefined ? demoData.projects : props.projects;

    return (
        <div className={cx('wrapper')}>
            <Grid2 container direction="column"     className={cx('team-list')} sx={{width:"420%",marginLeft:"5%",marginBottom:"10%"  }}>
                {projects.map((team, index) => {
                    return (
                        <Grid2 key={index} lg={3.5} className={cx('project-item')}>
                            <TeamCard team={team}/>
                            <Pagination count={10} shape="rounded" color='primary' className={cx('paging-list')}/>
                        </Grid2>
                        
                    )
                })}
            </Grid2>
        </div>
    );
}

export default TeamList;