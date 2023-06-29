import styles from './Project.module.scss'
import classNames from 'classnames/bind';
import { Box, Button, CircularProgress, Paper, Skeleton, TextField, Typography } from '@mui/material';
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
import BasicSpeedDial from '../../components/Layout/component/BasicSpeedDial';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import ReadonlyEditor from '../../components/Layout/component/ReadonlyEditor';
import LoadingOverlay from '../../components/Layout/component/LoadingOverlay';
const cx = classNames.bind(styles);

function Project() {
    const user = demoData.user;
    const [projects, setProjects] = useState();
    const [isLoadingProject, setIsLoadingProject] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingSkills, setIsLoadingSKills] = useState(true);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isLoadDescription, setIsLoadDescription] = useState(false);
    const [currProject, setCurproject] = useState();
    const [skills, setSkills] = useState();
    const [categories, setCategories] = useState();
    let navigate = useNavigate(); 

    const speedDialActions = [
        { icon: <AddOutlinedIcon />, name: 'Create', handleClick: () => navigate('/create-project') },
        { icon: <EditOutlinedIcon />, name: 'Edit', handleClick: () => navigate(`/edit-project/${currProject.id}`) },
    ];

    useEffect(() => {
        // ======================== Get projects data =======================
        if (window.sessionStorage.getItem("projects") === null) {
            request.get("projects/all")
                .then(res => {
                    setProjects(res.data);
                    setCurproject(res.data[0])
                    setIsLoadingProject(false);
                    window.sessionStorage.setItem("projects", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("projects")))
                })
        }else {
            let projectLocal = JSON.parse(window.sessionStorage.getItem("projects"));
            setProjects(projectLocal);
            setCurproject(projectLocal[0])
            setIsLoadingProject(false);
        }

        // ======================= Get categories data =========================
        if (window.sessionStorage.getItem("categories") === null) {
            request.get("categories/all")
                .then(res => {
                    setCategories(res.data);
                    setIsLoadingCategories(false);
                    window.sessionStorage.setItem("categories", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("categories")))
                })
        }else {
            setCategories(JSON.parse(window.sessionStorage.getItem("categories")));
            setIsLoadingCategories(false);
        }

        // ========================= Get skills data ============================
        if (window.sessionStorage.getItem("skills") === null) {
            request.get("skills/all")
                .then(res => {
                    setSkills(res.data);
                    setIsLoadingSKills(false);
                    window.sessionStorage.setItem("skills", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("skills")))
                })
        }else {
            setSkills(JSON.parse(window.sessionStorage.getItem("skills")));
            setIsLoadingSKills(false);
        }
    }, [])

    useEffect(() => {
        if (!isLoadDescription && !isLoadingCategories && !isLoadingProject && !isLoadingSkills){
            setTimeout(() => {
                setIsLoading(false);
            }, 400)
        }
    }, [isLoadDescription, isLoadingCategories, isLoadingProject, isLoadingSkills])

    function handleItemClick(project) {
        if (project.id !== currProject.id) {
            setIsLoadDescription(true);
            setCurproject(project);
            setTimeout(() => {
                setIsLoadDescription(false);
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
            {!isLoading ? 
            
            <div className={cx('project-container')}>
                {(user.role === "PUBLISHER" || user.role === "ADMIN") && (
                    <div className={cx('project-dial')}>
                        <BasicSpeedDial actions={speedDialActions}/>
                    </div>
                )}
                <Grid2 container justifyContent='space-between' className={cx('project-gird')}>
                    <Grid2 lg={5} className={cx('project-list-container')}>
                        <ul className={cx('project-list')}>
                            {projects !== undefined && projects.map((prj, index) => {
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
                            {!isLoadDescription ? (
                                <ul className={cx('detail-body-list')}>
                                    <li className={cx('detail-body-item')}>
                                        <h2 className={cx('body-title')}>Description</h2>
                                        <p className={cx('body-content')}>{(currProject.description)}</p>
                                        {/* <ReadonlyEditor storedState={currProject.description}/> */}
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
            </div> : (
                <LoadingOverlay />
            )
        }
        </div>
    );
}

export default Project;