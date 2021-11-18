import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {addRequest} from "../../store/actions/UserActions";

function ReqBlood() {

    const [ID, setID] = useState('');

    const [quan, setQuan] = useState('');

    const [reason, setReason] = useState('');

    const [loc, setLoc] = useState('');

    const dispatch = useDispatch();

    const setReq = (e) => {
        e.preventDefault();
        const data = {
            patientID: ID,
            quantity: quan,
            location: loc,
            reason,
        };
        const res = dispatch(addRequest(data));
        console.log(res);
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
                Request For Blood
            </Typography>

            <Box component={'form'} onSubmit={setReq} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                <TextField label={"Patient ID"} value={ID} sx={{width: 350, marginTop: '1rem'}} required={true}
                           onChange={(e) => setID(e.target.value)}/>

                <TextField label={'Quantity'} value={quan} required={true} sx={{width: 350, marginTop: '1rem'}}
                           onChange={(e) => setQuan(e.target.value)}/>

                <TextField label={'Reason'} value={reason} required={true} sx={{width: 350, marginTop: '1rem'}}
                           onChange={(e) => setReason(e.target.value)}/>

                <TextField label={'Location'} value={loc} required={true} sx={{width: 350, marginTop: '1rem'}}
                           onChange={(e) => setLoc(e.target.value)}/>

                <Button variant={'contained'} color={'success'} sx={{margin: '1rem'}} type={'submit'}>
                    Place Request
                </Button>
            </Box>

        </Box>
    );
}

export default ReqBlood;