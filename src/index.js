import React from 'react';
import ReactDOM from "react-dom/client";
import Card from './Card';
import './style.css';
function App() {

  return (

    <React.Fragment>

      <Card></Card>

    </React.Fragment>

  )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);