import React from'react';

class WordElement extends React.Component {

  getWord(){
    return this.props.word;
  }

  render() {
    return(
      <p>{this.getWord()}</p>
    )
  }
}

module.exports = WordElement;
