import { useParams } from 'react-router-dom';
import styles from './ProjectDetail.module.scss'
import classNames from 'classnames/bind';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../assets/images';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import demoData from '../../components/Layout/component/DemoData';
import BasicModalControl from '../../components/Layout/component/BasicModalControl';
import MemberSearchDropDown from '../../components/Layout/component/MemberSearchDropdown';
import Tag from '../Project/component/Tag';
import BasicSelect from '../../components/Layout/component/BasicSelect';

const cx = classNames.bind(styles);

function ProjectDetail() {
    const { id } = useParams();
    const project = demoData.projects.filter(project => project.id + "" === id)[0];
    console.log(project);

    return (
        <Container className={cx('wrapper')}>
            <Grid2 container justifyContent='space-between' className={cx('detail-grid')}>
                <Grid2 lg={8} className={cx('detail-content')}>
                    <Paper elevation={2} className={cx('detail-outline')} >
                        <ul className={cx('detail-list')}>
                            <li className={cx('detail-item', 'separate-bold')}>
                                <Grid2 container direction='column'  className={cx('content-body', 'content-title')} >
                                    <h2 className={cx('desc-heading')}>
                                        {project.name}
                                    </h2>
                                    <div className={cx('desc-time')}>
                                        <AccessTimeIcon />
                                        Publish Date {project.publishDate}
                                    </div>
                                </Grid2>
                            </li>
                            <li className={cx('detail-item', 'center')}>
                                <Grid2 container direction='column' justifyContent='center' className={cx('content-customer')} >
                                    <p>About the Client</p>
                                <img alt='' src={images.logo} />
                                </Grid2>
                            </li>
                            <li className={cx('detail-item', 'separate-bold')}>
                                <Grid2 container direction='column' className={cx('content-body', 'content-description')} >
                                    <h2 className={cx('desc-subheading')}>
                                        Project Description
                                    </h2>
                                    <pre className={cx('desc-text')}>
                                        {project.desc}
                                    </pre>
                                </Grid2>
                            </li>
                            <li className={cx('detail-item', 'separate-bold')}>
                                <Grid2 container direction='column' className={cx('content-body', 'content-description')} >
                                    <h2 className={cx('desc-subheading')}>
                                        Skills Required
                                    </h2>
                                    <ul className={cx('desc-list')}>
                                        {project.skills.map((skill, index) => {
                                            return (
                                                <li key={index} className={cx('desc-item', 'between')}>
                                                    <p className={cx('item-name')}>
                                                        <VerifiedIcon className={cx('item-icon')}/>
                                                        {skill.name}
                                                    </p>
                                                    <p className={cx('item-value')}>
                                                        level <span>{skill.value}</span>
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    
                                </Grid2>
                            </li>
                        </ul>
                    </Paper>
                </Grid2>
                <Grid2 lg={3} className={cx('detail-status')}>
                    <Paper elevation={2} className={cx('detail-outline')}>
                        <ul className={cx('detail-list')}>
                            <li className={cx('detail-item', 'between')}>
                                Status <span className={cx('status-value', 'state-1')}>{project.status}</span>
                            </li>
                            <li className={cx('detail-item', 'between')}>
                                Category <span className={cx('status-value')}>{project.category}</span>
                            </li>
                            <li className={cx('detail-item', 'between', 'separate')}>
                                Deliver days <span className={cx('status-value')}>{project.deliverDays} days</span>
                            </li>
                            <li className={cx('detail-item', 'between', 'separate')}>
                                Due date <span className={cx('status-value')}>{project.dueDate}</span>
                            </li>
                            <li className={cx('detail-item', 'between', 'separate')}>
                                Salary <span className={cx('status-value', 'status-price')}>$ {project.wage}</span>
                            </li>
                            <li className={cx('detail-item', 'between')}>
                                <BasicModalControl size='large' btnLabel='Apply Now' btnClass={cx('status-btn')} variant="contained" color="primary">
                                    <Typography id="modal-modal-title" variant="h3" component="h2">
                                        Create Apply Form
                                    </Typography>
                                    <div className={cx('project-brief-detail')}>
                                        <p className={cx('brief-label')}>Projects Detail</p>
                                        <ul className={cx('detail-list')}>
                                            <li className={cx('detail-item')}>
                                                Name: <span>{project.name}</span>
                                            </li>
                                            <li className={cx('detail-item')}>
                                                Status: <span>{project.status}</span>
                                            </li>
                                            <li className={cx('detail-item')}>
                                                Salary: <span><Tag value={`$${project.wage}`}></Tag></span>
                                            </li>
                                            <li className={cx('detail-item')}>
                                                Deliver days: <span>{project.deliverDays} days</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Grid2 container rowGap={4} direction='column'>
                                        <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                                            <Grid2 lg={5}>
                                                <TextField fullWidth label='Title'/>
                                            </Grid2>
                                            <Grid2 lg={6.5}>
                                                <TextField fullWidth label='Message'/>
                                            </Grid2>
                                        </Grid2>
                                        <Grid2 container justifyContent='space-between'>
                                            <Grid2 lg={7}>
                                                <BasicSelect label="Select Team" options={demoData.teams} />
                                            </Grid2>
                                            <Grid2 lg={4}>
                                                <Button className={cx('form-submit-btn')} variant="contained" color='primary'>Submit</Button>
                                            </Grid2>
                                        </Grid2>
                                    </Grid2>
                                </BasicModalControl>
                            </li>
                            <li className={cx('detail-item')}>
                                <BasicModalControl btnLabel='Find Teammates' btnClass={cx('status-btn')} variant="contained" color="primary">
                                    <Typography id="modal-modal-title" variant="h3" component="h2">
                                        Create Teams
                                    </Typography>
                                    <div className={cx('team-lead-detail')}>
                                        <Avatar alt="Username" src={images.demoAvt} className={cx('leader-avt')}/>
                                        <div className={cx('leader-info')}>
                                            <p className={cx('leader-name')}>HuanDM</p>
                                            <p className={cx('role')}>Team Leader</p>  
                                        </div>
                                    </div>
                                    <TextField label='Team name' className={cx('team-name-input')}/>
                                    <MemberSearchDropDown label='Invite Members' optionList={demoData.members}/>
                                    <Button className={cx('team-create-btn')} variant="contained" color='primary'>Create</Button>
                                </BasicModalControl>
                            </li>
                        </ul>
                    </Paper>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default ProjectDetail;