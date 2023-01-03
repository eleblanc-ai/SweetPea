import sys
import argparse

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
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

# Link relation types for hypermedia controls
# http://www.iana.org/assignments/link-relations/link-relations.xhtml

# returns a test message to the client
@app.route("/testMessage", methods = ['GET'])
def testMessage():
  return {'testMessage': "Hello, SweetPea!"}

def parseArgs(argv=None):

    parser = argparse.ArgumentParser()
    parser.add_argument("-n", "--hostname", type=str, help="set a hostname", default="localhost")
    parser.add_argument("-p","--port", type=int, help="set a port for listening", default=5000)
    parser.add_argument("-t","--threaded", action='store_true', help="enable threaded mode", default=True)
    parser.add_argument("-d","--debug", action='store_true', help="enable debug mode", default=True)

    return parser.parse_args()

if __name__ == "__main__":
    args = parseArgs(sys.argv)
    app.run(threaded=args.threaded, host=args.hostname, port=args.port, debug=args.debug)

#########################################################################################
# When the Python interpreter runs a module (.py), it sets the module's __name__ variable to "__main__". However, if the module is loaded via import by another main program, that module's __name__ variable will be set to the module's name.

# An import will result in the module being run, which is not usually what we want. To avoid this, we put up a safeguard by testing to see if the interpreter is running this module as the main program. If it is, we start the app.

# General reference
#   * https://www.freecodecamp.org/news/if-name-main-python-example/

# Flask-specific reference
#   * https://flask-ptbr.readthedocs.io/en/latest/quickstart.html
#########################################################################################
