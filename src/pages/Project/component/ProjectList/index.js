import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ProjectCard from '../ProjectCard';
import styles from './ProjectList.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProjectList(props) {
    const demoData = [
        {
            id: 1,
            name: "Project Name",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. ...",
            tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
            publishDate: "29/2/2020",
            deliverDays: 4,
            wage: 500,
            status: 'On going'
        },
        {
            id: 2,
            name: "Project Name",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. ...",
            tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
            publishDate: "29/2/2020",
            deliverDays: 4,
            wage: 500,
            status: 'On going'
        },
        {
            id: 3,
            name: "Project Name",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. ...",
            tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
            publishDate: "29/2/2020",
            deliverDays: 4,
            wage: 500,
            status: 'On going'
        },
        {
            id: 4,
            name: "Project Name",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. ...",
            tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
            publishDate: "29/2/2020",
            deliverDays: 4,
            wage: 500,
            status: 'On going'
        }
    ]

    const projects = props.projects === undefined ? demoData : props.projects;

    return (
        <div className={cx('wrapper')}>
            <Grid2 container gap={5} className={cx('project-list')}>
                {projects.map((project, index) => {
                    return (
                        <Grid2 key={index} lg={5} className={cx('project-item')}>
                            <ProjectCard project={project}/>
                        </Grid2>
                    )
                })}
            </Grid2>
        </div>
    );
}

export default ProjectList;