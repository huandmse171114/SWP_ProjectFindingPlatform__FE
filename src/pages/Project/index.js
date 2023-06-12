import styles from './Project.module.scss'
import classNames from 'classnames/bind';
import ProjectDetail from './component/ProjectDetail';
import ProjectList from './component/ProjectList';

const cx = classNames.bind(styles);

function Project() {
    return (
        <div>
            <h1>Project Page</h1>
            <ProjectDetail />
            <ProjectList />
        </div>
    );
}

export default Project;