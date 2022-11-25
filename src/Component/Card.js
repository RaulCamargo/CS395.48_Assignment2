import brain from '../assets/Brain.svg';
import { useState } from 'react';

const Card = ({card, handleChoice}) =>
{
    const [selected, setSelected] = useState(false);
    const [matched, setMatched] = useState(false);

    const handleClick = () =>
    {
        handleChoice(card)
        setSelected(true)
    }

    if(selected === false)
    {
        return (
            <div className='card'>
                <div>
                    <img className='reverse' src={brain} alt='back' onClick={handleClick} />
                </div>
            </div>
        )
    }
    return (
        <div className='card'>
            <div>
                <img className='face' src={card.src} alt={card.text} />
            </div>
        </div>
    )

    
}

export default Card;