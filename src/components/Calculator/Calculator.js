// imports
import React, { useState } from 'react';
// (redux? axios?)


// the purpose of this component is to be an interface for
// the user to input two numbers, an operator, and request that 
// the calculation be completed. pressing the '=' button dispatches
// two numbers, the operator, the result, and the timestamp to 
// a database (via redux/store?)

function Calculator(props) {
    // initialize the variables needed for making a calculation
    const [firstNumber, setFirstNumber] = useState('');
    const [operator, setOperator] = useState({});
    const [secondNumber, setSecondNumber] = useState('');
    const [answer, setAnswer] = useState('');
    const [lastAnswer, setLastAnswer] = useState('');

    const numberInput =(event, value)=> {
        // if number is selected right after completing a calculation
        // then clear values and add to first number string
        if (operator.type && answer!==''){
            setFirstNumber(value);
            setOperator({});
            setSecondNumber('');
            setAnswer('');
        }
        // if there is an operator set but not just because
        // a calculation was just run, add to second number string        
        else if (operator.type && answer===''){
            setSecondNumber(secondNumber + value);
        }
        // if theres not an operator set, add to the first number string
        else{
            setFirstNumber(firstNumber + value);
        }
    }

    const operatorInput =(event, type, symbol)=> {
        // if operator is selected right after completing a calculation
        // set lastAnswer as first number and clear other fields
        if (answer !== '') {
            setFirstNumber(lastAnswer);
            setOperator({type: type, symbol: symbol});
            setSecondNumber('');
            setAnswer('');
        }
        else setOperator({
            type: type,
            symbol: symbol
        })
    }

    const runCalculation=()=>{
        // set the answer
        let theAnswer = '';
        if (operator.type === 'add'){
            theAnswer = Number(firstNumber)+ Number(secondNumber)
        } else if (operator.type === 'subtract') {
            theAnswer = Number(firstNumber) - Number(secondNumber)
        } else if (operator.type === 'multiply') {
            theAnswer = Number(firstNumber) * Number(secondNumber)
        } else if (operator.type === 'divide') {
            theAnswer = Number(firstNumber) / Number(secondNumber)
        } else {
            if (secondNumber===''){
                theAnswer = firstNumber;
            } else{
                theAnswer = 'ERR';
            }
        }
        setAnswer(theAnswer);
        setLastAnswer(theAnswer);
        // send everything to the database
    }
    const clearAll=()=>{
        setFirstNumber('');
        setOperator({});
        setSecondNumber('');
    }

    return (
        <div>
            <h2>Calculator</h2>
            <p>calculation: {firstNumber} {operator.symbol} {secondNumber}</p>
            <p>answer: {answer}</p>
            <div>
                {/* could be a number button component? */}
                <button onClick={(event) => numberInput(event, '0')}>0</button>
                <button onClick={(event) => numberInput(event, '1')}>1</button>
                <button onClick={(event) => numberInput(event, '2')}>2</button>
                <button onClick={(event) => numberInput(event, '3')}>3</button>
                <button onClick={(event) => numberInput(event, '4')}>4</button>
                <button onClick={(event) => numberInput(event, '5')}>5</button>
                <button onClick={(event) => numberInput(event, '6')}>6</button>
                <button onClick={(event) => numberInput(event, '7')}>7</button>
                <button onClick={(event) => numberInput(event, '8')}>8</button>
                <button onClick={(event) => numberInput(event, '9')}>9</button>
            </div>
            <div>
                {/* could be an operator button component */}
                <button onClick={(event) => operatorInput(event, 'add', '+')}>+</button>
                <button onClick={(event) => operatorInput(event, 'subtract', '-')}>-</button>
                <button onClick={(event) => operatorInput(event, 'multiply', '*')}>*</button>
                <button onClick={(event) => operatorInput(event, 'divide', '/')}>/</button>
            </div>
            <div>
                {/* could be a special calculate component */}
                <button onClick={runCalculation}>=</button>
                <button onClick={clearAll}>C</button>
                {/* maybe also have backspace? if time */}
            </div>

        </div>
    );
}

export default Calculator;
