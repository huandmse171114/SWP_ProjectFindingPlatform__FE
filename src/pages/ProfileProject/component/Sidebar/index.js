import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import avatar from '../../../../assets/images/actor.jpg'
import CreateIcon from '@mui/icons-material/Create';
import { Paper,Button } from '@mui/material';
import List from '../List'
import {Link} from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Decoding from '../../../../assets/images/coding.png';
import Overview from '../../../../assets/images/search.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
const cx= classNames.bind(styles);


function index() {
  return (
    <div className={cx('wrapper')}>
        
        <Grid2   rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }} direction="column"   className={cx('information')} >
           <Paper xs={6} md={8} className='inforAvatar'>


           <div className={cx('Avatar')}>
				<img src={avatar} />
				</div>
        
            <div className={cx("Name")}>
					<p>First Name</p>
					<p>Last Name</p>
					<CreateIcon sx={{marginTop:"1%",marginLeft:"5%"}}/>
				</div>
                
            <Grid2 container rowGap={2}>
                <List label='Detail Information' type='text' />
                
            </Grid2>
        
            </Paper> 
         
             
        </Grid2>
{/* Part 2 */}
        <Grid2   direction="row" className={cx('infoBalance')}>
         
        <Paper className={cx('balance')}  >
					<p className={cx('balanceText')}>Balance</p>
					<p className={cx('balanceText')}>$$$ </p>
				 </Paper>

        </Grid2>
{/*Part 3  */}
        <Grid2 direction="column">
        <Paper elevation={2} className={cx('downsideBar')}>
						<ul className={cx('generalBar')}>
							<li>
								<h3 className={cx('generalHeader')}>
									General Option
								</h3>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<Link to='/memberhistory' className={cx('iconText')}>
											<AddHomeOutlinedIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												Overview
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</Link>
									</Button>
								</Grid2>

								{/*  */}
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<Link to='/memberhistory' className={cx('iconText')}>
											<CodeOffOutlinedIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												Projects
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</Link>
									</Button>
								</Grid2>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<Link to='/memberhistory' className={cx('iconText')}>
											<InsertDriveFileOutlinedIcon
												className={cx('bell')}
											/>
											<p
												className={cx(
													'textApplication',
												)}
											>
												Application
											</p>
											<p
												className={cx(
													'zeroApplication',
												)}
											>
												0
											</p>
										</Link>
									</Button>
								</Grid2>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<Link to='/memberhistory' className={cx('iconText')}>
											<AccountBalanceIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												Banking
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</Link>
									</Button>
								</Grid2>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<Link to='/memberhistory' className={cx('iconText')}>
											<HistoryIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												History
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</Link>
									</Button>
								</Grid2>
								<h3 className={cx('generalHeader')}>Others</h3>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<Link className={cx('iconText')}>
											<NotificationsNoneIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												Notification
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</Link>
									</Button>
								</Grid2>
								{/*  */}
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<div className={cx('iconText')}>
											<GroupIcon className={cx('bell')} />
											<p className={cx('textItem')}>
												Friends
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</div>
									</Button>
								</Grid2>
							</li>
						</ul>
					</Paper>
				 
        </Grid2>
{/* Project List */}
                                                
    </div>
  )
}

export default index