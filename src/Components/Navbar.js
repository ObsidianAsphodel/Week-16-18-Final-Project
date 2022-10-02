import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav className="nav">
            <li>
                <Link to='/' className='site-title'>Home</Link>
            </li>
            <li>
                <Link to='/About'>About</Link>
            </li>
            <li>
                <Link to='/Contact'>Contact</Link>
            </li>
            <li>
                <Link to='/Play'>Play</Link>
            </li>
        </nav>
    </>
  )
}

export default Navbar