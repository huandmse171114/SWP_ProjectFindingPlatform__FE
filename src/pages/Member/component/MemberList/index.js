import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MemberCard from '../MemberCard';
import styles from './MemberList.module.scss'
import classNames from 'classnames/bind';
import demoData from '../../../../components/Layout/component/DemoData';

import { Button,TextField,Paper } from '@mui/material';
import { useState } from 'react';


const cx = classNames.bind(styles);
 
 
function MemberList(props) {
    const [members,setMembers]  = useState(demoData.members);
    const [currMember, setMember] = useState(members[0]);
      function handleItemClick(member){
        if(member.id !== currMember.id)
        {
            setMember(member);
        }
    }
     
    return (
        
        <div className={cx('wrapper')}>
            <Grid2 container direction="column" justifyContent='left' gap={0} className={cx('project-list')}>
                {members.map((member, index) => {
                    return (
                        
                        <div onClick={() => handleItemClick(member)}   key={index} lg={3.5} className={cx('project-item')}>
                         
                            <MemberCard member={member}/>
                             
                        </div>
                    )
                })}
            </Grid2>
             
        </div>
    );
    
}
 
export default MemberList;