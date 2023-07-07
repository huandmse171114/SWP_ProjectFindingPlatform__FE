import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import React from 'react';
// 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import request from '../../utils/request';
// 
const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
        request.post('auth/login', {
            email: data.get('email'),
            password: data.get('password'),
        }).then(res => {
            alert('login successfully')
            console.log(res.data)
            sessionStorage.setItem("user", JSON.stringify(res.data))
            if (res.data.role === "ADMIN") navigate('/dashboard')
            else navigate('/')
        }).catch(err => {
            console.log(err)
        })
      };

    return (
        <>
       
        {/*  */}
        <Grid container component="main" sx={{ height: '100vh', borderRadius: 10 }}>
                <CssBaseline />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >

                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 45,
                        }}
                    >

                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Button
                            startIcon={<GoogleIcon />}
                            type="submit"
                            // fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: 400, borderRadius: "10px" }}
                        >
                            Sign in with Google
                        </Button>
                        <Typography component="h1" variant="h5">
                            or
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                value="admin@gmail.com"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{ mt: 1, borderRadius: "15px" }}
                            />






                            <TextField
margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value="password"
                                id="password"
                                autoComplete="current-password"
                                sx={{ borderRadius: 20 }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> <br />
                            <Button
                                type="submit"
                                // fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: 400, borderRadius: 10 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://transkriptor.com/wp-content/uploads/2022/01/undraw_Interview_re_e5jn-1024x757.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'right',
                    }}
                />
            </Grid>
{/*  */}
        </>
        
    );
}

export default Login;