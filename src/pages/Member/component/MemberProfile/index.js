import styles from './MemberProfile.module.scss';
import classNames from 'classnames/bind';
import './MemberProfile.module.scss';
// import'./index.scss'
import { Button, Divider } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import actor from '../../../../assets/images/actor.jpg';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Decoding from'../../../../assets/images/coding.png'
import Overview from '../../../../assets/images/search.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GroupIcon from '@mui/icons-material/Group';
import CreateIcon from '@mui/icons-material/Create';

const cx = classNames.bind(styles);

function MemberProfile() {
	return (
		<div className={cx('center')}>
			{/* Part1 */}
			<div className={cx("Information")}>
                <div className={cx('info')}>
				<div className={cx('Avatar')}>
				<img src={actor} />
				</div>
                

				<div className={cx("Name")}>
					<p>First Name</p>
					<p>Last Name</p>
					<CreateIcon sx={{
								marginTop:"1%",marginLeft:"5%"
							}}/>
				</div>

				<div className={cx("Menu")}></div>

                </div>
				 
                 <div className={cx('balance')}>
					<p className={cx('balanceText')}>Balance</p>
					<p className={cx('balanceText')}>$$$ </p>
				 </div>

				<div className={cx('generalOption')}>
					<p className={cx('optionText')}>General Option</p>
					<ul>
						<li className={cx('optionItem')}>
							<img className={cx('decodingIcon')} src={Overview}/>
							<p>Overview</p>
							<p>0</p>
						</li>

						<li className={cx('optionItem')}>
							
							<img className={cx('decodingIcon')} src={Decoding}/>
							<p>Projects</p>
							<p>0</p>
						</li>

						<li className={cx('optionItem')}>
							<InsertDriveFileOutlinedIcon sx={{
								marginTop:"1%"
							}}/>
							<p>Application</p>
							<p>0</p>
						</li>
						
						<li className={cx('optionItem')}>
							 <AccountBalanceIcon sx={{
								marginTop:"1%"
							}}/>
							<p>Banking</p>
							<p>0</p>
						</li>
						
						<li className={cx('optionItem')}>
							<HistoryIcon sx={{
								marginTop:"1%"
							}}/>
							<p>History</p>
							<p>0</p>
						</li>

					</ul>

					<div>
						<p>Others</p>
						<ul>
						<li className={cx('optionItem')}>
							<NotificationsNoneIcon  sx={{
								marginTop:"1%"
							}}/>
							<p>Notification</p>
							<p>0</p>
						</li>

						<li className={cx('optionItem')}>
							<GroupIcon sx={{
								marginTop:"1%"
							}}/>
							<p>Friends</p>
							<p>0</p>
						</li>

						</ul>
					</div>
					 
				</div>
               
								 
				

			</div>
			{/* Part 2 */}
			<div className={cx("Box-info")}>
				<div className={cx("Profile")}>
					<h1 className={cx('heading')}>Your profile</h1>
					<Divider variant="center" sx={{marginLeft:"15%",
    marginRight:"15%", marginBottom:"7%",marginTop:"7%"
    }} />
					<h1 className={cx('heading3')}>Basic Information</h1>
					<ul>
						<li className={cx('list_item1')}>
                        <p>FullName</p>
                        <input className={cx('input1')} type="text" name="fullname"></input>

                        </li>
						<li className={cx('list_item')}>
                        <p>Phone</p>
                        <input className={cx('input2')} type="text" name="phone"></input>
                        </li >
						<li className={cx('list_item')}>
                        <p>Email</p>
                        <input  className={cx('input3')} type="text" name="full"></input>
                        </li>
						<li className={cx('list_item4')}>
                        <p>Date of birth</p>
                        <input  className={cx('input4')} type="text" name="full"></input>
                        </li>
					</ul>
					<h2 className={cx('heading4')}>Social Media</h2>
					<ul className={cx('Social')} >
					<Button className={cx('btn')} startIcon={<FacebookRoundedIcon/>} variant="outlined" sx={{
						  
					}}>Facebook</Button>
					<Button  className={cx('btn')} startIcon={<EmailIcon/>} variant="outlined" sx={{
					  marginLeft:"2%"
					}}>Mail</Button>
					<Button className={cx('btn')} startIcon={<LocalPhoneRoundedIcon/>} variant="outlined" sx={{
						  marginLeft:"2%"
					}}>Phone</Button>
					<Button className={cx('btn')} startIcon={<GitHubIcon/>} variant="outlined" sx={{
						  marginLeft:"2%"
					}}>github</Button>
					<Button className={cx('btn')} startIcon={<LanguageIcon/>} variant="outlined" sx={{
						 marginRight:"40%",marginLeft:"2%"
					}}>website</Button>

					</ul>
					<div className={cx('Skill')}>
                    <h1 className={cx('skill_heading')}>Skill</h1>
					<Divider variant="center" sx={{marginLeft:"15%",
    marginRight:"15%", marginBottom:"2%",marginTop:"1%"
    }} />
					<ul>
						<div className={cx('item_skill')} >
							<div className={cx('list_skill')}>
							<VerifiedIcon/>
							<p className={cx('text_skill')}> Skill 1 </p>

							<div className={cx('level')}>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							 
							 {/*  */}
							 <div className={cx('list_skill')}>
							<VerifiedIcon/>
							<p className={cx('text_skill')}> Skill 1 </p>

							<div className={cx('level')}>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className={cx('list_skill')}>
							<VerifiedIcon/>
							<p className={cx('text_skill')}> Skill 1 </p>

							<div className={cx('level')}>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className={cx('list_skill')}>
							<VerifiedIcon/>
							<p className={cx('text_skill')}> Skill 1 </p>

							<div className={cx('level')}>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className={cx('list_skill')}>
							<VerifiedIcon/>
							<p className={cx('text_skill')}> Skill 1 </p>

							<div className={cx('level')}>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className={cx('list_skill')}>
							<VerifiedIcon/>
							<p className={cx('text_skill')}> Skill 1 </p>

							<div className={cx('level')}>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
						</div>
						 
					</ul>
                </div>

				<div className={cx('Portfolio')}>
					<h1 className={cx('heading_portfolio')}>Portfolio</h1>
					<Divider variant="center" sx={{marginLeft:"15%",
    marginRight:"15%", marginBottom:"5%",marginTop:"1%"
    }} />
				<div className={cx('btn_portfolio')}>
				<Button className={cx('portfolio_btn')} startIcon={<LinkedInIcon/>} variant="outlined" sx={{
						  
						}}>LinkedIn</Button>
						<Button className={cx('portfolio_btn')} startIcon={<GitHubIcon/>} variant="outlined" sx={{
						  
						}}>github</Button>
						<Button className={cx('portfolio_btn')} startIcon={<LanguageIcon/>} variant="outlined" sx={{
						  
						}}>website</Button>
				</div>

				</div>

				</div>

				 
			</div>
		</div>
	);
}

export default MemberProfile;
