/* SweetPea core website */
/* Author: Emily LeBlanc */
/* Date: 1/19/2023 */

// import React, { useState } from 'react';
import React, {useState} from 'react';



import Header from './components/Header/Header.js';
import ViewFinder from './components/ViewFinder/ViewFinder.js';

/* Import style */
import './App.css';


function App() {

    var initialView = "demo"

    /* Material tab logic from: https://codingbeautydev.com/blog/material-ui-tabs/ */
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    const [value, setValue] = React.useState(0);


    return (


        <div>
            <Header title="SweetPea" subtitle="A tiny web development kit."/>

            <ViewFinder initialView={initialView}/>

        </div>
    )
}

export default App;

