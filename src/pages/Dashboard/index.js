import classNames from 'classnames/bind';

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../Dashboard/component/listItems';
import Chart from './component/Chart';
import Deposits from './component/Deposits';
import Orders from './component/Orders';
import Accounts from './component/Accounts';
import { useNavigate, useParams } from 'react-router-dom';
import Categories from './component/Categories';
import Skills from './component/Skills';
import Majors from './component/Majors';
import Members from './component/Members';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import demoData from '../../components/Layout/component/DemoData';
import Header from '../../components/Layout/component/Header';
import request from '../../utils/request';
import LoadingOverlay from '../../components/Layout/component/LoadingOverlay';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FindHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'inherit',
      top: 65,
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const [skills, setSkills] = React.useState();
  const [categories, setCategories] = React.useState()
  const [majors, setMajors] = React.useState()
  const [accounts, setAccounts] = React.useState()
  const [members, setMembers] = React.useState()

  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingSkills, setIsLoadingSKills] = React.useState(true);
  const [isLoadingMajors, setIsLoadingMajors] = React.useState(true);
  const [isLoadingMembers, setIsLoadingMembers] = React.useState(true);
  const [isLoadingAccounts, setIsLoadingAccounts] = React.useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = React.useState(true);

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const tab = useParams('tab').tab;
  console.log(tab)

  React.useEffect(() => {
    if (!user) {
      navigate('/login')
    }else {
      if (user.role !== 'ADMIN') {
        navigate('/')
      }
    }

    
  }, [])

  React.useEffect(() => {
      // ======================= Get categories data =========================
      if (window.sessionStorage.getItem("categories") === null) {
        request.get("categories/all")
            .then(res => {
                setCategories(res.data);
                setIsLoadingCategories(false);
                window.sessionStorage.setItem("categories", JSON.stringify(res.data));
                console.log(JSON.parse(window.sessionStorage.getItem("categories")))
            })
      }else {
        setCategories(JSON.parse(window.sessionStorage.getItem("categories")));
        setIsLoadingCategories(false);
      }

      // ======================= Get accounts data =========================
      if (window.sessionStorage.getItem("accounts") === null) {
        request.get("accounts/all")
            .then(res => {
                setAccounts(res.data);
                setIsLoadingAccounts(false);
                window.sessionStorage.setItem("accounts", JSON.stringify(res.data));
                console.log(JSON.parse(window.sessionStorage.getItem("accounts")))
            })
      }else {
        setAccounts(JSON.parse(window.sessionStorage.getItem("accounts")));
        setIsLoadingAccounts(false);
      }

      // ======================= Get members data =========================
      if (window.sessionStorage.getItem("members") === null) {
        request.get("members/all")
            .then(res => {
                setMembers(res.data);
                setIsLoadingMembers(false);
                window.sessionStorage.setItem("members", JSON.stringify(res.data));
                console.log(JSON.parse(window.sessionStorage.getItem("members")))
            }).catch(err => {
              setMembers([])
              setIsLoadingMembers(false);
            })
      }else {
        setMembers(JSON.parse(window.sessionStorage.getItem("members")));
        setIsLoadingMembers(false);
      }

      // ======================= Get majors data =========================
      if (window.sessionStorage.getItem("majors") === null) {
        request.get("majors/all")
            .then(res => {
                setMajors(res.data);
                setIsLoadingMajors(false);
                window.sessionStorage.setItem("majors", JSON.stringify(res.data));
                console.log(JSON.parse(window.sessionStorage.getItem("majors")))
            })
      }else {
        setMajors(JSON.parse(window.sessionStorage.getItem("majors")));
        setIsLoadingMajors(false);
      }

      // ========================= Get skills data ============================
      if (window.sessionStorage.getItem("skills") === null) {
        request.get("skills/all")
            .then(res => {
                setSkills(res.data);
                setIsLoadingSKills(false);
                window.sessionStorage.setItem("skills", JSON.stringify(res.data));
                console.log(JSON.parse(window.sessionStorage.getItem("skills")))
            })
      }else {
          setSkills(JSON.parse(window.sessionStorage.getItem("skills")));
          setIsLoadingSKills(false);
      }
  }, [])

  React.useEffect(() => {
    if (!isLoadingCategories && !isLoadingSkills && !isLoadingMajors && !isLoadingAccounts && !isLoadingMembers){
        setTimeout(() => {
            setIsLoading(false);
        }, 400)
    }
}, [isLoadingCategories, isLoadingSkills, isLoadingMajors, isLoadingMembers, isLoadingAccounts])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header scrollAnimation={false}/>
      <Divider/>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{top: 68, background: 'linear-gradient(90deg, rgba(0,11,17,1) 0%, rgba(1,34,56,1) 25%, rgba(1,48,78,1) 50%, rgba(1,64,104,1) 75%, rgba(0,35,57,1) 100%)'}} open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Link to='/'>
              <IconButton sx={{color: 'white'}}>
                  <HomeIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {((tab === 'members' || tab === undefined) && !isLoading) && <Members data={members}/>}
                  {(tab === 'accounts' && !isLoading) && <Accounts data={accounts}/>}
                  {(tab === 'skills' && !isLoading) && <Skills data={skills} />}
                  {(tab === 'categories' && !isLoading) && <Categories data={categories}/>}
                  {(tab === 'majors' && !isLoading) && <Majors data={majors}/>}
                  {isLoading && <LoadingOverlay/>}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}