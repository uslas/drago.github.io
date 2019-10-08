import React from 'react'

import './../common/style/navigate.css'

const nav = () => {
    return (
        <div className="navigate">
				<ul className="navstyle">
					<li><a className="nav_l" href="s">solutions</a></li>
					<li><a className="nav_l" href="d">product</a></li>
					<li><a className="nav_l" href="f">portfolio</a></li>
					<li><a className="nav_l" href="f">contact</a></li>
				</ul>
			</div>
    )
}
export default nav