import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className = 'footer'>
            <Link to='/about'>About us</Link>
            <p>Copyright &copy; 2021</p>
        </footer>
    )
}

export default Footer
