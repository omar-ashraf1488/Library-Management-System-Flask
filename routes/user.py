from __main__ import app
from flask import make_response, request, json, jsonify
from flask_bcrypt import Bcrypt

from db.models import db, User

bcrypt = Bcrypt(app)

@app.route('/api', methods = ['GET', 'POST'])
# Define function for that route
def index():
    pass


@app.route('/api/v1/user/register', methods = ['POST'])
# Define function for that route
def register_user():
    request_data = json.loads(request.data)
    

    user_exist = User.query.filter_by(email=request_data['email']).first() is not None

    if user_exist:
        return make_response(jsonify({"msg": "Email already in use."}), 409)

    hashed_password = bcrypt.generate_password_hash(request_data['password'])
    
    

    try:
        new_user = User(firstName=request_data['firstName'], lastName=request_data['lastName'], email=request_data['email'], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return make_response(jsonify({"data": request_data}), 200)
    except Exception as e:
        return make_response(jsonify({"msg": e}), 500)
   