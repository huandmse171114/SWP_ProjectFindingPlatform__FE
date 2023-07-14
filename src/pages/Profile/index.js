import classNames from "classnames/bind";
import styles from "./Profile.module.scss"
import { useNavigate, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, IconButton, Chip, Paper, Slider, TextField, Typography, Divider, Avatar, Badge, Menu } from "@mui/material";
import { Container } from "@mui/system";
import images from "../../assets/images";
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import TextEditor from "../../components/Layout/component/TextEditor";
import SkillItem from "../CreateProject/components/SkillItem";
import request from "../../utils/request";
import BasicSelect from "../../components/Layout/component/BasicSelect";
import demoData from "../../components/Layout/component/DemoData";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import format from '../../utils/formatSalary';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DoneIcon from '@mui/icons-material/Done';
import BasicModalControl from "../../components/Layout/component/BasicModalControl";
import WorkIcon from '@mui/icons-material/Work';
import SimpleDropDown from "../../components/Layout/component/SimpleDropdown";
import ProjectCard from "./component/ProjectCard";
import LoadingOverlay from "../../components/Layout/component/LoadingOverlay";
import ReadonlyEditor from "../../components/Layout/component/ReadonlyEditor";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import ControlAccordion from "../../components/Layout/component/ControlAccordination";
import MemberSearchDropDown from "../../components/Layout/component/MemberSearchDropdown";
import ControlAccordionProfile from "./component/ControlAccordionProfile";
import SimpleSnackbar from "../../components/Layout/component/SimpleSnackbar";

const cx = classNames.bind(styles)

