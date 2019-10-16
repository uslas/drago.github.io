import React,{Component} from 'react'

import '/blog2/Mainfolder/my-app/src/App/Main/NewsList/right_c.css'

class NewsListOne extends Component  {

    render () {
        const {
            name,
            category,
            text,
            year,
            month,
            date,
        } = this.props
     return (
        <div className="block_2_1">
        <div className="various1">
        <h1 className="right_zag">{name}</h1>
        <h2 className="right_zag2">{category}</h2>
            <div className="lines2"></div>
        <p className="right_text">{text}</p>
        <div className="l_box"></div>
            <div className="readm"><a className="readme" href="/"><button className="readme_b"><p className="button_text">READ MORE</p></button></a></div>
            <div className="share"></div>
        </div>
            <div className="block_2_3"><img src="img/twoside1.jpg" alt=""></img><a className="image_sec" href="/"><button className="readimg"><p className="read_t">read more</p></button></a>
            <div className="date">
							<div className="month">{month}</div>
							<div className="m_date">{date},</div>
							<div className="year">{year}</div>
							</div>
            </div>
        <div className="likes"><img className="like" src="img/icon7.png" alt=""></img></div>
    </div>
     )
    }
}
export default NewsListOne