// imports
import { useSelector } from 'react-redux';

// the purpose of this component is to display
// the last ten results from all users of the app.
// this component has access to the redux store that's getting updated
// every time App.js sends a FETCH_HISTORY dispatch

function History() {
    const history = useSelector(state => state.historyReducer);

    return (
        <div id="history">
            <h2 class="label">History</h2>
            <div className="history">
                {history[0] ?
                    <ul>
                    {history.map((calculation, i) => (
                        <li key={i}>
                            {calculation.firstNumber.toString()} 
                            {calculation.operatorSymbol}
                            {calculation.secondNumber.toString()} 
                            =
                            {calculation.answer.toString()} 
                        </li>
                    ))}
                    </ul>
                    :
                    <p>loading...</p>
                }
            </div>
        </div>
    );
}

export default History;

