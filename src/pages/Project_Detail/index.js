import React from 'react'
import fpt from '../../assets/images/fpt_software.jpg'
import './index.scss';
import { Icon } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import building from '../../assets/images/office-building-marker-outline.svg'
import Status from '../Status';
function index() {
  return (
    <div className='all'>
 <div className='body'>

<div className="Content">
    <div className='part1'>
      <div className='head'>
            <h1>Project Name</h1>
            <img className='fpt' src={fpt} />         

      </div>
           <div className='Icon'>
            <img className='icons' src={building}/>
            <p>admin</p>
           <CalendarMonthIcon sx={{height:"20%"}}/>
           <p>about 1h ago</p>
           </div>

    </div>
    {/*  */}
    <div id='part2'>
          <h1>Description</h1>
          <span></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel
          mollis ex, et placerat metus. Nullam facilisis consectetur cursus.
          Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Donec aliquam nunc ac justo
          pellentesque mattis.</p>
       
    </div>
  <div id='part3'>
    <h1>Requirement</h1>
    <p>Requirement 1</p>
    <p>Requirement 1</p>
    <p>Requirement 1</p>
    <p>Requirement 1</p>
    <p>Requirement 1</p>

  </div>

  <div id='part4'>
    <h1>Deliverable</h1>
    <p>Deliverable 1</p>
    <p>Deliverable 1</p>
    <p>Deliverable 1</p>
    <p>Deliverable 1</p>
    <p>Deliverable 1</p>
    <p>Deliverable 1</p>
  </div>

</div>

 







</div>

 
 {/* Status */}
<div className="Status">

<Status/>


</div>






    </div>
  )
}

export default index