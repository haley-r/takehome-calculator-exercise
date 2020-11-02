import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// redux store will hold latest 10 calculations
// when it updates, the components will use useEffect to render
// it will use websocket to know if it is updated by another user
