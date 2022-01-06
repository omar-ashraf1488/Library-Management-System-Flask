from db.models import User, ma
from uuid import uuid4
from datetime import datetime

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        # Fields to expose
        fields = ("id", "email", "firstName", "lastName", "created_at", "updated_at")
    id = ma.auto_field()
    firstName = ma.auto_field()
    lastName = ma.auto_field()
    email = ma.auto_field()
    password = ma.auto_field()
    created_at = ma.auto_field()
    updated_at = ma.auto_field()