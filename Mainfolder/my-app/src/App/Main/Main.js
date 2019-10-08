import React from 'react'

import blockone from './blockone'
import blocktwo from './blocktwo'
import blocktwo_one from './blocktwo_one'
import blocktwo_two from './blocktwo_two'
import blockthree from './blockthree'

const Main = () => {
    return (
        <div class="container2 row">
			<div class="left_col" id="left_c">
                <blockone/>
                <blocktwo/>
                <blockthree/>
            </div>
            <div className="right_col" id="right_c">
                <blocktwo_one/>
                <blocktwo_two/>
                <blocktwo_one/>
                <blocktwo_two/>
            </div>
        </div>
    )
}

export default Main