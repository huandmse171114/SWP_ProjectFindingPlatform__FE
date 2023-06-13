import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Autocomplete, Avatar, Grid, IconButton, Paper, TextField } from '@mui/material';
import { Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <Paper className={cx('header')} elevation={2}>
            <Container>
                <Grid 
                    className={cx('header-grid')}
                    container 
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{
                        height: 68,
                    }}
                >
                    <Grid className={cx('header-logo')} item textAlign={'center'} lg={2}>
                        <img className={cx('logo-img')} src={images.logo} />
                    </Grid>
                    <Grid className={cx('header-search')} alignItems='center' item lg={3}>
                        <Paper className={cx('search-wrapper')} elevation={1}>
                            <input className={cx('search-input')} placeholder='Search' />
                            <IconButton color='primary'>
                                <SearchIcon className={cx('search-icon')}/>
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid className={cx('header-nav')} textAlign={'center'} item lg={5}>
                        <Grid alignItems='center' columnGap={4} className={cx('nav-list')} container>
                            <Link to='/' className={cx('nav-item')}>Home</Link>
                            <Link to='/about' className={cx('nav-item')}>About</Link>
                            <Link to='/projects' className={cx('nav-item')}>Project</Link>
                            <Link to='/members' className={cx('nav-item')}>Member</Link>
                            <Paper className={cx('user-wrapper')}>
                                <Avatar alt="Username" src={images.demoAvt} className={cx('user-avt')}/>
                                <p className={cx('user-name')}>HuanDM</p>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

export default Header;
