import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { Container, List, ListItem, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-wrapper')}>
            <Container className={cx('footer-container')}>
                <div className={cx('footer-background-img')}>
                    <img src={images.typing} />
                </div>
                <Grid2 container className={cx('footer-grid')}>
                    <Grid2 direction='row' className={cx('footer-detail')} columnGap={5} container lg={10}>
                        <Grid2 className={cx('detail-section')} lg={3}>
                            <h2>About FindHub</h2>
                            <ul className={cx('detail-list')}>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >Privacy and Policy</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >Careers</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >Contract</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >FAQ</Link>
                                </li>
                            </ul>
                        </Grid2>
                        <Grid2 className={cx('detail-section')} lg={3}>
                            <h2>Forum</h2>
                            <ul className={cx('detail-list')}>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >About FindHub</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >Careers</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >Contract</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >FAQ</Link>
                                </li>
                            </ul>
                        </Grid2>
                        <Grid2 className={cx('detail-section')} lg={3}>
                            <h2>Service</h2>
                            <ul className={cx('detail-list')}>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >About FindHub</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >Careers</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >Contract</Link>
                                </li>
                                <li className={cx('detail-item')}>
                                    <Link to='#' >FAQ</Link>
                                </li>
                            </ul>
                        </Grid2>
                    </Grid2>
                    <Grid2 className={cx('input-section')} lg={2}>
                        <img src={images.logo}/>
                    </Grid2>
                </Grid2>
                <Paper elevation={12} className={cx('footer-baseline')}>
                    <Container>
                        <Grid2 container alignItems='center' justifyContent='space-between'>
                            <p className={cx('baseline-copyright')}>@copyright 2023</p>
                            <p className={cx('baseline-copyright')}>Facebook Zalo LinkedIn Twitter Youtube</p>
                        </Grid2>
                    </Container>
                    <p></p>
                </Paper>
            </Container>
        </div>
    );
}

export default Footer;
