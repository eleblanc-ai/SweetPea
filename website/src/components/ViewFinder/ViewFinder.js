import React, {useState} from 'react';
import './ViewFinder.css';


import DemoView from '../Views/DemoView/DemoView.js';
import APIView from '../Views/APIView/APIView.js';
import DocsView from '../Views/DocsView/DocsView.js';
import AboutView from '../Views/AboutView/AboutView.js';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


// import CreateView from './Views/CreateView/CreateView.js';
// import DocsView from './Views/DocsView/DocsView.js';
// import LearnView from './Views/LearnView/LearnView.js';
// import MeetView from './Views/MeetView/MeetView.js';


function ViewFinder(props) {
    /* Material tab logic from: https://codingbeautydev.com/blog/material-ui-tabs/ */
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    console.log(tabIndex)

    let viewToClass = {
        0:<DemoView/>,
        1:<APIView/>,
        2:<DocsView/>,
        3:<AboutView/>
    //   // "create":<CreateView changeView={this.props.handleViewChange}/>
    //   // "find":<DocsView changeView={this.props.handleViewChange}/>,
    //   // "learn":<LearnView changeView={this.props.handleViewChange}/>,
    //   // "meet":<MeetView changeView={this.props.handleViewChange}/>,
    }

    let vis=
        <div className="viewfinder">
            <Box className="tabs" sx={{ borderBottom: 2, borderColor: 'divider'}}>
                <Tabs textColor="secondary" indicatorColor="secondary"

                      variant="fullWidth"
                      value={tabIndex}
                      onChange={handleTabChange}>

                    <Tab sx={{fontSize:18}} label="Demo"/>
                    <Tab sx={{fontSize:18}} label="API"/>
                    <Tab sx={{fontSize:18}} label="Docs" />
                    <Tab sx={{fontSize:18}} label="About" />
                </Tabs>
            </Box>
            {viewToClass[tabIndex]}
        </div>

    return(
        <div>{vis}</div>
    )

}

export default ViewFinder;
