// imports
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// the purpose of this component is to be an interface for
// the user to input two numbers and an operator and then '='
// to calculate and send all of the values to the database
// where they can be accessed as history

function Calculator(props) {
    // initialize the variables needed for making a calculation
    const [firstNumber, setFirstNumber] = useState('');
    const [operator, setOperator] = useState({});
    const [secondNumber, setSecondNumber] = useState('');
    const [answer, setAnswer] = useState('');
    const [lastAnswer, setLastAnswer] = useState('');
    const [display, setDisplay] = useState('');

    const dispatch = useDispatch();

    const numberInput =(event, value)=> {
        // if number is selected right after completing a calculation
        // then clear values and add to first number string
        if (operator.type && answer!==''){
            setFirstNumber(value);
            setOperator({});
            setSecondNumber('');
            setAnswer('');
            setDisplay(value);
        }
        // if there is an operator set but not just because
        // a calculation was just run, add to second number string        
        else if (operator.type && answer===''){
            setSecondNumber(secondNumber + value);
            setDisplay(secondNumber + value);
        }
        // if theres not an operator set, add to the first number string
        else{
            setFirstNumber(firstNumber + value);
            setDisplay(firstNumber + value);
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
            setDisplay(lastAnswer);
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
        if (isNaN(theAnswer)){
            setAnswer('ERR');
            setLastAnswer('ERR');
            setDisplay('ERR');
        }else {
            if (theAnswer.toString().indexOf('.')!= -1){
                setAnswer(theAnswer.toString().substr(0, theAnswer.toString().indexOf('.')+6));
                setLastAnswer(theAnswer.toString().substr(0, theAnswer.toString().indexOf('.')+6));
                setDisplay(theAnswer.toString().substr(0, theAnswer.toString().indexOf('.')+6));
            }else{
            setAnswer(theAnswer);
            setLastAnswer(theAnswer);
            setDisplay(theAnswer);
            }
        }
        // send everything to the database
        dispatch({
            type: 'SAVE_CALCULATION_TO_DB', 
            payload: {
                firstNumber: firstNumber,
                operatorSymbol: operator.symbol,
                secondNumber: secondNumber,
                answer: theAnswer.toString(),
            }
        })

    }
    const clearAll=()=>{
        setFirstNumber('');
        setOperator({});
        setSecondNumber('');
        setDisplay('');
    }

    return (
        <div id="calculator">
            <h2 class="label">Calculator</h2>
            <div id="inputArea">
                <div id="rtlDiv">
                    <h3 id="calcDisplay">{display}</h3>
                </div>
                <div id="button-pad">
                    <button id="button0" onClick={(event) => numberInput(event, '0')}>0</button>
                    <button id="button1" onClick={(event) => numberInput(event, '1')}>1</button>
                    <button id="button2" onClick={(event) => numberInput(event, '2')}>2</button>
                    <button id="button3" onClick={(event) => numberInput(event, '3')}>3</button>
                    <button id="button4" onClick={(event) => numberInput(event, '4')}>4</button>
                    <button id="button5" onClick={(event) => numberInput(event, '5')}>5</button>
                    <button id="button6" onClick={(event) => numberInput(event, '6')}>6</button>
                    <button id="button7" onClick={(event) => numberInput(event, '7')}>7</button>
                    <button id="button8" onClick={(event) => numberInput(event, '8')}>8</button>
                    <button id="button9" onClick={(event) => numberInput(event, '9')}>9</button>
                    <button id="decimalButton" onClick={(event) => numberInput(event, '.')}>.</button>
                    <button class="operatorButton" id="addButton" onClick={(event) => operatorInput(event, 'add', '+')}>+</button>
                    <button class="operatorButton" id="subtractButton" onClick={(event) => operatorInput(event, 'subtract', '-')}>-</button>
                    <button class="operatorButton" id="multiplyButton" onClick={(event) => operatorInput(event, 'multiply', '*')}>*</button>
                    <button class="operatorButton" id="divideButton" onClick={(event) => operatorInput(event, 'divide', '/')}>/</button>
                    <button id= "calculateButton" onClick={runCalculation}>=</button>
                    <button id="clearButton" onClick={clearAll}>C</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
