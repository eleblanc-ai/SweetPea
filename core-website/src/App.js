/* SweetPea core website */
/* Author: Emily LeBlanc */
/* Date: 1/5/2023 */

import React, { useState } from 'react';

/* Import style */
import './App.css';

/* Import core server hostname and port */
import {SERVER_HOSTNAME, SERVER_PORT} from "./consts";

function App() {

    /* testMessage state variable initialized to empty string*/
    const [testMessageString, setTestMessageString] = useState('');

    /* Keep it RESTful with HTTP verbs: https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/ */
    /* Make GET request to the SweetPea core server's `testMessage` endpoint */
    const fetchTestMessage = () => {
        let url = "http://"+ SERVER_HOSTNAME + ":" + SERVER_PORT + "/testMessage"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTestMessageString(data.testMessage)
            })
    }

  return (
    <div className="App">

      {/* Demo header, replace with your own -- edit style in App.css  */}
      <div className="App-header">
        <p>
          SweetPea: A tiny web development kit.
        </p>
      </div>
        {/* Main site content -- edit style in App.css */}
        <div className="App-main-content">

          {/* Demo button -- edit style in App.css */}
          {/* On click, demo button will call fetchTestMessage */}
          <button className="App-button"
                  type="button"
                  onClick={fetchTestMessage}>Press for test message
          </button>

          {/* Display demo response -- edit style in App.css */}
          <div className="test-message-response">
              <p>{testMessageString}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
