import React, {Component, render} from 'react'

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
            float: 'right'
        }
        return <div style={style} className="app-header__menu-button">
           <div className="app-header__menu-button__inner">
               M 
           </div>
        </div>
    }
}