// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function () {
        // retrieves boards and makes showBoards called
        // const data = dataHandler._data;
        const boards = dataHandler._data.boards;
        this.showBoards(boards)
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also

        // lvl 1 - area containing all boards
        let boardsDiv = document.getElementById("boards");
        boards.forEach(function(boardObject) {
            // lvl 2 - area of board
            let boardDiv = document.createElement("div");
            boardDiv.className = "board";
            boardDiv.id = "board_" + boardObject.id;
            // lvl 3 - board header
            let header = document.createElement("span");
            header.textContent = boardObject.title;
            let showHideArrow = document.createElement('span');
            showHideArrow.id = "arrow";
            showHideArrow.innerHTML = '<i class="far fa-caret-square-down"></i>';
            showHideArrow.addEventListener("click", function (){
                let content = document.getElementById("board_content_" + boardObject.id);
                // Show an element
                const show = function (elem) {
                    elem.style.display = 'block';
                };
                // Hide an element
                const hide = function (elem) {
                    elem.style.display = 'none';
                };
                // Toggle element visibility
                // If the element is visible, hide it
                if (content.style.display === 'block') {
                    hide(content);
                    return;
                }
                // Otherwise, show it
                show(content);
            });

            // lvl 3 - board content
            let columns = document.createElement("div");
            columns.className = "column";
            columns.id = "board_content";
            columns.style.backgroundColor = "yellow"; // test

            const columnsNames = ["New", "In progress", "Testing", "Done"];
            columnsNames.forEach(function(name) {
                // lvl 4 - particular column in columns
                let column = document.createElement('div');
                column.style.display = "inline-block"; //test
                // lvl 5 - column name
                let columnNameDiv = document.createElement('div');
                columnNameDiv.textContent = name;
                // lvl 5 - column content
                let columnContentDiv = document.createElement('div');
                columnContentDiv.style.background = "green"; //test
                columnContentDiv.textContent = "column_content"; //test

                column.appendChild(columnNameDiv).appendChild(columnContentDiv);
                columns.appendChild(column);

            });

            let boardContent = document.createElement("div");
            boardContent.id = "board_content_"  + boardObject.id;
            boardContent.style.display = "none";
            //boardContent.onclick = "showHide";
            boardContent.innerHTML = "board content"; // test
            boardContent.style.backgroundColor = "red"; // test

            header.appendChild(showHideArrow);
            boardContent.appendChild(columns);
            boardDiv.appendChild(header).appendChild(boardContent);
            boardsDiv.appendChild(boardDiv);
        });
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





