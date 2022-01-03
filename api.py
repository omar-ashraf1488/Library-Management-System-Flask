from flask import Flask, render_template, request, json

app = Flask(__name__) #?

# Index route, not to meet 404 
# @ at route decorator 
@app.route('/api', methods = ['GET', 'POST'])
# Define function for that route
def index():
    request_data = json.loads(request.data)

    return request_data


if __name__ == "__main__":
    # If there is any error it will pop up in the web page
    app.run(debug=True)


