const
    EventEmitter = require('events'),
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    ActionTypes = require('../constants/ActionTypes'),
    EventTypes = require('../constants/EventTypes');
    

    let
       _words = [];

const SpeechRecognitionStore = Object.assign({}, EventEmitter.prototype, {

 init : function(){
 	_words = [];
 	this.emitChange();
 },

 getWords : function(){
 	return _words;
 },

 setWords : function(words){
   _words.push(words);
   this.emitChange();
 },

 emitChange : function(){
    this.emit(EventTypes.WORD_LIST_CHANGE);
  },

 addChangeListener: function(callback){
    this.on(EventTypes.WORD_LIST_CHANGE, callback);
  },

});



SpeechRecognitionStore.dispatchToken = AppDispatcher.register(function( action ){
  switch( action.type ){
    case ActionTypes.RECOGNITIONED:
    SpeechRecognitionStore.setWords(action.text);
    break;

    default:
    break;
   };
});

SpeechRecognitionStore.init();
module.exports = SpeechRecognitionStore;
