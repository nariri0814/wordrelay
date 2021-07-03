import React, { Component } from 'react';

class WordRelay extends Component {
  
  state = {
    word: '신기리',
    value: '',
    result: ''
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value:''
      })
      // this.input.focus();

    } else {
      this.setState({
        result: '땡',
        value: ''
      })
      // this.input.focus();
    }
  }
  onChangeInput = (e) => {
    this.setState({value: e.target.value})
  }

  input;

  //onChange와 value는 한 세트 아니면 defaultValue 써야함

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input value={this.state.value} onChange={this.onChangeInput}/>
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      
      </>
    )
  }
}

// function App() {

//   const word = [];

//   return (
    
//   );
// }

/*
  단어를 받음
  끝 글자 저장
*/

export default WordRelay;
