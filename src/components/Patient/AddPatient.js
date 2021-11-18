import React, {useState} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {useDispatch} from "react-redux";
import {registerPatient} from "../../store/actions/UserActions";

function AddPatient() {

    const [gender, setGender] = useState('');

    const [firstName, setFirst] = useState('');

    const [lastName, setLast] = useState('');

    const [bloodGrp, setGrp] = useState('');

    const [contact, setNum] = useState('');

    const [dob, setDOB] = useState(null);

    const [add1, setAdd1] = useState('');

    const [add3, setAdd3] = useState('');

    const [add2, setAdd2] = useState('');

    const [his, setHis] = useState('');

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            gender,
            number: contact,
            dob: `${dob.getFullYear()}-${dob.getMonth()}-${dob.getDate()}`,
            bloodType: bloodGrp,
            address1: add1,
            address2: add2,
            address3: add3,
            medicalHistory: his,
        }

        console.log(data);

        const res = dispatch(registerPatient(data));

        res.then(res1 => console.log(res1));

        setGender('');
        setFirst('');
        setLast('');
        setGrp('');
        setDOB(null);
        setNum('');
        setAdd1('');
        setAdd2('');
        setAdd3('');
        setHis('');
    };

    return (
        <Box sx={{
            margin: 'auto',
            maxWidth: '800px',
            padding: '50px',
            border: 'solid 1px black',
            borderRadius: '5px',
            marginTop: '20vh',
        }}>

            <Typography variant={'h4'} sx={{textAlign: 'center'}}>
                Add a new Patient
            </Typography>

            <Box component={'form'} onSubmit={register}
                 sx={{display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center'}}>

                <TextField label={'First Name'} sx={{width: '350px', marginRight: '25px', marginTop: '1rem'}}
                           value={firstName} onChange={(e) => setFirst(e.target.value)}/>

                <TextField label={'Last Name'} sx={{width: '350px', marginLeft: '25px', marginTop: '1rem'}}
                           value={lastName} onChange={(e) => setLast(e.target.value)}/>

                <TextField label={'Blood Group'} sx={{width: '350px', marginRight: '25px', marginTop: '1rem'}}
                           value={bloodGrp} onChange={(e) => setGrp(e.target.value)}/>

                <FormControl sx={{width: '350px', marginTop: '1rem', marginLeft: '25px',}}>
                    <InputLabel id={'gender'}>Gender</InputLabel>

                    <Select value={gender} id={'gender'} label={'Gender'} onChange={(e) => {
                        setGender(e.target.value);
                    }}>
                        <MenuItem value={'M'}>Male</MenuItem>
                        <MenuItem value={'F'}>Female</MenuItem>
                    </Select>
                </FormControl>

                <TextField label={'Contact Number'} value={contact} onChange={(e) => setNum(e.target.value)}
                           sx={{width: '350px', marginRight: '25px', marginTop: '1rem'}}/>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker label={'Date of Birth'} value={dob}
                                renderInput={(params) => <TextField {...params} style={{
                                    width: '350px',
                                    marginLeft: '25px',
                                    marginTop: '1rem'
                                }}/>} onChange={(e) => setDOB(e)}/>
                </LocalizationProvider>

                <TextField label={'Address 1'} sx={{width: '350px', marginRight: '25px', marginTop: '1rem'}}
                           value={add1} onChange={(e) => setAdd1(e.target.value)}/>

                <TextField label={'Address 2'} sx={{width: '350px', marginLeft: '25px', marginTop: '1rem'}}
                           value={add2} onChange={(e) => setAdd2(e.target.value)}/>

                <TextField label={'Address 3'} sx={{width: '350px', marginRight: '25px', marginTop: '1rem'}}
                           value={add3} onChange={(e) => setAdd3(e.target.value)}/>

                <TextField label={'Medical History'} sx={{width: '350px', marginLeft: '25px', marginTop: '1rem'}}
                           value={his} onChange={(e) => setHis(e.target.value)}/>

                <Button type={'submit'} variant={'contained'} color={'success'} sx={{marginTop: '2rem'}}>
                    Add Patient
                </Button>
            </Box>

        </Box>
    );
}

export default AddPatient;