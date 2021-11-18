import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/UserActions";
import {useNavigate} from "react-router-dom";

function Login() {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [error, setError] = useState({});

    const history = useNavigate();

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const res = dispatch(login({userName: username, password: password}));
        res.then(res => {
            if (Boolean(res)) {
                setError(res);
            } else {
                history('/');
            }
        })
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingX: '.5rem',
            paddingY: '8rem',
        }} component={'form'} onSubmit={handleLogin}>

            <Typography variant={'h4'} sx={{
                margin: 'auto',
                marginY: '2rem',
            }}>
                Login
            </Typography>

            <TextField sx={{
                margin: '1rem',
            }} label={'Username'} value={username} id={'userName'} onChange={e => setUsername(e.target.value)}
            error={Boolean(error && error.userName)} helperText={error && error.userName} />

            <TextField sx={{
                margin: '1rem',
            }} label={'Password'} value={password} id={'password'} type={'password'} onChange={e => setPassword(e.target.value)}
            error={Boolean(error && error.password)} helperText={error && error.password} />

            <Button title={'Login'} variant={'contained'} sx={{
                margin: 'auto',
                marginTop: '2rem'
            }} type={'submit'}>
                Login
            </Button>

        </Box>
    );
}

export default Login;