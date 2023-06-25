import styles from './Project.module.scss'
import classNames from 'classnames/bind';
import { Box, Button, Paper, Skeleton, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import demoData from '../../components/Layout/component/DemoData';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import ProjectCard from './component/ProjectCard';
import VerifiedIcon from '@mui/icons-material/Verified';
import images from '../../assets/images';
import BasicModalControl from '../../components/Layout/component/BasicModalControl';
import Tag from './component/Tag';
import BasicSelect from '../../components/Layout/component/BasicSelect';

const cx = classNames.bind(styles);
// const selectOptions = [
//     {value: 1, name: 'TP.Ho Chi Minh'},
//     {value: 2, name: 'TP.Da Lat'},
//     {value: 3, name: 'TP.Da Nang'},
//     {value: 4, name: 'TP.Ha Noi'},
// ]

function Project() {
    const user = demoData.user;
    const [projects, setProjects] = useState(demoData.projects);
    const [isLoading, setIsLoading] = useState(false);
    const [currProject, setCurproject] = useState(projects[0]);

    // useEffect(() => {
    //     if (window.sessionStorage.getItem("projects") === null) {
    //         request.get("projects/detail-page/all")
    //             .then(res => {
    //                 setProjects(res.data);
    //                 setCurproject(res.data[1])
    //                 window.sessionStorage.setItem("projects", JSON.stringify(res.data));
    //                 console.log("running this line");
    //             })
    //     }else {
    //         setProjects(JSON.parse(window.sessionStorage.getItem("projects")));
    //     }
    // }, [])

    function handleItemClick(project) {
        if (project.id !== currProject.id) {
            setIsLoading(true);
            setCurproject(project);
            setTimeout(() => {
                setIsLoading(false);
            }, 800)
        }
    }



    return (
        <div className={cx('wrapper')}>
            <div className={cx('project-banner')}>
                <h1 className={cx('project-heading')}>More than 50 different Projects at FindHub</h1>
                <Paper elevation={6} className={cx('project-search')}>
                    <TextField className={cx('search-input')} placeholder='Search for project' ></TextField>
                    {/* <BasicSelect className={cx('search-select')} label='Select location' options={selectOptions} /> */}
                    <Button className={cx('search-btn')} variant="contained" color='primary' endIcon={<SendIcon/>}>
                        Find
                    </Button>
                </Paper>
            </div>
            <div className={cx('project-container')}>
                <Grid2 container justifyContent='space-between' className={cx('project-gird')}>
                    <Grid2 lg={5} className={cx('project-list-container')}>
                        <ul className={cx('project-list')}>
                            {projects.map((prj, index) => {
                                return (
                                    <li onClick={() => handleItemClick(prj)} key={index} className={cx('project-item', `${prj.id === currProject.id && "active"}`)}>
                                        <ProjectCard project={prj}/>
                                    </li>
                                )
                            })}
                            
                        </ul>
                    </Grid2>
                    <Grid2 lg={6.5} className={cx('project-detail-container')}>
                        <div className={cx('detail-content')}>
                            <div className={cx('detail-head')}>
                                <div className={cx('detail-head-content')}>
                                    <img src={images.logo}/>
                                    <div className={cx('content-center')}>
                                        <h4 className={cx('center-heading')}>{currProject.name}</h4>
                                        <p className={cx('center-subdata')}>Status: <span>{currProject.status}</span></p>
                                        <p className={cx('center-subdata')}>Post on: {currProject.publishDate}</p>
                                    </div>
                                </div>
                                <div className={cx('detail-head-btn')}>
                                        <BasicModalControl size='large' btnLabel='Apply Now' btnClass={cx('status-btn')} variant="contained" color="primary">
                                            <Typography id="modal-modal-title" variant="h3" component="h2">
                                                Create Apply Form
                                            </Typography>
                                            <div className={cx('project-brief-detail')}>
                                                <p className={cx('brief-label')}>Projects Detail</p>
                                                <ul className={cx('detail-list')}>
                                                    <li className={cx('detail-item')}>
                                                        Name: <span>{currProject.name}</span>
                                                    </li>
                                                    <li className={cx('detail-item')}>
                                                        Status: <span>{currProject.status}</span>
                                                    </li>
                                                    <li className={cx('detail-item')}>
                                                        Salary: <span><Tag value={`$${currProject.wage}`}></Tag></span>
                                                    </li>
                                                    <li className={cx('detail-item')}>
                                                        Deliver days: <span>{currProject.deliverDays} days</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <Grid2 container rowGap={4} direction='column'>
                                                <Grid2 container justifyContent='space-between' className={cx('form-detail')}>
                                                    <TextField fullWidth label='Message'/>
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
                                    </div>
                            </div>
                            {!isLoading ? (
                                <ul className={cx('detail-body-list')}>
                                    <li className={cx('detail-body-item')}>
                                        <h2 className={cx('body-title')}>Description</h2>
                                        <p className={cx('body-content')}>{currProject.description}</p>
                                    </li>
                                    <li className={cx('detail-body-item')}>
                                        <h2 className={cx('body-title')}>Skill Require</h2>
                                        <ul className={cx('body-list')}>
                                            {currProject.skills.map((skill, index) => {
                                                return (
                                                    <li key={index} className={cx('body-item', 'between')}>
                                                        <p className={cx('item-name')}>
                                                            <VerifiedIcon className={cx('item-icon')}/>
                                                            {skill.name}
                                                        </p>
                                                        <p className={cx('item-value')}>
                                                            level <span>{skill.level}</span>
                                                        </p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ul>) : (
                                <Box sx={{ width: 500 }}>
                                    <Skeleton animation="wave" sx={{ width: 400, height: 60 }} />
                                    <Skeleton animation="wave" sx={{ width: 300, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 500, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 350, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 250, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 150, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 400, height: 60 }} />
                                    <Skeleton animation="wave" sx={{ width: 300, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 500, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 350, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 250, height: 25 }} />
                                    <Skeleton animation="wave" sx={{ width: 150, height: 25 }} />
                                </Box>
                            )
                            }
                        </div>
                    </Grid2>
                </Grid2>
            </div>
        </div>
    );
}

export default Project;