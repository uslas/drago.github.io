import React from 'react'

import '/blog2/Mainfolder/my-app/src/common/style/left_c.css'

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
							<div><a href=""><button className="tags"><p className="tag_text">Lifestyle</p></button></a></div>
							<div><a href=""><button className="tags"><p className="tag_text">Nature</p></button></a></div>
							<div><a href=""><button className="tags"><p className="tag_text">Lost</p></button></a></div>
						</div>
						<div className="r_tags">
							<div><a href=""><button className="tags"><p className="tag_text">Travel</p></button></a></div>
							<div><a href=""><button className="tags"><p className="tag_text">Trekking</p></button></a></div>
							<div><a href=""><button className="tags"><p className="tag_text">Lifestyle</p></button></a></div>
						</div>
					</div>
				</div>
    )
}
export default Blockthree