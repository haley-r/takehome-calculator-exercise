import './App.css';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  // get the history every second
  // not quite immediate like websockets
  // but since users aren't relying on others for info
  // it seems fitting enough
  useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: 'FETCH_HISTORY' });
        }, 1000);
        return () => clearInterval(interval);
        // for some reason this clears the missing dependency warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Haley Ryan's Take Home Exercise</h1>
      </header>
      <Calculator />
      <History />
      <p class="source"><a href="https://github.com/haley-r/takehome-calculator-exercise" target="_blank">source code</a></p>
    </div>
  );
}

export default App;
