import styles from './CreateProject.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CreateProject() {
    return ( 
        <div className={cx('wrapper')}>
            Create Project Page
        </div>
     );
}

export default CreateProject;