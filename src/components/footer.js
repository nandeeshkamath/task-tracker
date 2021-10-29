import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className = "mt-7 text-center">
            <Link to='/about'>About us</Link>
            <p>Copyright &copy; 2021</p>
        </footer>
    )
}

export default Footer
