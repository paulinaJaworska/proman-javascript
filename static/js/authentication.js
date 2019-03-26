let authentication = {

    loginhandler: function(){
    handleLogin()},
    registrationHandler: function() {
        handleRegistration()
    }
};

/*                            LOGIN FUNCTIONS                                  */

let message;
let registerUsername;
let loginUsername;

function handleLogin() {
    let form = document.getElementById('login-form');
    let username = form.querySelector('input[name="username"]');
    let password = form.querySelector('input[name="password"]');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        validateLogin(username, password);
        loginUser(username, password);
        dom.hideLoginModal();
        setTimeout(function () {
            alert(message);
            dom.viewAfterUserForm(message)
        }, 500)
    })
}

function validateLogin(username, password) {
    let loginErrors = [];
    if (username.value.length === 0) {
        loginErrors.push("Username can't be empty");
        username.classList.add('invalid')
    } else {
        username.classList.remove('invalid')
    }
    if (password.value.length === 0) {
        loginErrors.push("Password can't be empty");
        password.classList.add('invalid')
    } else {
        password.classList.remove('invalid')
    }
    displayLoginErrors(loginErrors);
}


function displayLoginErrors(errors) {
    let errorLine = document.getElementById('login-error');
    errorLine.innerHTML = errors.join("<br>");
    errorLine.classList.add('text-invalid')
}

function loginUser(username, password) {
    let loginRequest = new XMLHttpRequest();
    loginRequest.onreadystatechange = function () {
        if (loginRequest.readyState == 4) {
            if (loginRequest.status == 200) {
                message = JSON.parse(loginRequest.response);
            } else {
                alert('Connection error. Try again later.');
            }
        }

    };
    loginUsername = username.value;
    let loginPassword = password.value;
    let loginData = {'username': loginUsername, 'password': loginPassword};
    loginData = JSON.stringify(loginData);
    loginRequest.open("POST", '/login');
    loginRequest.setRequestHeader('Content-Type', 'application/json');
    loginRequest.send(loginData);
}


/*                          REGISTRATION FUNCTIONS                          */


function handleRegistration() {
    let form = document.getElementById('register-form');
    let username = form.querySelector('input[name="username"]');
    let password = form.querySelector('input[name="password"]');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        validateRegistration(username, password);
        registerUser(username, password);
        dom.hideRegisterModal();
        setTimeout(function () {
            alert(message);
            dom.viewAfterUserForm(message)

        }, 500)
    });
}

function validateRegistration(username, password) {
    let registrationErrors = [];
    if (username.value.length === 0) {
        registrationErrors.push("Username can't be empty");
        username.classList.add('invalid')
    } else {
        username.classList.remove('invalid')
    }
    if (password.value.length === 0) {
        registrationErrors.push("Password can't be empty");
        password.classList.add('invalid')
    } else {
        password.classList.remove('invalid')
    }
    displayRegistrationErrors(registrationErrors);
}


function displayRegistrationErrors(errors) {
    let errorLine = document.getElementById('register-error');
    errorLine.innerHTML = errors.join("<br>");
    errorLine.classList.add('text-invalid')

}


function registerUser(username, password) {
    debugger;
    let registerRequest = new XMLHttpRequest();
    registerRequest.onreadystatechange = function () {
        if (registerRequest.readyState == 4) {
            if (registerRequest.status == 200) {
                debugger;
                message = JSON.parse(registerRequest.response);
            } else {
                alert('Connection error. Try again later.');
            }
        }

    };
    registerUsername = username.value;
    let registerPassword = password.value;
    let registerData = {'username': registerUsername, 'password': registerPassword};
    registerData = JSON.stringify(registerData);
    registerRequest.open("POST", "/register");
    registerRequest.setRequestHeader('Content-Type', 'application/json');
    registerRequest.send(registerData);

}
