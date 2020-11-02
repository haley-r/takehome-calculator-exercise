// imports
// import React, {useState} from 'react';
import { connect } from 'react-redux';

// the purpose of this component is to display
// the last ten results from all users of the app.
// web sockets will be utilized to inform this component when 
// a new calculation has been performed, and the useEffect hook
// will be used to then display the most up to date history

function History(props) {
    // const [history, setHistory] = useState({});

    //useEffect to re render anytime history is updated
    return (
        <div>
            <h2>History</h2>
            <p>last 10 results from the database will be mapped here!</p>
        </div>
    );
}


const putReduxStateOnProps = (reduxState) => ({ history: reduxState.historyReducer });
export default connect(putReduxStateOnProps)(History);







