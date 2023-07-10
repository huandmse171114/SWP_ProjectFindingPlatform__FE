import classNames from "classnames/bind";
import styles from "./Profile.module.scss"
import { useNavigate, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, FormControl, IconButton, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
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
import WorkIcon from '@mui/icons-material/Work';

const cx = classNames.bind(styles)

function Profile() {
    const tab = useParams("tab").tab;
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [description, setDescription] = useState('')
    const skillAddBtn = useRef();
    const skillList = useRef();
    const editMainContentBtn = useRef();
    const saveMainContentBtn = useRef();
    const mainContentContainer = useRef();
    const mainViewContent = useRef();
    const mainEditContent = useRef();
    const [skills, setSkills] = useState('');
    const [fullname, setFullname] = useState('Dinh Minh Huan')
    const [phone, setPhone] = useState('0977588901')
    const [email, setEmail] = useState('huandmse171114@fpt.edu.vn')
    const [skillItemList, setSkillItemList] = useState([]);
    const [skillValueList, setSkillValueList] = useState([])

    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingSkills, setIsLoadingSKills] = useState(true);

    function handleSkillAddBtnClick() {
        setSkillItemList(pre => {
            const a = null;
            console.log(a.hello);
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
        console.log('running save click')
        
        mainContentContainer.current.classList.remove(cx("editable"));
        mainViewContent.current.classList.remove(cx('hidden'))
        mainEditContent.current.classList.remove(cx('view'))
        editMainContentBtn.current.classList.remove(cx('hidden'))
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
    }, [isLoading])

    useEffect(() => {
        if (!isLoadingSkills){
            setTimeout(() => {
                setIsLoading(false);
            }, 400)
        }
    }, [isLoadingSkills])

    return ( 
        <Container>
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
                            <li className={`${cx('sidebar-navigation-item')} ${tab === 'project' && cx('active')}`}>
                                <div className={cx('navigation-item-link')}>
                                    <WorkIcon/>
                                    <Link to='/profile/project'>Projects</Link>
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
                                <div ref={mainViewContent} className={cx('profile-content-wrapper', 'profile-content-main-view-wrapper')}>
                                    <img src={images.demoAvt} className={cx('member-avatar')} />
                                    <div className={cx('member-information')}>
                                        <div className={cx('member-main-information')}>
                                            <h1 className={cx('information-item','member-name')}>Dinh Minh Huan</h1>
                                            <p className={cx('member-major')}>Software Engineer</p>
                                        </div>
                                        <ul className={cx('member-sub-information')}>
                                            <li className={cx('member-sub-information-item')}>
                                                <CakeIcon/> 05/07/2003
                                            </li>
                                            <li className={cx('member-sub-information-item')}>
                                                <PhoneIphoneIcon/> 0977588901
                                            </li>
                                            <li className={cx('member-sub-information-item', 'full-item')}>
                                                huandmse171114@fpt.edu.vn
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div ref={mainEditContent} className={cx('profile-content-wrapper', 'profile-content-main-edit-wrapper')}>
                                    <div className={cx('member-avatar-container')}>
                                        <img src={images.demoAvt} className={cx('member-avatar')} />
                                        <TextField type="file" />
                                    </div>
                                    <div className={cx('member-information')}>
                                        <div className={cx('member-main-information')}>
                                            <TextField className={cx('main-information-input')} onChange={(e) => setFullname(e.target.value)} fullWidth label="Full name" value={fullname}/>
                                            <BasicSelect className={cx('main-information-input')} defaultValue="Software Engineer" fullWidth label="Major" options={demoData.majors}/>
                                        </div>
                                        <ul className={cx('member-sub-information')}>
                                            <li className={cx('member-sub-information-item')}>
                                                <TextField className={cx('main-information-input')} type="date"fullWidth label="DOB" value="2003-05-07"/>
                                            </li>
                                            <li className={cx('member-sub-information-item')}>
                                                <TextField className={cx('main-information-input')} onChange={(e) => setPhone(e.target.value)} fullWidth label="Full name" value={phone}/>
                                            </li>
                                            <li className={cx('member-sub-information-item', 'full-item')}>
                                                <TextField className={cx('main-information-input')} onChange={(e) => setEmail(e.target.value)} fullWidth label="Email address" value={email}/>
                                            </li>
                                            <li className={cx('member-sub-information-item', 'full-item', 'f-right')}>
                                                <Button ref={saveMainContentBtn} variant="contained" color="primary" className={cx('member-informaion-save-btn')}>Save</Button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <IconButton ref={editMainContentBtn} className={cx('member-information-edit-btn')}>
                                    <DriveFileRenameOutlineIcon color="primary" className={cx('member-information-edit-btn-icon')}/>
                                </IconButton> 
                            </Paper>
                        </div>
                        <div className={cx('profile-content-section')}>
                            <Paper elevation={0} className={cx('profile-content')}>
                                <Typography className={cx('content-heading')} id="modal-modal-title" variant="h3" component="h2">
                                    About me
                                </Typography>
                                <TextEditor setState={setDescription}/>
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
                                </div>
                            </Paper>
                        </div>
                        
                    </Grid2>
                }

            </Grid2>
        </Container>
     );
}

export default Profile;