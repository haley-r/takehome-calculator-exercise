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

    const numberInput =(event, value)=> {
        // if there is an operator set, add to second number string        
        if (operator.type){
            setSecondNumber(secondNumber + value);
        }
        // if theres not an operator set, add to the first number string
        else{
            setFirstNumber(firstNumber + value);
        }
    }

    const operatorInput =(event, type, symbol)=> {
        //if someone chooses an operator before choosing a first number
        //use last answer from redux store
        setOperator({
            type: type,
            symbol: symbol
        })
    }

    const runCalculation=()=>{
        console.log('so you wanna run the calculation huh');
        //dispatch values somewhere
    }
    const clearAll=()=>{
        setFirstNumber('');
        setOperator({});
        setSecondNumber('');
    }

    return (
        <div>
            <h2>Calculator</h2>
            <p>calculation display: {firstNumber} {operator.symbol} {secondNumber}</p>
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
                <button onClick={(event) => operatorInput(event, 'ADD', '+')}>+</button>
                <button onClick={(event) => operatorInput(event, 'SUBTRACT', '-')}>-</button>
                <button onClick={(event) => operatorInput(event, 'MULTIPY', '*')}>*</button>
                <button onClick={(event) => operatorInput(event, 'DIVIDE', '/')}>/</button>
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
