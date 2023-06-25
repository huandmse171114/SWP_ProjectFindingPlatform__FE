import styles from './Member.module.scss'
import classNames from 'classnames/bind';
import MemberList from './component/MemberList';
import MemberProfile from './component/MemberProfile';
import { Box, Grid, Paper } from '@mui/material';
import Sidebar from './component/Sidebar';
import MemberDesList from './MemberDesList';
import MemberDesCard from './component/MemberDesCard';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';


const cx = classNames.bind(styles);
 
function Member() {
//     const [members,setMembers]  = useState(demoData.members);
// const [currMember, setMember] = useState(members[0]);
 
    return (
        <>   
        <Grid container my={4}>
 
            <Grid item xs={8} >
                <Box>
                    <Sidebar/>
                </Box>
            </Grid>
            <Grid item  xs={4} >
                <Grid2>
                
                   <MemberDesList/>
                </Grid2>
            </Grid>









        </Grid>








        </>
    );
}

export default Member;