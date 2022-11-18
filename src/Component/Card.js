const Card = ({image}) =>
{
    this.setState = {isFlipped: false}

    handleClick = () => 
    {
        this.setState(state => ({isFlipped: !state.isFlipped}));
    }

  
        if(this.state.isFlipped === false)
        {
            return (
                <div style={{height: '100px', width: '75px', backgroundColor: 'black', borderStyle: 'solid', borderColor: 'red'}}
                     onClick={this.handleClick}></div>
            );
        }
        return (
            <div style={{height: '100px', width: '75px', backgroundColor: 'lightblue', borderStyle: 'solid', borderColor: 'black'}}
            onClick={this.handleClick}>{image}</div>
        );
    
}

export default Card;

{cardValues.map((item, idx) => (<Card key={idx} cardText={item} />))}

const cardValues = ["Card1", "Card2", "Card3", "Card4"];