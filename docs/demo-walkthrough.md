<!--
SweetPea: Demo walkthrough
Author: Emily LeBlanc
Date: 1/10/23
-->
# Demo walkthrough

A walkthrough of the demo web app demonstrated in `README.md`.

<p align="center">
  <img src="fig/demo-walkthrough/test-connection.png" style="border: 2px solid #555; width:75%" alt="A screen capture of a mouse clicking the `Press for test message button` in the website." The response appears below the button, reading "Hello, SweetPea!"/>
</p>
<p align="center">Figure 1. Communication between the website and server.</p> 


On the website side (i.e., in `SweetPea/website/src/App.js`), the demo uses the `onClick()` function of an [Material UI React button](https://mui.com/material-ui/react-button/) to request a test message from the server.

```
<Button variant="contained" onClick={fetchTimeString}>Time</Button>
```
<br/>

Next, the `fetchTimeString()` function uses [JavaScript's fetch method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to make an HTTP request to the server for a test message at the `time` endpoint. Then, the function updates the value of `time` with the response string.

```
const fetchTimeString = () => {
    let url = "http://"+ SERVER_HOSTNAME + ":" + SERVER_PORT + "/" + TIME_ENDPOINT
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setTimeString("[Response] " + data.time)
        })
```

The value of `timeString` is evaluated and displayed on the screen in an [`Alert` component](https://mui.com/material-ui/react-alert/).


<!-- [React Hooks](https://reactjs.org/docs/hooks-intro.html).*-->




On the server side (i.e., in `SweetPea/server/Server.py`), the server maps the `/time` URL to a function called `time()` that handles test message requests. The function returns a JSON object containing the string containing the current time.

```
@app.route("/time", methods = ['GET'])
def time():
    return jsonify({'time': "The time is: " 
                             + str(datetime.now().strftime("%H:%M:%S"))})

```

Back on the website side, `fetchTimeString()` receives the server's response and updates the `timeString` state variable. The new value appears next to the button, as shown in Figure 1.

## What's next?
* If you want to start digging around the code, check out these starting points for the website and server:

    * Website:
        * [`website/src/App.js`](website/src/App.js)
    * Server:
        * [`server/Server.py`](server/Server.py)


* Try a tutorial:
    * [Creating an API endpoint](add-endpoint.md)

*
* Check out the [glossary](docs/glossary.md).


* Check out some external resources:
    * [Learn how to build a user interface with React](https://reactjs.org/tutorial/tutorial.html).
    * [Learn how to develop a Flask server](https://flask.palletsprojects.com/en/2.2.x/quickstart/#a-minimal-application).


* Stay tuned for more documentation, tutorials, and new features.

---
<p align="center">
  <img style="width:100%" src="../docs/fig/sweetpea-banner.png" alt="An impressionist-style painting of a field of SweetPeas. Original image created with OpenAI's DALL·E 2."/>

</p>
