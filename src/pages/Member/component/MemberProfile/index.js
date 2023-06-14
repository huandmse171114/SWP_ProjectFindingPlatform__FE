import styles from './MemberProfile.module.scss';
import classNames from 'classnames/bind';
import './MemberProfile.module.scss';
import'./index.scss'
import { Button, Divider } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import actor from '../../../../assets/images/actor.jpg'
const cx = classNames.bind(styles);

function MemberProfile() {
	return (
		<div className='center'>
			{/* Part1 */}
			<div className="Information">
                <div className='info'>
				<div className='Avatar'>
				<img src={actor} />
				</div>
                

				<div className="Name">
					<p>First Name</p>
					<p>Last Name</p>
				</div>

				<div className="Menu"></div>

                </div>
				 
                 <div className='balance'></div>

               
			</div>
			{/* Part 2 */}
			<div className="Box-info">
				<div className="Profile">
					<h1 className='heading'>Your profile</h1>
					<Divider variant="center" sx={{marginLeft:"15%",
    marginRight:"15%", marginBottom:"7%",marginTop:"7%"
    }} />
					<h1 className='heading3'>Basic Information</h1>
					<ul>
						<li className='list_item1'>
                        <p>FullName</p>
                        <input className='input1' type="text" name="fullname"></input>

                        </li>
						<li className='list_item'>
                        <p>Phone</p>
                        <input className='input2' type="text" name="phone"></input>
                        </li >
						<li className='list_item'>
                        <p>Email</p>
                        <input  className='input3' type="text" name="full"></input>
                        </li>
						<li className='list_item4'>
                        <p>Date of birth</p>
                        <input  className='input4'type="text" name="full"></input>
                        </li>
					</ul>
					<h2 className='heading4'>Social Media</h2>
					<ul className='Social' >
					<Button className='btn' startIcon={<FacebookRoundedIcon/>} variant="outlined" sx={{
						  
					}}>Facebook</Button>
					<Button  className='btn' startIcon={<EmailIcon/>} variant="outlined" sx={{
					  marginLeft:"2%"
					}}>Mail</Button>
					<Button className='btn' startIcon={<LocalPhoneRoundedIcon/>} variant="outlined" sx={{
						  marginLeft:"2%"
					}}>Phone</Button>
					<Button className='btn' startIcon={<GitHubIcon/>} variant="outlined" sx={{
						  marginLeft:"2%"
					}}>github</Button>
					<Button className='btn' startIcon={<LanguageIcon/>} variant="outlined" sx={{
						 marginRight:"40%",marginLeft:"2%"
					}}>website</Button>

					</ul>
					<div className="Skill">
                    <h1 className='skill_heading'>Skill</h1>
					<Divider variant="center" sx={{marginLeft:"15%",
    marginRight:"15%", marginBottom:"2%",marginTop:"1%"
    }} />
					<ul>
						<div className='item_skill' >
							<div className='list_skill'>
							<VerifiedIcon/>
							<p className='text_skill'> Skill 1 </p>

							<div className='level'>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							 
							 {/*  */}
							 <div className='list_skill'>
							<VerifiedIcon/>
							<p className='text_skill'> Skill 1 </p>

							<div className='level'>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className='list_skill'>
							<VerifiedIcon/>
							<p className='text_skill'> Skill 1 </p>

							<div className='level'>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className='list_skill'>
							<VerifiedIcon/>
							<p className='text_skill'> Skill 1 </p>

							<div className='level'>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className='list_skill'>
							<VerifiedIcon/>
							<p className='text_skill'> Skill 1 </p>

							<div className='level'>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
							{/*  */}
							<div className='list_skill'>
							<VerifiedIcon/>
							<p className='text_skill'> Skill 1 </p>

							<div className='level'>
								<p>Level: </p>
								<p>00</p>
							</div>

							</div>
						</div>
						 
					</ul>
                </div>

				<div className="Portfolio">
					<h1 className='heading_portfolio'>Portfolio</h1>
					<Divider variant="center" sx={{marginLeft:"15%",
    marginRight:"15%", marginBottom:"5%",marginTop:"1%"
    }} />
				<div className='btn_portfolio'>
				<Button className='portfolio_btn' startIcon={<LinkedInIcon/>} variant="outlined" sx={{
						  
						}}>LinkedIn</Button>
						<Button className='portfolio_btn' startIcon={<GitHubIcon/>} variant="outlined" sx={{
						  
						}}>github</Button>
						<Button className='portfolio_btn' startIcon={<LanguageIcon/>} variant="outlined" sx={{
						  
						}}>website</Button>
				</div>

				</div>

				</div>

				 
			</div>
		</div>
	);
}

export default MemberProfile;
