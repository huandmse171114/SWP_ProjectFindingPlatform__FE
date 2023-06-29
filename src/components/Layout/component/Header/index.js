import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { Grid, IconButton, Paper } from '@mui/material';
import { Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AccountMenu from '../AccountMenu';
import { useEffect, useRef, useState } from 'react';
import Notification from '../Notification';

const cx = classNames.bind(styles);

function Header() {

    const headerContainer = useRef();

    function handleScroll(e) {
        const position = window.scrollY;
        if (position > 50) {
            headerContainer.current.classList.add(cx('scroll'));
        } else {
            headerContainer.current.classList.remove(cx('scroll'));
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <Paper className={cx('header')} elevation={0}>
            <Container ref={headerContainer} className={cx('header-container')}>
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
                        <Link to='/'>
                            <img alt='FindHub logo' className={cx('logo-img')} src={images.logo} />
                        </Link>
                    </Grid>
                    <Grid className={cx('header-search')} alignItems='center' item lg={3}>
                        <Paper className={cx('search-wrapper')} elevation={0}>
                            <input className={cx('search-input')} placeholder='Search' />
                            <IconButton color='primary'>
                                <SearchIcon className={cx('search-icon')}/>
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid className={cx('header-nav')} textAlign={'center'} item lg={5}>
                        <Grid alignItems='center' columnGap={4} className={cx('nav-list')} container>
                            <Link to='/' className={cx('nav-item')}>Home</Link>
                            <Link to='/about-us' className={cx('nav-item')}>About</Link>
                            <Link to='/project' className={cx('nav-item')}>Project</Link>
                            <Link to='/project' className={cx('nav-item')}>Team</Link>
                            <Link to='/member' className={cx('nav-item')}>Member</Link>
                            <Notification/>
                            <AccountMenu src={images.demoAvt} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

export default Header;
