# Demo walkthrough

1. On the website side (i.e., in `SweetPea/core-website/src/App.js`), the demo uses the `onClick()` function of an HTML button to request a test message from the server.

```
<button className="App-button"
                   type="button"
                   onClick={fetchTestMessage}>Press for test message</button>
```

2. The `fetchTestMessage()` function uses [JavaScript's fetch method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to make an HTTP request to the server for a test message. Then, the function updates the value of the state variable `testMessage` with the response string.

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

3. Just below the HTML button, the value of `testMessage` is evaluated and displayed on the screen.

```       
<div className="test-message-response">
   <p>{testMessageString}</p>
</div>
```

<!-- [React Hooks](https://reactjs.org/docs/hooks-intro.html).*-->




4. On the server side (i.e., in `SweetPea/core-server/Server.py`), the demo uses a [Flask endpoint](https://flask.palletsprojects.com/en/2.2.x/quickstart/) called `/testMessage` that handles test message requests. Here, the server returns the string `"Hello, SweetPea!`.

```
@app.route("/testMessage", methods = ['GET'])
def testMessage():
  return {'testMessage': "Hello, SweetPea!"}

```

5. Back on the website side, `fetchTestMessage()` receives the server's response and updates the `testMessage` state variable. The new value will appear under the button, as shown earlier in Figure 4.
