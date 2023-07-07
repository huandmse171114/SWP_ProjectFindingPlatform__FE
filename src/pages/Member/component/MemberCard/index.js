import { Paper } from '@mui/material';
import styles from './MemberCard.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../../../assets/images/actor.jpg';
import Tag from '../Tag';
import TagProject from '../TagProject';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import { Button, Tab , Stack, Typography, TextField } from '@mui/material';
import { Tabs } from 'react-bootstrap';
import demoData from '../../../../components/Layout/component/DemoData';
import { useState } from 'react';
import BasicSelect from '../../../../components/Layout/component/BasicSelect';
import BasicModalControl from '../../../../components/Layout/component/BasicModalControl';
const cx = classNames.bind(styles);
 
function MemberCard({ member, teams }) {
    const memberid =   member.id; 
    const memberUrl = '/memberprofile/:id' + memberid;
    const [skills,setSkills] = useState(member.skills);
    const [projects, setProjects] = useState(demoData.projects);
    const [isLoading, setIsLoading] = useState(false);
    const [currProject, setCurproject] = useState(projects[0]);
    return (
        <div elevation={0} className={cx('wrapper')}>
            <Tabs>
                <div>
                <Grid2 container rowGap={1} className={cx('card-container')}>
                    <div container alignItems='center' className={cx('card-section')}>
                     
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
                    <div className={cx('btn1')}>
                                        <BasicModalControl size='large' btnLabel='Invite' btnClass={cx('btn1')} variant="contained" color="primary">
                                            <Typography className={cx('invitationForm')} id="modal-modal-title" variant="h3" component="h2">
                                                Invitation Form
                                            </Typography>
                                            <div className={cx('project-brief-detail')}>
                                                <p className={cx('memberLabel')}>Member Detail</p>
                                                <ul className={cx('detail-list')}>
                                                    <li className={cx('nameItem')}>
                                                        Name: <span>{member.name}</span>
                                                    </li>
                                                    <li className={cx('majorItem')}>
                                                        Major: <span>{member.major.name}</span>
                                                    </li>                                                                                 
                                                </ul>
                                            </div>
                                            <Grid2 container rowGap={4} direction='column'>
                                                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                                                    <TextField fullWidth label='Message'/>
                                                </Grid2>
                                                <Grid2 container justifyContent='space-between'>
                                                    <Grid2 lg={7}>
                                                        <BasicSelect label="Select Team" options={teams} />
                                                    </Grid2>
                                                    <Grid2 lg={4} className={cx('formBtn')}>
                                                        <Button className={cx('sendInvitation-btn')} variant="contained" color='primary'>Send Invitation</Button>
                                                    </Grid2>
                                                </Grid2>
                                            </Grid2>
                                        </BasicModalControl>
                                    </div>
                        {/* <Button  variant='contained' className={cx('btn1')}>Invite</Button> */}
                         
                        

                    </Stack>
                
                  
                </Grid2>
                </div>
                 
            </Tabs>
        </div>
    );
}

export default MemberCard;