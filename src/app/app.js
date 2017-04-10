import React, { Component, render} from 'react'
import AppHeader from './app-header'

import PortfolioPage from './portfolio-page'
import HomePage from './home-page'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            activePage: 'home',
            isMenuActive: false
        }
    }
    
    menuChanged = (c) => {
        console.debug(`menu changed`, c)
        this.setState({
            isMenuActive: c
        });
    }

    render() {        
        const {isMenuActive} = this.state;
        /* Use below styles to hide the main content when the menu is activated */
        let style = {
            overflowY: 'hidden',
            height: '100vh'
        }

        if(!isMenuActive) {
            /*
                Clear styles if menu is not active; 
            */
            style = {}
        }

        return <main className="main">
            <AppHeader menuChangedCallback={this.menuChanged}></AppHeader>
            <div style={style} className="content">
                <HomePage></HomePage>
                <PortfolioPage></PortfolioPage>
            </div>            
        </main>
    }
}

