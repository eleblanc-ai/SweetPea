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


function App() {

    /* testMessage state variable initialized to empty string*/
    const [timeString, setTimeString] = useState('');

    /* Material tab logic from: https://codingbeautydev.com/blog/material-ui-tabs/ */
    const [tabIndex, setTabIndex] = useState(1);
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
    };

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
                <Tab label="SweetPea" />
                <Tab label="Demo UI" />
                <Tab label="Demo API" />
                <Tab label="Docs" />
                <Tab label="About" />

            </Tabs>
            <br/>

            {/* SweetPea tab -- edit style in App.css */}
            {tabIndex === 0 && (
                <p>README intro and link to repository here</p>
            )}

            {/* Demo tab -- edit style in App.css */}
            {tabIndex === 1 && (

                <Stack className="App-endpoint-stack" spacing={2} direction="row">
                    <Button variant="contained" onClick={fetchTimeString}>Time</Button>
                    <Alert className="alert-response" severity="success">{timeString}</Alert>
                </Stack>
            )}

            {/* API tab -- edit style in App.css */}
            {tabIndex === 2 && (
                <p>The API tab</p>
            )}

            {/* Documentation (docs) tab -- edit style in App.css */}
            {tabIndex === 3 && (
                <p>All documentation grouped by type (e.g., overviews, tutorials)</p>
            )}

            {/* About tab -- edit style in App.css */}
            {tabIndex === 4 && (
                <p>Links, changelog, contact, license</p>
            )}




        </div>

    </div>

    {/* return vis to render */}
    return (

        <div>{vis}</div>
    );
}

export default App;