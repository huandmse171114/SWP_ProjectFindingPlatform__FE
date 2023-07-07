import { Paper } from '@mui/material';
import styles from './TeamCard.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../../../assets/images';
import Tag from '../Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import BasicModalControl from '../../../../components/Layout/component/BasicModalControl';
import {Typography,Button,TextField} from '@mui/material';
import BasicSelect from '../../../../components/Layout/component/BasicSelect';
import { useState } from 'react';
import TagProject from '../../../Member/component/TagProject'
import ClickModal from '../../../../components/Layout/component/ClickModal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image from '../../../../assets/images/actor.jpg';
const cx = classNames.bind(styles);

function TeamCard({ team , teams}) {
    const balance = '$ ' + team.balance; 
    const [member,setMembers] = useState(team.members[0]);
    let count = 0;
    return (
        <Paper elevation={2} className={cx('wrapper')}>
                <ClickModal size='large' btnLabel=
                {
                     <Grid2 container rowGap={1} className={cx('card-container')}>
                    <Grid2 container justifyContent='space-between' alignItems='center' className={cx('card-section')}>
                         
                        <Grid2 container justifyContent='center' alignItems='flex-end' direction='column' lg={4} className={cx('card-price')}>
                            <Tag  value={balance} />
                            <div className={cx('card-status', 'active')}>{team.status}</div>
                        </Grid2>
                    </Grid2>
                    <Grid2 container className={cx('card-section')}>
                        {team.name}
                    </Grid2>
                    <Grid2 container gap={1}  className={cx('card-section', 'separate')}>
                        {team.members.map((member, index) => {
                            return <Tag key={index} size="small" value={member.name} />
                        })}
                    </Grid2>
                                                
                      


                </Grid2>}
               btnClass={cx('cardTeam')} variant="contained" color="primary" >  



 <Typography className={cx('invitationForm')} id="modal-modal-title" variant="h3" component="h2">
                                                Team Detail
                                            </Typography>
                                            {console.log(team)}
                                            {console.log(member)}
                                            <div className={cx('project-brief-detail')}>
                                                <p className={cx('memberLabel')}>Member Detail</p>
                                                <ul className={cx('detail-list')}>
                                                    <li className={cx('nameItem')}>
                                                        Name: <span className={cx('nameLead')}>{team.name}</span>
                                                    </li>
                                                    <li className={cx('nameItem')}>
                                            <Grid2 className={cx('leaderParts')} justifyContent={"space-between"}>
                        
                                            <div className={cx('leaderName')}  > 
                                            <p className={cx('nameLeadText')}>
                                            Leader:
                                            </p>
                                                         
                                                         <div className={cx('nameLeads')}> 
                                                         {team.members.map((member, index) => {
                                                            count++;
                                                            if(count === 1) {
                                                                 
                                                                return(
                                                                     <Grid2 className={cx('tableItem')}>
                                                                <div className={cx('leaderItem')}>{member.name}</div>
                                                                       </Grid2>
                                                                )
                                                               
                                                              
                                                              }
                                                              
                                                           })}

                                                           </div>
                                              </div>
                                            </Grid2>
                                          
                                                   
                                                    </li>
                                                    <li className={cx('memberItem')}>
                                                      <p>  Members:</p> 
                                                       <span className={cx('memberItemName')} > {team.members.length !== 0 ? team.members.map((member, index) => {
                                                         return (
                          
                          
                                                            <Grid2>
                                                                 <p className={cx('tagname')}>{member.name}</p>
                                                            </Grid2>
                                                               
                                                                )
                                                            }) : (<Tag size="small" value="No specific skill required" />)
                                                             }</span>
                                                    </li>                                                                                 
                                                </ul>
                                            </div>
                                            <Grid2 container className={cx('arrows')} alignItems={"center"} direction='row' >
                                                   
                                                 <div className={cx('leaderPart')}>
                                                 <img className={cx('card-img')} src={image}/>
                                                    <p className={cx('leaderText')} >  Leader:  </p>
                                          
                                                         <div className={cx('nameLead')}> 
                                                         {team.members.map((member, index) => {
                                                            count++;
                                                            if(count === 1) {
                                                                
                                                                return <span>{member.name}</span>
                                                                 
                                                              }
                             
                                                           })}
                                                             
                                                           </div>

                                                            
                                                           
                                                            
                                                           
                                                           <div className={cx('leaderText')}>
                                                                <ArrowForwardIcon/>
                                                           </div>
                                                            
                                                           <img className={cx('card-img2')} src={image}/>
                                                           
                                                           <p className={cx('leaderText')}>
                                                            Member:
                                                           </p>
                                                           
                                                 </div>
                                                </Grid2>
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





                </ClickModal>
        </Paper>
                        

        

    );
}

export default TeamCard;