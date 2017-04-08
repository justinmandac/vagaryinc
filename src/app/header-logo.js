import React, {Component, render} from 'react'

export default class HeaderLogo extends Component {
    constructor() {
        super()
        this.state = {
            width: 24,
            height: 24
        }
    }

    render() {
        const styles = {
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
        }

        return <div style={styles} className="header-logo vagary-logo">
            VGRY
        </div>
    }

    
}