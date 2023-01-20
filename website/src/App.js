/* SweetPea core website */
/* Author: Emily LeBlanc */
/* Date: 1/19/2023 */

// import React, { useState } from 'react';
import React from 'react';



import Header from './components/Header/Header.js';
import ViewFinder from './components/ViewFinder/ViewFinder.js';

/* Import style */
import './App.css';


function App() {

    var initialView = "demo"



    return (


        <div>
            <Header title="SweetPea" subtitle="A tiny web development kit."/>

            <ViewFinder initialView={initialView}/>

        </div>
    )
}

export default App;

