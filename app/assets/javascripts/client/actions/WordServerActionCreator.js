const
        ActionTypes = require('../constants/ActionTypes'),
        AppDispatcher = require('../dispatcher/AppDispatcher');

const WordServerActionCreator = {

    receiveWords : function( words ) {
        AppDispatcher.dispatch({
            type:ActionTypes.RECOGNITIONED,
            words : words,
        });
    },
};

module.exports = WordServerActionCreator;


