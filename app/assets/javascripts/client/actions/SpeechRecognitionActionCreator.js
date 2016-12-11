const
    ActionTypes = require('../constants/ActionTypes'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

const SpeechRecognitionActionCreator = {

  speechRecognition : function ( text ){
    AppDispatcher.dispatch({
        type : ActionTypes.RECOGNITIONED,
        text : text,
      });
  },
};

module.exports = SpeechRecognitionActionCreator;
