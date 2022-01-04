from datetime import datetime

from sqlalchemy.engine import create_engine
from sqlalchemy import Table, MetaData, Column, Integer, String, DateTime

from datetime import datetime

# Add Database
db_host = "DESKTOP-3FBP2HI"
db_name = "library"

engine = create_engine('mssql+pyodbc://DESKTOP-3FBP2HI/library?driver=SQL Server')
connection = engine.connect()

# Creat a Model to add user
db = MetaData()
userTable = Table('users', db,
        Column('id', Integer, primary_key=True),
        Column('First Name', String(80), unique=False, nullable=False),
        Column('Last Name', String(80), unique=False, nullable=False),
        Column('E-mail', String(80), unique=True, nullable=False),
        Column('Password', String(80), unique=False, nullable=False),
        Column('Date added',DateTime, default=datetime.utcnow),
        )

db.create_all(engine)

