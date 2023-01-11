<!--
SweetPea: Creating an API endpoint 
Author: Emily LeBlanc
Date: 1/10/23
-->
# Creating an API endpoint

The core server provides HTTP access to your behind-the-scenes functionality (e.g., database access, computations, user management). It serves your Application Programming Interface (API) and runs your supporting code in response to requests from the core website.

An API endpoint maps a [URL path](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#path_to_resource) to a function in the core server. This tutorial walks through adding a new  endpoint (w/ supporting code) to the core server, covering three high-level steps:
1. [Write a function](#Write-a-function) 
2. [Create the endpoint](#Create-the-endpoint)
3. [Handle HTTP requests](#Handling-HTTP-requests)

This doc assumes some advance knowledge of [Python](https://www.python.org/), [HTTP APIs](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#what-is-an-api) (and [related terminology](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#api-terminology)), and the [anatomy of a URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL).

## Write a function

In `core-server/Server.py`, write a function called `mySquare()` that returns the square of `x` (if `x` is numeric). 

    def mySquare(x):

        try:
            return x*x
        except:
            return "Invalid argument, expected a numeric type."


 ✏️ You can also choose to [import functions](https://docs.python.org/3/tutorial/modules.html) into the core server, rather than writing them directly into `Server.py`.


## Creating the endpoint
Now that we have a function, we need to make it accessible via HTTP.

To do so, we use a [route decorator](https://flask.palletsprojects.com/en/2.2.x/api/#flask.Flask.route) to map a new endpoint called `/mySquare` to the function `mySquare()`. The `methods` argument tells Flask that only [`GET` requests](https://www.w3schools.com/tags/ref_httpmethods.asp) are allowed for this URL path.

    @app.route("/mySquare", methods = ['GET'])
    def mySquare():

        try:
            return x*x
        except:
            return "Invalid argument, expected a numeric type."

Now, if `Server.py` is running on http://localhost:5000, then you should be able to test access this function by visiting http://localhost:5000/mySquare. 

Note also that `x` has been removed from the signature of `mySquare()`. In the next step, we'll add logic to `mySquare` to get the value of `x` from an incoming HTTP request.

## Handling HTTP requests
### Request arguments
<!--(i.e., [parameters](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#parameters))-->

Modify the original `mySquare()` function to grab arguments from the HTTP request, rather than from the signature of the function. 

    @app.route("/mySquare", methods = ['GET'])
    def mySquare():

        args = dict(request.args().items)

        try:
            x = int(args['x'])
            return x*x

        except:
            return "Invalid argument, expected a numeric type."

Here, we use Flask's [Request object](https://flask.palletsprojects.com/en/1.1.x/quickstart/#accessing-request-data) to access the arguments of an HTTP request and save them in a dictionary. Then, we try to cast the value of `x` to an integer and return its square. 

### Responding with JSON objects
The final step is to modify the `return` statements in `mySquare()` to respond with JSON objects. We use Flask's [jsonify method](https://flask.palletsprojects.com/en/2.2.x/api/#flask.json.jsonify) (imported at the top of `Server.py`) to return JSON objects. In this case, the return objects will contain either the square of `x` or the error message. 

    @app.route("/mySquare", methods = ['GET'])
    def mySquare():

        args = dict(request.args.items())

        try:
            x = int(args['x'])
            return jsonify({"response":x*x})

        except:
            return jsonify({"response":"Invalid argument, expected a numeric type."})

## Test the endpoint in the browser

With the core server running (e.g., `python3 Server.py`), you can test that the `/mySquare` endpoint is working using a test value `x=2` by visiting http://localhost:5000/mySquare?x=2 in the browser (see Figure 2).

<p align="center">
  <img src="fig/final-test.png" style="width: 70%" alt="A view of the mySquare endpoint  accessed with argument `x=2` in a browser window. A JSON object called "response" displays with the value 4."/>
</p>
<p align="center">Figure 1. Testing the <tt>/mySquare</tt> endpoint with argument <tt>x=2</tt>.  </p>

Congratulations, you can now add functionality to the core server! In practice, you can add whatever functions you want using any number of libraries, languages, APIs, and databases. Just make sure that the end result can be packaged as a JSON object and you're all set.


## What's next?
* Try adding new functionality, for instance:
  * Query a SQL database
  * Serve a file
  * Return the result of a different computation


* If you want to start digging around the code, check out these starting points for the website and server:

  * Website:
    * [`core-website/src/App.js`](core-website/src/App.js)
  * Server:
    * [`core-server/Server.py`](core-server/Server.py)


* Check out the [glossary](docs/glossary.md).


* Check out some external resources:
  * [Learn how to build a user interface with React](https://reactjs.org/tutorial/tutorial.html).
  * [Learn how to develop a Flask server](https://flask.palletsprojects.com/en/2.2.x/quickstart/#a-minimal-application).


* Stay tuned for more documentation, tutorials, and new features.



---
<p align="center">
  <img style="width:100%" src="../resources/fig/sweetpea-banner.png" alt="An impressionist-style painting of a field of SweetPeas. Original image created with OpenAI's DALL·E 2."/>

</p>



