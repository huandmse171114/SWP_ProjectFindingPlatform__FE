import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './ControlAccordion.module.scss'
import classNames from 'classnames/bind';
import demoData from '../DemoData';
import images from '../../../../assets/images';
import ProjectCard from '../../../../pages/Profile/component/ProjectCard';
import BasicModalControl from '../BasicModalControl';
import { Avatar, Badge, Button, Divider, TextField } from '@mui/material';
import MemberSearchDropDown from '../MemberSearchDropdown';
import TextEditor from '../TextEditor';
import AlertDialog from '../AlertDialog';

const cx = classNames.bind(styles);

export default function ControlAccordion({ team }) {
  const [expanded, setExpanded] = React.useState(false);
  const projects = JSON.parse(sessionStorage.getItem("projects"))
  const project = projects[0];
  const [description, setDescription] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        {team ?
            <Accordion expanded={expanded === 'panel1'} sx={{mb: 4}} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{p: 2}}
            >
                <Typography sx={{ width: '65%', flexShrink: 0, fontSize: 18 }}>
                Project Finding Platform Frontend Team
                </Typography>
                <BasicModalControl size="large" btnLabel='Edit' btnClass={cx('create-team-btn')} variant="outlined" color="primary">
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        Edit team
                    </Typography>
                    <div className={cx('team-lead-detail')}>
                        <Avatar alt="Username" src={images.demoAvt} className={cx('leader-avt')}/>
                        <div className={cx('leader-info')}>
                            <p className={cx('leader-name')}>HuanDM</p>
                            <p className={cx('role')}>Team Leader</p>  
                        </div>
                    </div>
                    <div className={cx('team-member-detail')}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            Team members
                        </Typography>
                        <ul className={cx('team-member-list')}>
                            <li className={cx('team-member-item')}>
                                <div className={cx('team-member-description')}>
                                    <img src={images.demoAvt} className={cx('member-avatar')} />
                                    <div className={cx('member-info')}>
                                        <p className={cx('member-name')}>Dinh Minh Huan</p>
                                        <p className={cx('member-email')}>demoemail@gmail.com</p>
                                    </div>
                                </div>
                                <div className={cx('member-sub-info')}>
                                    <p className={cx('member-role')}>Team Member</p>
                                    <AlertDialog title="Change team leader" message="Do you sure to change this member into team leader? You will not be able to change this action later." label="Change to leader" />
                                    <AlertDialog title="Remove team member" message="Do you sure to remove this member? You will not be able to change this action later." label="Remove" />
                                </div>
                            </li>
                            <li className={cx('team-member-item')}>
                                <div className={cx('team-member-description')}>
                                    <img src={images.demoAvt} className={cx('member-avatar')} />
                                    <div className={cx('member-info')}>
                                        <p className={cx('member-name')}>Dinh Minh Huan</p>
                                        <p className={cx('member-email')}>demoemail@gmail.com</p>
                                    </div>
                                </div>
                                <div className={cx('member-sub-info')}>
                                    <p className={cx('member-role')}>Team Member</p>
                                    <AlertDialog title="Change team leader" message="Do you sure to change this member into team leader? You will not be able to change this action later." label="Change to leader" />
                                    <AlertDialog title="Remove team member" message="Do you sure to remove this member? You will not be able to change this action later." label="Remove" />
                                </div>
                            </li>
                            <li className={cx('team-member-item')}>
                                <div className={cx('team-member-description')}>
                                    <img src={images.demoAvt} className={cx('member-avatar')} />
                                    <div className={cx('member-info')}>
                                        <p className={cx('member-name')}>Dinh Minh Huan</p>
                                        <p className={cx('member-email')}>demoemail@gmail.com</p>
                                    </div>
                                </div>
                                <div className={cx('member-sub-info')}>
                                    <p className={cx('member-role')}>Team Member</p>
                                    <AlertDialog title="Change team leader" message="Do you sure to change this member into team leader? You will not be able to change this action later." label="Change to leader" />
                                    <AlertDialog title="Remove team member" message="Do you sure to remove this member? You will not be able to change this action later." label="Remove" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('team-member-detail')}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            Name
                        </Typography>
                        <TextField label='Team name' className={cx('team-name-input')}/>
                    </div>
                    <div className={cx('team-member-detail')}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            Description
                        </Typography>
                        <TextEditor setState={setDescription} value={description}/>
                    </div>
                    <MemberSearchDropDown label='Invite Members' optionList={demoData.members}/>
                    <Button className={cx('team-create-btn')} variant="contained" color='primary'>Save</Button>
                </BasicModalControl>
                <AlertDialog label="Leave" title="Leave Team" message="Do you sure want to leave this team? After leaving, you will not be able to access team's on going project"/>
                <Badge color="warning" badgeContent={9}> 
                    <BasicModalControl size='medium' btnLabel='Request' btnClass={cx('team-edit-btn')}>
                        <Typography id="modal-modal-title" variant="h3" component="h2">
                            Join Request
                        </Typography>
                        <div className={cx('project-filter-container')}>
                            
                        </div>
                    </BasicModalControl>
                </Badge>
            </AccordionSummary>
            <AccordionDetails>
                <div className={cx('detail-section')}>
                    <Typography className={cx('detail-title')} id="modal-modal-title" variant="h4" component="h2">
                        Team Member
                    </Typography>
                    <ul className={cx('team-member-list')}>
                        <li className={cx('team-member-item', 'leader-member')}>
                            <div className={cx('team-member-description')}>
                                <img src={images.demoAvt} className={cx('member-avatar')} />
                                <div className={cx('member-info')}>
                                    <p className={cx('member-name')}>Dinh Minh Huan</p>
                                    <p className={cx('member-email')}>demoemail@gmail.com</p>
                                </div>
                            </div>
                            <p className={cx('member-role')}>Team Lead</p>
                        </li>
                        <li className={cx('team-member-item')}>
                            <div className={cx('team-member-description')}>
                                <img src={images.demoAvt} className={cx('member-avatar')} />
                                <div className={cx('member-info')}>
                                    <p className={cx('member-name')}>Dinh Minh Huan</p>
                                    <p className={cx('member-email')}>demoemail@gmail.com</p>
                                </div>
                            </div>
                            <p className={cx('member-role')}>Team Member</p>
                        </li>
                        <li className={cx('team-member-item')}>
                            <div className={cx('team-member-description')}>
                                <img src={images.demoAvt} className={cx('member-avatar')} />
                                <div className={cx('member-info')}>
                                    <p className={cx('member-name')}>Dinh Minh Huan</p>
                                    <p className={cx('member-email')}>demoemail@gmail.com</p>
                                </div>
                            </div>
                            <p className={cx('member-role')}>Team Member</p>
                        </li>
                    </ul>
                </div>
                <div className={cx('detail-section')}>
                    <Typography className={cx('detail-title')} id="modal-modal-title" variant="h4" component="h2">
                        Team Description
                    </Typography>
                    <p className={cx('team-description')}>
                        We are looking for a talented individual to assist us with POD research for our Shopify store. 
                        The ideal candidate should be proficient in Shopify, research methods, market analysis, market research, and product research. 
                        The job length is less than one month, and we are looking for someone who can work efficiently and effectively within that timeframe.  
                        As our product researcher, your main responsibility is to help us identify products that will sell well on our Shopify store. 
                        You will be conducting market research and analysis to determine what products are popular and in demand. 
                        You will also be responsible for analyzing our competitors and identifying gaps in the market that we can fill.  
                        To be considered for this job, please submit a proposal detailing your experience with product research and how you 
                        can help us with this project. Please include links to past completed projects that showcase your skills in this area. 
                        We look forward to hearing from you!
                    </p>
                </div>
                <div className={cx('detail-section')}>
                    <Typography className={cx('detail-title')} id="modal-modal-title" variant="h4" component="h2">
                        Project Participated In
                    </Typography>
                    <p className={cx('team-description')}>
                        <ProjectCard project={project}/>
                    </p>
                </div>
            </AccordionDetails>
            </Accordion>
        : <div>No team available</div>
        }
    </div>
  );
}