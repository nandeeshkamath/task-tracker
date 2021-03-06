import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './button'

const Header = ({ title, showAddButton, toggleAddButton }) => {
    const location = useLocation()

    return (
        <header className="flex justify-between object-center">
            <h1 className="text-3xl">Hello {title}</h1>
            {location.pathname === '/' && (<Button 
            color = {showAddButton ? 'red' : 'green'} 
             text = {showAddButton ? 'Close' : 'Add'} 
             onClick = {toggleAddButton}/>)}
        </header>
    )
} 

Header.defaultProps = {
    title: 'Kamath',
}

Header.propTypes = {
    title: PropTypes.string,
}

// const headingStyle = { color: 'red', backgroundColor: 'black' }

export default Header 
