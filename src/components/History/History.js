// imports
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

// the purpose of this component is to display
// the last ten results from all users of the app.
// web sockets will be utilized to inform this component when 
// a new calculation has been performed, and the useEffect hook
// will be used to then display the most up to date history

function History() {
    // look to the redux store for history
    const history = useSelector(state => state.historyReducer);

    useEffect(() => {  
        console.log('the component has (re)rendered');
        console.log('history is: ', history);
        
    });

    //useEffect to re render anytime history is updated
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

