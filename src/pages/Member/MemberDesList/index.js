import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MemberDesCard from '../component/MemberDesCard';
import styles from './MemberDesList.module.scss'
import classNames from 'classnames/bind';
import demoData from '../../../components/Layout/component/DemoData';
import SendIcon from '@mui/icons-material/Send';
import { Button,TextField,Paper } from '@mui/material';
import Sidebar from '../component/Sidebar';
import { useState } from 'react';
const cx = classNames.bind(styles);
 
 
function MemberDesList() {
     
    return (
        <div className={cx('wrapper')}>
            <Grid2 container direction="column" justifyContent='left' gap={0} className={cx('project-list')}>
               <MemberDesCard/>
            </Grid2>
        </div>
    );

}
 
export default MemberDesList;