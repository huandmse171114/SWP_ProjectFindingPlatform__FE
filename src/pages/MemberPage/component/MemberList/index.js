import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MemberCard from '../MemberCard';
import styles from './MemberList.module.scss'
import classNames from 'classnames/bind';
import demoData from '../../../../components/Layout/component/DemoData';

const cx = classNames.bind(styles);

function MemberList(props) {

    const members = props.members === undefined ? demoData.members : props.members;

    return (
        <div className={cx('wrapper')}>
            <Grid2 container direction="column" justifyContent='left' gap={4} className={cx('project-list')}>
                {members.map((member, index) => {
                    return (
                        <Grid2 key={index} lg={3.5} className={cx('project-item')}>
                            <MemberCard member={member}/>
                        </Grid2>
                    )
                })}
            </Grid2>
        </div>
    );
}

export default MemberList;