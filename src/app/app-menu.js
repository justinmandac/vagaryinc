import React, {Component, render} from 'react'

export default class AppMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobile: false
        }
    } 

    render() {
        const style = {
            transform: 'translateX(200%)' 
        }

        return <div style={style} className="app-menu-wrapper">
                <ul className="app-menu">
                    <li className="app-menu__item">
                        Home
                    </li>
                    <li className="app-menu__item">
                        Portfolio
                    </li>

                </ul>            
        </div>
    }
} 