## Get started with SweetPea
> ⚠️ These instructions were tested on a laptop running macOS Monterey 12.6 with an M1 chip.

In a terminal, navigate to the directory where you plan to install SweetPea and clone the [repository](https://github.com/eleblanc-ai/sweetpea).

    git clone https://github.com/eleblanc-ai/SweetPea.git

<a name="install-requirements">

### 1. Install the requirements
There are a few ways to install the project requirements. I used [Homebrew](https://brew.sh/), [NPM](https://docs.npmjs.com/), and [pip](https://pip.pypa.io/en/stable/).

To follow the instructions below, [install Homebrew ahead of time](https://brew.sh/). NPM and pip are installed automatically with NodeJS and Python3, respectively.

Install the requirements in the SweetPea project directory.

    cd SweetPea


#### Requirements:

1. [NodeJS](https://nodejs.org/) -- *a cross-platform Javascript run-time environment for browsers.*

       brew install node

<!--$ node -v
v18.9.0-->
2. [ReactJS](https://reactjs.org) -- *a JavaScript library for building user interfaces.*

       npm install react

<!--$ npm view react version
18.2.0-->


3. [Python](https://www.python.org/) -- *a language for developing the website's back-end functionality.*

       brew install python3

<!-- $ python3 --version
Python 3.10.6 -->

> 💡️ Optionally, use [pyenv](https://github.com/pyenv/pyenv) for version management.

4. [Flask](https://flask.palletsprojects.com/en/2.2.x/) -- *a web app framework for mapping HTTP requests from the website to Python functions.*

       pip3 install Flask


5. [Flask-cors](https://flask.palletsprojects.com/en/2.2.x/) -- *a Flask extension for handling Cross Origin Resource Sharing (CORS)*

       pip3 install flask-cors

> 💡️ In place of steps 4 and 5, you can run `pip3 install -r requirements.txt`
> in the `server` directory to install Flask and Flask-cors.

<!-- $ flask --version

Python 3.10.6
Flask 2.2.2
Werkzeug 2.2.2 -->

Once you've installed the requirements, you can start the server.



<a name="start-server">

### 2. Start the server

The server is a [basic Flask app](https://flask.palletsprojects.com/en/1.1.x/quickstart/#a-minimal-application) that includes one demo endpoint called `time`. This endpoint returns the server's system time.

Start the server from the `SweetPea/server` directory in a new terminal tab or window.

    cd server    
    python3 Server.py

The output should look similar to the following:
```
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://localhost:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 285-622-087
```
You can check that the server's demo endpoint is available by visiting http://localhost:5000/time in a browser, as shown in Figure 1.

<p align="center">
<br/>
  <img src="./fig/readme/test-server.png" alt="A screen capture of the launched website with the title `SweetPea: A tiny web app template` and a button labeled "Click for test message."/>
</p>
<p align="center">Figure 1. Testing the server's demo endpoint.</p>

The server optionally accepts arguments for hostname, port, threaded mode, and debug mode as follows:
```
usage: Server.py [-h] [-n HOSTNAME] [-p PORT] [-t] [-d]

options:
  -h, --help            show this help message and exit
  -n HOSTNAME, --hostname HOSTNAME
                        set a hostname
  -p PORT, --port PORT  set a port for listening
  -t, --threaded        enable threaded mode
  -d, --debug           enable debug mode
```

> ⚠️ If you change the server's hostname or port, you will also need to tell the website how to reach the server. To do so, update the following constants in `website/src/consts.js` to reflect your changes:
>* `SERVER_HOSTNAME`
>* `SERVER_PORT`
>
>
<!-- 
Later: 
"proxy":"http://localhost:5000" in package.json

https://create-react-app.dev/docs/proxying-api-requests-in-development/

You will also need to update the value of `proxy` in `website/package-json` to reflect the new port and hostname. --> 

You can set [additional arguments](https://flask.palletsprojects.com/en/2.2.x/api/#flask.Flask.run) for your Flask app by editing the `app.run` call in `Server.py`.

<a name="launch-website">

### 3. Launch the website

The website is an empty React application, bootstrapped with [Create React AppV1](https://github.com/facebook/create-react-app).

In a new terminal tab or window, install the website's dependencies to the `SweetPea/website` directory.

       npm install

> ⚠️ At this step, `npm audit` (which is run automatically as part of `npm install`) is [likely to report security vulnerabilities in dependency packages](https://overreacted.io/npm-audit-broken-by-design/). You can choose to [ignore the audit report](https://www.voitanos.io/blog/don-t-be-alarmed-by-vulnerabilities-after-running-npm-install/#how-should-you-handle-these-audit-reports). Otherwise, check out NPM's documentation on [auditing dependency packages for security vulnerabilities](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities).


<!-- If you choose instead to dig into any warnings that come up, then I recommend first checking out NPM's documentation on [auditing packages for security vulnerabilities](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities).--> 

Next, build and start the website.

        npm run build
        npm start

The output of `npm start` should look similar to this:
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://xxx.xxx.xxx.xxx:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

```
NPM should automatically open the website, shown in Figure 2 below. Otherwise, you can navigate to http://localhost:3000 to visit the website in your browser.
<p align="center">
  <img src="./fig/readme/test-website.png" alt="A screen capture of the launched website with the title `SweetPea: A tiny web development kit` and a button labeled "Press for test message."/>
</p>
<p align="center">Figure 2. Launching the website.</p>

You can optionally [change the hostname and port for the website](https://dev.to/kevinmel2000/nodejs-reactjs-change-host-and-port-number-70b).

<a name="communication">

### 4. Test website and server communication

Now that the website and server are both online, you can verify that the two can talk to each other.
The website comes with a small demo that lets you test for communication between the website and server.

In the website, press the button to make a request to the server for a test message. If the request is successful, the response appears below the button, as shown in Figure 3.

<p align="center">
  <img src="./fig/readme/test-connection.png" alt="A screen capture of a mouse clicking the `Press for test message button` in the website." The response appears below the button, reading "Hello, SweetPea!"/>
</p>
<p align="center">Figure 3. Testing for communication between the website and server.</p>


# Next steps for you
* To learn more about how the website and server communicate in the demo, check out the [demo walkthrough](docs/demo-walkthrough.md).

* If you want to start digging around the code, check out these starting points for the website and server:

    * Website:
        * [`website/src/AppV1.js`](website/src/App-v1.js)
    * Server:
        * [`server/Server.py`](server/Server.py)


* Try a tutorial:
    * [Creating an API endpoint](docs/add-endpoint.md)


* Check out the [glossary](docs/glossary.md).


* Check out some external resources:

    * [Learn how to build a user interface with React](https://reactjs.org/tutorial/tutorial.html).
    * [Learn how to develop a Flask server](https://flask.palletsprojects.com/en/2.2.x/quickstart/#a-minimal-application).
    * [Creating APIs with Python and Flask](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask)


* Stay tuned for more documentation, tutorials, and new features.
---
<p align="center">
  <img style="width:100%" src="../docs/fig/sweetpea-banner.png" alt="An impressionist-style painting of a field of SweetPeas. Original image created with OpenAI's DALL·E 2."/>

</p>