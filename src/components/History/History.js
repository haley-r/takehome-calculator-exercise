// imports
import { useSelector } from 'react-redux';

// the purpose of this component is to display
// the last ten results from all users of the app.
// this component has access to the redux store that's getting updated
// every time App.js sends a FETCH_HISTORY dispatch

function History() {
    const history = useSelector(state => state.historyReducer);

    return (
        <div>
            <h2>History</h2>
            <div className="history">
                {history[0] ?
                    <>
                    {JSON.stringify}
                    {history.map((calculation, i) => (
                        <ul key={i}>
                            <li>
                                {calculation.firstNumber.toString().substr(calculation.firstNumber.toString().indexOf('.'), 6)} 
                                {calculation.operatorSymbol}
                                {calculation.secondNumber.toString().substr(calculation.secondNumber.toString().indexOf('.'), 6)} 
                                =
                                {calculation.answer.toString().substr(calculation.answer.toString().indexOf('.'), 6)} 
                            </li>
                        </ul>
                    ))}
                    </>
                    :
                    <p>loading...</p>
                }
            </div>
        </div>
    );
}

export default History;

