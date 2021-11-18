import React from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function PatientOptions() {

    const nav = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '10%',
        }}>
            <Button variant={'contained'} sx={{margin: '1rem'}} onClick={() => {
                nav('/patients/add');
            }}>
                Add Patient
            </Button>

            <Button variant={'contained'} sx={{margin: '1rem'}}onClick={() => {
                nav('/patients/req');
            }}>
                Request Blood
            </Button>

            <Button variant={'contained'} sx={{margin: '1rem'}} onClick={() => {
                nav('/patients/del');
            }}>
                Delete Patient by ID
            </Button>

            <Button variant={'contained'} sx={{margin: '1rem'}} onClick={() => {
                nav('/patients/all');
            }}>
                Display All Patients
            </Button>
        </Box>
    );
}

export default PatientOptions;