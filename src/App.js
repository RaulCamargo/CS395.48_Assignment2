import { useEffect, useState } from 'react';
import './App.css';
import Button from './Component/Button';
import {fruits} from './Component/Fruits';
import Card from './Component/Card';

function App() {

  const [cardGrid, setCardGrid] = useState([]);
  const shuffledCards = [...fruits, ...fruits].map((card, idx) => ({...card, id: idx}))

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [flips, setFlips] = useState(0);
  
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
    choiceOne ? setChoiceTwo(card.text) : setChoiceOne(card.text)
  }

  useEffect(() =>
  {
    if(choiceTwo)
    {
      if(choiceOne === choiceTwo)
      {
        setCardGrid(prevCard => 
          {
            return prevCard.map(card => 
              {
                if(card.text === choiceOne)
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
        reset()
      }
    }
  },
  [choiceOne, choiceTwo])

  console.log(cardGrid)

  const reset = () =>
  {
    setChoiceOne(null)
    setChoiceTwo(null)
    setFlips(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <h1 className='header'>Fruit for Brains</h1>
      <Button onClick={shuffle}/>

      <div className='game-grid'>
        {
          cardGrid.map(card => 
          (
            <Card key={card.id} card={card} handleChoice={handleChoice} />
          ))
        }
      </div>
      <div>
        <p>Rounds: {flips}</p>
      </div>
    </div>
      
  );
}

export default App;