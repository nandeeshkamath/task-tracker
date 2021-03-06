import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ color, text, onClick }) => {
    return (
        <button
            onClick = {onClick}
            style={{ backgroundColor: color }}
            className="cust-btn"
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
