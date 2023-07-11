import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './ControlAccordionProfile.module.scss'
import classNames from 'classnames/bind';
import demoData from '../../../../components/Layout/component/DemoData';
import ProjectCard from '../ProjectCard';
import images from '../../../../assets/images';
const cx = classNames.bind(styles);

export default function ControlAccordionProfile({ team }) {
  const [expanded, setExpanded] = React.useState(false);
  const projects = JSON.parse(sessionStorage.getItem("projects"))
  const project = projects[0];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{p: 2}}
        >
          <Typography sx={{ width: '60%', flexShrink: 0, fontSize: 18 }}>
            Project Finding Platform Frontend Team
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className={cx('detail-section')}>
                <Typography className={cx('detail-title')} id="modal-modal-title" variant="h4" component="h2">
                    Team Member
                </Typography>
                <ul className={cx('team-member-list')}>
                    <li className={cx('team-member-item', 'leader-member')}>
                        <div className={cx('team-member-description')}>
                            <img src={images.demoAvt} className={cx('member-avatar')} />
                            <div className={cx('member-info')}>
                                <p className={cx('member-name')}>Dinh Minh Huan</p>
                                <p className={cx('member-email')}>demoemail@gmail.com</p>
                            </div>
                        </div>
                        <p className={cx('member-role')}>Team Lead</p>
                    </li>
                    <li className={cx('team-member-item')}>
                        <div className={cx('team-member-description')}>
                            <img src={images.demoAvt} className={cx('member-avatar')} />
                            <div className={cx('member-info')}>
                                <p className={cx('member-name')}>Dinh Minh Huan</p>
                                <p className={cx('member-email')}>demoemail@gmail.com</p>
                            </div>
                        </div>
                        <p className={cx('member-role')}>Team Member</p>
                    </li>
                    <li className={cx('team-member-item')}>
                        <div className={cx('team-member-description')}>
                            <img src={images.demoAvt} className={cx('member-avatar')} />
                            <div className={cx('member-info')}>
                                <p className={cx('member-name')}>Dinh Minh Huan</p>
                                <p className={cx('member-email')}>demoemail@gmail.com</p>
                            </div>
                        </div>
                        <p className={cx('member-role')}>Team Member</p>
                    </li>
                </ul>
            </div>
            <div className={cx('detail-section')}>
                <Typography className={cx('detail-title')} id="modal-modal-title" variant="h4" component="h2">
                    Team Description
                </Typography>
                <p className={cx('team-description')}>
                    We are looking for a talented individual to assist us with POD research for our Shopify store. 
                    The ideal candidate should be proficient in Shopify, research methods, market analysis, market research, and product research. 
                    The job length is less than one month, and we are looking for someone who can work efficiently and effectively within that timeframe.  
                    As our product researcher, your main responsibility is to help us identify products that will sell well on our Shopify store. 
                    You will be conducting market research and analysis to determine what products are popular and in demand. 
                    You will also be responsible for analyzing our competitors and identifying gaps in the market that we can fill.  
                    To be considered for this job, please submit a proposal detailing your experience with product research and how you 
                    can help us with this project. Please include links to past completed projects that showcase your skills in this area. 
                    We look forward to hearing from you!
                </p>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}