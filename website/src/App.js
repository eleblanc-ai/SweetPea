/* SweetPea core website */
/* Author: Emily LeBlanc */
/* Date: 1/5/2023 */

import React, { useState } from 'react';

/* Import style */
import './App.css';

/* Import Material UI components*/
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


/* Import core server hostname and port */
import {SERVER_HOSTNAME, SERVER_PORT, TIME_ENDPOINT} from "./consts";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function App() {

    /* testMessage state variable initialized to empty string*/
    const [timeString, setTimeString] = useState('');

    /*  */
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };


    /* Keep it RESTful with HTTP verbs: https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/ */
    /* Make GET request to the server's `time` endpoint */
    const fetchTimeString = () => {
        let url = "http://"+ SERVER_HOSTNAME + ":" + SERVER_PORT + "/" + TIME_ENDPOINT
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeString("[Response] " + data.time)
            })
    }

    {/* vis variable stores page HTML and JS */}
    let vis = <div className="App">


        {/* Demo header, replace with your own -- edit style in App.css  */}
        <div className="App-header">
            <p>
                SweetPea: A tiny web development kit.
            </p>
        </div>



        {/* Main site content -- edit style in App.css */}


        <div className="App-main-content">

            <Tabs value={tabIndex} onChange={handleTabChange}>
                <Tab label="Demo" />
                <Tab label="API" />
                <Tab label="Docs" />
                <Tab label="About SweetPea" />

            </Tabs>
            <br/>


            {/* Demo button -- edit style in App.css */}
            {/* On click, demo button will call fetchTestMessage */}
            <Stack className="App-endpoint-stack" spacing={2} direction="row">
                <Button variant="contained" onClick={fetchTimeString}>Time</Button>
                <Alert className="alert-response" severity="success">{timeString}</Alert>
            </Stack>

        </div>

    </div>

    {/* return vis to render */}
    return (

        <div>{vis}</div>
    );
}

export default App;