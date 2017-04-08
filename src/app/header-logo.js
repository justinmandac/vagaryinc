import React, {Component, render} from 'react'

export default class HeaderLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 24,
            height: 24,
            type: ''
        }
    }

    render(props) {
        console.log(this.props)
        const width = this.props.width || this.state.width 
        const height = this.props.height || this.state.height
        const styles = {
            width: `${width}px`,
            height: `${height}px`, 
            paddingTop : `8px`,
            paddingBottom: `8px`,
            paddingLeft: `8px`,
            paddingRight: `8px`
        }

        return <div style={styles} className="header-logo vagary-logo">
            VGRY
        </div>
    }

    
}