import sys
import argparse

from flask import Flask, request, jsonify
from flask_cors import CORS

from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route("/mySquare", methods = ['GET'])
def mySquare():

    args = dict(request.args.items())

    try:
        x = int(args['x'])
        return jsonify({"response":x*x})

    except:
        return jsonify({"response":"Invalid argument, expected a numeric type."})

# Return a time string to the client
@app.route("/time", methods = ['GET'])
def time():
    return jsonify({'time': "The time is: "
                            + str(datetime.now().strftime("%H:%M:%S"))})

# Return parsed command line arguments and/or those set to default values.
def parseArgs(argv=None):

    parser = argparse.ArgumentParser()
    parser.add_argument("-n", "--hostname", type=str, help="set a hostname", default="localhost")
    parser.add_argument("-p","--port", type=int, help="set a port for listening", default=5000)
    parser.add_argument("-t","--threaded", action='store_true', help="enable threaded mode", default=True)
    parser.add_argument("-d","--debug", action='store_true', help="enable debug mode", default=True)

    return parser.parse_args()

# Start the app when the module is run as "__main__".
if __name__ == "__main__":

    # Parse any arguments with parseArgs()
    args = parseArgs(sys.argv)

    # Run the Flask app using user and/or default arguments
    app.run(threaded=args.threaded, host=args.hostname, port=args.port, debug=args.debug)



# RESOURCES
###################################################

# Documenting an API
# https://www.freecodecamp.org/news/how-to-write-api-documentation-like-a-pro/

# GitHub Docs - nice rest example
# https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28

# Twitter Docs - another example
# https://developer.twitter.com/en/docs/api-reference-index

# Python documentation tools
# https://www.sphinx-doc.org/en/master/

# Information about CORS
# https://rapidapi.com/guides/cors?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel

# Information about handling CORS in Flask
# https://rapidapi.com/guides/handle-cors-flask

# Is it restful?
# https://martinfowler.com/articles/richardsonMaturityModel.html

# HTTP response codes
#https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

# Keep it RESTful with HTTP verbs:
# https://pythonbasics.org/flask-http-methods/

# Link relation types for hypermedia controls
# http://www.iana.org/assignments/link-relations/link-relations.xhtml


