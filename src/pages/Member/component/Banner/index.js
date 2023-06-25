import { Paper } from '@mui/material'
import React from 'react'
import styles from './Banner.module.scss'
import demoData from '../../../../components/Layout/component/DemoData'
const cx = classNames.bind(styles);
function Banner(props) {
    const [members,setMembers]  = useState(demoData.members);
    const [currMember, setMember] = useState(members[0]);
      function handleItemClick(member){
        if(member.id !== currMember.id)
        {
            setMember(member);
        }
    
    
    
    }
    // const members = props.members === undefined ? demoData.members : props.members;
  return (

    <div>

        <Paper>
            members[0].name
        </Paper>
    </div>
  )
}

export default Banner