# Demo walkthrough

<p align="center">
  <img src="../resources/fig/readme-figs/test-connection.gif" style="border: 2px solid #555; width:60%" alt="A screen capture of a mouse clicking the `Press for test message button` in the SweetPea core website." The response appears below the button, reading "Hello, SweetPea!"/>
</p>
<p align="center">Figure 1. SweetPea.</p> 

On the website side (i.e., in `SweetPea/core-website/src/App.js`), the demo uses the `onClick()` function of an HTML button to request a test message from the server.

```
<button className="App-button"
                   type="button"
                   onClick={fetchTestMessage}>Press for test message</button>
```

Next, the `fetchTestMessage()` function uses [JavaScript's fetch method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to make an HTTP request to the server for a test message. Then, the function updates the value of the state variable `testMessage` with the response string.

``` 
const fetchTestMessage = () => {
  let url = "http://localhost:5000/testMessage"
  fetch(url)
      .then(response => response.json())
      .then(data => {
          setTestMessageString(data.testMessage)
      })
}
```

Just below the HTML button, the value of `testMessage` is evaluated and displayed on the screen.

```       
<div className="test-message-response">
   <p>{testMessageString}</p>
</div>
```

<!-- [React Hooks](https://reactjs.org/docs/hooks-intro.html).*-->




On the server side (i.e., in `SweetPea/core-server/Server.py`), the server maps the `/testMessage` URL to a function called `testMessage()` that handles test message requests. The function returns a JSON object containing the string `"Hello, SweetPea!`.

```
@app.route("/testMessage", methods = ['GET'])
def testMessage():
  return {'testMessage': "Hello, SweetPea!"}

```

Back on the website side, `fetchTestMessage()` receives the server's response and updates the `testMessage` state variable. The new value appears under the button, as shown earlier in Figure 4.
