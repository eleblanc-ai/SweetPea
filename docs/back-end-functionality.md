# Adding functionality to the Core Server

The SweetPea Core Server provides HTTP access to your behind-the-scenes functionality (e.g., database access, computations, user management). It serves your Application Programming Interface (API) and runs your supporting code according to HTTP requests from the SweetPea Core Website.

This tutorial walks through adding a new piece of functionality to the core server, covering three high-level steps:
1. [Writing a function](#Writing-a-function) 
2. [Mapping a URL path to the function](#Mapping-a-URL-path-to-the-function)
3. [Handling HTTP requests](#Handling-HTTP-requests)

This doc assumes some advance knowledge of [Python](https://www.python.org/), [HTTP APIs](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#what-is-an-api) (and [related terminology](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#api-terminology)), and the [anatomy of a URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL).

## Writing a function

In `core-server/Server.py`, write a function called `mySquare()` that returns the square of `x` (if `x` is numeric). 

    def mySquare(x):

        try:
            return x*x
        except:
            return "Invalid argument, expected a numeric type."


 ✏️ You can choose to [import functions](https://docs.python.org/3/tutorial/modules.html) into the Core Server, rather than writing them directly into `Server.py`.


## Mapping a URL path to the function
Now that we have a function, we need to make it accessible via HTTP.

To do so, we use a [route decorator](https://flask.palletsprojects.com/en/2.2.x/api/#flask.Flask.route) to map the [URL path](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#path_to_resource) `/mySquare` to the function `mySquare()`. The `methods` argument tells Flask that only [`GET` requests](https://www.w3schools.com/tags/ref_httpmethods.asp) are allowed for this URL.

    @app.route("/mySquare", methods = ['GET'])
    def mySquare():

        try:
            return x*x
        except:
            return "Invalid argument, expected a numeric type."

Now, if `Server.py` is running on http://localhost:5000, then you should be able to test access this function by visiting http://localhost:5000/mySquare. 

Note also that `x` has been removed from the signature of `mySquare()`. In the next step, we'll add logic to `mySquare` to get the value of `x` from an incoming HTTP request.

## Handling HTTP requests
### Parsing query parameters as arguments
Next, update `mySquare()` to parse and use [parameters from an incoming query string](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#parameters), rather than from the signature of the function. 

    @app.route("/mySquare", methods = ['GET'])
    def mySquare():

        args = dict(request.args().items)

        try:
            x = int(args['x'])
            return x*x

        except:
            return "Invalid argument, expected a numeric type."

Here, we use Flask's [Request object](https://flask.palletsprojects.com/en/1.1.x/quickstart/#accessing-request-data) to access the arguments of an HTTP request and save them in a dictionary. Them, we try to cast the value of `x` to an integer and return its square. 

### Responding with JSON objects
The final step is to modify the `return` statements in `mySquare()` to respond with JSON objects. We use Flask's [jsonify method](https://flask.palletsprojects.com/en/2.2.x/api/#flask.json.jsonify), imported at the top of `Server.py`, to return JSON objects. In this case, the return objects will contain either the square of `x` or the error message. 

    @app.route("/mySquare", methods = ['GET'])
    def mySquare():

        args = dict(request.args.items())

        try:
            x = int(args['x'])
            return jsonify({"response":x*x})

        except:
            return jsonify({"response":"Invalid argument, expected a numeric type."})

## Test the URL in the browser

You can test that the `/mySquare` path is working using a test value `x=2` by visiting http://localhost:5000/mySquare?x=2 in the browser (see Figure 2).

<p align="center">
  <img src="fig/final-test.png" style="width: 70%" alt="A view of the mySquare endpoint  accessed with argument `x=2` in a browser window. A JSON object called "response" displays with the value 4."/>
</p>
<p align="center">Figure 1. Testing the <tt>/mySquare</tt> endpoint with argument <tt>x=2</tt>.  </p>

Congratulations, you can now add functionality to the core server! In practice, you can add whatever functions you want using any number of libraries, languages, APIs, and databases. Just make sure that the end result can be packaged as a JSON object and you're good to go.


---
## What's next?
* Write a new function, such as one that:
  * queries a database
  * serves a file
  * returns the result of another computation
  

* Stay tuned for a tutorial on accessing your core server functionality from the core website.






