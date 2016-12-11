import React from'react';

import{ Router, Route, DefaultRoute }from'react-router';

import main from '../templates/Main.jade';
import SpeechRecognition from'../recognition/SpeechRecognition';

import SpeechRecognitionStore from'../stores/SpeechRecognitionStore';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.getStateFromStores = this.getStateFromStores.bind(this);
    this.state = this.getStateFromStores();
    this.props = {};
    SpeechRecognition.startSpeechRecognition();
    this._onChange = this._onChange.bind(this);
  } 

  render(){
    return main(Object.assign(
         this,
         this.state,
         this.props,
         { }));
  }

  getStateFromStores(){
    return {
      words : SpeechRecognitionStore.getWords(),
    };
  }

  _onChange(){
    this.setState(this.getStateFromStores());
    console.log(this.state);
  }

  componentDidMount(){
    SpeechRecognitionStore.addChangeListener(this._onChange);
  }

  componentWillUpdate(){
  }

  componentDidUpdate(){
  }

  componentWillUnmount(){
  }
}

export default Main;
