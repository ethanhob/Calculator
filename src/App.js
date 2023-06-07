import React, {useState} from 'react';
import './App.css';

function App() {
const [calc, setCalc] = useState("");
// calc sets the state, set calc is the function used to update calc, initialised as an empty string

const operations = ["+", "-", "*", "/", "."]

const updateCalc = value => {
  if(
    operations.includes(value) && calc === '' ||
    operations.includes(value) && operations.includes(calc.slice(-1))
    // if operations includes a value and no numbrers are inputted or if operations includes a value and the last value in the calc includes an entry in the operations array
  ){
    return;
// return nothing
  }
  setCalc(calc+ value);
  // set new calc as old calc plus inputted value
}

const createDigits = () => {
  const digits = [];
  // empty array

  for (let i=1; i<10; i++){
    digits.push(<button 
      onClick={() => updateCalc(i.toString())} key={i}
      > {i}</button>
      // in the digits array, for every i we loop through, we are going to create a button that reflects i. these form part of the calculations so we convert i the number to a string and updatecalc
      // we use the key becaise it is good practice. in this case the key and value are the same so you dont technically need it.
      )
  }
  return digits;
}

const calculate = () => {
  setCalc(eval(calc).toString());
  // setCalc as the evaluation of the total calculation converted to a string
}

const deleteLast = () => {
  if (calc == ''){
    return;
    // if nothing is inputted dont do anything
  }
  const value = calc.slice(0,-1);
  // the new value takes calc and slices starting at position 0 and going back 1. effevtively taking off the last one
  setCalc(value);
  // sets this as new value
}
const clearNumbers = () => {
  setCalc('');
}
 return (
  
        <div className="App">
          <div className="calculator">
            <div className="display"> {calc || "0"}
              </div>
             <div className="operators">
              <button onClick = {() => updateCalc('+')}>+</button>
              <button onClick = {() => updateCalc('-')}>-</button>
              <button onClick = {() => updateCalc('*')}>*</button>
              <button onClick = {() => updateCalc('/')}>/</button>
              <button onClick = {deleteLast}>DEL</button>
              <button onClick = {clearNumbers}>CLR</button>

             </div>
              <div className="numbers">
                   {createDigits()}
                  <button onClick = {() => updateCalc('0')}>0</button>
                 <button onClick = {() => updateCalc('.')}>.</button>
                 <button onClick = {calculate}>=</button>

              </div>
              </div>  
              </div>
  );
  }

export default App;
