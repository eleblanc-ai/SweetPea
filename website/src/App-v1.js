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


function AppV1() {

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

        {/* Demo header, replace with your own -- edit style in AppV1.css  */}
        <div className="App-header">
            <p>
                SweetPea: A tiny web development kit.
            </p>
        </div>

        

        {/* Main site content -- edit style in AppV1.css */}
        <div className="App-main-content">

            <Tabs value={tabIndex} onChange={handleTabChange}>
                <Tab className="App-tab" label="About" />
                <Tab label="Demo"/>
                <Tab label="API"/>
                <Tab label="Docs" />

            </Tabs>
            <br/>

            {/* SweetPea tab -- edit style in AppV1.css */}
            {tabIndex === 0 && (
                <div className="SweetPea-tab">
                    <p>SweetPea is a tiny web development kit. It provides a client-server framework that any developer can use to build a dynamic web application. SweetPea is intended for prototyping, learning, and having fun with web applications.</p>


                    It includes:

                    <ul>
                        <li>A website for your user interface(s)</li>
                        <li>A server for your back-end functionality</li>
                    </ul>

                    All you need to do is:
                    <ol>
                        <li>
                            Build a user interface for the website.
                            <ul>
                                <li><a href="https://reactjs.org">ReactJS</a>, <a href="https://www.w3schools.com/html/">HTML</a>, and <a href="https://www.w3schools.com/css/">CSS</a>.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Develop software resources and create an Application Programming Interface (API) for the server.
                            <ul>
                                <li>
                                    <a href="https://flask.palletsprojects.com/en/2.2.x/">Flask</a> and <a href="https://www.python.org/">Python</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Call your API from the user interface.
                            <ul>
                                <li>
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview">HTTP</a>
                                </li>
                            </ul>
                        </li>
                    </ol>

                    Figure 1 gives an architecture overview of the SweetPea web development kit. Visit the <a href="docs/glossary.md">Glossary</a> for term definitions.

                    <p align="center">
                        <br/>
                        <img className="App-fig" src="./architecture-overview.png"/>
                    </p>
                    <p align="center">Figure 1. SweetPea architecture overview.</p>
                    <br/><br/>
                </div>
            )}

            {/* Demo tab -- edit style in AppV1.css */}
            {tabIndex === 1 && (

                <Stack className="App-endpoint-stack" spacing={2} direction="row">
                    <Button variant="contained" onClick={fetchTimeString}>Time</Button>
                    <Alert className="alert-response" severity="success">{timeString}</Alert>
                </Stack>
            )}

            {/* API tab -- edit style in AppV1.css */}
            {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
            {tabIndex === 2 && (
                <p>Information about endpoints ..  interact like swagger-ui</p>


            )}

            {/* Documentation (docs) tab -- edit style in AppV1.css */}
            {tabIndex === 3 && (
                <p>All documentation grouped by type (e.g., overviews, tutorials)</p>
            )}

            {/* About tab -- edit style in AppV1.css */}
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

export default AppV1;