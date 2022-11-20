import { useState } from 'react';
import './App.css';
import Header from './Component/Header';

function App() {

  const [cardGrid, setCardGrid] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  
  return (
    <div className="App">
      <Header title = 'Fruit for Brains'/>
      
      
    </div>
      
  );
}

export default App;