function Profile() {
    const tab = useParams("tab").tab;
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem("user"));
    const skillAddBtn = useRef();
    const skillList = useRef();
    const editMainContentBtn = useRef();
    const saveMainContentBtn = useRef();
    const mainContentContainer = useRef();
    const mainViewContent = useRef();
    const mainEditContent = useRef();
    const detailView = useRef();
    
    const [description, setDescription] = useState('')
    const [skills, setSkills] = useState('');
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [skillItemList, setSkillItemList] = useState([]);
    const [skillValueList, setSkillValueList] = useState([])
    const [filterActiveStatus, setFilterActiveStatus] = useState('')
    const [categories, setCategories] = useState();
    const [projects, setProjects] = useState();
    const [currProject, setCurproject] = useState();
    const [profile, setProfile] = useState();
    const [major, setMajor] = useState();
    const [dob, setDob] = useState();
    const [majors, setMajors] = useState();
    const [editName, setEditName] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editMajor, setEditMajor] = useState('');
    const [editDob, setEditDob] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();


    const [isLoadingMajors, setIsLoadingMajors] = useState(true);
    const [isLoadingProfile, setIsLoadingProfile] = useState(true);
    const [isLoadingProject, setIsLoadingProject] = useState(true);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const [isLoadingStatus, setIsLoadingStatus] = useState(true);
    const [status, setStatus] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingSkills, setIsLoadingSKills] = useState(true);
    const [salaryFilterValue, setSalaryFilterValue] = useState([0, 10000000]);
    const [isSubmitInfo, setIsSubmitInfo] = useState(false);
    const [isSubmitDescription, setIsSubmitDescription] = useState(false);
    const [isEditDescription, setIsEditSubscription] = useState(false);
    const [isSubmitSkill, setIsSubmitSkill] = useState(false);

    const handleChange = (event, newValue) => {
        setSalaryFilterValue(newValue);
    };

    function salaryFilterValuetext(value) {
        return format(value);
    }

    function handleViewProjectDetail(project) {
        setCurproject(project);
        detailView.current.classList.remove(cx('hidden'));
        detailView.current.classList.add(cx('show'))
    }

    function handleDetailBackIconClick() {
        detailView.current.classList.remove(cx('show'));
        detailView.current.classList.add(cx('hidden'));
    }
    
    function salaryFilterLabelFormat(value) {
        return format(value);
    }

    const handleFilterStatusClick = (status) => {
        setFilterActiveStatus(status);
    };

    const handleFilterStatusDelete = () => {
        setFilterActiveStatus('');
    };


    function handleSkillAddBtnClick() {
        setSkillItemList(pre => {
            return [...pre, <SkillItem key={pre.length} handleSkillValueChange={handleSkillValueChange} index={pre.length} options={skills} cx={cx} />]
        });
    }

    function handleEditMainContentBtnClick() {
        console.log('running edit click')
        
        mainContentContainer.current.classList.add(cx("editable"));
        mainViewContent.current.classList.add(cx('hidden'))
        editMainContentBtn.current.classList.add(cx('hidden'))
        setTimeout(() => {
            mainEditContent.current.classList.add(cx('view'))
        }, 800)
    }

    function handleSaveMainContentBtnClick() {
        setIsSubmitInfo(true)
    }

    function handleSaveDescription() {
        setIsSubmitDescription(true)
    }

    function handleEditDescription() {
        setIsEditSubscription(true);
    }

    function handleSaveSkill() {
        setIsSubmitSkill(true)
    }

    function handleSkillValueChange(index, id, level) {
        console.log('Running handleSkillValueChange');
        setSkillValueList(pre => {
            pre[index] = {id, level}
            console.log(skillValueList);
            return pre;
        })
    }

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        if (profile) {
            setFullname(profile.name || '')
            setEmail(profile.email)
            setPhone(profile.phone || '')
            setMajor(profile.major || '')
            setDob(profile.dob|| '')
            setDescription(profile.description || 'No description yet...')
            setEditName(profile.name || '')
            setEditDob(profile.dob || '')
            setEditMajor(profile.major && profile.major.id || '')
            setEditPhone(profile.phone || '')
            setEditDescription(profile.description || 'No description yet...')

        }
    }, [profile])

    useEffect(() => {
        if (isSubmitInfo) {
            let status;
            if (profile.status.name === "GENERATED") {
                status = {
                    id: 1,
                    name: "INFORMED"
                }
            }else status = profile.status;

            if (user.role === "MEMBER") {
                console.log({
                    id: user.id,
                    name: editName,
                    phone: editPhone,
                    email: email,
                    dob: editDob,
                    majorId: editMajor,
                    avatarURL: "",
                    status: status
                })
                request.put("members", {
                    id: user.id,
                    name: editName,
                    phone: editPhone,
                    email: email,
                    dob: editDob,
                    majorId: editMajor,
                    avatarURL: "",
                    status: status
                }).then(res => {
                    request.get(`members/${user.id}`)
                        .then(res2 => {
                            setProfile(res2.data);
                            setMessage(res.data)
                            setMessageType("success")
                            setIsSubmitInfo(false);
                            window.sessionStorage.setItem("profile", JSON.stringify(res2.data));
                            mainContentContainer.current.classList.remove(cx("editable"));
                            mainViewContent.current.classList.remove(cx('hidden'))
                            mainEditContent.current.classList.remove(cx('view'))
                            editMainContentBtn.current.classList.remove(cx('hidden'))
                        })
                }).catch(err => {
                    setMessage(err.response.data)
                    setMessageType("error")
                })
            }else {
                request.put("publishers", {
                    id: user.id,
                    name: editName,
                    phone: editPhone,
                    email: email,
                    dob: editDob,
                    avatarURL: "",
                    status: status
                }).then(res => {
                    request.get(`publishers/${user.id}`)
                        .then(res2 => {
                            setProfile(res2.data);
                            setMessage(res.data)
                            setMessageType("success")
                            setIsSubmitInfo(false);
                            window.sessionStorage.setItem("profile", JSON.stringify(res2.data));
                            mainContentContainer.current.classList.remove(cx("editable"));
                            mainViewContent.current.classList.remove(cx('hidden'))
                            mainEditContent.current.classList.remove(cx('view'))
                            editMainContentBtn.current.classList.remove(cx('hidden'))
                        })
                }).catch(err => {
                    setMessage(err.response.data)
                    setMessageType("error")
                    setIsSubmitInfo(false);
                    mainContentContainer.current.classList.remove(cx("editable"));
                    mainViewContent.current.classList.remove(cx('hidden'))
                    mainEditContent.current.classList.remove(cx('view'))
                    editMainContentBtn.current.classList.remove(cx('hidden'))
                })
            }
        }
    }, [isSubmitInfo])

    useEffect(() => {
        if (isSubmitDescription) {
            console.log({
                description: editDescription,
                id: user.id,
                email: email
            });
            if (user.role === "MEMBER") {
                request.put("members/description", {
                    description: editDescription,
                    id: user.id,
                    email: email
                }).then(res => {
                    request.get(`members/${user.id}`)
                        .then(res2 => {
                            setProfile(res2.data);
                            setMessage(res.data)
                            setDescription(res2.data.description)
                            setMessageType("success")
                            setIsSubmitInfo(false);
                            window.sessionStorage.setItem("profile", JSON.stringify(res2.data));
                        }).catch(err => {
                            setMessage(err.response.data)
                            setMessageType("error")
                        }).finally (res => {
                            setIsEditSubscription(false);
                        })
                })
            }else {
                request.put("publishers/description", {
                    description: editDescription,
                    id: user.id,
                    email: email
                }).then(res => {
                    request.get(`publishers/${user.id}`)
                        .then(res2 => {
                            setProfile(res2.data);
                            setMessage(res.data)
                            setMessageType("success")
                            setDescription(res2.data.description)
                            setIsSubmitInfo(false);
                            window.sessionStorage.setItem("profile", JSON.stringify(res2.data));
                        }).catch(err => {
                            setMessage(err.response.data)
                            setMessageType("error")
                        }).finally (res => {
                            setIsEditSubscription(false);
                        })
                })
            }
            
        }
    }, [isSubmitDescription])

    useEffect(() => {
        if (isSubmitSkill) {
            console.log(skillValueList);
        }
    }, [isSubmitSkill])

    useEffect(() => {
        // ======================== Get projects data =======================
        if (window.sessionStorage.getItem("projects") === null) {
            request.get("projects/all")
                .then(res => {
                    setProjects(res.data);
                    setCurproject(res.data[0])
                    setIsLoadingProject(false);
                    window.sessionStorage.setItem("projects", JSON.stringify(res.data));
                })
            }else {
                let projectLocal = JSON.parse(window.sessionStorage.getItem("projects"));
                console.log(projectLocal)
                setProjects(projectLocal);
                setCurproject(projectLocal[0])
                setIsLoadingProject(false);
        }

        // ======================= Get project status data =========================
        if (window.sessionStorage.getItem("project-status") === null) {
            request.get("projects/status/all")
                .then(res => {
                    setStatus(res.data);
                    setIsLoadingStatus(false);
                    window.sessionStorage.setItem("project-status", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("project-status")))
                })
        }else {
            setStatus(JSON.parse(window.sessionStorage.getItem("project-status")));
            setIsLoadingStatus(false);
        }

        // ======================= Get profile data =========================
        if (user.role === "MEMBER") {
            console.log("into member section")
            if (window.sessionStorage.getItem("profile") === null) {
                request.get(`members/${user.id}`)
                    .then(res => {
                        setProfile(res.data);
                        setIsLoadingProfile(false);
                        window.sessionStorage.setItem("profile", JSON.stringify(res.data));
                        console.log(JSON.parse(window.sessionStorage.getItem("profile")))
                    })
            }else {
                setProfile(JSON.parse(window.sessionStorage.getItem("profile")));
                setIsLoadingProfile(false);
            }
        }else {
            console.log("into publisher section")
            if (window.sessionStorage.getItem("profile") === null) {
                request.get(`publishers/${user.id}`)
                    .then(res => {
                        setProfile(res.data);
                        setIsLoadingProfile(false);
                        window.sessionStorage.setItem("profile", JSON.stringify(res.data));
                        console.log(JSON.parse(window.sessionStorage.getItem("profile")))
                    })
            }else {
                setProfile(JSON.parse(window.sessionStorage.getItem("profile")));
                setIsLoadingProfile(false);
            }
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

        // ======================= Get majors data =========================
        if (window.sessionStorage.getItem("majors") === null) {
            request.get("majors/all")
                .then(res => {
                    setMajors(res.data);
                    setIsLoadingMajors(false);
                    window.sessionStorage.setItem("majors", JSON.stringify(res.data));
                    console.log(JSON.parse(window.sessionStorage.getItem("majors")))
                })
        }else {
            setMajors(JSON.parse(window.sessionStorage.getItem("majors")));
            setIsLoadingMajors(false);
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
        if (!isLoading) {
            if (tab === undefined) {
                skillAddBtn.current.addEventListener("click", handleSkillAddBtnClick)
                editMainContentBtn.current.addEventListener("click", handleEditMainContentBtnClick)
                saveMainContentBtn.current.addEventListener("click", handleSaveMainContentBtnClick)
            }
        }
    }, [isLoading, tab])

    useEffect(() => {
        if (!isLoadingStatus && !isLoadingCategories && !isLoadingProject && !isLoadingSkills && !isLoadingProfile && !isLoadingMajors){
            setTimeout(() => {
                setIsLoading(false);
            }, 400)
        }
    }, [isLoadingStatus, isLoadingCategories, isLoadingProject, isLoadingSkills, isLoadingProfile, isLoadingMajors])

    useEffect(() => {
        if (message && messageType) {
          setTimeout(() => {
            setMessage(undefined)
          }, 3000)
        }
      }, [message, messageType])

    return ( 
        <Container className={cx('container')}>
            {/* {isLoading && <LoadingOverlay/>} */}

            {(message && messageType) &&
                <SimpleSnackbar message={message} type={messageType}/>
            }

            {!isLoading ? 
                <Grid2 container justifyContent="space-between" className={cx('profile-container')}>
                    <Grid2 container alignContent='flex-start' rowGap={4} lg={3} className={cx('profile-sidebar-container')}>
                        <Paper elevation={0} className={cx('sidebar-navigation')}>
                            <Typography className={cx('content-heading')} id="modal-modal-title" variant="h4" component="h2">
                                Tabs
                            </Typography>
                            <ul className={cx("sidebar-navigation-list")}>
                                <li className={`${cx('sidebar-navigation-item')} ${tab === undefined && cx('active')}`}>
                                    <div className={cx('navigation-item-link')}>
                                        <AccountCircleIcon/>
                                        <Link to='/profile'>Profile</Link>
                                    </div>
                                </li>
                                <li className={`${cx('sidebar-navigation-item')} ${tab === 'teams' && cx('active')}`}>
                                    <div className={cx('navigation-item-link')}>
                                        <GroupsIcon/>
                                        <Link to='/profile/teams'>Teams</Link>
                                    </div>
                                    <p className={cx('navigation-item-total')}>2</p>
                                </li>
                                <li className={`${cx('sidebar-navigation-item')} ${tab === 'projects' && cx('active')}`}>
                                    <div className={cx('navigation-item-link')}>
                                        <WorkIcon/>
                                        <Link to='/profile/projects'>Projects</Link>
                                    </div>
                                    <p className={cx('navigation-item-total')}>0</p>
                                </li>
                            </ul>
                        </Paper>
                
                        <Paper elevation={0} className={cx('sidebar-balance')}>
                            <Typography className={cx('content-heading')} id="modal-modal-title" variant="h4" component="h2">
                                Balance
                            </Typography>
                            <p className={cx('balance-value')}>100,000 VND</p>
                        </Paper>
                    </Grid2>
{
                        tab === undefined &&
                        <Grid2 container lg={8.7} className={cx('profile-content-container')}>
                            <div className={cx('profile-content-section')}>
                                <Paper ref={mainContentContainer} elevation={0} className={cx('profile-content')}>
                                    <div ref={mainViewContent} className={`${cx('profile-content-wrapper', 'profile-content-main-view-wrapper')} 
                                    ${profile.status.name === "GENERATED" && cx('hidden')}`}>
                                        <img src={images.demoAvt} className={cx('member-avatar')} />
                                        <div className={cx('member-information')}>
                                            <div className={cx('member-main-information')}>
                                                <h1 className={cx('information-item','member-name')}>{fullname}</h1>
                                                <p className={cx('member-major')}>{major.name}</p>
                                            </div>
                                            <ul className={cx('member-sub-information')}>
                                                <li className={cx('member-sub-information-item')}>
                                                    <CakeIcon/> {dob}
                                                </li>
                                                <li className={cx('member-sub-information-item')}>
                                                    <PhoneIphoneIcon/> {phone}
                                                </li>
                                                <li className={cx('member-sub-information-item', 'full-item')}>
                                                    {email}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div ref={mainEditContent} className={`${cx('profile-content-wrapper', 'profile-content-main-edit-wrapper')} 
                                    ${profile.status.name === "GENERATED" && cx('view')}`}>
                                        <div className={cx('member-avatar-container')}>
                                            {/* <img src={images.demoAvt} className={cx('member-avatar')} /> */}
                                            <TextField type="file" />
                                        </div>
                                        <div className={cx('member-information')}>
                                            <div className={cx('member-main-information')}>
                                                <TextField className={cx('main-information-input')} onChange={(e) => setEditName(e.target.value)} fullWidth label="Full name" value={editName}/>
                                                {user.role === "MEMBER" &&
                                                    <BasicSelect className={cx('main-information-input')} value={editMajor} setParentValue={setEditMajor} fullWidth label="Major" options={majors}/>
                                                }
                                            </div>
                                            <ul className={cx('member-sub-information')}>
                                                <li className={cx('member-sub-information-item')}>
                                                    <TextField className={cx('main-information-input')} onChange={(e) => setEditDob(e.target.value)}
                                                        type="date"fullWidth label="DOB" value={editDob}/>
                                                </li>
                                                <li className={cx('member-sub-information-item')}>
                                                    <TextField className={cx('main-information-input')} onChange={(e) => setEditPhone(e.target.value)} fullWidth label="Phone" value={editPhone}/>
                                                </li>
                                                <li className={cx('member-sub-information-item', 'full-item')}>
                                                    <TextField disabled className={cx('main-information-input')} onChange={(e) => setEmail(e.target.value)} fullWidth label="Email address" value={email}/>
                                                </li>
                                                <li className={cx('member-sub-information-item', 'full-item', 'f-right')}>
                                                    <Button ref={saveMainContentBtn} variant="contained" color="primary" className={cx('member-informaion-save-btn')}>Save</Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <IconButton ref={editMainContentBtn} className={`${cx('member-information-edit-btn')} ${profile.status.name === "GENERATED" && cx('hidden')}`}>
                                        <DriveFileRenameOutlineIcon color="primary" className={cx('member-information-edit-btn-icon')}/>
                                    </IconButton> 
                                </Paper>
                            </div>
                            <div className={cx('profile-content-section')}>
                                <Paper elevation={0} className={cx('profile-content')}>
                                    <Typography className={cx('content-heading')} id="modal-modal-title" variant="h3" component="h2">
                                        About me
                                    </Typography>
                                    {isEditDescription ? 
                                        <TextEditor value={editDescription}  setState={setEditDescription}/> :
                                        <ReadonlyEditor staticData={description}/>
                                    }
                                    <Button onClick={handleSaveDescription} className={cx('')} variant="contained">Save</Button>
                                    <Button onClick={handleEditDescription} className={cx('')} variant="contained">Edit</Button>
                                </Paper>
                            </div>
                            <div className={cx('profile-content-section')}>
                                <Paper elevation={0} className={cx('profile-content')}>
                                    <div className={cx('project-skill-input')}>
                                        <div className={cx('skill-head')}>
                                            <Typography className={cx('skill-heading')} id="modal-modal-title" variant="h3" component="h2">
                                                Skills
                                            </Typography>
                                            <IconButton ref={skillAddBtn} aria-label="add">
                                                <AddCircleIcon sx={{height: 26, width: 26}} color='primary'/>
                                            </IconButton>

                                        </div>
                                        <ul ref={skillList} className={cx('skill-input-input-list')}>
                                            {skillItemList}
                                        </ul>
                                        <Button variant="contained" onClick={handleSaveSkill}>Save</Button>
                                    </div>
                                </Paper>
                            </div>
                            
                        </Grid2>
                    }

                    {tab === "teams" &&
                        <Grid2 container direction="column" rowGap={4} lg={8.7} className={cx('content-container')}>
                            <Typography className={cx('content-heading')} id="modal-modal-title" variant="h2" component="h2">
                                My Teams
                            </Typography>
                            <Paper className={cx('content-wrapper')} elevation={0}>
                                <div className={cx('content-head')}>
                                    <div className={cx('content-search-group')}>
                                        <TextField placeholder="Search teams" className={cx('content-search-input')}/>
                                        <Button variant="contained" color="primary" className={cx('content-search-btn')}>Find</Button>
                                    </div>
                                    <BasicModalControl btnLabel='Create team' btnClass={cx('create-team-btn')} variant="contained" color="primary">
                                        <Typography id="modal-modal-title" variant="h3" component="h2">
                                            Create Team
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
                                </div>
                                <Divider className={cx('content-divider')}/>
                                <div className={cx('content-list-group')}>
                                    <ControlAccordion teams={demoData.teams}/>
                                </div>
                            </Paper>
                        </Grid2>
                    }

                    {tab === "projects" &&
                        <Grid2 container direction="column" rowGap={4} lg={8.7} className={cx('content-container')}>
                            <Paper ref={detailView} elevation={4} className={cx('project-detail-wrapper')}>
                                <Grid2 lg={6.5} className={cx('project-detail-container')}>
                                    <ArrowForwardIcon color="primary" onClick={handleDetailBackIconClick} className={cx('project-detail-back-icon')}/>
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
                                            <div className={cx('detail-head-content')}>
                                            {/* <Application/> */}
                                            <Badge color="warning" badgeContent={9}>
                                                <BasicModalControl size='medium' btnLabel='Application forms' btnClass={cx('filter-btn')}>
                                                    <Typography id="modal-modal-title" variant="h3" component="h2">
                                                        Application Forms
                                                    </Typography>
                                                    <Divider className={cx('content-divider')}/>
                                                    <div className={cx('project-application-container')}>
                                                        <ul className={cx('project-application-list')}>
                                                            <li className={cx('project-application-item')}>
                                                                <div className={cx('application-head')}>
                                                                    <div className={cx('application-team-info')}>
                                                                        <h2 className={cx('application-team-name')}>Project Finding Platform Team</h2>
                                                                        <div className={cx('team-leader-info')}>
                                                                            <img src={images.demoAvt} className={cx('application-team-leader-avatar')}/>
                                                                            <div className={cx('application-team-leader-content')}>
                                                                                <p className={cx('application-team-leader-name')}>Dinh Minh Huan</p>
                                                                                <p className={cx('application-team-leader-role')}>Team Lead</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p className={cx('application-create-date')}>30/04/2023</p>
                                                                </div>
                                                                <p className={cx('application-message')}>
                                                                    We are looking for a talented individual to assist us with POD research for our Shopify store. 
                                                                    The ideal candidate should be proficient
                                                                </p>
                                                                <div className={cx('application-btn-group')}>
                                                                    <Button className={cx('application-btn')} variant="contained" color="primary">Approve</Button>
                                                                    <Button className={cx('application-btn')} variant="outlined" color="primary">Reject</Button>
                                                                </div>
                                                            </li>
                                                            <li className={cx('project-application-item')}>
                                                                <div className={cx('application-head')}>
                                                                    <div className={cx('application-team-info')}>
                                                                        <h2 className={cx('application-team-name')}>Project Finding Platform Team</h2>
                                                                        <div className={cx('team-leader-info')}>
                                                                            <img src={images.demoAvt} className={cx('application-team-leader-avatar')}/>
                                                                            <div className={cx('application-team-leader-content')}>
                                                                                <p className={cx('application-team-leader-name')}>Dinh Minh Huan</p>
                                                                                <p className={cx('application-team-leader-role')}>Team Lead</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p className={cx('application-create-date')}>30/04/2023</p>
                                                                </div>
                                                                <p className={cx('application-message')}>
                                                                    We are looking for a talented individual to assist us with POD research for our Shopify store. 
                                                                    The ideal candidate should be proficient
                                                                </p>
                                                                <div className={cx('application-btn-group')}>
                                                                    <Button className={cx('application-btn')} variant="contained" color="primary">Approve</Button>
                                                                    <Button className={cx('application-btn')} variant="outlined" color="primary">Reject</Button>
                                                                </div>
                                                            </li>
                                                            <li className={cx('project-application-item')}>
                                                                <div className={cx('application-head')}>
                                                                    <div className={cx('application-team-info')}>
                                                                        <h2 className={cx('application-team-name')}>Project Finding Platform Team</h2>
                                                                        <div className={cx('team-leader-info')}>
                                                                            <img src={images.demoAvt} className={cx('application-team-leader-avatar')}/>
                                                                            <div className={cx('application-team-leader-content')}>
                                                                                <p className={cx('application-team-leader-name')}>Dinh Minh Huan</p>
                                                                                <p className={cx('application-team-leader-role')}>Team Lead</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p className={cx('application-create-date')}>30/04/2023</p>
                                                                </div>
                                                                <p className={cx('application-message')}>
                                                                    We are looking for a talented individual to assist us with POD research for our Shopify store. 
                                                                    The ideal candidate should be proficient
                                                                </p>
                                                                <div className={cx('application-btn-group')}>
                                                                    <Button className={cx('application-btn')} variant="contained" color="primary">Approve</Button>
                                                                    <Button className={cx('application-btn')} variant="outlined" color="primary">Reject</Button>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </BasicModalControl>
                                            </Badge>
                                            </div>
                                        </div>
                                        <ul className={cx('detail-body-list')}>
                                            <li className={cx('detail-body-item')}>
                                                <div className={cx('detail-head-team')}>
                                                    <h2 className={cx('body-title')}>Team in charge</h2>
                                                    <ControlAccordionProfile/>
                                                </div>
                                            </li>
                                            <li className={cx('detail-body-item')}>
                                                <h2 className={cx('body-title')}>Description</h2>
                                                {/* <p className={cx('body-content')}>{(currProject.description)}</p> */}
                                                <ReadonlyEditor storedState={currProject.description} staticData={currProject.description}/>
                                            </li>
                                            <li className={cx('detail-body-item')}>
                                                <h2 className={cx('body-title')}>Skill Requirement</h2>
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
                                            <li className={cx('detail-body-item')}>
                                                <h2 className={cx('body-title')}>Deliverable</h2>
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
                                        </ul>
                                    </div>
                                </Grid2>
                            </Paper>
                            <Typography className={cx('content-heading')} id="modal-modal-title" variant="h2" component="h2">
                                My Projects
                            </Typography>
                            <Paper elevation={0} className={cx('content-wrapper')}>
                                <div className={cx('content-head')}>
                                    <div className={cx('content-search-group')}>
                                        <TextField placeholder="Search projects" className={cx('content-search-input')}/>
                                        <Button variant="contained" color="primary" className={cx('content-search-btn')}>Find</Button>
                                    </div>
                                    <BasicModalControl size='medium' btnLabel='Filter' btnClass={cx('filter-btn')} btnIcon={<FilterAltIcon/>} >
                                        <Typography id="modal-modal-title" variant="h3" component="h2">
                                            Filter
                                        </Typography>
                                        <Divider />
                                        <div className={cx('project-filter-container')}>
                                            <ul className={cx('project-filter-list')}>
                                            <li className={cx('project-filter-item')}>
                                                    <Typography id="" className={cx('project-filter-heading')} variant="h4" component="h2">
                                                        Status
                                                    </Typography>
                                                    <ul className={cx('filter-status-list')}>
                                                        {status.map((item, index) => {
                                                            return (
                                                                <li key={index} className={cx('filter-status-item')}>
                                                                    <Chip 
                                                                        label={item.name}
                                                                        deleteIcon={filterActiveStatus === item.name ? <DoneIcon /> : <AddOutlinedIcon/>}
                                                                        clickable
                                                                        variant={filterActiveStatus === item.name ? 'contained': 'outlined'}
                                                                        color={filterActiveStatus === item.name ? 'primary': 'default'}
                                                                        onClick={() => handleFilterStatusClick(item.name)}
                                                                        onDelete={handleFilterStatusDelete}
                                                                    />
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>

                                                <li className={cx('project-filter-item')}>
                                                    <Typography id="" className={cx('project-filter-heading')} variant="h4" component="h2">
                                                        Category
                                                    </Typography>
                                                    <SimpleDropDown optionList={categories}/>
                                                </li>
                                                <li className={cx('project-filter-item')}>
                                                    <Typography id="" className={cx('project-filter-heading')} variant="h4" component="h2">
                                                        Skills
                                                    </Typography>
                                                    <SimpleDropDown optionList={skills}/>
                                                </li>
                                                <li className={cx('project-filter-item')}>
                                                    <Typography id="" className={cx('project-filter-heading')} variant="h4" component="h2">
                                                        Salary
                                                    </Typography>
                                                    <Grid2 container justifyContent='space-between' alignItems='center'>
                                                        <Grid2 lg={5}>
                                                            <p className={cx('filter-item-text')}>
                                                                From: {format(salaryFilterValue[0])} - {format(salaryFilterValue[1])}
                                                            </p>
                                                        </Grid2>

                                                        <Grid2 lg={6}>
                                                            <Slider
                                                                getAriaLabel={() => 'Salary Range'}
                                                                value={salaryFilterValue}
                                                                onChange={handleChange}
                                                                valueLabelDisplay="auto"
                                                                valueLabelFormat={salaryFilterLabelFormat}
                                                                getAriaValueText={salaryFilterValuetext}
                                                                min={0}
                                                                max={10000000}
                                                                step={500000}
                                                                size='small'
                                                            />
                                                        </Grid2>
                                                    </Grid2>
                                                </li>
                                            </ul>
                                        </div>
                                        <Button className={cx('filter-submit-btn')} variant='contained' color='primary'>Apply</Button>
                                    </BasicModalControl>
                                </div>
                                <Divider className={cx('content-divider')}/>
                                <div className={cx('content-list-group')}>
                                    <Typography id="" className={cx('content-list-heading')} variant="h3" component="h2">
                                        Currently projects
                                    </Typography>
                                    <ul className={cx('content-list')}>
                                        <li onClick={() => handleViewProjectDetail(projects[22])} className={cx('content-item')}>
                                            <ProjectCard project={projects[22]}/>
                                        </li>
                                        <li onClick={() => handleViewProjectDetail(projects[23])} className={cx('content-item')}>
                                            <ProjectCard project={projects[23]}/>
                                        </li>
                                        <li onClick={() => handleViewProjectDetail(projects[24])} className={cx('content-item')}>
                                            <ProjectCard project={projects[24]}/>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('content-list-group')}>
                                    <Typography id="" className={cx('content-list-heading')} variant="h3" component="h2">
                                        Finished projects
                                    </Typography>
                                    <ul className={cx('content-list')}>
                                        <li onClick={() => handleViewProjectDetail(projects[0])} className={cx('content-item')}>
                                            <ProjectCard project={projects[0]}/>
                                        </li>
                                        <li onClick={() => handleViewProjectDetail(projects[1])} className={cx('content-item')}>
                                            <ProjectCard project={projects[1]}/>
                                        </li>
                                        <li onClick={() => handleViewProjectDetail(projects[2])} className={cx('content-item')}>
                                            <ProjectCard project={projects[2]}/>
                                        </li>
                                    </ul>
                                </div>
                            </Paper>
                        </Grid2>
                    }

                </Grid2>
            : <LoadingOverlay/>    
            }
        </Container>
     );
}

export default Profile;