import './App.css';
import Login from "./containers/Users/Login";
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home";
import AddPatient from "./components/Patient/AddPatient";
import React from "react";
import PatientOptions from "./components/Patient/PatientOptions";
import DisplayAll from "./components/Patient/DisplayAll";
import DelPatient from "./components/Patient/DelPatient";
import ReqBlood from "./components/Patient/ReqBlood";

function App() {
    return (
        <Routes>
            <Route path={'/login'} element={
                <Box sx={{
                    display: 'block',
                    margin: 'auto',
                    marginTop: '15vh',
                    maxWidth: '23%',

                    border: 'solid 1px #101010',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.5)'
                }}>
                    <Login/>
                </Box>
            }/>
            <Route path={'/patients'} element={<PatientOptions />} />
            <Route path={'/patients/add'} element={<AddPatient />} />
            <Route path={'/patients/all'} element={<DisplayAll />} />
            <Route path={'/patients/del'} element={<DelPatient />} />
            <Route path={'/patients/req'} element={<ReqBlood />} />
            <Route path={'/'} element={<Home/>} />
        </Routes>
    );
}

export default App;
