import { useState } from "react";



const Card = ({flippedYN}) =>
{
    const [isFlipped, setIsFlipped] = useState(false);
    //const [matched, setMatched] = useState(false);

    // var handleClick = () => 
    // {
    //     setIsFlipped(!isFlipped);
    // };
    setIsFlipped(flippedYN);
  
        if(isFlipped === false)
        {
            return (
                <div className="cardBack">
                    <img className="back" src={brain} alt="brain" />
                </div>
            );
        }
        return (
            <div className="cardFace"></div>
        );
    
}

export default Card;


