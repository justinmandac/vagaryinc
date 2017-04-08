import React, {Component, render} from 'react'

export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Home'
        }
    }
    
    render() {
        return <section className="page home-page">
            <div className="page__content home-page__content">
                Home
            </div>
        </section>
    }
}