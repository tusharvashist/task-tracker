import PropTypes from 'prop-types';

function Button({color, text, onClick}) {
    
    return (
        <>
            <button onClick={onClick} style={{backgroundColor:color}} className="btn addButton">{text}</button>
        </>
    )
}

Button.defaultProps = {
    color: 'Blue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
