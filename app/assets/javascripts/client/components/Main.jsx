import React from'react';
import{ Router, Route, DefaultRoute }from'react-router';
import SpeechRecognition from'../recognition/SpeechRecognition';
import SpeechRecognitionStore from'../stores/SpeechRecognitionStore';
import WordElement from'../components/WordElement';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.getStateFromStores = this.getStateFromStores.bind(this);
    this.state = this.getStateFromStores();
    SpeechRecognition.startSpeechRecognition();
    this._onChange = this._onChange.bind(this);
  } 

  render(){
    const words = [];
      for (let i in this.state.words){
        words.push(
          <WordElement
            key = {i}
            word = {this.state.words[i]} />
        )
      }

    return (
      <div className="words">
        {words}
      </div>
   )
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
