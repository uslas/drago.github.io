import React from 'react'

import Blockone from './Sidebar/Blockone'
import Blocktwo from './Sidebar/Blocktwo'
import NewsListOne from './NewsList/NewsListOne'
import NewsListTwo from './NewsList/NewsListTwo'
import Blockthree from './Sidebar/Blockthree'

const Main = () => {
    return (
        <div class="container2 row">
			<div class="left_col" id="left_c">
                <Blockone/>
                <Blocktwo/>
                <Blockthree/>
            </div>
            <div className="right_col" id="right_c">
                <NewsListOne></NewsListOne>
                <NewsListTwo></NewsListTwo>
                <NewsListOne></NewsListOne>
                <NewsListTwo></NewsListTwo>
            </div>
        </div>
    )
}

export default Main