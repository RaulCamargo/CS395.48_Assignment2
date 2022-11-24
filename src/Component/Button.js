import PropTypes from 'prop-types'


const Button = ({onClick}) => 
{
  return <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}> 
  <button className='btn'
  onClick={onClick}>
  New Game
  </button>
  </div>
}

Button.propTypes = {
    onClick: PropTypes.func
}
export default Button
