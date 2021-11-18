import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {deletePatient} from "../../store/actions/UserActions";
import {useNavigate} from "react-router-dom";

function DelPatient() {

    const [ID, setID] = useState('');

    const dispatch = useDispatch();

    const nav = useNavigate();

    const handleDelete = () => {
        const res = dispatch(deletePatient( {patientID: ID} ));
        setID('');
        nav('/patients')
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            maxWidth: '800px',
            padding: '50px',
            border: 'solid 1px black',
            borderRadius: '5px',
            marginTop: '20vh',
        }}>
            <Typography variant={'h4'}>
                Enter the ID of patient to be deleted
            </Typography>

            <TextField label={"Patient ID"} value={ID} sx={{width: 350, marginTop: '1rem'}} required={true}
                       onChange={(e) => setID(e.target.value)}/>
            <Button variant={'contained'} color={'success'} sx={{width: '75px', margin: '1rem'}} onClick={handleDelete}>
                Delete
            </Button>

        </Box>
    );
}

export default DelPatient;