import React, {Component, render} from 'react'

export default class PortfolioPage extends Component {
    constructor() {
        super()
        this.state = {
            title : 'Portfolio',
            items : [],
            active: false
        }
    }

    render() {
        const {title} = this.state;

        return <section className="page portfolio-page">
            {title}
        </section>
    }
}