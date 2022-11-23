import { useState } from 'react';
import './App.css';
import {fruits} from './Component/Fruits';
import Button from './Component/Button';
import brain from './assets/Brain.svg';
//import Card from './Component/Card';

function App() {

  const [cardGrid, setCardGrid] = useState([]);
  // const [choiceOne, setChoiceOne] = useState(null);
  // const [choiceTwo, setChoiceTwo] = useState(null);
  const [flips, setFlips] = useState(0);
  const shuffledCards = [...fruits, ...fruits].map((card, idx) => ({...card, id: idx}))
  
  // Durstenfeld Shuffle
  function shuffle() {
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    setCardGrid(shuffledCards);
    setFlips(0);
  }

  console.log(cardGrid)
  
  return (
    <div className="App">
      <h1 className='header'>Fruit for Brains</h1>
      <Button onClick={shuffle}/>
     
     <div className='game-grid'>
      {cardGrid.map(card => (
        <div className='card' key={card.id}>
          <div>
            <img className='face' src={card.src} alt={card.text} height={'150px'} width={'100px'} />
            <img className='reverse' src={brain} alt='back' height={'150px'} width={'100px'} />
          </div>
        </div>
      ))}
     </div>
      
      
      
      
      
      
      
    </div>
      
  );
}

export default App;