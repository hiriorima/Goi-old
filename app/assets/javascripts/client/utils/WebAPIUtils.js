'use strict'
const WordServerActionCreator = require('../actions/WordServerActionCreator');
const $ = require('jquery');

const WebAPIUtils = {

getExtractedWords : function (text){
    $.ajax({
      dataType : "json",
      data : {
        sentence : text,
      },
      type : "GET",
      success : function(res){
        WordServerActionCreator.receiveWords(res);
        console.log(res);
      },
      error : function(err){
        console.log("Error from getExtractedWords");
        console.log(err);
      },
      url : "/api/v1/words.json"

});
}
};

global.api = WebAPIUtils;
module.exports = WebAPIUtils;
