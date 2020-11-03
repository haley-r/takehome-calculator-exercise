import './App.css';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch({ type: 'FETCH_HISTORY' });
  // })

  useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: 'FETCH_HISTORY' });
        }, 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  
  return (
    <div className="App">
      <header className="App-header">
        app header (CALCULATOR) TEST
      </header>
      <Calculator />
      <History />
    </div>
  );
}

export default App;
