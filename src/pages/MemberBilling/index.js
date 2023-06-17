import styles from './MemberBilling.module.scss';
import classNames from 'classnames/bind';
import { Button, Container, Paper, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import actor from '../../assets/images/actor.jpg';
import Sidebar from '../MemberBilling/component/Sidebar';
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
			<Grid2
				container
				justifyContent={'space-between'}
				className={cx('container')}
			>
				<Grid2 className={cx('informationContent')}>
					<Paper elevation={2} className={cx('sideBar')}>
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

								<Grid2>
									<img
										className={cx('actorImage')}
										src={actor}
									/>
									<Grid2
										container
										direction="row"
										className={cx('Name')}
									>
										<p className={cx('firstName')}>
											First Name
										</p>
										<p className={cx('lastName')}>
											Last Name
										</p>
									</Grid2>
								</Grid2>

								<Grid2
									className={cx('project-sidebar')}
									container
									lg={2}
								>
									<Sidebar />
								</Grid2>
							</li>

							{/*  */}
						</ul>
					</Paper>

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
										<div className={cx('iconText')}>
											<AddHomeOutlinedIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												Overview
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</div>
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
										<div className={cx('iconText')}>
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
										</div>
									</Button>
								</Grid2>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<div className={cx('iconText')}>
											<AccountBalanceIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												Banking
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</div>
									</Button>
								</Grid2>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<div className={cx('iconText')}>
											<HistoryIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												History
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</div>
									</Button>
								</Grid2>
								<h3 className={cx('generalHeader')}>Others</h3>
								<Grid2
									container
									direction="row"
									className={cx('listItem')}
								>
									<Button className={cx('btn')}>
										<div className={cx('iconText')}>
											<NotificationsNoneIcon
												className={cx('bell')}
											/>
											<p className={cx('textItem')}>
												Notification
											</p>
											<p className={cx('zeroFriend')}>
												0
											</p>
										</div>
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
				{/* Part 2 */}
				<Grid2 className={cx('containBox')}>
					<Paper className={cx('box')}></Paper>
				</Grid2>
			</Grid2>
		</Container>
	);
}

export default index;
