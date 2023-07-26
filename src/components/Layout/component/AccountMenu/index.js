import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import classNames from 'classnames/bind';
import styles from './AccountMenu.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function AccountMenu({ src }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem("user")))
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  React.useEffect(() => {
    // if(!user) {
    //   navigate('/login')
    //   sessionStorage.removeItem("user");
    // }
  }, [user])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(undefined)
    // sessionStorage.removeItem("user")
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={src}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 140,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {user && user.role === 'ADMIN' &&
          <Link to='/dashboard'>
            <MenuItem className={cx('menu-item')}  onClick={handleClose}>
              <AccountCircleIcon className={cx('menu-icon')} /> Dashboard
            </MenuItem>
          </Link>
        }
        <Link to='/profile'>
          <MenuItem className={cx('menu-item')}  onClick={handleClose}>
            <AccountCircleIcon className={cx('menu-icon')} /> Profile
          </MenuItem>
        </Link>
        <Link to='/profile/teams'>
          <MenuItem className={cx('menu-item')} onClick={handleClose}>
            <GroupsIcon className={cx('menu-icon')} /> Teams
          </MenuItem>
        </Link>
        <Link to='/profile/projects'>
          <MenuItem className={cx('menu-item')} onClick={handleClose}>
            <WorkIcon className={cx('menu-icon')} /> Projects
          </MenuItem>
        </Link>
        <Divider />
        <Link to=''>
          <MenuItem className={cx('menu-item')} onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}