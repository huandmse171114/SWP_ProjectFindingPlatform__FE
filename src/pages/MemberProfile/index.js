import styles from './MemberProfile.module.scss';
import classNames from 'classnames/bind';
import { Button, Container, Paper, Box, Pagination } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import actor from '../../assets/images/actor.jpg';
import Sidebar from './component/Sidebar';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Decoding from '../../assets/images/coding.png';
import Overview from '../../assets/images/search.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GroupIcon from '@mui/icons-material/Group';
import CreateIcon from '@mui/icons-material/Create';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
 
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import { Card } from 'react-bootstrap';
const cx = classNames.bind(styles);
function index() {
	return (
		 
		<Container className={cx('wrapper')}>
			<Grid2 container
				 
				className={cx('container')}
			>
				<Grid2 className={cx('informationContent')}>
					<Paper elevation={0} className={cx('sideBar')}>
						<ul className={cx('avatarBar')}>
							<li className={cx('avatarInfo')}>
								<Grid2
									container
									direction="row"
									className={cx('content-body')}
								>
									<Button>
										<ArrowBackIcon />
									</Button>

									<p className={cx('buttonName')}>
										Back to Members List
									</p>
								</Grid2>

								<Grid2 container direction={"row"} className={cx('avatarName')}  >
									<img
										className={cx('actorImage')}
										src={actor}
									/>
									 
										 
										<p className={cx('lastName')}>
											Duong Tien Phat
										</p>
									 
								</Grid2>

								<Grid2
									className={cx('project-sidebar')}
									container
									lg={2}
								>
							 
								</Grid2>
							</li>

							{/*  */}
						</ul>
					</Paper>
				<Grid2 container direction={"row"} rowGap={2} className={cx('wrapper2')}>
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
					<Paper className={cx('History')} >
					<Grid2 className={cx('Description')}  >									 
										<h1 >Description</h1>
										<p>1 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.</p>
							</Grid2>
							<Grid2  className={cx('Description')} >									 
										<h1>History</h1>
										<p>1 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.</p>
							</Grid2>
							<Grid2  className={cx('Description')} >									 
										<h1>Projects</h1>
										<p>1 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.</p>
		 <Pagination count={10} shape="rounded" color='primary' className={cx('paging-list')}/>
							</Grid2>
							<Grid2 className={cx('Description')}  >									 
										<h1>Skills</h1>
										<p>1 Project Overview:
        We are seeking a talented Figma UI/UX designer or professional to clone the
         Zomato Customer App and Zomato Partner App, including all the features and 
         functionalities present in the current versions of both applications. There 
         might be some additional changes required during the design process, so 
         flexibility and open communication are essential.</p>
							</Grid2>
					</Paper>
					
				</Grid2>
					 
				</Grid2>
			 
				 
			</Grid2>
		</Container>
		 
	);
}

export default index;