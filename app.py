from flask import Flask
from config import ApplicationConfig
from db.models import db, ma

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

db.init_app(app)
ma.init_app(app)

with app.app_context():
    db.create_all()

from routes import user

if __name__ == "__main__":
    # If there is any error it will pop up in the web page
    app.run(debug=True)