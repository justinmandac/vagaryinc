import React, { Component, render} from 'react'
import AppHeader from './app-header'

import PortfolioPage from './portfolio-page'
import HomePage from './home-page'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            activePage: 'home'
        }
    }
    
    render() {
        return <main className="main">
            <AppHeader></AppHeader>
            <div className="content">
                <HomePage></HomePage>
                <PortfolioPage></PortfolioPage>
            </div>            
        </main>
    }
}

