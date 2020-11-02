import './App.css';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: 'FETCH_HISTORY' });
  })
  
  return (
    <div className="App">
      <header className="App-header">
        app header (CALCULATOR)
      </header>
      <Calculator />
      <History />
    </div>
  );
}

export default App;
