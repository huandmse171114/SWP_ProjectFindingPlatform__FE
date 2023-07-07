import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import styles from './TeamPage.module.scss';
import classNames from 'classnames/bind';
import Banner from './component/Banner'
import Sidebar from './component/Sidebar';
import TeamList from './component/TeamList';
import {  Pagination } from 'react-bootstrap';
import { Paper } from '@mui/material';
import { Stack,Button,TextField,Typography } from '@mui/material';
import BasicSelect from '../../components/Layout/component/BasicSelect';
import BasicModalControl from '../../components/Layout/component/BasicModalControl';
import request from '../../utils/request';
import { json } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from './component/TeamCard';
import {Modal} from '@mui/material';
const cx = classNames.bind(styles);

function Team() {
  const [teams, setTeams] = useState([]);
    const [currTeam, setCurrTeam] = useState("");
    useEffect(() => {     
    
      // ===============Get members data ===================
      if(window.sessionStorage.getItem("teams") === null){
          request.get("teams/all") 
           .then(res => {
               setTeams(res.data);
               setCurrTeam(res.data[0]);
               window.sessionStorage.setItem("teams", JSON.stringify(res.data));
               console.log(JSON.parse(window.sessionStorage.getItem("teams")))
           })
       }
       else{
           let memberLocal = JSON.parse(window.sessionStorage.getItem("teams"));
           setTeams(memberLocal);
           console.log(memberLocal[0].teams)
           setCurrTeam(memberLocal[0]);

       }
  
  }, []
  );


  
  function handleItemClick(team) {
    console.log("Change curr member to: ")
    console.log(team)
    if (team.id !== currTeam.id) {
        setCurrTeam(team);
    }
        
     





}   
  return (


    <div className={cx('wrapper')}>
            <Grid2 container direction={"column"} >
                <Banner/>            
            </Grid2>
        <Grid2  justifyContent='space-between' className={cx('project-content')} container>
                    <Grid2 className={cx('project-list')}  container lg={10} sx={{}}>
                    <ul className={cx('team-list')}>
                            {teams !== undefined && teams.map((team, index) => {
                                return (
                                    <li
                                        onClick={() => handleItemClick(team)}
                                        key={index}
                                        className={cx(
                                            'project-item',
                                        )}
                                    >
                                        <TeamCard team={team} teams={teams}/>
                                         
                                    </li>
                                );
                            })}
                        </ul>
                      
                    </Grid2>

                    
            </Grid2>    
           






            








    </div>
  )
}

export default Team