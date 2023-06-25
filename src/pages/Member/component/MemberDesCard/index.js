import { Paper } from '@mui/material';
import styles from './MemberDesCard.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../../../assets/images/actor.jpg';
import Tag from '../Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';
import MemberList from '../MemberList';
const cx = classNames.bind(styles);

function MemberDesCard({ currMember }) {
    
    return (
        <div elevation={0} className={cx('wrapper')}>
           
                <Grid2>
                  <Paper elevation={2} className={cx('wrapper')}>
                  <Grid2 container rowGap={1} className={cx('card-container')}>
                    <Grid2 container justifyContent='space-between' alignItems='center' className={cx('card-section')}>
                        <Grid2 lg={3} className={cx('card-img')}>
                            <img alt={currMember.name} src={images} />
                        </Grid2>
                        <Grid2 container justifyContent='center' alignItems='flex-end' direction='column' lg={4} className={cx('card-price')}>
                            <Tag value={currMember.name} />
                            <div className={cx('card-status', 'active')}>{currMember.name}</div>
                        </Grid2>
                    </Grid2>
                    
                     
                    <Grid2 container justifyContent='space-between' className={cx('card-section')}>
                       
                        <div className={cx('card-deadline')}>{currMember.majorCode}  Major</div>
                    </Grid2>
                    </Grid2>
                  </Paper>
                   

                    <Paper>
                        <Grid2 container sx={{display:"flex"}}>
                            <Grid2>
                                <p>Description</p>
                            </Grid2>




                            <Grid2>
                            <h1>SKills</h1>

                            </Grid2>




                        </Grid2>


                    </Paper>




                </Grid2>
                 
               
                 
           
        </div>
    );
}

export default MemberDesCard;