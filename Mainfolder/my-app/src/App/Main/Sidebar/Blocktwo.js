import React from 'react'

import '/blog2/Mainfolder/my-app/src/App/Main/Sidebar/left_c.css'

const Blocktwo = () => {
    return (
        <div className="block_2">
					<div className="categ">
						<div className="line"></div>
						<h1>Recent Posts</h1>
						<div className="line"></div>
					</div>
					<div className="r_content">
						<div className="recent_info"><a href="1"><img className="r_img" alt=""></img></a><p>This photo is awesome</p></div>
						<div className="recent_info"><a href="2"><img className="r_img" alt=""></img></a><p>This photo is awesome</p></div>
						<div className="recent_info"><a href="4"><img className="r_img" alt=""></img></a><p>This photo is awesome</p></div>
						<div className="recent_info"><a href="5"><img className="r_img" alt=""></img></a><p>This photo is awesome</p></div>
						<div className="recent_info"><a href="6"><img className="r_img" alt=""></img></a><p>This photo is awesome</p></div>
					</div>
		</div>
    )
}

export default Blocktwo