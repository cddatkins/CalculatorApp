import React, {useState} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import ClearButton from "./Components/ClearButton/ClearButton"
import {evaluate, compile} from "mathjs";

function App() {
  const [inputText, setInputText] = useState("");

  function onButtonClick(value) {
    setInputText((prev) => prev + value);
  }

  function evaluateInput() {
    setInputText((prev) => {
      const value = evaluate(prev);
      return value;
    });
  }

  function clearInput() {
    setInputText("");
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <div className="row">
          <Input input={inputText}></Input>
        </div>
        <div className="row">
          <ClearButton handleClick={clearInput}>Clear</ClearButton>
          <Button handleClick={onButtonClick}>^</Button>
          <Button handleClick={onButtonClick}>%</Button>
          <Button handleClick={onButtonClick}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={onButtonClick}>7</Button>
          <Button handleClick={onButtonClick}>8</Button>
          <Button handleClick={onButtonClick}>9</Button>
          <Button handleClick={onButtonClick}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={onButtonClick}>4</Button>
          <Button handleClick={onButtonClick}>5</Button>
          <Button handleClick={onButtonClick}>6</Button>
          <Button handleClick={onButtonClick}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={onButtonClick}>1</Button>
          <Button handleClick={onButtonClick}>2</Button>
          <Button handleClick={onButtonClick}>3</Button>
          <Button handleClick={onButtonClick}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={onButtonClick} style={{flex:"2"}}>0</Button>
          <Button handleClick={onButtonClick}>.</Button>
          <Button handleClick={evaluateInput}>=</Button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
