import React, {Component} from 'react'

export default class PortfolioPage extends Component {
    constructor() {
        super()
        this.state = {
            title : 'Portfolio',
            items : [],
            isActive: false
        }
    }

    render() {
        const {title} = this.state

        return <section className="page portfolio-page">
            {title}
        </section>
    }
}