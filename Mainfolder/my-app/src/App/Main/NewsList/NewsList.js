import React from 'react'
import NewsListTwo from './NewsListTwo'
import NewsListOne from './NewsListOne'
import MassiveNews from "./News"


const NewsList = () => {
    console.log(MassiveNews)
    return (
        MassiveNews.map(({
            id,
            name,
            category,
            text,
            year,
            month,
            date,
        })=>(
        id % 2===0 
                ?<div className="noir" key={id}> 
                        <NewsListOne
                            id={id}
                            name={name}
                            category={category}
                            text={text}
                            year={year}
                            month={month}
                            date={date}
                        />
                </div>  
                : 
                <div className="noir" key={id}> 
                        <NewsListTwo
                            id={id}
                            name={name}
                            category={category}
                            text={text}
                            year={year}
                            month={month}
                            date={date}
                        />
                </div>  

        )
        ))}

export default NewsList