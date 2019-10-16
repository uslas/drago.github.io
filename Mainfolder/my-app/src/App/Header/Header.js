import React from 'react'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import Sliker from './Slider/Slidering'



const Header = () => {
    return (
        <header className="backgrounds">
		    <div className="container row">
            <img className="backph" src="img/Layer37.jpg" alt=""></img>
                <Logo />
                <Nav />
                <Sliker/>
            </div>
    </header>
    )
}

export default Header