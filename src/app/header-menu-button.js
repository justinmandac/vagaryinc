import React, {Component, render} from 'react'
import 'file-loader!img/menu.svg'

export default class HeaderMenuButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressed: false,
            visible: true
        }
    }

    render() {
        const style = {
            height: `64px`,
            width: `64px`,
            padding: `8px`,
            float: 'right',
            display: 'flex'
        }

        const iconStyle = {
            cursor: 'pointer',
            margin: 'auto',
            width: `24px`,
            height: `24px`
        }
        return <div style={style} className="app-header__menu-button">
           <div style={iconStyle} className="app-header__menu-button__inner app-header__menu-icon">
               <img src="img/menu.svg" height="100%" width="100%"/>
           </div>
        </div>
    }
}