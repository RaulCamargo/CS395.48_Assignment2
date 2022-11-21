import { useState } from 'react';
import './App.css';
import Fruits from './Component/Fruits.json';
import Button from './Component/Button';
// import Card from './Component/Card';


function App() {

  const [cardGrid, setCardGrid] = useState([]);
  // const [choiceOne, setChoiceOne] = useState(null);
  // const [choiceTwo, setChoiceTwo] = useState(null);
  const [flips, setFlips] = useState(0);
  const shuffledCards = [...Fruits, ...Fruits];
  
  // Durstenfeld Shuffle
  const shuffle = () =>
  {
    for (let i = shuffledCards.length - 1; i > 0; i--)
    {
      var j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    setCardGrid(shuffledCards)
    setFlips(0)
  }

  console.log(cardGrid)
  
  return (
    <div className="App">
      <h1 className='header'>Fruit for Brains</h1>
      <Button color={'red'} text={'New Game'} onClick={shuffle}/>
      
      
      
      
      
      
    </div>
      
  );
}

export default App;