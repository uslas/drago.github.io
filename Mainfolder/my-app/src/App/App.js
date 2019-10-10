import React,{Component} from 'react'

import './../common/style/base.css'
import './../common/style/containers.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
                <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
                <script type="text/javascript" src="../slick/slick.min.js"></script>
                <script type="" src="../index.js"></script>
            </div>

        )
    }
}

export default App