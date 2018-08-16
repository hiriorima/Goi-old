import React from 'react';

const SpeechRecognitionActionCreator = require('../actions/SpeechRecognitionActionCreator');
const ActionTypes = require('../constants/ActionTypes')

const SpeechRecognition = function() {

    let flag_speech = 0;

    function startSpeechRecognition() {

        window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'ja';
        recognition.interimResults = true;
        recognition.continuous = true;

        recognition.onsoundstart = function() {
            console.log('認識中');
        };
        recognition.onnomatch = function() {
            console.log('もう一度試してください');
        };
        recognition.onerror = function() {
            console.log('エラー');
            if(flag_speech == 0)
                startSpeechRecognition();
        };
        recognition.onsoundend = function() {
            console.log('停止中');
            startSpeechRecognition();
        };

        recognition.onresult = function(event) {
            const results = event.results;
            for(let i = event.resultIndex; i < results.length; i++) {
                if(results[i].isFinal) {
                    SpeechRecognitionActionCreator.speechRecognition(String(results[i][0].transcript));
                    console.log(results[i][0].transcript);
                    startSpeechRecognition();
                } else {
                    SpeechRecognitionActionCreator.speechRecognition(String(results[i][0].transcript));
                    console.log('[途中経過] ' + results[i][0].transcript);
                    flag_speech = 1;
                }
            }
        }
        flag_speech = 0;
        console.log('start');
        recognition.start();
    }
    return {
        startSpeechRecognition :startSpeechRecognition,
    };
}();

module.exports = SpeechRecognition;

