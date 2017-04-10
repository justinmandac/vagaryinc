/** @jsx */
import React, {Component} from 'react'
import 'file-loader!img/reg_logo.png'

export default class HeaderLogo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 24,
            height: 24,
            type: ''
        }
    }

    render() {
        console.log(this.props)
        const width = this.props.width || this.state.width 
        const height = this.props.height || this.state.height
        const styles = {
            width: `${width}px`,
            height: `${height}px`, 
            paddingTop : '8px',
            paddingBottom: '8px',
            paddingLeft: '8px',
            paddingRight: '8px'
        }

        return <div style={styles} className="header-logo vagary-logo">
            <img src="img/reg_logo.png" alt="logo" height="auto" width="100%"/>
        </div>
    }

    
}