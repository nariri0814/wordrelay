import React, { useState, useRef } from 'react';

function App() {
  const [word, setWord] = useState('신기리');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('')
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('')
      inputRef.current.focus();
    }
  }
  
  const onChangeInput = (e) => {
    setValue(e.target.value)
  };

  //onChange와 value는 한 세트 아니면 defaultValue 써야함

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput}/>
        <button>입력</button>
      </form>
      <div>{result}</div>
    
    </>
  )
  
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
export default App;
