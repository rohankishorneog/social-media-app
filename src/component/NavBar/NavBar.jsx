import React from 'react'
import Search from '../Search/Search'
import Profile from '../Profile/Profile'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <div>
            <h2>
                Logo
            </h2>
        </div>

       <Search/>

       <Profile/>

       
    </nav>
  )
}

export default NavBar