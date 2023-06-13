import React from 'react'
import './index.scss'
function Status() {
  return (
    <div className='Container'>
 {/*  */}
        <div className='information'>
 
        <div className='status'>
            <p>Status</p>
            <p>Team</p>
            <p>Due date</p>
            <p>-----</p>
        </div>
        <div className='values'>
            <p>Not started</p>
            <p>At least 4 members</p>
            <p>dd/mm/yy</p>
            <p>------</p>
        </div>
       
        </div>
        {/*  */}
        <div className='Salary'>
            
            <p>Salary</p>
            <p>$$$</p>
             
        </div>
        
        <div className='footer'>
        <p>----------------------------</p>
            <button className='btn'>APPLY NOW</button>
            <p>-----------or-----------</p>
            <button className='btn'>FIND TEAMMATES</button>

        </div>

    </div>
  )
}

export default Status


