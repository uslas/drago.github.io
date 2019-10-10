import React from 'react'

import NewsListOne from './NewsListOne'
import MassiveNews from "./News"

const NewsList = () => {
    return (
        MassiveNews.map(({
            id,
            name,
            category,
            text,
            year,
            month,
            date,
        })=> <div className="noir" key={id}> 
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
        ))}

export default NewsList