import { useParams } from 'react-router-dom';
import styles from './ProjectDetail.module.scss'
import classNames from 'classnames/bind';
import { Button, Container, Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import images from '../../assets/images';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';

const cx = classNames.bind(styles);

function ProjectDetail() {
    const { id } = useParams();
    return (
        <Container className={cx('wrapper')}>
            <Grid2 container justifyContent='space-between' className={cx('detail-grid')}>
                <Grid2 lg={8} className={cx('detail-content')}>
                    <Paper elevation={2} className={cx('detail-outline')} >
                        <ul className={cx('detail-list')}>
                            <li className={cx('detail-item', 'separate-bold')}>
                                <Grid2 container direction='column'  className={cx('content-body', 'content-title')} >
                                    <h2 className={cx('desc-heading')}>
                                        This is project name so it needs to be this long or even more so that I can handle every situation
                                    </h2>
                                    <div className={cx('desc-time')}>
                                        <AccessTimeIcon />
                                        Publish Date 20/2/2020
                                    </div>
                                </Grid2>
                            </li>
                            <li className={cx('detail-item', 'center')}>
                                <Grid2 container justifyContent='center' className={cx('content-customer')} >
                                    <p>Recruit Company</p>
                                <img alt='' src={images.logo} />
                                </Grid2>
                            </li>
                            <li className={cx('detail-item', 'separate-bold')}>
                                <Grid2 container direction='column' className={cx('content-body', 'content-description')} >
                                    <h2 className={cx('desc-subheading')}>
                                        Description
                                    </h2>
                                    <p className={cx('desc-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus diam ut metus dignissim fermentum. Nam vel mollis ex, et placerat metus. Nullam facilisis consec. 
                                    </p>
                                </Grid2>
                            </li>
                            <li className={cx('detail-item', 'separate-bold')}>
                                <Grid2 container direction='column' className={cx('content-body', 'content-description')} >
                                    <h2 className={cx('desc-subheading')}>
                                        Skills Required
                                    </h2>
                                    <ul className={cx('desc-list')}>
                                        <li className={cx('desc-item', 'between')}>
                                            <p className={cx('item-name')}>
                                                <VerifiedIcon className={cx('item-icon')}/>
                                                Javascript
                                            </p>
                                            <p className={cx('item-value')}>
                                                level <span>4</span>
                                            </p>
                                        </li>
                                        <li className={cx('desc-item', 'between')}>
                                            <p className={cx('item-name')}>
                                                <VerifiedIcon className={cx('item-icon')}/>
                                                ReactJS
                                            </p>
                                            <p className={cx('item-value')}>
                                                level <span>3</span>
                                            </p>
                                        </li>
                                        <li className={cx('desc-item', 'between')}>
                                            <p className={cx('item-name')}>
                                                <VerifiedIcon className={cx('item-icon')}/>
                                                AWS Cloud Service
                                                </p>
                                            <p className={cx('item-value')}>
                                                level <span>6</span>
                                            </p>
                                        </li>
                                        <li className={cx('desc-item', 'between')}>
                                            <p className={cx('item-name')}>
                                                <VerifiedIcon className={cx('item-icon')}/>
                                                HTML / CSS
                                            </p>
                                            <p className={cx('item-value')}>
                                                level <span>2</span>
                                            </p>
                                        </li>
                                    </ul>
                                    
                                </Grid2>
                            </li>
                        </ul>
                    </Paper>
                </Grid2>
                <Grid2 lg={3} className={cx('detail-status')}>
                    <Paper elevation={2} className={cx('detail-outline')}>
                        <ul className={cx('detail-list')}>
                            <li className={cx('detail-item', 'between')}>
                                Status <span className={cx('status-value', 'state-1')}>Not started</span>
                            </li>
                            <li className={cx('detail-item', 'between')}>
                                Category <span className={cx('status-value')}>Frontend Project</span>
                            </li>
                            <li className={cx('detail-item', 'between', 'separate')}>
                                Deliver days <span className={cx('status-value')}>4 days</span>
                            </li>
                            <li className={cx('detail-item', 'between', 'separate')}>
                                Due date <span className={cx('status-value')}>31/3/2020</span>
                            </li>
                            <li className={cx('detail-item', 'between', 'separate')}>
                                Salary <span className={cx('status-value', 'status-price')}>$ 500</span>
                            </li>
                            <li className={cx('detail-item', 'between')}>
                            <Button className={cx('status-btn')} variant="contained" color='primary' >
                                Apply Now
                            </Button>
                            </li>
                            <li className={cx('detail-item')}>
                            <Button className={cx('status-btn')} variant="contained" color='primary'>
                                Find Teammates
                            </Button>
                            </li>
                        </ul>
                    </Paper>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default ProjectDetail;