// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function () {
        // retrieves boards and makes showBoards called
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    },
    appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (childNode of fakeDiv.childNodes) {
            if (prepend) {
                elementToExtend.prependChild(childNode);
            } else {
                elementToExtend.appendChild(childNode);
            }
        }

        return elementToExtend.lastChild;
    },
    // here comes more features
    showLoginModal : function showLoginModal() {
        document.getElementById('login-modal').style.display = "flex";
    },
    hideLoginModal: function hideLoginModal() {
        document.getElementById('login-modal').style.display = "none";
    },

    showRegisterModal: function showRegisterModal() {
        document.getElementById('register-modal').style.display = "flex";
    },

    hideRegisterModal: function hideRegisterModal() {
        document.getElementById('register-modal').style.display = "none";
    },

    viewAfterUserForm: function viewAfterUserForm(message) {
        switch (message) {
            case 'Registration successful':
                document.getElementById('Login').style.display = "none";
                document.getElementById('Register').style.display = "none";
                let hello = document.getElementById('hello');
                hello.innerText = 'hello ' + registerUsername;
                hello.style.display = "flex";
                document.getElementById('Logout').innerText = 'Logout';
                document.getElementById('Logout').style.display = "flex";
                showVoting();
                break;

            case 'Log in successful':
                document.getElementById('Login').style.display = "none";
                document.getElementById('Register').style.display = "none";
                let hellolog = document.getElementById('hello');
                hellolog.innerText = 'hello ' + loginUsername;
                hellolog.style.display = "flex";
                document.getElementById('Logout').innerText = 'Logout';
                document.getElementById('Logout').style.display = "flex";
                showVoting();
                break;

            case 'User already in database':
                break;

            case 'Wrong password. Try again.':
                break;

            case 'User doesn\'t exist. Please register':
                setTimeout(function() {showRegisterModal()}, 500);
                break;
        }
    }

};





