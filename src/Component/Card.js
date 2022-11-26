import brain from '../assets/Brain.svg';

const Card = ({card, handleChoice, selected}) =>
{
    const handleClick = () =>
    {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div className={ selected ? "chosen" : ""}>
                <img className="face" src={card.src} alt={card.text} />
                <img className="reverse" src={brain} alt="back" onClick={handleClick} />
            </div>
        </div>
    )    

    
}

export default Card;