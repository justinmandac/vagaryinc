import React, { Component, render} from 'react'
import AppHeader from './app-header'

import PortfolioPage from './portfolio-page'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            message : `Hello Peeps!`,
            activePage: 'home'
        }
    }
    
    render() {
        const {message} = this.state

        return <main className="main">
            <AppHeader></AppHeader>
            <div className="content">
                {message}
                <PortfolioPage></PortfolioPage>
            </div>            
        </main>
    }
}

