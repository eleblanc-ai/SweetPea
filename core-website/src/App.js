import './App.css';
import React, { useState } from 'react';
import {SERVER_HOSTNAME, SERVER_PORT} from "./consts";



function App() {
    const [testMessageString, setTestMessageString] = useState('');

    // Keep it RESTful with HTTP verbs: https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/

    // Make request to the SweetPea core server's `testMessage` endpoint
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
      <div className="App-header">
        <p>
          SweetPea: A tiny web development kit.
        </p>
      </div>
      <div className="App-main-content">

          {/* Main site content */}
          <button className="App-button"
                  type="button"
                  onClick={fetchTestMessage}>Press for test message</button>
          <div className="test-message-response">
              <p>{testMessageString}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
