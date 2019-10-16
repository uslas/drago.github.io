import React from 'react'

import '/blog2/Mainfolder/my-app/src/App/Main/Sidebar/left_c.css'

const Blockthree = () => {
    return (
        <div className="block_3">
						<div className="categ">
							<div className="line"></div>
							<h1>Tags</h1>
							<div className="line"></div>
						</div>
						<div className="tag_block">
						<div className="l_tags">
							<div><a href="1"><button className="tags"><p className="tag_text">Lifestyle</p></button></a></div>
							<div><a href="2"><button className="tags"><p className="tag_text">Nature</p></button></a></div>
							<div><a href="3"><button className="tags"><p className="tag_text">Lost</p></button></a></div>
						</div>
						<div className="r_tags">
							<div><a href="4"><button className="tags"><p className="tag_text">Travel</p></button></a></div>
							<div><a href="5"><button className="tags"><p className="tag_text">Trekking</p></button></a></div>
							<div><a href="6"><button className="tags"><p className="tag_text">Lifestyle</p></button></a></div>
						</div>
					</div>
				</div>
    )
}
export default Blockthree