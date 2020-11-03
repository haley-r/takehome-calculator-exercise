import './App.css';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';

function App() {
  
  return (
    <div className="App">
      <header className="App-header" style={{color: 'green'}}>
        app header (CALCULATOR)
      </header>
      <Calculator />
      <History />
    </div>
  );
}

export default App;
