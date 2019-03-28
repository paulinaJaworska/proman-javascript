// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
let dataHandler = {
    keyInLocalStorage: 'proman-data', // the string that you use as a key in localStorage to save your application data
    _data: {}, // it contains the boards and their cards and statuses. It is not called from outside.
    _loadData: function () {
        this._data = JSON.parse(localStorage.getItem('proman-data'));
    },
    _saveData: function () {
        // it is not called from outside
        // saves the data from this._data to local storage
        localStorage.setItem('proman-data', JSON.stringify(this._data));
    },
    init: function () {
        this._loadData();
    },
    getBoards: function (callback) {
        // the boards are retrieved and then the callback function is called with the boards
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
        callback(this._data['boards']);
    },
    getBoard: function (boardId, callback) {
        // the board is retrieved and then the callback function is called with the board
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');

        const boards = this._data['boards'];
        let board;
        for (let board_object of boards) {
            if (board_object['id'] === boardId) {
                board = board_object;
            } else {
                throw new Error('No board with given id found');
            }
        }
        callback(board);
    },
    getStatuses: function (callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
        callback(this._data['statuses']);
    },
    getStatus: function (statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');

        const statuses = this._data['statuses'];
        let status;
        for (let status_object of statuses) {
            if (status_object['id'] === statusId) {
                status = status_object;
            } else {
                throw new Error('No status with given id found');
            }
        }
        callback(status);
    },
    getCardsByBoardId: function (boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');

        const all_cards = this._data['cards'];
        let cards = [];
        for (let card_object of all_cards) {
            if (card_object['board_id'] === boardId) {
                cards.push(card_object);
            } else {
                throw new Error('No cards with given board id found');
            }
        }
        callback(cards);
    },
    getCard: function (cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');

        const cards = this._data['cards'];
        let card;
        for (let card_object of cards) {
            if (card_object['id'] === cardId) {
                card = card_object;
            } else {
                throw new Error('No status with given id found');
            }
        }
        callback(card);
    },
    createNewBoard: function (boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
        // generate next id
        boardsArray = this._data['boards'];

        let max = 0;
        for(var i=0;i<boardsArray.length;i++){
            if(boardsArray[i].id > max){
                max = boardsArray[i].id;
            }
        }
        let nextId = max + 1;

        newBoardObject = {"id": nextId,
                           "title": boardTitle,
                           "is_active": true};

        this._data['boards'].push(newBoardObject);

        callback(this._data);  // not sure about this line
    },
    createNewCard: function (cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    }
    // here comes more features
};

