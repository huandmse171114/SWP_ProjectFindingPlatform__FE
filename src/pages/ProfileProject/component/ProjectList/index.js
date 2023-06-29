import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ProjectCard from '../ProjectCard';
import styles from './ProjectList.module.scss'
import classNames from 'classnames/bind';
import demoData from '../../../../components/Layout/component/DemoData';
import { Pagination } from 'react-bootstrap';
const cx = classNames.bind(styles);

function ProjectList(props) {

    const projects = props.projects === undefined ? demoData.projects : props.projects;

    return (
        <div className={cx('wrapper')}>
            <Grid2 container direction="row" justifyContent='left' gap={4} className={cx('project-list')} sx={{width:"100%", }}>
                {projects.map((project, index) => {
                    return (
                        <Grid2 key={index} lg={3.5} className={cx('project-item')}>
                            <ProjectCard project={project}/>
                            <Pagination count={10} shape="rounded" color='primary' className={cx('paging-list')}/>
                        </Grid2>
                        
                    )
                })}
            </Grid2>
        </div>
    );
}

export default ProjectList;