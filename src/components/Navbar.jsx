import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= 'navbar'>
            <div className="logo">TechWA Movie APP</div>
            <div className="menus">
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/watchlist'>Watchlist</Link></li>
                    <li><Link to='/wontact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
