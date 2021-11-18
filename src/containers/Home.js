import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {Box, Button} from "@mui/material";

function Home(props) {

    const isAuthorized = useSelector(state => state.user.authorized);

    console.log(isAuthorized);

    const nav = useNavigate();

    if (!isAuthorized) {
        return <Navigate to={'/login'}/>;
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '10%',
        }}>
            <Button variant={'contained'} sx={{margin: '1rem'}} onClick={() => {
                nav('/patients');
            }}>
                Patients
            </Button>

            <Button variant={'contained'} sx={{margin: '1rem'}}>
                Donors
            </Button>

            <Button variant={'contained'} sx={{margin: '1rem'}}>
                Donate
            </Button>

            <Button variant={'contained'} sx={{margin: '1rem'}}>
                Blood Bank
            </Button>
        </Box>
    );
}

export default Home;
