from flask import Flask, render_template

app = Flask(__name__) #?

# Index route, not to meet 404 
# @ at route decorator 
@app.route('/api')
# Define function for that route
def index():
    return {
        'name': "Hello world!"
    } 

if __name__ == "__main__":
    # If there is any error it will pop up in the web page
    app.run(debug=True)


