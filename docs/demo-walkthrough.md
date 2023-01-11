<!--
SweetPea: Demo walkthrough
Author: Emily LeBlanc
Date: 1/10/23
-->
# Demo walkthrough

<p align="center">
  <img src="../resources/fig/readme-figs/test-connection.gif" style="border: 2px solid #555; width:75%" alt="A screen capture of a mouse clicking the `Press for test message button` in the SweetPea core website." The response appears below the button, reading "Hello, SweetPea!"/>
</p>
<p align="center">Figure 1. SweetPea.</p> 


On the website side (i.e., in `SweetPea/core-website/src/App.js`), the demo uses the `onClick()` function of an HTML button to request a test message from the server.

```
<button className="App-button"
                   type="button"
                   onClick={fetchTestMessage}>Press for test message</button>
```

Next, the `fetchTestMessage()` function uses [JavaScript's fetch method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to make an HTTP request to the server for a test message at the `testMessage` endpoint. Then, the function updates the value of the state variable `testMessage` with the response string.

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

## What's next?
* If you want to start digging around the code, check out these starting points for the website and server:

    * Website:
        * [`core-website/src/App.js`](core-website/src/App.js)
    * Server:
        * [`core-server/Server.py`](core-server/Server.py)


* Try a tutorial:
    * [Creating an API endpoint](add-endpoint.md)


* Check out some external resources:
    * [Learn how to build a user interface with React](https://reactjs.org/tutorial/tutorial.html).
    * [Learn how to develop a Flask server](https://flask.palletsprojects.com/en/2.2.x/quickstart/#a-minimal-application).

    
* Stay tuned for more documentation, tutorials, and new features.

---
<p align="center">
  <img style="width:100%" src="../resources/fig/sweetpea-banner.png" alt="An impressionist-style painting of a field of SweetPeas. Original image created with OpenAI's DALL·E 2."/>

</p>
