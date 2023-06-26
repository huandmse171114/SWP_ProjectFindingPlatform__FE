import { Paper } from '@mui/material';
import styles from './MemberCard.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../../../assets/images/actor.jpg';
import Tag from '../Tag';
import TagProject from '../TagProject';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import { Button, Tab , Stack } from '@mui/material';
import { Tabs } from 'react-bootstrap';
import demoData from '../../../../components/Layout/component/DemoData';
import { useState } from 'react';
const cx = classNames.bind(styles);
 
function MemberCard({ member }) {
    const memberid =   member.id; 
    const memberUrl = '/memberprofile/:id' + memberid;
    const [skills,setSkills] = useState(demoData.skills);
    return (
        <div elevation={0} className={cx('wrapper')}>
            <Tabs>
                <div>
                <Grid2 container     rowGap={1} className={cx('card-container')}>
                    <div container   alignItems='center' className={cx('card-section')}>
                     
                            <img  className={cx('card-img')} alt={member.name} src={images} />
                         
                        
                        <Grid2  lg={10}    >
                            <div className={cx('card-name')}  >{member.name}</div>
                            {/* <div className={cx('card-status', 'active')}>{member.majorCode}</div> */}
                            <Grid2 container gap={1}  className={cx('card-skills')}>
                    {skills.length !== 0 ? skills.map((tag, index) => {
                        return <TagProject key={index} size="small" value={tag.name} />
                    }) : (<TagProject size="small" value="No specific skill required" />)
                }
                  
                   </Grid2>
                        </Grid2>
                    </div>
                
                   


                 
                    
                   <br />
                    <Stack direction={"row"} spacing={1} className={cx('buttonAccept')}>
                     
                        <Button  variant='contained' className={cx('btn1')}>Accept</Button>
                         
                        <Button variant='outlined' className={cx('btn2')}>Reject</Button>

                    </Stack>
                
                  
                </Grid2>
                </div>
                 
            </Tabs>
        </div>
    );
}

export default MemberCard;