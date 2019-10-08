import React,{Component} from 'react'

import './../common/style/base.css'
import './../common/style/containers.css'
import './../common/style/footer.css'


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
            </div>
        )
    }
}

export default App