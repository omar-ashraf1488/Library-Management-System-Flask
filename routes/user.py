from __main__ import app
from flask import make_response, request, json, jsonify
from flask_bcrypt import Bcrypt
import jwt
import datetime

from db.models import db, User
from db.schema.userSchema import UserSchema
from config import ApplicationConfig
from decorators.auth import token_required

bcrypt = Bcrypt(app)


@app.route('/api', methods=['GET', 'POST'])
# Define function for that route
def index():
    pass


@app.route('/api/v1/user/register', methods=['POST'])
# Define function for that route
def register_user():
    request_data = json.loads(request.data)
    user_exist = User.query.filter_by(
        email=request_data['email']).first() is not None
    if user_exist:
        return make_response(jsonify({"msg": "Email already in use."}), 409)
    hashed_password = bcrypt.generate_password_hash(request_data['password'])
    try:
        new_user = User(firstName=request_data['firstName'], lastName=request_data['lastName'],
                        email=request_data['email'], password=hashed_password)
        schema = UserSchema()
        db.session.add(new_user)
        db.session.commit()
        result = schema.dump(new_user)
        return make_response(jsonify({"data": result}), 200)
    except Exception as e:
        return make_response(jsonify({"msg": e}), 500)


@app.route('/api/v1/user/login', methods=['POST'])
# Define function for that route
def login_user():
    request_data = json.loads(request.data)
    email = request_data['email']
    password = request_data['password']

    user = User.query.filter_by(email=email).first()
    if user is None:
        return make_response(jsonify({"msg": "Unauthorized"}), 401)
    if not bcrypt.check_password_hash(user.password, password):
        return make_response(jsonify({"msg": "Unauthorized user"}), 401)
    
    token = jwt.encode({'id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, ApplicationConfig.SECRET_KEY, algorithms="HS256")

    return make_response(jsonify({"msg": "Logged in successfully.", "token": token}), 200)

@app.route('/api/v1/user/profile', methods=['GET'])
@token_required
def profile(current_user):
    try:
        schema = UserSchema()
        result = schema.dump(current_user)
        return make_response(jsonify({"data": result}), 200)
    except Exception as e:
        return make_response(jsonify({"msg": e}), 500)