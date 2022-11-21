import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => 
{
  return <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}> 
  <button className='btn'
  onClick={onClick}
  style={{ backgroundColor: color }} 
  >
  {text}
  </button>
  </div>
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
