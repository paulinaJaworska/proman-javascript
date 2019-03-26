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
        boards = this._data['boards'];
        callback(boards);
    },
    getBoard: function (boardId, callback) {
        // the board is retrieved and then the callback function is called with the board
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    },
    getStatuses: function (callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    },
    getStatus: function (statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    },
    getCardsByBoardId: function (boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    },
    getCard: function (cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    },
    createNewBoard: function (boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    },
    createNewCard: function (cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
        if (typeof callback !== 'function') throw new Error('Invalid callback handler');
    }
    // here comes more features
};

