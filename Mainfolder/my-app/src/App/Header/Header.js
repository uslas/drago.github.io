import React from 'react'

import Logo from './Logo/Logo'
import Nav from './Nav/Nav'



const Header = () => {
    return (
        <header className="backgrounds">
		    <div className="container row">
                <Logo />
                <Nav />
            </div>
    </header>
    )
}

export default Header