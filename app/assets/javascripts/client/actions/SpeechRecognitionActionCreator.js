const
    ActionTypes = require('../constants/ActionTypes'),
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    WebAPIUtils = require('../utils/WebAPIUtils');

const SpeechRecognitionActionCreator = {

  speechRecognition : function ( text ){
      WebAPIUtils.getExtractedWords(text);
  },
};

module.exports = SpeechRecognitionActionCreator;
