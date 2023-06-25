import { Paper } from '@mui/material';
import styles from './MemberCard.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../../../assets/images/actor.jpg';
import Tag from '../Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';

const cx = classNames.bind(styles);

function MemberCard({ member }) {
    const memberid =   member.id; 
    const memberUrl = '/memberprofile/:id' + memberid;
    
    return (
        <div elevation={0} className={cx('wrapper')}>
            <Tabs>
                <Tab>
                <Grid2 container rowGap={1} className={cx('card-container')}>
                    <Grid2 container justifyContent='space-between' alignItems='center' className={cx('card-section')}>
                        <Grid2 lg={3} className={cx('card-img')}>
                            <img alt={member.name} src={images} />
                        </Grid2>
                        <Grid2 container justifyContent='center' alignItems='flex-end' direction='column' lg={4} className={cx('card-price')}>
                            <Tag value={member.name} />
                            <div className={cx('card-status', 'active')}>{member.name}</div>
                        </Grid2>
                    </Grid2>
                    <Grid2 container className={cx('card-section')}>
                        {member.phone}
                    </Grid2>
                     
                    <Grid2 container justifyContent='space-between' className={cx('card-section')}>
                        <div className={cx('card-time')}>
                            <AccessTimeIcon />
                            {member.dob}
                        </div>
                        <div className={cx('card-deadline')}>{member.majorCode}  Major</div>
                    </Grid2>
                </Grid2>
                </Tab>
                 
            </Tabs>
        </div>
    );
}

export default MemberCard;