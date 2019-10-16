import React,{Component} from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '/blog2/Mainfolder/my-app/src/App/Header/Slider/slides.css'

export default class Sliker extends Component  {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return (
        <div className="mainslider row">
                    <Slider {...settings}>
        <div className="slides row">
        <img src="img/bird.png" alt="" className="sl_img"></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">A bird starter pack...</p>
            <a href="2"><button className="slide_b">Try Now</button></a>
        </div>
    </div>
    <div className="slides">
        <img src="img/cat.png" alt=""></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">A cat starter pack...</p>
            <a href="4"><button className="slide_b">Try Now</button></a>
        </div>
    </div>
    <div className="slides">
        <img src="img/llama.png" alt=""></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">A lama starter pack...</p>
            <a href="2"><button className="slide_b">Try Now</button></a>
        </div>
    </div>
    <div className="slides">
        <img src="img/owl.png" alt=""></img>
        <div className="text_sl">
            <h3 className="slide_h">Introducing</h3>
            <p className="slide_p">An owl starter pack...</p>
            <a href="3"><button className="slide_b">Try now</button></a>
        </div>
    </div>
</Slider>
</div>
    )
}
}
