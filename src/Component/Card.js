import { useState } from "react";

const Card = ({verso, }) =>
{
    const [isFlipped, setIsFlipped] = useState(false);
    const [matched, setMatched] = useState(false);

    var handleClick = () => 
    {
        setIsFlipped(!isFlipped);
    };

  
        if(isFlipped === false)
        {
            return (
                <div className="cardNotFlipped" onClick={handleClick}></div>
            );
        }
        return (
            <div className="cardFlipped" onClick={handleClick}>{verso}</div>
        );
    
}

export default Card;


