import React from 'react'

import logo from './logo'
import nav from './nav'
import slider from '/slider'


const Header = () => {
    return (
        <header className="backgrounds">
		    <div className="container row">
                <logo/>
                <nav/>
            </div>
                <slider/>
    </header>
    )
}

export default Header