// imports
// (redux? axios?)


// the purpose of this component is to be an interface for
// the user to input two numbers, an operator, and request that 
// the calculation be completed. pressing the '=' button dispatches
// two numbers, the operator, the result, and the timestamp to 
// a database (via redux/store?)

function Calculator(props) {
    return (
        <div>
            <h2>Calculator</h2>
            <p>put calculator interface here</p>
            <div>
                {/* could be a number button component */}
                <button>0</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>1</button>
            </div>
            <div>
                {/* could be an operator button component */}
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
            </div>
            <div>
                {/* could be a special calculate component */}
                <button>=</button>
            </div>

        </div>
    );
}

export default Calculator;
