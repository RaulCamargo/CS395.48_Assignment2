import './App.css';
import Card from './Component/Card'
import Header from './Component/Header';

function App() {
  const cardValues = ["Card1", "Card2", "Card3", "Card4"];
  return (
    <div className="App">
      <Header title = 'Fruit for Brains'/>
        {cardValues.map((item, idx) => (<Card key={idx} cardText={item} />))}
      </div>
  );
}

export default App;