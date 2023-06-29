import styles from './Member.module.scss';
import classNames from 'classnames/bind';
import MemberProfile from './component/MemberProfile';
import { Grid, Paper } from '@mui/material';
import Tag from './component/Tag';
import TagProject from '../../pages/Member/component/TagProject';
import actor from '../../assets/images/actor.jpg';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import React from 'react';
import demoData from '../../components/Layout/component/DemoData';
import MemberCard from './component/MemberCard';
import VerifiedIcon from '@mui/icons-material/Verified';
import ProjectCard from './component/ProjectCard';
import { Stack,Button,TextField,Typography } from '@mui/material';
import BasicSelect from '../../components/Layout/component/BasicSelect';
import BasicModalControl from '../../components/Layout/component/BasicModalControl';
import request from '../../utils/request';
import { json } from 'react-router-dom';

const cx = classNames.bind(styles);

function Member() {
    const [members, setMembers] = useState([]);
    const [currMember, setCurrMember] = useState([]);
    const [projects, setProjects] = useState([]);

    const [currProject, setCurrproject] = useState([]);
    const [skills, setSkills] = useState([]);
 
    useEffect(() => {     
        //  ============================ Get projects data =================================
        if(window.sessionStorage.getItem("projects") === null){
           request.get("projects/all") 
                
            .then(res => {
                setProjects(res.data);
                setCurrproject(res.data[0]);
               
                window.sessionStorage.setItem("projects", JSON.stringify(res.data));
                console.log(JSON.parse(window.sessionStorage.getItem("projects")))
            })
        }

        else{
            let projectLocal = JSON.parse(window.sessionStorage.getItem("projects"));
            setProjects(projectLocal);
            setCurrproject(projectLocal[0]);

        }
        // ===============Get members data ===================
        if(window.sessionStorage.getItem("members") === null){
            request.get("members/all") 
                 
             .then(res => {
                 setMembers(res.data);
                 setCurrMember(res.data[0]);
                
                 window.sessionStorage.setItem("projects", JSON.stringify(res.data));
                 console.log(JSON.parse(window.sessionStorage.getItem("members")))
             })
         }
 
         else{
             let memberLocal = JSON.parse(window.sessionStorage.getItem("members"));
             setMembers(memberLocal);
             setCurrMember(memberLocal[0]);
 
         }
        //  ====================Get SKills data ====================

        // ===============Get members data ===================
        if(window.sessionStorage.getItem("skills") === null){
            request.get("skills/all") 
                 
             .then(res => {
                 setSkills(res.data);
                 
                
                 window.sessionStorage.setItem("projects", JSON.stringify(res.data));
                 console.log(JSON.parse(window.sessionStorage.getItem("skills")))
             })
         }
 
         else{
             let skillLocal = JSON.parse(window.sessionStorage.getItem("skills"));
             setMembers(skillLocal);
             setCurrMember(skillLocal[0]);
 
         }




    }, []
    );

    function handleItemClick(member) {
        if (member.id !== currMember.id) {
            setCurrMember(member);
        }
    }
    function handleItemClicks(project) {
        if (project.id !== currProject.id) {

            setCurrproject(project);

        }
    }
    return (
        
        <>
            <Grid container my={4} className={cx('wrapper')}>
                <Grid item xs={4}>
                    <Grid2
                        container
                        direction="column"
                        justifyContent="left"
                        gap={0}
                        className={cx('memberList')}
                    >
                        <ul className={cx('project-list')}>
                            {members.map((member, index) => {
                                return (
                                    <li
                                        onClick={() => handleItemClick(member)}
                                        key={index}
                                        className={cx(
                                            'project-item',
                                            `${member.id === currMember.id &&
                                            'active'
                                            }`,
                                        )}
                                    >
                                        <MemberCard member={member} />
                                    </li>
                                );
                            })}
                        </ul>
                    </Grid2>
                </Grid>
                <Grid item xs={8}>
                    <Grid2 container className={cx('detail-container')}>
                        <Paper className={cx('detailHeaderPaper')}>
                            <Grid2 container direction="row" className={cx('detail-header')}>
                                <img src={actor} />
                                <Grid2 direction={"column"} sx={{
                                    marginTop: "5%",
                                    marginLeft: "5%"
                                }}>
                                    <h3 className={cx('detailHeadingText')}>{currMember.name}</h3>
                                    {/* <p className={cx('detailMajorText')}>{currMember.major.name}</p> */}
                                

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
                                                        Name: <span>{currMember.name}</span>
                                                    </li>
                                                    <li className={cx('majorItem')}>
                                                        {/* Major: <span>{currMember.major.name}</span> */}
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
                                                    <Grid2 lg={4} className={cx('formBtn')}>
                                                        <Button className={cx('sendInvitation-btn')} variant="contained" color='primary'>Send Invitation</Button>
                                                    </Grid2>
                                                </Grid2>
                                            </Grid2>
                                        </BasicModalControl>
                                    </div>
                    
                         
                       

                                    </Stack>
                                    </Grid2>
                            </Grid2>




                            <Grid2 direction={"row"} sx={{ display: "flex" }} className={cx('detail-skill')}>
                                <Grid2 lg={7} >
                                    <div className={cx('sidebarContent')}>
                                        <Grid2 sx={{ width: "300px" }}>
                                            <h3 className={cx('desHeading')}>Description</h3>
                                            <div></div>
                                        </Grid2>
                                    </div>
                                </Grid2>



                                <Grid2 lg={6} className={cx('rightBar')} >
                                    <Paper>
                                        <Grid2 className={cx('content-container')}>
                                            <Grid2    >
                                                <div>
                                                    <h3 className={cx('skillHeading')}>Skills</h3>
                                                    <Grid2 container gap={1} className={cx('card-section', 'separate')}>
                                                        <ul className={cx('desc-list')}>
                                                            {skills.map((skill, index) => {
                                                                return (
                                                                    <table key={index} className={cx('desc-item')}>
                                                                        <tr className={cx('item-name')}>
                                                                            <td className={cx('iconText')}>
                                                                                <VerifiedIcon className={cx('item-icon')} />
                                                                                {skill.name}
                                                                            </td>

                                                                            <td className={cx('level')}>
                                                                                <p> level </p>
                                                                                <p>{skill.level}</p>
                                                                            </td>

                                                                        </tr>



                                                                    </table>
                                                                )
                                                            })}
                                                        </ul>
                                                    </Grid2>
                                                </div>
                                            </Grid2>

                                            <Grid2 className={cx('detail-project')}>
                                                <h3 className={cx('projectHeading')}> Projects</h3>

                                                <Grid2

                                                    className={cx(
                                                        'project-list-container',
                                                    )}
                                                >
                                                    <ul
                                                        className={cx(
                                                            'project-list',
                                                        )}
                                                    >
                                                        {projects.map(
                                                            (project, index) => {
                                                                return (
                                                                    <li
                                                             onClick={() =>   handleItemClicks(
                                                                                project
                                                                            )
                                                                        }
                                                                        key={index}
                                                                        className={cx(
                                                                            'project-item',
                                                                            `${project.id ===
                                                                            currProject.id &&
                                                                            'active'
                                                                            }`,
                                                                        )}
                                                                    >
                                                                        <ProjectCard
                                                                            project={
                                                                                project
                                                                            }
                                                                        />
                                                                    </li>
                                                                );
                                                            },
                                                        )}
                                                    </ul>
                                                </Grid2>
                                            </Grid2>
                                        </Grid2>
                                    </Paper>
                                </Grid2>

                            </Grid2>
                        </Paper>
                    </Grid2>
                </Grid>
            </Grid>
        </>
    );
}

export default Member;
