import { useState } from "react";

const Card = ({image}) =>
{
    const [isFlipped, setIsFlipped] = useState(false);
    const [matched, setMatched] = useState(false);

    var handleClick = () => 
    {
        this.setState(state => ({isFlipped: !state.isFlipped}));
    };

  
        if(isFlipped === false)
        {
            return (
                <div className="cardNotFlipped" onClick={handleClick}></div>
            );
        }
        return (
            <div className="cardFlipped" onClick={handleClick}>{image}</div>
        );
    
}

export default Card;


