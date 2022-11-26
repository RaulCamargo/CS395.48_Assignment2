import { useEffect, useState } from 'react';
import './App.css';
import {fruits} from './Component/Fruits';
import Card from './Component/Card';

function App() {

  const [cardGrid, setCardGrid] = useState([]);
  const shuffledCards = [...fruits, ...fruits].map((card, idx) => ({...card, id: idx}))
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [flips, setFlips] = useState(0);
  const [disableClick, setDisableClick] = useState(false)
  
  // Durstenfeld Shuffle
  function shuffle() {
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    setCardGrid(shuffledCards);
    setFlips(0);
  }
  
  const handleChoice = (card) =>
  {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Check for match
  useEffect(() =>
  {
    if(choiceOne && choiceTwo)
    {
      setDisableClick(true)

      if(choiceOne.src === choiceTwo.src)
      {
        setCardGrid(prevCardGrid => 
          {
            return prevCardGrid.map(card => 
              {
                if(card.src === choiceOne.src)
                {
                  return {...card, matched: true}
                }
                else
                {
                  return card
                }
              })
          })
        reset()
      }
      else
      {
        setTimeout(() => reset(), 1000)
      }
    }
  },
  [choiceOne, choiceTwo])

  console.log(cardGrid)

  const reset = () =>
  {
    setChoiceOne(null)
    setChoiceTwo(null)
    setFlips(prevFlips => prevFlips + 1)
    setDisableClick(false)
  }

  return (
    <div className="App">
      <h1 className='header'>Fruit for Brains</h1>
      <button className='btn' onClick={shuffle}>New Game</button>

      <div className='game-grid'>
        {
          cardGrid.map(card => 
          (
            <Card key={card.id} 
              card={card} 
              handleChoice={handleChoice} 
              selected={card === choiceOne || card === choiceTwo || card.matched}
              disableClick={disableClick} />
          ))
        }
      </div>
      <div>
        <p>Turns: {flips}</p>
      </div>
    </div>
      
  );
}

export default App;