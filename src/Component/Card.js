import brain from '../assets/Brain.svg';

const Card = ({card, handleChoice, selected, disableClick}) =>
{
    const handleClick = () =>
    {
        if(!disableClick)
        {
            handleChoice(card)
        }
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