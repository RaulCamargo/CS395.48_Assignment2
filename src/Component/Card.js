import brain from '../assets/Brain.svg';

const Card = ({card, handleChoice}) =>
{
    const handleClick = () =>
    {
        handleChoice(card)
    }

    return (
        <div className='card'>
            <div>
                <img className='face' src={card.src} alt={card.text} />
                <img className='reverse' src={brain} alt='back' onClick={handleClick} />
            </div>
        </div>
    )

    
}

export default Card;