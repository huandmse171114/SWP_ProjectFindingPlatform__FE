import styles from './About.module.scss'
import classNames from 'classnames/bind';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Paper } from '@mui/material';
import startup from '../../assets/images/Group 4@2x.png'
import { Typography } from '@mui/material';
 import computer from '../../assets/images/computer2.webp'
 import buy from '../../assets/images/buy.webp'
 import actor from '../../assets/images/actor.jpg'
const cx = classNames.bind(styles);

function About() {
    return(
      <div>           
      <Grid2 container xs={12} lg={12}  className={cx('wrapper')}>
        {/* Part 1 */}
      <Grid2    sx={{width:"100%" ,minWidth:"100%" ,background: "linear-gradient(90deg, rgba(0,11,17,1) 0%, rgba(1,34,56,1) 25%, rgba(1,48,78,1) 50%, rgba(1,64,104,1) 75%, rgba(0,35,57,1) 100%)",marginBottom:"2%"}}>
               <Grid2 >
                <Grid2 xs={12}   className={cx('weare')} sx={{
                 display:"flex",
                marginLeft:"34%",
                   }}>
                  <Typography className={cx('textweare')}  variant="h1" sx={{
                    color:"white", marginLeft:"5%"
                  }}>
                 
                    We 
                   
                    </Typography>
                    <Typography className={cx('textweare')}  variant="h1" sx={{
                    color:"white", marginLeft:"2%",marginRight:"1%"
                  }}>
                 
                   are
                   
                    </Typography>
                 <Typography xs={6}variant="h1" className={cx("Findhub")} sx={{
                  marginLeft:"1%",color:"#5699E6"
                 }}>FindHub</Typography>
                 </Grid2>

                   <Grid2 xs={12}  className={cx('provide')} sx={{marginLeft:"38%",marginBottom:"5%",marginTop:"1%",color:"white"}}>
                         <h2>
                        Providing you with amazing projects
                         </h2>
                   </Grid2>         
              </Grid2>     

              <Grid2 className={cx("container1")} lg={12} xs={12} sx={{display:"flex"}}>
              <img className="animate slideInLeft img1" lg={6} src={startup} sx={{}}/>
               <Grid2  lg={12} xs={12} sx={{marginRight:"10%",fontSize:"20px",color:"white"}} >
           
               <p className={cx("text")}>
                 At FindHub, we want to solve the problem of finding projects for everyone.
               </p>               
               <p className={cx("text")}>
               With an increase of developers, it is necessary to finding many projects to increase their income. 
              so that in FPT University Ho Chi Minh with a large number of students,
               we want to build a website to help students to find projects in order to solve the project finding problem.
.
              </p>

               <p className={cx("text")}>
              In business, we need data to make informed decisions.
              FindHub provides the most actionable in the industry.
              We aim to make this data available to as many people as possible
               </p>                
               </Grid2>

              </Grid2>


         </Grid2>
            {/* Part 2 */}
              <Grid2  sx={{width:"100%",minWidth:"100%" ,backgroundColor:"white" ,marginBottom:"2%"}} >
                    
               <Grid2 className={cx("container1")} xs={12} lg={12} sx={{display:"flex"}}>
                 
                <Grid2 lg={6} xs={6}  sx={{   marginRight:"10%",fontSize:"20px",color:"black"}} >
                             
               <p className={cx("text2")}>
               Publishers need to know what apps to build,how to monetize them, and where to price them.
              Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively.
              Investors need to know which apps and genres are growing the quickest,and where users are really spending their time(and money).
              </p>

                   
               </Grid2>
               <Grid2  className={cx("imgContainer2")}>
               <img className={cx("img2")}  xs={6} lg={6}   src={computer} sx={{marginRight:"20%" }}/>
               </Grid2>
               
             </Grid2>




              </Grid2>

                 {/* Part 3 */}

                 <Grid2  sx={{width:"100%",minWidth:"100%" ,backgroundColor:"white",marginBottom:"2%"}} >
                    
                    <Grid2 className={cx("container1")} xs={12} lg={12} sx={{display:"flex"}}>
                     <Grid2 className={cx("imgContainer3")}>
                     <img className={cx("img3")} xs={6} lg={6} src={buy} sx={{ }}/>
                     </Grid2>
                      
                      
                      
                     <Grid2 xs={6}  lg={6} sx={{   marginRight:"10%",fontSize:"20px",color:"black"}} >
                                  
                    <p className={cx("text3")}>
                    Publishers need to know what apps to build,how to monetize them, and where to price them.
                   Advertisers and brands need to identify their target users, and determine where to allocate resources in order to reach them most effectively.
                   Investors need to know which apps and genres are growing the quickest,and where users are really spending their time(and money).
                   </p>
     
                        
                    </Grid2>
     
                  </Grid2>             
                   </Grid2>
{/* Part 4 */}
                    <Grid2  sx={{width:"100%" ,backgroundColor:"white",marginBottom:"5%"}}>
                     <div>
                            <h1  className={cx('ourTeam')}>Our Team</h1>
                     </div>
                      
                          <Grid2 xs={12} justifyContent={"space-between"} className={cx('memberContainer')} direction={"row"}>
                                    {/* Team member 1 */}
                                    <Grid2 className={cx('paper1')}>
                                        <Paper className={cx('teamMember')} >
                                                <img src={actor}  className={cx('memberImage')}/>
                                                  <h4 className={cx('nameMember')}>Le Thuc Thanh Tu</h4>
                                                  <p className={cx('roleMember')}>Team Leader</p>                                  
                                        </Paper>
                                    </Grid2>

                                    {/* Team member 2 */}
                                      <Grid2 className={cx('paper1')} >
                                          <Paper className={cx('teamMember')}>
                                          <img src={actor} className={cx('memberImage')}/>
                                                  <h4 className={cx('nameMember')}>Dinh Minh Huan</h4>
                                                  <p className={cx('roleMember')}>Team Member</p>
                                                  
                                          </Paper>
                                      </Grid2>     
                                       {/* Team member 3 */}
                                     <Grid2 className={cx('paper1')}  >
                                          <Paper className={cx('teamMember')}>
                                          <img src={actor} className={cx('memberImage')}/>
                                                  <h4 className={cx('nameMember')}>Duong Tien Phat</h4>
                                                  <p className={cx('roleMember')}>Team Member</p>                                                 
                                          </Paper>
                                      </Grid2>                              
                          </Grid2>
                            
                    </Grid2>
      </Grid2>
</div>


    );
}

export default About;