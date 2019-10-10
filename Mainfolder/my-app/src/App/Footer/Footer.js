import React from 'react'

import '/blog2/Mainfolder/my-app/src/App/Footer/footer.css'

import Logofoot from './Logo/Logofoot'
import Lowerinfo from './Lowerinfo/Lowerinfo'

const Footer = () => {
    return (
        <div className="container3">
            <img className="footph" src="img/Layer37.jpg" alt=""></img>
                <Lowerinfo></Lowerinfo>
                <Logofoot></Logofoot>
        </div>
        
    )
}
export default Footer