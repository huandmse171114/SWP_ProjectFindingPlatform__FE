import { Paper } from '@mui/material';
import styles from './ProjectCard.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProjectCard() {
    return (
        <Paper elevation={2} className={cx('wrapper')}>

        </Paper>
    );
}

export default ProjectCard;