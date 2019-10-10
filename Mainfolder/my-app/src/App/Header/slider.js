import React from 'react'

import '/blog2/Mainfolder/my-app/src/common/style/slider/slides.css'

const Slider = () => {
    return (
        <div className="mainslider row">
        <div className="slides row">
        <img src="img/bird.png" alt="" className="sl_img"></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">A bird starter pack...</p>
            <a href=""><button className="slide_b">Try Now</button></a>
        </div>
    </div>
    <div className="slides">
        <img src="img/cat.png" alt=""></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">A cat starter pack...</p>
            <a href=""><button className="slide_b">Try Now</button></a>
        </div>
    </div>
    <div className="slides">
        <img src="img/llama.png" alt=""></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">A lama starter pack...</p>
            <a href=""><button className="slide_b">Try Now</button></a>
        </div>
    </div>
    <div className="slides">
        <img src="img/owl.png" alt=""></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">An owl starter pack...</p>
            <a href=""><button className="slide_b">Try now</button></a>
        </div>
    </div>
</div>
    )
}

export default Slider