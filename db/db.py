
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.engine import create_engine
import urllib
from flask import Flask


try:
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://DESKTOP-3FBP2HI/library?driver=SQL Server'
    
except Exception as e:
    if e:
        print ("Cannot connect!")



#db.create_all()
# # Add Database
# db_host = "DESKTOP-3FBP2HI"
# db_name = "library"

# engine = create_engine('mssql+pyodbc://DESKTOP-3FBP2HI/library?driver=SQL Server')
# connection = engine.connect()

# # Creat a Model to add user
# db = MetaData()
# userTable = Table('users', db,
#         Column('id', Integer, primary_key=True, default=get_uuid),
#         Column('first_name', String(80), nullable=False),
#         Column('last_name', String(80), nullable=False),
#         Column('email', String(80), unique=True, nullable=False),
#         Column('password', String(80), nullable=False),
#         Column('created_at',DateTime, default=datetime.utcnow),
#         Column('updated_at',DateTime, default=datetime.utcnow),
#         )

# db.create_all(engine)

