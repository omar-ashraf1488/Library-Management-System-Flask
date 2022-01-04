from flask import Flask, make_response, request, json, jsonify
import sys

from db.db import *
app = Flask(__name__) 

# Index route, not to meet 404 
# @ at route decorator 
@app.route('/api', methods = ['GET', 'POST'])
# Define function for that route
def index():
    pass


@app.route('/user/add', methods = ['GET', 'POST'])
# Define function for that route
def userAdd():
    request_data = json.loads(request.data)

    firstName = list(request_data.values())[0]
    LaseName = list(request_data.values())[1]
    email = list(request_data.values())[2]
    password = list(request_data.values())[3]
    
    # Add the user into the database table users
    with engine.begin() as conn:
        conn.execute(userTable.insert(), {'First Name':firstName, 'Last Name':LaseName,'E-mail':email,'Password':password})
    return make_response(jsonify({"data": request_data}), 200)


if __name__ == "__main__":
    # If there is any error it will pop up in the web page
    app.run(debug=True)


