import styles from './Member.module.scss';
import classNames from 'classnames/bind';
import MemberList from './component/MemberList';
import MemberProfile from './component/MemberProfile';
import {  Grid, Paper } from '@mui/material';
import Tag from './component/Tag';

import TagProject from '../../pages/Member/component/TagProject';
import actor from '../../assets/images/actor.jpg';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import React from 'react';
import demoData from '../../components/Layout/component/DemoData';
import MemberCard from './component/MemberCard';
import VerifiedIcon from '@mui/icons-material/Verified';
import ProjectCard from './component/ProjectCard';
const cx = classNames.bind(styles);

function Member() {
    const [members, setMembers] = useState(demoData.members);
    const [currMember, setCurrMember] = useState(members[2]);
    const [projects, setProjects] = useState(demoData.projects);
   
    const [currProject, setCurrproject] = useState(projects[0]);
    const [skills,setSkills] = useState(demoData.skills);

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
                                <img src={actor}/>
                              <Grid2 direction={"column"} sx={{marginTop:"5%",
                            marginLeft:"5%"}}>
                              <h3 className={cx('detailHeadingText')}>{currMember.name}</h3>  
                                <p className={cx('detailMajorText')}>{currMember.majorCode}</p>           
                              </Grid2>
                                  
                                 

                            </Grid2>

                            
                            
                             
                            <Grid2 direction={"row"}     sx={{display:"flex"}} className={cx('detail-skill')}>
                                <Grid2 lg={7} >
                                <div     className={cx('sidebarContent')}>
                                        <Grid2     sx={{width:"300px"}}>
                                            <h3 className={cx('desHeading')}>Description</h3>
                                            <div></div>
                                        </Grid2>
                                </div>
                                </Grid2>
                                
                               
                                
                                <Grid2 lg={6} className={cx('rightBar')} >
                                <Paper>
                                    <Grid2     className={cx('content-container')}>
                                        <Grid2    >
                                            <div>
                                                <h3 className={cx('skillHeading')}>Skills</h3>
                                                <Grid2 container gap={1}  className={cx('card-section', 'separate')}>
                                                <ul className={cx('desc-list')}>
                                        {skills.map((skill, index) => {
                                            return (
                                                <table key={index} className={cx('desc-item')}>
                                                    <tr className={cx('item-name')}>
                                                        <td className={cx('iconText')}>
                                                        <VerifiedIcon className={cx('item-icon')}/>
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

                                        <Grid2    className={cx('detail-project')}>
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
                                                        (prj, index) => {
                                                            return (
                                                                <li
                                                                    onClick={() =>
                                                                        handleItemClicks(
                                                                            prj,
                                                                        )
                                                                    }
                                                                    key={index}
                                                                    className={cx(
                                                                        'project-item',
                                                                        `${prj.id ===
                                                                        currProject.id &&
                                                                        'active'
                                                                        }`,
                                                                    )}
                                                                >
                                                                    <ProjectCard
                                                                        project={
                                                                            prj
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
