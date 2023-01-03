import './App.css';
import React, { useState } from 'react';

function App() {
    const [testMessageString, setTestMessageString] = useState('');

    // Keep it RESTful with HTTP verbs: https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/

    const fetchTestMessage = () => {
        let url = "http://localhost:5000/testMessage"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.testMessage)
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
