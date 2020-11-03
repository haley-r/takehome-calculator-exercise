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
            <p>last 10 results from the database will be mapped here!</p>
            <div className="history">
                {history[0] ?
                    <>
                    {history.map((calculation, i) => (
                        <div key={i}><p>{calculation.answer}</p></div>
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

