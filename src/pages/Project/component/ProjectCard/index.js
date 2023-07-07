import { Paper } from '@mui/material';
import styles from './ProjectCard.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../../../assets/images';
import Tag from '../Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import ReadonlyEditor from '../../../../components/Layout/component/ReadonlyEditor';

const cx = classNames.bind(styles);

function ProjectCard({ project }) {
    const projectDetailURL = "/project-detail/" + project.id;

    return (
        <Paper elevation={0} className={cx('wrapper')}>
            <Grid2 container rowGap={1} className={cx('card-container')}>
                <Grid2 container lg={12} justifyContent='space-between' alignItems='center' className={cx('card-section')}>
                    <Grid2 lg={10} className={cx('card-img')}>
                        <Link to={projectDetailURL} className={cx('card-name')}>
                            {project.name}
                        </Link>
                    </Grid2>
                    <Grid2 container justifyContent='center' alignItems='flex-end' direction='column' lg={2} className={cx('card-price')}>
                        <div className={cx('card-status', 'active')}>{project.status}</div>
                    </Grid2>
                </Grid2>
                <Grid2 container lg={12} alignItems='center' justifyContent='space-between'>
                    <Grid2 lg={3} className={cx('card-section')}>
                        <Paper className={cx('card-image-container')} elevation={1}>
                            <img className={cx('card-image')} alt={project.name} src={images.logo} />
                        </Paper>
                    </Grid2>
                    <Grid2 lg={8.5} className={cx('card-section')}>
                        <div className={cx('card-description')}>
                            <ReadonlyEditor staticData={project.description} />
                        </div>
                    </Grid2>
                </Grid2>
                <Grid2 container gap={1}  className={cx('card-section', 'separate')}>
                    {project.skills.length !== 0 ? project.skills.map((tag, index) => {
                        return <Tag key={index} size="small" value={tag.name} />
                    }) : (<Tag size="small" value="No specific skill required" />)
                }
                </Grid2>
                <Grid2 container justifyContent='space-between' className={cx('card-section')}>
                    <div className={cx('card-time')}>
                        <AccessTimeIcon />
                        {project.publishDate}
                    </div>
                    <div className={cx('card-deadline')}>{project.deliverDays} days delivery</div>
                </Grid2>
            </Grid2>
        </Paper>
    );
}

export default ProjectCard;