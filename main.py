from flask import Flask, render_template, request, json, session, redirect

from login_handler import hash_handler, user_validation
from database_handler import database_handler

app = Flask(__name__)
app.secret_key = "langustalubidzem"


@app.route("/")
def boards():
    ''' this is a one-pager which shows all the boards and cards '''
    return render_template('boards.html')


@app.route("/register", methods=['POST', 'GET'])
def register_new_user():
    username = request.get_json()['username']
    password = request.get_json()['password']
    if user_validation.check_user_in_database(username):
        message = 'User already in database'
        json_message = json.dumps(message)
        return json_message
    else:
        hashed_password = hash_handler.hash_password(password)
        user = {
            'username': username,
            'password': hashed_password}
        database_handler.register_new_user(user)
        session['username'] = user['username']
        message = "Registration successful"
        json_message = json.dumps(message)
        return json_message


@app.route('/login', methods=['POST','GET'])
def login_user():
    log_user = {
        'username': request.get_json()['username'],
        'password': request.get_json()['password']
    }

    if user_validation.check_user_in_database(log_user['username']):
        let_pass = user_validation.verify_user(log_user)
        if let_pass:
            session['username'] = log_user['username']
            message = "Log in successful"
            json_message = json.dumps(message)
            return json_message
        else:
            message = "Wrong password. Try again."
            json_message = json.dumps(message)
            return json_message
    else:
        message = "User doesn't exist. Please register"
        json_message = json.dumps(message)
        return json_message


@app.route('/logout')
def logout():
    del session['username']
    return redirect('/')

if __name__ == '__main__':
    app.run(
        debug=True,
        port=5000
    )



