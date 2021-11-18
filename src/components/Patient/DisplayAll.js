import React, {useEffect, useState} from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch} from "react-redux";
import {getAllPatients} from "../../store/actions/UserActions";

function DisplayAll() {

    const dispatch = useDispatch();

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const res = dispatch(getAllPatients());

        res.then(res => {
            // console.log(res.data);
            setPatients(res.data);
        });

    }, [dispatch]);

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Date of Birth</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Contact</TableCell>
                            <TableCell align="right">Blood Group</TableCell>
                            <TableCell align="right">Address 1</TableCell>
                            <TableCell align="right">Address 2</TableCell>
                            <TableCell align="right">Address 3</TableCell>
                            <TableCell align="right">Medical History</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            patients.map(row => (
                                <TableRow key={row.patientID}>
                                    <TableCell component="th" scope="row">{row.patientID}</TableCell>
                                    <TableCell align="right">{row.First_Name}</TableCell>
                                    <TableCell align="right">{row.Last_Name}</TableCell>
                                    <TableCell align="right">{row.dob}</TableCell>
                                    <TableCell align="right">{row.Gender === "F" ? "Female" : "Male"}</TableCell>
                                    <TableCell align="right">{row.ContactNumber}</TableCell>
                                    <TableCell align="right">{row.bloodType}</TableCell>
                                    <TableCell align="right">{row.address1}</TableCell>
                                    <TableCell align="right">{row.address2}</TableCell>
                                    <TableCell align="right">{row.address3}</TableCell>
                                    <TableCell align="right">{row.medical_history}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default DisplayAll;