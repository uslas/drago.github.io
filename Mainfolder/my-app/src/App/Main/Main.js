import React from 'react'

import Blockone from './Sidebar/Blockone'
import Blocktwo from './Sidebar/Blocktwo'
import Blockthree from './Sidebar/Blockthree'
import NewsList from './NewsList/NewsList'

const Main = () => {
    return (
        <div className="container2 row">
			<div className="left_col" id="left_c">
                <Blockone/>
                <Blocktwo/>
                <Blockthree/>
            </div>
            <div className="right_col" id="right_c">
                <NewsList />
            </div>
        </div>
    )
}

export default Main