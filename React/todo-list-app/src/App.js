import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [dataList, setDataList] = useState([]);
  let [completedIndices, setCompletedIndices] = useState([]); 

  useEffect(() => {
    console.log("Updated Data List:", dataList);
  }, [dataList]);

  function handleSubmit(event) {
    event.preventDefault();
    let list = event.target.list.value;
    if (!dataList.includes(list)) {
      setDataList([...dataList, list]);
    } else {
      alert("This Todo already exists.");
    }
  }

  let removeTodo = (removeItem) => {
    setDataList(dataList.filter(item => item !== removeItem));
  }

  let handleClick = (index) => {
    setCompletedIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter(item => item !== index); 
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className='main-container'>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input name='list' placeholder='Enter any Todo here .....' />
        <button type='submit'>SAVE TODO</button>
      </form>
      <ul>
        {dataList.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)} 
            className={completedIndices.includes(index) ? 'cmpltTodo' : ''}
          >
            {index + 1}. {item}
            <span onClick={() => { removeTodo(item) }}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

